---
layout: galleryItem
author: <a href="https://github.com/lipkau">Lipkau</a>
title: Initialize Environment
synopsis: Set up the environment to work with JiraPS
type: Working Script
modules:
  - JiraPS
extras: 
  - BetterCredentials
---
### Description

This script will:

* Install [BetterCredentials](https://github.com/Jaykul/BetterCredentials)
* Install JiraPS
* Import JiraPS into runtime
* Load credentials
* Authenticate with JIRA server

![ScreenShot](screenshots/gallery_init-env.png)

### Code

{% gist lipkau/f43bf4be92eb9b88a671cd087d1af262 %}
