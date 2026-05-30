---
layout: documentation
hide: true
---
# Documentation

Use these docs to install AtlassianPS modules, connect to Atlassian products, and find command reference material.

## Start here

- [Quick Start](quick-start.html): install a module, configure a server, and run your first command.
- [Modules](/module/): compare active and legacy AtlassianPS modules.
- [Contributing](Contributing/): report issues, improve docs, or submit code.
- [Gallery](Gallery/): browse community examples.

## Active modules

| Module | Status | Use it for | Documentation | Package |
| ------ | ------ | ---------- | ------------- | ------- |
{% assign activeModules = site.data.modules | where: "status", "active" %}
{% for module in activeModules %}| [{{ module.name }}]({{ module.path }}) | {{ module.status }} | {{ module.description }} | [Docs]({{ module.docs }}) | [Gallery]({{ module.gallery }}) |
{% endfor %}

## Common paths

- Automating Jira issues? Start with [JiraPS](JiraPS/) and the [JiraPS command reference](JiraPS/commands/).
- Automating Confluence? Start with [ConfluencePS](ConfluencePS/) and the [ConfluencePS command reference](ConfluencePS/commands/).
- Sharing server configuration across modules? Start with [AtlassianPS.Configuration](AtlassianPS.Configuration/).
- Working with Jira Agile resources? Start with [JiraAgilePS](JiraAgilePS/).
