---
layout:     article
permalink:  /article/:categories/:title
title:      New Homepage
date:       2017-10-04 12:00:00
categories: Announcement
thumbnail:  
author:     lipkau
tags:
 - Homepage
---

Today we publish our new homepage for the organization.  
<!--more-->

This homepage is in reality a [repository](https://github.com/AtlassianPS/AtlassianPS.github.io/) that is build with [Jeykll](https://jekyllrb.com/) and hosted by [Github Pages](https://pages.github.com/).

## Why we did it

With this new architecture we benefit by:

* allowing anyone to submit changes to the homepage. Such as
    - fix typos
    - improve styling
    - anything else we messed up
* allowing the documentation of the modules to be hosted in only one place: the modules repository  
_for geeks: the modules repo is included in the homepages repo as a submodule (updated in the build script of the module)_
* hosted by github - improves loading time and availability
* written (_mainly_) in markdown files
* maintenance is decentralized

