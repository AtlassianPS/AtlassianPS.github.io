---
layout: documentation
---
# Submitting A Pull Request

## Overview

This page describes:

* [TL;DR](#tldr)
* [The Basics](#the-setup)
  * [New to Git(Hub)?](#new-to-github)
  * [Tooling](#tooling)
* [Getting Started](#getting-started)
  * [Find Something To Contribute To](#find-something-to-contribute-to)
  * [Forking And Branching](#forking-and-branching)
* [Making Changes](#making-changes)
  * [Getting Work Done](#getting-work-done)
  * [Documenting Your Work](#documenting-your-work)
  * [Making Sure All Is Working](#making-sure-all-is-working)
* [Sending Your Changes](#sending-your-changes)
  * [Send A Pull Request](#send-a-pull-request)
  * [What Happens Next?](#what-happens-next)

## TL;DR

Here is a list for project specific instructions.
These are more technical - pretty much what would have to be executed in the console.

|Project|Instructions|
|-------|------------|
|**AtlassianPS**|<https://github.com/AtlassianPS/AtlassianPS/blob/master/CONTRIBUTING.md>|
|**AtlassianPS.github.io**|<https://github.com/AtlassianPS/AtlassianPS.github.io/blob/master/CONTRIBUTING.md>|
|**BitbucketPS**|<https://github.com/AtlassianPS/BitbucketPS/blob/master/CONTRIBUTING.md>|
|**ConfluencePS**|<https://github.com/AtlassianPS/ConfluencePS/blob/master/CONTRIBUTING.md>|
|**HipchatPS**|<https://github.com/AtlassianPS/HipchatPS/blob/master/CONTRIBUTING.md>|
|**JiraPS**|<https://github.com/AtlassianPS/JiraPS/blob/master/CONTRIBUTING.md>|

## The Setup

### New to Git(Hub)?

* Make sure you have a [GitHub account](https://github.com/signup/free).
* Learning Git:
  * GitHub Help: [Good Resources for Learning Git and GitHub][good-git-resources].
  * [Git Basics](/wiki/Git-Basics): install and getting started.

### Tooling

In order to make changes to the code or documentation and send it as a Pull Request, only one tool is required:

* **[Git]**  
_This can be installed in a lot of different ways.
Please google how to install it on your OS._
* **PowerShell**  
_Any version works.
In case the version is 3 or 4, the `PowerShellGet` module must be installed._
* **[InvokeBuild]**

_Further modules that are required are installed when `Invoke-Build` is called._

Of course there are more tools that are not _required_, but make like much easier.
Such as:

|Tool|Description|
|----|-----------|
|[Graphic Interfaces for Git](https://git-scm.com/downloads/guis)|_Git can get messy. A nice UI can be helpful in that case. This page contains some for you to choose from._|
|[Visual Studio Code]|_This is the editor of choice for working with Powershell. The project contains settings to make life easier._|
|[PowerShell Extension for VSCode]|_This extension provides rich PowerShell language support for Visual Studio Code. Now you can write and debug PowerShell scripts using the excellent IDE-like interface that Visual Studio Code provides._|
|[Plaster Module]|_Plaster is a template-based file and project generator written in PowerShell._|
|[Pester Module]|_Build Automation in PowerShell. Will be installed as a dependency with `Invoke-Build`._|
|[PlatyPS]|_Write PowerShell External Help in Markdown._|

## Getting Started

### Find Something To Contribute To

In case you are interested in contributing and have nothing specific already in mind,
here is where we are looking for help: [Issue that are "Up-For-Grabs"](https://github.com/issues?utf8=✓&q=is%3Aopen+user%3AAtlassianPS+label%3Aup-for-grabs).

### Forking And Branching

GitHub fosters collaboration through the notion of [pull requests][using-prs].
On GitHub, anyone can [fork][fork-a-repo] an existing repository
into their own user account, where they can make private changes to their fork.

Once you have your own version of the project, you should:

* Clone your version of the project to your computer  
_Here is how: [Cloning a Repository](https://help.github.com/articles/cloning-a-repository/)._  
```powershell
git clone https://github.com/<YOUR USER NAME>/<NAME OF THE PROJECT>.git
```
* Create a new branch for your changes
_You should make the changes in a branch for tracking them.
You should also create your own branch out of `develop`.
You can read more here: [Git Flow Guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)._
```powershell
cd <NAME OF THE PROJECT>
git checkout develop
git checkout -b <NAME FOR YOUR FEATURE>
```

Additional references:
* GitHub's guide on [forking](https://guides.github.com/activities/forking/)

## Making Changes

### Getting Work Done

It's not our place to impose a specific way on how to write code.

There are some [Guidelines](our-guidelines.html) which should be followed at all times.

The checklist when creating the Pull Request will look something like this:

> **Types of changes:**  
> - [ ] Bug fix (non-breaking change which fixes an issue)  
> - [ ] New feature (non-breaking change which adds functionality)  
> - [ ] Breaking change (fix or feature that would cause existing functionality to change)  
> **Checklist:**  
> - [ ] My code follows the code style of this project.  
> - [ ] I have added Pester Tests that describe what my changes should do.  
> - [ ] I have updated the documentation accordingly.

### Documenting Your Work

In general, PowerShell is verbose in a way that the code explains what it does.
So not a lot of code documentation is needed.

When the code is not that easy to read or require more extensive explaining (such as workarounds),
comments that explain what the code does is desired.

Apart from that, all parts of the code that affect the way the user interacts with are expected to have detailed documentation.
This includes (but is not limited to) _Functions_, _Parameters_ and _Output Types_.

It is also expected that the tests that describe the functionality are either updated or created, if the functionality is new.

### Making Sure All Is Working

The projects have a lot of tests to ensure all is working as expected.
_The tests are all in the `/Tests/` folder._

The projects are set up so that running `Invoke-Build` will make sure the code is working as the tests describe.
**The command must be run from the root of the project.**

## Sending Your Changes

### Send A Pull Request

When you are done _and all tests pass_, you can send the changes "upstream" (to the AtlassianPS project).

Here is how you create the Pull Request: [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

### What Happens Next?

Now our [maintainers](https://github.com/orgs/AtlassianPS/teams/maintainers) and [reviewers](https://github.com/orgs/AtlassianPS/teams/reviewers) will have a look at what you have been working on.

In order to help them, the GitHub repositories will use [CI](https://en.wikipedia.org/wiki/Continuous_integration) jobs to run the tests and 

<!-- reference-style links -->
  [Pester Module]: https://github.com/pester/Pester
  [Git]: https://git-scm.com
  [Visual Studio Code]: https://code.visualstudio.com
  [Plaster Module]: https://github.com/PowerShell/Plaster
  [PowerShell Extension for VSCode]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell
  [InvokeBuild]: https://github.com/nightroman/Invoke-Build
  [PlatyPS]: https://github.com/PowerShell/platyPS
  [using-prs]: https://help.github.com/articles/using-pull-requests/
  [fork-a-repo]: https://help.github.com/articles/fork-a-repo/
  [good-git-resources]: https://help.github.com/articles/good-resources-for-learning-git-and-github/
