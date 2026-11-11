#!/usr/bin/env bash
set -e
set -m

cd "$(dirname "${BASH_SOURCE[0]}")/client"
source "${NVM_DIR:-$HOME/.nvm}/nvm.sh" --no-use
nvm use

trap 'kill -TERM -- "-$frontend_pid" "-$node_pid" "-$gunicorn_pid" 2>/dev/null || true' EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

npm run dev &
frontend_pid=$!

node --env-file=.env server.mjs &
node_pid=$!

(
  cd ../server
  source ./venv/bin/activate
  exec gunicorn --chdir .. --reload --bind 127.0.0.1:8080 server.main:app
) &
gunicorn_pid=$!

wait
