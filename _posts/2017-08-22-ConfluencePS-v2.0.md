---
layout:     article
permalink:  /article/:categories/:title
title:      ConfluencePS v2.0.0
date:       2017-08-22 12:00:00
categories: Announcement
thumbnail:  
author:     brianbunke
tags:
 - ConfluencePS
 - Release
---

We have just published a new major version of the **ConfluencePS** module to the [Gallery](https://www.powershellgallery.com/packages/ConfluencePS/2.0.0) and to [GitHub](https://github.com/AtlassianPS/ConfluencePS/releases/tag/v2.0.0)!
<!--more-->

There's also a short announcement [on Reddit](https://www.reddit.com/r/PowerShell/comments/6ua676/confluenceps_v2_released/). All details can be found in the [changelog](https://github.com/AtlassianPS/ConfluencePS/blob/master/CHANGELOG.md), but the biggest changes are copied below for your convenience:

---

### Description
A new major version! ConfluencePS has been totally refactored to introduce new features and greatly improve efficiency.

"A new major version" means limited older functionality was intentionally broken. In addition, there are a ton of good changes, so some big picture notes first:

- All functions changed from "Wiki" prefix to "Confluence", like `Get-ConfluencePage`
  - But the module accommodates for any prefix you want, e.g. `Import-Module ConfluencePS -Prefix Wiki`
- Functions changed or removed:
  - `Get-WikiLabelApplied` [removed; functionality added to `Get-ConfluencePage -Label foo`]
  - `Get-WikiPageLabel` > `Get-ConfluenceLabel`
  - `New-WikiLabel` > `Add-ConfluenceLabel`
- `Get-*` functions now support paging, and defining your preferred page size
- `-Limit` and `-Expand` parameters were removed from functions
  - With paging implementation, modifying the returned object limit isn't necessary
  - And allows for richer objects to be returned by default
- `-ApiUri` and `-Credential` parameters added to every function
  - This is useful if you have more than one Confluence instance
  - `Set-ConfluenceInfo` now defines `ApiUri` and `Credential` defaults for the current session
  - And you can override any single function:
  - `Get-ConfluenceSpace -ApiUri 'https://wiki2.example.com' -Credential (Get-Credential)`
- All functions now output custom object types, like `[ConfluencePS.Page]`
  - Allows for returning more object properties...
  - ...and only displaying the most relevant in the default output
  - Also enables a much improved pipeline flow
  - This behavior removed the need for the `-Expand` parameter
- Private functions are leveraged heavily to reduce repeat code
  - `Invoke-Method` is the most prominent example

### Much ❤
[@lipkau](https://github.com/lipkau) refactored the entire module, and is the only reason `2.0` is a reality. In short, he is amazing. Thank you!
