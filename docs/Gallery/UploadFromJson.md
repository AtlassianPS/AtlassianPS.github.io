---
layout: galleryItem
author: <a href="https://github.com/lipkau">Lipkau</a>
title: Upload From Json
synopsis: Mass upload changes from JSON to Jira Issues
type: Working Script
modules:
  - JiraPS
---

## Description

This script takes a Json file as input and updates all Issues in it.

I have a colleague at work who writes HTML apps for managing due dates and sprint assignment of issues.  
He was unable to figure out how to upload the data back into Jira, as the server does not allow for CORS ajax requests.

So my workaround is: his HTML app dumps the results to JSON - and a scheduled job runs the following script that persists the changes to the issues on Jira.

![ScreenShot](screenshots/gallery_upload-changes.png)

## Code

{% gist lipkau/a9846f014af6a92f050fe39e18ab5869 %}
