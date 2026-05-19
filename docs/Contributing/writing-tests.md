---
layout: documentation
---
# Writing Tests

Tests are part of the change, not an optional follow-up.
Well-placed tests also make reviews and future refactors much easier.

## ✅ Unit Tests

- Cover the expected success path.
- Cover key failure and validation paths.
- Keep tests deterministic and isolated.
- Name tests by behavior, not implementation details.

## 🌐 Integration Tests

Use integration tests when behavior depends on real API/server interaction.

- Keep credentials and environment setup out of committed code.
- Limit integration scope to high-value scenarios.
- Document prerequisites clearly in the repository.

## 🧪 Practical checklist

> **Caution:** Avoid brittle tests that depend on ordering, timing, or shared mutable state.

- [ ] New behavior is tested.
- [ ] Existing behavior remains covered after refactors.
- [ ] Error handling has test coverage.
- [ ] Test names describe intent.
- [ ] Validation commands run clean before PR submission.
