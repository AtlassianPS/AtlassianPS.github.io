---
layout: documentation
---
# Writing Functions

This page covers the baseline expectations for writing PowerShell functions in AtlassianPS projects.
Use it as a lightweight checklist, not a barrier.

## 🧩 Public Functions

- Use approved `Verb-Noun` naming.
- Keep parameters explicit and discoverable.
- Provide clear output types and examples in docs.
- Favor readability over cleverness.
- Add or update tests for behavior changes.

Public command documentation should be updated in the repository's docs alongside code changes.

## 🔒 Private Functions

- Keep helpers focused on one responsibility.
- Give private functions intention-revealing names.
- Prefer composition over deeply nested logic.
- Avoid side effects where possible.
- Keep private helpers covered by unit tests through public behavior or direct tests (based on repo pattern).

## ✅ Practical checklist

> **Tip:** Prefer small, focused function changes. They are easier to test and review.

- [ ] Function name follows project naming conventions.
- [ ] Parameters are validated and documented.
- [ ] Error paths are explicit and actionable.
- [ ] Tests cover happy path and key failure cases.
- [ ] User-facing docs are updated.
