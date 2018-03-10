---
layout: documentation
---
# Contributing to AtlassianPS

## Thank you!

First, if you are reading this,
we sincerely wish to thank you for even considering donating some of your time to working on any of the AtlassianPS projects.
The quality of our projects increase with each individual contributing to the cause.

> One thing I can't stress enough:
> _you do **not** have to be an expert coder to contribute._  
>
> Minor bug fixes and documentation correction are just as valuable to the overall goals of the projects.  
>
> _All contributors are listed on our [Homepage](https://atlassianps.org/#people).
> Independently of the size of the contribution._

---

There are several ways to contribute:

* **Report anything that is not working as expected** → it is impossible to think of every way the modules are used.
  * see [submitting an issue]
* **Question current methods and solutions** → it is likely that a different way to solve a problem was not considered.
  * see [submitting an issue]
  * chat with us on [AtlassianPS.Slack]
* **Write Documentation** → writing a useful and easy to read documentation is hard. Any help with documentation is valuable; even fixing typos.
  * see [submitting code changes]
* **Fixing stuff** → if you know how to fix a problem that you found, sending a Pull Request will make a deployment of that fix much quicker.
  * see [submitting code changes]
  * see [our guidelines]
* **Send new stuff** → there is _a lot_ that can be added to our projects. Any help is welcome.
  * see [submitting code changes]
  * see [our guidelines]
  * see [investigating Atlassian APIs]

## Overview

This page describes:

* [How To Report An Issue](#how-to-report-an-issue)
* [How To Submit Code Changes](#how-to-submit-code-changes)
* [Our Guidelines](#our-guidelines)
* [Useful Material](#useful-material)

## How To Report An Issue

When you notice something that is not optimal in one of our projects,
the simplest way to communicate this is by creating an issue.

GitHub makes this easy.
Each of our projects has an _Issuetracker_ where you can report your findings.

|Project|Link|# of open issues|
|-------|----|----------------|
|**BitbucketPS**|<https://github.com/AtlassianPS/BitbucketPS/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/BitbucketPS.svg?maxAge=2592000)](https://github.com/AtlassianPS/BitbucketPS/issues)|
|**ConfluencePS**|<https://github.com/AtlassianPS/ConfluencePS/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/ConfluencePS.svg?maxAge=2592000)](https://github.com/AtlassianPS/ConfluencePS/issues)|
|**HipchatPS**|<https://github.com/AtlassianPS/HipchatPS/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/HipchatPSPS.svg?maxAge=2592000)](https://github.com/AtlassianPS/HipchatPS/issues)|
|**JiraPS**|<https://github.com/AtlassianPS/JiraPS/issues/new>|[![Open Issues](https://img.shields.io/github/issues-raw/AtlassianPS/JiraPS.svg?maxAge=2592000)](https://github.com/AtlassianPS/JiraPS/issues)|

When you create a new issue, the project will suggest a template for you to fill out.
In most cases, this template is optimized for reporting a bug;
So it is fine if the template does not match your needs.

**Please do a quick search for what you want to report to decrease the likeliness of duplicates.**

## How To Submit Code Changes

No matter if you are fixing a typo;
Or wrote a full functioning feature for a project:
**You will have to send your code to `AtlassianPS`**

> The possibilities of what our projects can do is ever growing (as Atlassian also makes changes to the API).
> Therefore it is very unlikely for our project to ever reach _feature complete_.  
>
> The only chance we have to keep up with the changes, is by having as many people involved as possible.
> We will appreciate the help :satisfied:

This makes sense, as it would be impossible to manage user permissions in all of the project for all of the users.
Therefore, everyone who want to make changes to the code must make a copy of the repository into his GitHub account (aka [forking](https://help.github.com/articles/fork-a-repo/)).

With a copy of the code in a location where you are allowed to make changes to, you get to work.

When you are finished, you will send your changes to the original project (aka [Pull Request](https://help.github.com/articles/about-pull-requests/)).
It will be reviewed and, when approved, merged.

There is a bit more to take into account when submitting code to the projects.
You can read all about it here: [Submitting A PR].

## Our Guidelines

We strive for making the process of contributing as easy as possible.
However, having good documentation, follow some best practices and keeping the code aligned is crucial for a high quality of the projects.

When contributing to the code, please follow [Our Guidelines](our-guidelines.html).

## Useful Material

.

<!-- reference-style links -->
  [AtlassianPS.Slack]: <https://atlassianps.org/slack/>
  [submitting an issue]: <#how-to-report-an-issue>
  [submitting code changes]: <#how-to-submit-code-changes>
  [our guidelines]: <#our-guidelines>
  [investigating Atlassian APIs]: <#todo>
  [Submitting A PR]: <submitting-a-pr.html>
