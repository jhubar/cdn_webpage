#!/usr/bin/env bash
# Charge ~/.zshrc (nvm, PATH, etc.) puis exécute la commande — npm utilise souvent un Node trop ancien sans ça.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

# GitHub Actions / autres CI : Node vient de setup-node ; charger ~/.zshrc peut casser le PATH ou faire échouer le script (set -e).
if [[ "${GITHUB_ACTIONS:-}" == "true" ]] || [[ "${CI:-}" == "true" ]]; then
  exec "$@"
fi

if [[ -f "${HOME}/.zshrc" ]]; then
  # shellcheck disable=SC1090
  source "${HOME}/.zshrc" 2>/dev/null || true
fi

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [[ -s "$NVM_DIR/nvm.sh" ]]; then
  # shellcheck disable=SC1091
  source "$NVM_DIR/nvm.sh"
fi

if command -v nvm &>/dev/null; then
  nvm use 2>/dev/null || true
fi

exec "$@"
