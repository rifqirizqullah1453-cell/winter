"""WINTER: self-registered dashboard users, approved by the owner.

Users live in ``$HERMES_HOME/winter_users.json`` as ``{name: {hash, status, created}}``.
``register`` creates a *pending* user who cannot log in; only ``approve`` (run by the
owner: ``scripts/winter-users.sh approve <name>``) activates it. The owner account from
``dashboard.basic_auth`` is separate and always wins.
"""
from __future__ import annotations

import json
import os
import re
import sys
import time
from pathlib import Path

MAX_USERS = 50
_NAME_RE = re.compile(r"^[a-z0-9_]{3,32}$")


def _path() -> Path:
    return Path(os.environ.get("HERMES_HOME", "/opt/data")) / "winter_users.json"


def _load() -> dict:
    try:
        return json.loads(_path().read_text())
    except (OSError, ValueError):
        return {}


def _save(users: dict) -> None:
    # ponytail: no file lock; two simultaneous writes can drop one. Fine at <=50 manual signups.
    p = _path()
    tmp = p.with_suffix(".tmp")
    tmp.write_text(json.dumps(users))
    os.chmod(tmp, 0o600)
    tmp.replace(p)


def register(username: str, password: str, *, reserved: str = "") -> str:
    """Create a pending user. Returns "" on success, else a short error for the form."""
    from plugins.dashboard_auth.basic import hash_password
    name = username.strip().lower()
    if not _NAME_RE.match(name):
        return "Username: 3-32 characters, a-z, 0-9 or _ only."
    if len(password) < 8 or len(password) > 128:
        return "Password must be 8-128 characters."
    users = _load()
    if name == reserved.lower() or name in users:
        return "That username is not available."
    if len(users) >= MAX_USERS:
        return "Registration is full."
    users[name] = {"hash": hash_password(password), "status": "pending", "created": int(time.time())}
    _save(users)
    return ""


def check(username: str, password: str):
    """Return the hash to verify against if ``username`` is an *active* user, else None."""
    u = _load().get(username.strip().lower())
    return u["hash"] if u and u.get("status") == "active" else None


def _cli(argv: list[str]) -> int:
    users = _load()
    cmd, name = (argv + ["", ""])[:2]
    if cmd == "list":
        for n, u in sorted(users.items()):
            print(f"{n}\t{u['status']}")
        return 0
    if cmd in ("approve", "remove") and name in users:
        if cmd == "approve":
            users[name]["status"] = "active"
        else:
            del users[name]
        _save(users)
        print(f"{cmd}: {name}")
        return 0
    print("usage: users.py list | approve <name> | remove <name>", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(_cli(sys.argv[1:]))
