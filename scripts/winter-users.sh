#!/bin/sh
# Kelola user dashboard yang mendaftar: list | approve <nama> | remove <nama>
exec docker exec winter sh -c "cd /opt/hermes && python3 -m plugins.dashboard_auth.basic.users $*"
