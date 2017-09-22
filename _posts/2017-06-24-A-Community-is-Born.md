---
layout:     article
permalink:  /article/:categories/:title
title:      A Community is Born
date:       2017-06-24 12:00:00
summary:    I am pleased to announce, that today we decided to bring AtlassianPS into life.
categories: Announcement
thumbnail:  
author:     lipkau
tags:
 - BitbucketPS
 - ConfluencePS
 - HipchatPS
 - JiraPS
---

I am pleased to announce, that today we decided to bring **_AtlassianPS_** to life.

# What it is all about
When you find yourself repeating work over and over; and find out that there is an API with which you can automate stuff, it would be smart to do so.
That is exactly what brought modules like [ConfluencePS](https://github.com/brianbunke/ConfluencePS) and [PSJira](https://github.com/PSJira/PSJira) into life.

These modules have been growing rapidly lately, as more and more people find the module and want to add stuff to it that they need; but isn’t there yet.
With the collaboration between the modules, it came to a point where synergies between the modules could easily been seen.
That was when we decided to but everything under one roof: _AtlassianPS_

# What now?
_AtlassianPS_ will be the common ground between these modules.
Providing them with shared resources, such as:
* functions
* private modules
* moderators
* best practices
* style guide
* documentation
* tools
* and more

# Scope
The modules we have in our portfolio are:
* [BitbucketPS](/BitbucketPS)
* [ConfluencePS](/ConfluencePS)
* [HipChatPS](/HipChatPS)
* [JiraPS](/JiraPS)

# Changes
Some changes to the existing modules had to be made:

## BitbucketPS
* The repository in which the module is developed was moved from [beaudryj/BitbucketPS](https://github.com/beaudryj/BitbucketPS) to [AtlassianPS/BitbucketPS](https://github.com/AtlassianPS/BitbucketPS)

## ConfluencePS
* The repository in which the module is developed was moved from [brianbunke/ConfluencePS](https://github.com/brianbunke/ConfluencePS) to [AtlassianPS/ConfluencePS](https://github.com/AtlassianPS/ConfluencePS)
* We are debating whether to change the noun prefix of the module and make it changeable with `Import-Module ConfluencePS -Prefix "Wiki"` to the current value
  - if this is done, it would be a breaking change and requires a major version bump.

## JiraPS
* The repository in which the module is developed was moved from [PSJira/PSJira](https://github.com/PSJira/PSJira) to [AtlassianPS/JiraPS](https://github.com/AtlassianPS/JiraPS)
* The module was renamed from `PSJira` to `JiraPS`.
  - **This is a breaking change.** Version 2.0 was released for this change.
  - The module `PSJira` on PSGallery got a new build version with a warning about the deprecation of that module.
