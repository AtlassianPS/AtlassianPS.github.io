---
layout: page
permalink: /docs/Gallery/
---

<!-- Embed GitHub GIST with <code> : https://github.com/blairvanderhoof/gist-embed -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.4/gist-embed.min.js"></script>
<!-- Create TOCs -->
<script type="text/javascript" src="/assets/js/jquery.toc.min.js"></script>

# Gallery

This is a collection of ideas, scripts and intricate uses of the _AtlassianPS_ modules.

#### Contribute

This gallery can only be useful with as much input/collaboration as possible. So please consider submitting your ideas / code.  
To submit your code, you need to [fork this repository](https://github.com/AtlassianPS/AtlassianPS.github.io#fork-destination-box), change [this file](https://github.com/AtlassianPS/AtlassianPS.github.io/blob/master/pages/gallery.md) and [submit your changes as a Pull Request](https://github.com/AtlassianPS/AtlassianPS.github.io/compare).  
_You can find a detailed instruction [here - link broken for now](about:blank)._

#### Disclaimer

All the snippets in the gallery are licensed under the [MIT license](https://github.com/AtlassianPS/AtlassianPS.github.io/blob/master/LICENSE).
> By adding your code to this gallery, you agree to this license.

## The Entries
<ul data-toc="div.container" data-toc-headings="h3"></ul>

<!-- Use this block as a template for adding new entries: -->
<!--
### Brief summary
#### Metadata
```yaml
Author: Jon Doe <Jon.Doe@corp.com>               # Name/email of the author
AtlassianPS Modules:                             # List of module this entry uses
  - BitbucketPS
  - ConfluencePS
  - HipChatPS
  - JiraPS
Type: [Idea | Working Script | Redacted Script]  # Is this an idea or a working script?
Additional Resources:                            # List of other resources/modules needed in script
  - ...
```
#### Description
A detailed description of what this script does
What problem does it try to solve?
What is the environment where this script is run in?

#### Code
<div class="panel-group">
    <div class="panel panel-default">
        <div class="panel-heading">
            <a data-toggle="collapse" href="#">See Code</a>
        </div>
        <div class="panel-collapse collapse">
            <div class="panel-body">
                <code data-gist-id="!!YOUR GIST ID HERE!!"></code>
            </div>
        </div>
    </div>
</div>
-->

### Upload changes to Jira Issues
#### Metadata
```yaml
Author: Oliver Lipkau | https://github.com/lipkau
AtlassianPS Modules:
  - JiraPS
Type: Working Script
```
#### Description
I have a colleague at work who writes HTML apps for managing due dates and sprint assignment of issues.  
He was unable to figure out how to upload the data back into Jira, as the server does not allow for CORS ajax requests.  
So my workaround is: his HTML app dumps the results to JSON - and a scheduled job runs the following script that persists the changes to the issues on Jira.

![ScreenShot](/assets/img/gallery_upload-changes.png)

#### Code
<div class="panel-group">
    <div class="panel panel-default">
        <div class="panel-heading">
            <a data-toggle="collapse" href="#">See Code</a>
        </div>
        <div class="panel-collapse collapse">
            <div class="panel-body">
                <code data-gist-id="a9846f014af6a92f050fe39e18ab5869"></code>
            </div>
        </div>
    </div>
</div>
