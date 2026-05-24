#!/usr/bin/env bash
set -euo pipefail

active_modules=(
  "AtlassianPS.Configuration"
  "ConfluencePS"
  "JiraAgilePS"
  "JiraPS"
)

# Modules without tags can still have an explicit documentation baseline.
no_tag_baselines=(
  "JiraAgilePS"
)

# Keep docs-only exceptions narrow and remove them after the next module release.
docs_only_exceptions=(
  "AtlassianPS.Configuration:555e8a3300a12e03b1d9c494a874fe21fe9bbccf"
)

has_no_tag_baseline() {
  local module="$1"

  for baseline in "${no_tag_baselines[@]}"; do
    if [[ "$baseline" == "$module" ]]; then
      return 0
    fi
  done

  return 1
}

has_docs_only_exception() {
  local module="$1"
  local commit="$2"

  for exception in "${docs_only_exceptions[@]}"; do
    if [[ "$exception" == "$module:$commit" ]]; then
      return 0
    fi
  done

  return 1
}

errors=0

for module in "${active_modules[@]}"; do
  path="modules/$module"

  if [[ ! -d "$path/.git" && ! -f "$path/.git" ]]; then
    printf '::error file=.gitmodules::%s submodule is not initialized at %s\n' "$module" "$path"
    errors=$((errors + 1))
    continue
  fi

  git -C "$path" fetch --tags --quiet origin

  if tag=$(git -C "$path" describe --tags --exact-match HEAD 2>/dev/null); then
    printf '%s is release-aligned at %s.\n' "$module" "$tag"
    continue
  fi

  tag_count=$(git -C "$path" tag | wc -l | tr -d ' ')
  commit=$(git -C "$path" rev-parse HEAD)
  short_commit=$(git -C "$path" rev-parse --short HEAD)

  if [[ "$tag_count" == "0" ]] && has_no_tag_baseline "$module"; then
    printf '::notice file=.gitmodules::%s has no tags; treating %s as the documented baseline.\n' "$module" "$short_commit"
    continue
  fi

  if has_docs_only_exception "$module" "$commit"; then
    printf '::notice file=.gitmodules::%s points at docs-only exception %s. Move back to a release tag after the next module release.\n' "$module" "$short_commit"
    continue
  fi

  if [[ "$tag_count" == "0" ]]; then
    printf '::error file=.gitmodules::%s is untagged and has no no-tags baseline exception.\n' "$module"
  else
    printf '::error file=.gitmodules::%s points at %s, which is not an exact release tag. Use a release tag or add a narrow docs-only exception in this script.\n' "$module" "$short_commit"
  fi

  errors=$((errors + 1))
done

exit "$errors"
