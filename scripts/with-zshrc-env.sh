#!/usr/bin/env bash
# En local : ton Node / conda / nvm viennent de ~/.zshrc — il ne faut pas le sourcer depuis bash
# (syntaxe zsh, `exit`, garde interactive → npm run dev peut quitter tout de suite sans message).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

if [[ "${GITHUB_ACTIONS:-}" == "true" ]]; then
  cd "$REPO_ROOT"
  exec "$@"
fi

export PATH="$REPO_ROOT/node_modules/.bin:${PATH:-}"

if command -v zsh &>/dev/null; then
  quoted_root=$(printf "%q" "$REPO_ROOT")
  quoted_cmd=$(printf "%q " "$@")
  exec zsh -ilc "cd $quoted_root && exec $quoted_cmd"
fi

cd "$REPO_ROOT"
exec "$@"
