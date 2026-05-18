---
layout: documentation
---
# Our Guidelines

These guidelines keep contributions consistent and review-friendly across AtlassianPS projects.
Think of them as guardrails that make collaboration easier.

## 1) 🧠 Prefer clear code over clever code

- Use descriptive names.
- Keep functions focused.
- Avoid hidden side effects.
- Refactor when comments are needed to explain basic flow.

## 2) 🧩 Follow PowerShell conventions

- Use approved `Verb-Noun` function names.
- Use PascalCase for parameters and public members.
- Use camelCase for local variables.
- Expand aliases before submitting a PR.

## 3) 🗂️ Keep files and structure predictable

- One function/class/enum per file.
- Match file names to the function/class/enum name.
- Keep public and private code separated according to repository structure.

## 4) 📌 Use splatting for readability

Use [splatting] when a command has multiple parameters, especially in pipelines.

```powershell
$paramsGetWidget = @{
    Name = 'Widget1'
    Id   = '5ABCD98727658'
}

$paramsSetWidget = @{
    Height = 10
    Width  = 20
}

Get-Widget @paramsGetWidget | Set-Widget @paramsSetWidget
```

## 5) 🧪 Treat tests and docs as part of the change

- Add or update tests for behavior changes.
- Update user-facing documentation for user-facing changes.
- Do not ship code changes without matching validation/docs updates.

## 6) 💬 Keep comments intentional

Comments should explain:

- constraints and edge cases
- non-obvious workarounds
- design intent when structure alone is not enough

If a comment only explains what the line already says, remove it.

<!-- reference-style links -->
[splatting]: https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_splatting
