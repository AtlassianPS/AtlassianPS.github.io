---
layout:     article
permalink:  /article/:categories/:title
title:      One Year AtlassianPS
date:       2018-06-29 12:00:00
categories: Celebration
thumbnail:  
author:     lipkau
tags:
 - Homepage
 - Community
 - Commemoration
---

A few days late, but AtlassianPS just turned one. 🎉  
Here are a few things we accomplished in the year.
<!--more-->

## Our Modules

In one year, we released:

* **8 new version for JiraPS**
  * [Release v2.0](https://atlassianps.org/article/modules/jiraps/announcement/JiraPS-v2.0)
  * [Release v2.1](https://atlassianps.org/article/modules/jiraps/announcement/JiraPS-v2.1)
  * [Release v2.2](https://atlassianps.org/article/modules/jiraps/announcement/JiraPS-v2.2)
  * [Release v2.3](https://atlassianps.org/article/modules/jiraps/announcement/JiraPS-v2.3)
  * [Release v2.4](https://atlassianps.org/article/modules/jiraps/announcement/JiraPS-v2.4)
  * [Release v2.5](https://atlassianps.org/article/modules/jiraps/announcement/JiraPS-v2.5)
  * [Release v2.6](https://atlassianps.org/article/modules/jiraps/announcement/JiraPS-v2.6)
  * [Release v2.7](https://atlassianps.org/article/modules/jiraps/announcement/JiraPS-v2.7)
  * [Release v2.8](https://atlassianps.org/article/modules/jiraps/announcement/JiraPS-v2.8)
* **4 new version for ConfluencePS** (including the major version _2.0_)
  * [Release v2.0](https://atlassianps.org/article/announcement/ConfluencePS-v2.0)
  * [Release v2.1](https://atlassianps.org/article/announcement/ConfluencePS-v2.1)
  * [Release v2.2](https://atlassianps.org/article/announcement/ConfluencePS-v2.2)
  * [Release v2.3](https://atlassianps.org/article/announcement/ConfluencePS-v2.3)

## Harmonization Between Modules

AtlassianPS had the goal to have all it's modules to have the same look&feel.  
Here are some things we achieved in this regard:

* ☑ have a homepage which uses the data from the modules themselves to populate the information
* ☑ have the modules publish the data of a release to the homepage
* ☑ have the modules use [platyPS](https://github.com/PowerShell/platyPS) to generate ExternalHelp (MAML) which is displayed in Powershell's `Get-Help` and on the homepage
* ☑ have the same module structure, repository setup and build script
* ☑ have new release to be announced on the homepage and on slack
* ☑ have all modules using the same code styling (_enforced with VSCode `settings.json` and Pester tests_)
* ☑ have all modules tested against all Powershell versions supported (v3, v4, v5, v5.1, v6-on Windows, v6-on Linux, v6-on OSX) _almost finished_

## Community

* **Total Contributors:** [33](https://atlassianps.org/#people)

### Homepage

* **Merged Pull Requests:** 8
* **Line changes:** 21,056++ 9,253--
* **Commits:** 200
* **Visits/Country:**

|     Country    |  # New Users  |    %   |
|----------------|---------------|--------|
| Unites States  |           922 | 44.67% |
| Germany        |           175 |  8.48% |
| United Kingdom |           126 |  6.10% |
| Australia      |            82 |  3.97% |
| Canada         |            67 |  3.25% |

* **New Users:** 2,059
* **Pageviews:** 11,602

### AtlassianPS.Slack.com

* **Members:** 124
* **Total Messages:** 12,692
* **Files uploaded:** 269 _(100 of them are code snippets)_

### JiraPS

* **Merged Pull Requests:** 65
* **Line changes:** 79,563++ 33,993--
* **Commits:** 335

### ConfluencePS

* **Merged Pull Requests:** 36
* **Line changes:** 16,079++ 9,156--
* **Commits:** 119

### HipchatPS

* **Merged Pull Requests:** 5
* **Line changes:** 10++ 9--
* **Commits:** 4

## What to look forward to

* ☐ `AtlassianPS.Configuration` - a module that will manage the configuration of the current modules
  * `JiraPS` (and all the others) will have a common handling for the server address and much more
  * will be integrated with the next major release of each module
* ☐ `JiraAgilePS` - a module that extends `JiraPS` to interact with the `Jira Agile` plugin
* ☐ Improvements to the Homepage
* ☐ `AtlassianPS` - a module pack; to install all modules with `Install-Module`
* ☐ `JiraPS` **version 3.0** - next major version
  * introduce custom classes to the module
  * support for multiple server sessions (`AtlassianPS.Configuration`)
* ☐ `ConfluencePS` **version 3.0** - next major release
  * support for multiple server sessions (`AtlassianPS.Configuration`)
  * improve handling of labels
* ☐ extract logic of proxy-function `Invoke-WebRequest` to a module of it's own
* ☐ `Invoke-AtlassianMethod` - have all module using the same function for invoking the API
* ☐ support for OAuth authentication
* ☐ improved Tests
* ☐ improved CI
* ☐ anything **you** want to contribute 😉
* ☐ and much more!
