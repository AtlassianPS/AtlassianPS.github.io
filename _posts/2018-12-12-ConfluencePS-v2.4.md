---
layout:     article
permalink:  /article/:categories/:title
title:      ConfluencePS v2.4
date:       2018-12-12 22:29:00
categories: Announcement
thumbnail:  
author:     lipkau
tags:
 - ConfluencePS
 - Release
---

We have just published a new major version of the **ConfluencePS** module to the [Gallery](https://www.powershellgallery.com/packages/ConfluencePS/2.4.0) and to [GitHub](https://github.com/AtlassianPS/ConfluencePS/tree/v2.4.0)!
<!--more-->

# Description

This release brings new functionality, improvements and bug fixes that has been submitted by our contributors.

_Details are listed below_

# CHANGELOG

## Added

- Added `-Vertical` to `ConvertTo-Table` (#148, [@brianbunke])
- Added support for TLS1.2 (#155, [@lipkau])

## Changed

- Changed productive module files to be compiled into single `.psm1` file (#133, [@lipkau])
- Fixed `ConvertTo-Table` for empty cells (#144, [@FelixMelchert])
- Changed CI/CD pipeline from AppVeyor to Azure DevOps (#150, [@lipkau])
- Fixed trailing slash in ApiURi parameter (#153, [@lipkau])

_Full list of issues can be found in [Milestone v2.3](https://github.com/AtlassianPS/ConfluencePS/milestone/5)._

<!-- reference-style links -->
  [@alexsuslin]: https://github.com/alexsuslin
  [@axxelG]: https://github.com/axxelG
  [@beaudryj]: https://github.com/beaudryj
  [@brianbunke]: https://github.com/brianbunke
  [@Clijsters]: https://github.com/Clijsters
  [@colhal]: https://github.com/colhal
  [@Dejulia489]: https://github.com/Dejulia489
  [@ebekker]: https://github.com/ebekker
  [@FelixMelchert]: https://github.com/FelixMelchert
  [@jkknorr]: https://github.com/jkknorr
  [@JohnAdders]: https://github.com/JohnAdders
  [@kittholland]: https://github.com/kittholland
  [@LiamLeane]: https://github.com/LiamLeane
  [@lipkau]: https://github.com/lipkau
  [@lukhase]: https://github.com/lukhase
  [@padgers]: https://github.com/padgers
  [@ThePSAdmin]: https://github.com/ThePSAdmin

