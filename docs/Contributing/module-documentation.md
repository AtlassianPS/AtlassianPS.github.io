---
layout: documentation
---
# Module Documentation Publishing

The public documentation under `/docs/<Module>/` should describe the module version users can install from the PowerShell Gallery.

## Release-aligned documentation

The website consumes module documentation through Git submodules in `modules/`.
For normal updates, each module submodule should point at the latest released module tag.

This keeps cmdlet documentation, examples, parameters, and behavior notes aligned with the package users get from `Install-Module`.
The website must not publish documentation from a module branch that contains unreleased or breaking changes as the main module documentation.

Some legacy modules do not have release tags.
Do not treat an untagged submodule as release-aligned unless the module has no tags and the submodule commit is the explicit published documentation baseline for that module.

## Docs-only exceptions

A module submodule may point at a non-release commit only when the commit is compatible with the latest released package and changes documentation quality only.
Examples include typo fixes, formatting cleanup, broken-link fixes, and clarification of behavior that already exists in the released package.

Do not use a docs-only exception for changes that describe new cmdlets, new parameters, changed outputs, changed compatibility behavior, or unreleased breaking changes.
Those changes require a module release before they appear under `/docs/<Module>/`.

When opening a website pull request for a docs-only submodule update, call this out in the title or body.
The next module release should include those documentation commits and move the website submodule back to a release tag.

## Pull request checklist

- Identify every module submodule moved by the PR.
- For each moved active module, record the target tag or explain why no tag exists.
- If the target is not a tag, state whether it is a docs-only exception or a no-tags baseline.
- Confirm that the published docs do not describe unreleased behavior.
- Run `bash .github/scripts/check-module-submodules.sh` to verify active module submodules are release-aligned or explicitly excepted.
- Run the website build before requesting review.

The Pages workflow runs the same submodule check before building the site.
The check fails when an active module submodule points at an untagged commit unless that module has an explicit no-tags baseline exception.
For a docs-only exception, add a narrow commit-specific exception in `.github/scripts/check-module-submodules.sh` and explain it in the pull request body before requesting review.

## Preview documentation

If unreleased documentation is useful before a release, publish it under a clearly labeled preview location instead of the main `/docs/<Module>/` path.
Preview documentation must make clear that it may not match the latest PowerShell Gallery package.
