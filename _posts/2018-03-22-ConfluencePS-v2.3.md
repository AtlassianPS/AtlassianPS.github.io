---
layout:     article
permalink:  /article/:categories/:title
title:      ConfluencePS v2.3
date:       2018-03-23 12:00:00
categories: Announcement
thumbnail:  
author:     lipkau
tags:
 - ConfluencePS
 - Release
---

We have just published a new major version of the **ConfluencePS** module to the [Gallery](https://www.powershellgallery.com/packages/ConfluencePS/2.2.10) and to [GitHub](https://github.com/AtlassianPS/ConfluencePS/releases/tag/v2.2.5)!
<!--more-->

# Description
This release brings new functionality, improvements and bug fixes that has been submitted by our contributors.

_Details are listed below_

# CHANGELOG
## FEATURES

- Added custom object type for Attachments: `ConfluencePS.Attachment` (#123, [@JohnAdders][])
- Added `Add-Attachment`: upload a file to a page (#123, [@JohnAdders][])
- Added `Get-Attachment`: list all attachments of a page (#123, [@JohnAdders][])
- Added `Get-AttachmentFile`: download an attachment to the local disc (#123, [@JohnAdders][])
- Added `Remove-Attachment`: remove an attachment from a page (#123, [@JohnAdders][])
- Added `Set-Attachment`: update an attachment of a page (#123, [@JohnAdders][])
- Made `Invoke-Method` public (#130, [@lipkau][])
- Added `-InFile` to `Invoke-Method` for uploading of files with `form-data` (#130, [@lipkau][])

## IMPROVEMENTS

- Moved Online Help of cmdlets to the homepage (#130, [@lipkau][])
- Updated help for contributing to the project (#130, [@lipkau][])
- Documentation for the custom classes of the module (#107, [@lipkau][])
- Added full support for PowerShell Core (`pwsh`) (#119, [@lipkau][])
- Added AppVeyor tests on PowerShell v6 (Linux) (#119, [@lipkau][])
- Added AppVeyor tests on PowerShell v6 (Windows) (#119, [@lipkau][])
- Tests now run from `./Release` Path (#99, [@lipkau][])
- Have the Build script to "compile" the functions into the psm1 file (enhances performance) (#119, [@lipkau][])
- Have a zip file deploy as artifact of the release (#90, [@lipkau][])

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
  [@jkknorr]: https://github.com/jkknorr
  [@JohnAdders]: https://github.com/JohnAdders
  [@kittholland]: https://github.com/kittholland
  [@LiamLeane]: https://github.com/LiamLeane
  [@lipkau]: https://github.com/lipkau
  [@lukhase]: https://github.com/lukhase
  [@padgers]: https://github.com/padgers
  [@ThePSAdmin]: https://github.com/ThePSAdmin
