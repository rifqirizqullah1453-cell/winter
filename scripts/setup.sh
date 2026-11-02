#!/usr/bin/env bash
# WINTER first run: bikin .env + ~/.winter-hermes/{config.yaml,.env}, lalu `docker compose up`.
# Aman diulang: tidak menimpa tanpa tanya. Rahasia tidak pernah masuk argv/log.
set -euo pipefail
cd "$(dirname "$0")/.."
command -v docker >/dev/null || { echo "Butuh Docker: https://docs.docker.com/get-docker/"; exit 1; }
command -v python3 >/dev/null || { echo "Butuh python3."; exit 1; }
DATA="$HOME/.winter-hermes"; mkdir -p "$DATA"
if [ -f .env ] || [ -f "$DATA/config.yaml" ]; then
  read -rp "Config lama ditemukan. Timpa? [y/N] " a; [ "$a" = y ] || { echo "Batal."; exit 0; }
fi
read -rsp "OpenRouter API key (gratis di https://openrouter.ai/keys): " KEY; echo
read -rsp "Password login dashboard (min 8 karakter): " PW; echo
read -rp "Telegram bot token (kosong = lewati): " TG
TGID=""; [ -n "$TG" ] && read -rp "Telegram user ID yang boleh chat (dari @userinfobot): " TGID
[ -n "$KEY" ] && [ ${#PW} -ge 8 ] || { echo "API key dan password (>=8) wajib."; exit 1; }
KEY="$KEY" TG="$TG" TGID="$TGID" DATA="$DATA" UID_="$(id -u)" GID_="$(id -g)" python3 - <<'PY'
import os, secrets, pathlib
e = os.environ
def w(path, text):
    p = pathlib.Path(path); p.write_text(text); p.chmod(0o600)
w(".env", f"""WINTER_API_KEY={secrets.token_urlsafe(24)}
HERMES_UID={e['UID_']}
HERMES_GID={e['GID_']}
TELEGRAM_BOT_TOKEN={e['TG']}
TELEGRAM_CHAT_ID={e['TGID']}
# Login Google (opsional): isi lalu `docker compose up -d dashboard`
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
WINTER_ALLOWED_EMAILS=
""")
w(e["DATA"] + "/.env", f"OPENROUTER_API_KEY={e['KEY']}\n")
PY
docker compose build
# Hash scrypt dihitung di dalam image (python3 bawaan macOS sering tanpa hashlib.scrypt). Password lewat stdin, bukan argv.
HASH="$(printf '%s' "$PW" | docker run --rm -i --entrypoint python3 -w /opt/hermes winter-agent -c \
  'import sys; from plugins.dashboard_auth.basic import hash_password; print(hash_password(sys.stdin.read()))')"
cat > "$DATA/config.yaml" <<YAML
model:
  default: "nvidia/nemotron-3.5-lightning:free"  # ganti kalau model gratis ini dihapus OpenRouter
  provider: "openrouter"
  base_url: "https://openrouter.ai/api/v1"
dashboard:
  basic_auth:
    username: winter
    password_hash: $HASH
webapp:
  enabled: true
  host: 0.0.0.0
  port: 9120
YAML
chmod 600 "$DATA/config.yaml"
docker compose up -d
echo "Selesai. Chat: http://127.0.0.1:9120   Admin: http://127.0.0.1:9119   user: winter"
