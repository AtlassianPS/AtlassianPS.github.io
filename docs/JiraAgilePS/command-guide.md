---
layout: documentation
title: Command guide
permalink: /docs/JiraAgilePS/command-guide/
---
# JiraAgilePS command guide

This page summarizes the commands currently available in JiraAgilePS and shows practical examples.

## Get-Board

Use this to list boards or fetch specific boards by ID.

```powershell
# List boards (paged)
JiraAgilePS\Get-Board -Credential $cred

# Fetch specific boards by id
JiraAgilePS\Get-Board -BoardId 101, 205 -Credential $cred
```

## Get-Sprint

Use this to list sprints for a board, optionally filtered by state.

```powershell
$board = JiraAgilePS\Get-Board -Credential $cred | Select-Object -First 1

# All sprints for a board
JiraAgilePS\Get-Sprint -Board $board -Credential $cred

# Only active sprints
JiraAgilePS\Get-Sprint -Board $board -State Active -Credential $cred
```

## Add-IssueToSprint

Use this to move one or more issues into a sprint.

```powershell
$board  = JiraAgilePS\Get-Board -Credential $cred | Select-Object -First 1
$sprint = JiraAgilePS\Get-Sprint -Board $board -State Active -Credential $cred | Select-Object -First 1
$issue  = Get-JiraIssue -Issue "PROJ-123" -Credential $cred

JiraAgilePS\Add-IssueToSprint -Issue $issue -Sprint $sprint -Credential $cred
```

## Notes

- JiraAgilePS extends JiraPS, so keep JiraPS session setup in place.
- Use module-qualified command names (`JiraAgilePS\...`) when you want to avoid command name ambiguity.
- For module source and issue tracking, see <https://github.com/AtlassianPS/JiraAgilePS>.
