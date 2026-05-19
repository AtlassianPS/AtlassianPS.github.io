---
layout: documentation
title: JiraAgilePS
permalink: /docs/JiraAgilePS/
---
# JiraAgilePS

JiraAgilePS extends JiraPS with Jira Agile functionality.

This section is for practical, task-focused usage when you need to work with boards and sprints in automation scripts.

## What you can do

JiraAgilePS currently focuses on three core operations:

1. List boards (`Get-Board`)
2. List sprint data for a board (`Get-Sprint`)
3. Move issues into a sprint (`Add-IssueToSprint`)

## Start here

1. [Getting started](/docs/JiraAgilePS/getting-started/)
2. [Command guide and examples](/docs/JiraAgilePS/command-guide/)
3. Module landing page: [/module/JiraAgilePS/](/module/JiraAgilePS/)
4. Source repository: <https://github.com/AtlassianPS/JiraAgilePS>

## Quick discovery

```powershell
Get-Command -Module JiraAgilePS
Get-Help JiraAgilePS\Get-Board -Full
Get-Help JiraAgilePS\Get-Sprint -Full
Get-Help JiraAgilePS\Add-IssueToSprint -Full
```
