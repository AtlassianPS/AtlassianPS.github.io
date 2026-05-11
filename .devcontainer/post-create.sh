#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$repo_root"

echo "Preparing Jekyll devcontainer dependencies..."

# Install the Bundler version pinned in Gemfile.lock when present.
if [[ -f Gemfile.lock ]]; then
  bundler_version="$(awk '/^BUNDLED WITH$/ { getline; gsub(/^[[:space:]]+/, "", $0); print $0; exit }' Gemfile.lock)"
  if [[ -n "${bundler_version:-}" ]]; then
    gem install bundler -v "$bundler_version"
  fi
fi

if [[ -f Gemfile ]]; then
  bundle install
fi

echo "Devcontainer is ready."
echo "Run: bundle exec jekyll serve --host 0.0.0.0 --livereload --force-polling"
