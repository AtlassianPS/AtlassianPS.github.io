---
layout: documentation
---
# Contributing to AtlassianPS

## Overview

This page describes:

* [Thank you!](#thank-you)
  * [Report anything that is not working as expected](#report-anything-that-is-not-working-as-expected)
  * [Question current methods and solutions](#question-current-methods-and-solutions)
  * [Write documentation](#write-documentation)
  * [Fix errors](#fix-errors)
  * [Contribute code](#contribute-code)
* [How To Report An Issue](#how-to-report-an-issue)
* [How To Submit Code Changes](#how-to-submit-code-changes)
* [Our Guidelines](#our-guidelines)
* [Useful Material](#useful-material)

## Thank you!

We sincerely wish to thank you for donating your time to the AtlassianPS projects.
The quality of our projects increase with every contribution.

> One thing I can't stress enough:
> you do **not** need to be an expert coder to contribute.  
> Minor bug fixes and documentation corrections are just as valuable to the goals of the projects.  
> _All contributors, independent of the size of the contribution, are listed on our [Homepage](https://atlassianps.org/#people)._

---

There are several ways to contribute:

### Report anything that is not working as expected

It is impossible to think of every way the modules are used.

_see [submitting an issue]_

### Question current methods and solutions

It is likely that a different way to solve a problem was not considered.

_see [submitting an issue]_  
_chat with us on [AtlassianPS.Slack]_

### Write documentation

Writing useful and easy-to-read documentation is hard.  
Any help with documentation is valuable, even fixing typos.

_see [submitting code changes]_

### Fix errors

If you know how to fix a problem that you found, sending a Pull Request will simplify the process.

_see [submitting code changes]_  
_see [our guidelines]_

### Contribute code

There is _a lot_ that can be added to our projects. Any help is welcome.

_see [submitting code changes]_  
_see [our guidelines]_  
_see [investigating Atlassian APIs]_

## How To Report An Issue

When you notice something that could be improved,
tell us by creating an issue.  
GitHub makes this easy.

Each of our projects has an _Issuetracker_ where you can report your findings.

|Project|Link|# of open issues|
|-------|----|----------------|
|**AtlassianPS**|<https://github.com/AtlassianPS/AtlassianPS/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/AtlassianPS.svg?maxAge=2592000)](https://github.com/AtlassianPS/AtlassianPS/issues)|
|**AtlassianPS.Configuration**|<https://github.com/AtlassianPS/AtlassianPS.Configuration/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/AtlassianPS.Configuration.svg?maxAge=2592000)](https://github.com/AtlassianPS/AtlassianPS.Configuration/issues)|
|**AtlassianPS.github.io**|<https://github.com/AtlassianPS/AtlassianPS.github.io/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/AtlassianPS.github.io.svg?maxAge=2592000)](https://github.com/AtlassianPS/AtlassianPS.github.io/issues)|
|**BitbucketPS**|<https://github.com/AtlassianPS/BitbucketPS/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/BitbucketPS.svg?maxAge=2592000)](https://github.com/AtlassianPS/BitbucketPS/issues)|
|**ConfluencePS**|<https://github.com/AtlassianPS/ConfluencePS/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/ConfluencePS.svg?maxAge=2592000)](https://github.com/AtlassianPS/ConfluencePS/issues)|
|**HipchatPS**|<https://github.com/AtlassianPS/HipchatPS/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/HipchatPSPS.svg?maxAge=2592000)](https://github.com/AtlassianPS/HipchatPS/issues)|
|**JiraPS**|<https://github.com/AtlassianPS/JiraPS/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/JiraPS.svg?maxAge=2592000)](https://github.com/AtlassianPS/JiraPS/issues)|

New issues are created using a template which includes pre-defined text for reporting coding exceptions.  
If your issue is not related to a coding error (e.g. you are suggesting a new feature), please modify the content to suit your needs.

**Prior to creating a new issue, please search the issues to determine if a similar issue has already been created.**  
**If one has, add any relevant comments to the issue's discussion.**

## How To Submit Code Changes

No matter if you are fixing a typo or if you wrote a fully-functioning feature for a project:  
**You will have to send your code to `AtlassianPS`**

> The possibilities of what our projects can do is ever growing (as Atlassian also makes changes to the API).
> Therefore it is very unlikely for our project to ever be _feature complete_.  
> The only chance we have to keep up with the changes, is by having as many people involved as possible.
> We appreciate the help 😊

This makes sense, as it would be impossible to manage user permissions in all of the project for all of the users.
Therefore, everyone who want to make changes to the code must make a copy of the repository into his GitHub account (aka [forking](https://help.github.com/articles/fork-a-repo/)).

With a copy of the code in a location where you are allowed to make changes to, you get to work.

When you are finished, you will send your changes to the original project (aka [Pull Request](https://help.github.com/articles/about-pull-requests/)).
It will be reviewed and, when approved, merged.

There is a bit more to take into account when submitting code to the projects.
You can read all about it here: **[Submitting A PR]**.

## Our Guidelines

We strive for making the process of contributing as easy as possible.
However, having good documentation, follow some best practices and keeping the code aligned is crucial for a high quality of the projects.

When contributing to the code, please follow [Our Guidelines](our-guidelines.html).

## Useful Material

* GitHub's guide on [Contributing to Open Source](https://guides.github.com/activities/contributing-to-open-source/#pull-request)
* [GitHub Flow Guide](https://guides.github.com/introduction/flow/): step-by-step instructions of GitHub flow.

<!-- reference-style links -->
  [AtlassianPS.Slack]: https://atlassianps.org/slack/
  [submitting an issue]: #how-to-report-an-issue
  [submitting code changes]: #how-to-submit-code-changes
  [our guidelines]: #our-guidelines
  [investigating Atlassian APIs]: #todo
  [Submitting A PR]: submitting-a-pr.html
