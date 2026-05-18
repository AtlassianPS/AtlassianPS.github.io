---
layout: documentation
---
# Submitting A Pull Request

Use this page as a practical checklist for contributing to any AtlassianPS repository.
If this is your first PR, you are in the right place.

> **Tip:** Start small if you want to. A focused PR is often the fastest path to a successful review.

## ✅ Quick checklist

1. Pick an issue (or open one first).
2. Fork the target repository.
3. Create a feature branch from `master`.
4. Implement the change (code + tests + docs where needed).
5. Run the repository validation steps.
6. Open a Pull Request to `AtlassianPS/<repo>:master`.

No stress if you do not get everything perfect on the first try. Reviews are collaborative.

## 🧭 Project-specific contribution guides

For command-level details and repo-specific rules, use each repository's `CONTRIBUTING.md`.

| Project                       | Instructions                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| **AtlassianPS**               | <https://github.com/AtlassianPS/AtlassianPS/blob/master/CONTRIBUTING.md>               |
| **AtlassianPS.Configuration** | <https://github.com/AtlassianPS/AtlassianPS.Configuration/blob/master/CONTRIBUTING.md> |
| **AtlassianPS.github.io**     | <https://github.com/AtlassianPS/AtlassianPS.github.io/blob/master/CONTRIBUTING.md>     |
| **BitbucketPS**               | <https://github.com/AtlassianPS/BitbucketPS/blob/master/CONTRIBUTING.md>               |
| **ConfluencePS**              | <https://github.com/AtlassianPS/ConfluencePS/blob/master/CONTRIBUTING.md>              |
| **HipchatPS**                 | <https://github.com/AtlassianPS/HipchatPS/blob/master/CONTRIBUTING.md>                 |
| **JiraAgilePS**               | <https://github.com/AtlassianPS/JiraAgilePS/blob/master/CONTRIBUTING.md>               |
| **JiraPS**                    | <https://github.com/AtlassianPS/JiraPS/blob/master/CONTRIBUTING.md>                    |

## 🧰 Setup

### Required tools

- [Git](https://git-scm.com)
- PowerShell
- Repository-specific tooling described in each `CONTRIBUTING.md`

### Helpful tools

- [Visual Studio Code](https://code.visualstudio.com)
- [PowerShell extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell)
- [Git GUIs](https://git-scm.com/downloads/guis)

## 🌿 Forking and branching

```powershell
git clone https://github.com/<YOUR USER NAME>/<NAME OF THE PROJECT>.git
cd <NAME OF THE PROJECT>
git checkout master
git checkout -b <SHORT-FEATURE-NAME>
```

Keep your branch focused on one change set. Small PRs are easier to review and merge.

## 🛠️ Implementation expectations

- Follow [Our Guidelines](our-guidelines.html).
- Update tests when behavior changes.
- Update docs for user-facing changes.
- Keep commits scoped and readable.

Additional references:

- [How to write a function](writing-functions.html)
- [How to write tests](writing-tests.html)

## 🧪 Validation

Run the validation commands defined by the target repository before opening a PR.

> **Important:** Always run the repository's validation commands before opening or updating your PR.

For `AtlassianPS.github.io`, run:

```bash
bundle exec jekyll build --baseurl ""
```

## 📬 Opening the Pull Request

Open a PR from your fork branch to the upstream `master` branch.

A strong PR description should include:

- what changed
- why it changed
- how you validated it

## 🤝 What happens next

Maintainers and reviewers will review your PR and CI checks.

You may be asked to:

- adjust implementation details
- add or update tests
- update docs/examples

Once approved, the PR is merged into `master`.

If you get stuck at any point, open an issue and ask for guidance.
