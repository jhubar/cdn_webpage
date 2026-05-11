#!/usr/bin/env bash
# Local uniquement : build sous-chemin projet puis push du dossier dist sur gh-pages.
# GitHub Actions (.github/workflows/deploy-pages.yml) est une alternative sans gh-pages CLI.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

exec "$SCRIPT_DIR/with-zshrc-env.sh" bash -c \
  'node scripts/check-node.mjs && VITE_BASE_PATH=/cdn_webpage/ vite build && npx --yes gh-pages@6 -d dist --dotfiles'
