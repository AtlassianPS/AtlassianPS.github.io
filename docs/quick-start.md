---
layout: documentation
title: Quick Start
---
# Quick Start

This page shows the shortest path from a fresh PowerShell session to a working AtlassianPS command.

## 1. Choose a module

Install the module that matches the product you want to automate.

```powershell
Install-Module JiraPS -Scope CurrentUser
Install-Module ConfluencePS -Scope CurrentUser
Install-Module JiraAgilePS -Scope CurrentUser
```

Use `AtlassianPS.Configuration` when you want shared server configuration across AtlassianPS modules.

```powershell
Install-Module AtlassianPS.Configuration -Scope CurrentUser
```

## 2. Import the module

```powershell
Import-Module JiraPS
```

Replace `JiraPS` with `ConfluencePS`, `JiraAgilePS`, or `AtlassianPS.Configuration` as needed.

## 3. Configure the server

For JiraPS, point the module at your Jira site.

```powershell
Set-JiraConfigServer -Server 'https://jira.example.com'
```

For other modules, see the module-specific docs linked below.

## 4. Authenticate

Start with an explicit credential while you are learning the module.

```powershell
$credential = Get-Credential
Get-JiraIssue -Issue 'PROJ-123' -Credential $credential
```

If you run many commands against the same server, review the module's session documentation.

## 5. Find commands

PowerShell can discover commands after importing a module.

```powershell
Get-Command -Module JiraPS
Get-Help Get-JiraIssue -Full
```

You can also browse the online command reference:

- [JiraPS commands](JiraPS/commands/)
- [ConfluencePS commands](ConfluencePS/commands/)
- [JiraAgilePS commands](JiraAgilePS/commands/)
- [AtlassianPS.Configuration commands](AtlassianPS.Configuration/commands/)

## Next steps

- Use [JiraPS](JiraPS/) for Jira issue, project, user, version, and workflow automation.
- Use [ConfluencePS](ConfluencePS/) for Confluence page and space automation.
- Use [JiraAgilePS](JiraAgilePS/) for Jira Agile boards, sprints, and related resources.
- Use [AtlassianPS.Configuration](AtlassianPS.Configuration/) to share Atlassian server configuration.
