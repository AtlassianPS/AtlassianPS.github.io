---
layout: documentation
title: Getting started
permalink: /docs/JiraAgilePS/getting-started/
---
# Getting started with JiraAgilePS

JiraAgilePS builds on JiraPS session and server configuration.  
If JiraPS is already working in your environment, JiraAgilePS can use the same connection context.

## 1. Install and import

```powershell
Install-Module JiraPS -Scope CurrentUser
Install-Module JiraAgilePS -Scope CurrentUser

Import-Module JiraPS
Import-Module JiraAgilePS
```

## 2. Connect to Jira

```powershell
Set-JiraConfigServer "https://yourcompany.atlassian.net"
$cred = Get-Credential
New-JiraSession -Credential $cred
```

## 3. Confirm module commands

```powershell
Get-Command -Module JiraAgilePS
```

At the moment, the module exposes:

- `Get-Board`
- `Get-Sprint`
- `Add-IssueToSprint`

## 4. First board and sprint query

```powershell
$board = JiraAgilePS\Get-Board -Credential $cred | Select-Object -First 1
JiraAgilePS\Get-Sprint -Board $board -Credential $cred
```

If this returns data, your environment is ready for sprint automation workflows.
