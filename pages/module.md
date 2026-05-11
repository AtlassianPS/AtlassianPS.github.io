---
layout:    page
permalink: /module/
title: Modules
---

# Modules

AtlassianPS modules are published independently and share common conventions for authentication, configuration, and command naming.

{% assign navModules = site.data.navigation | where: "name", "Modules" | first %}
{% for module in navModules.childs %}
## {{ module.name }}

- Site page: [/{{ module.path }}](/{{ module.path }})
- Docs: [/docs/{{ module.name }}](/docs/{{ module.name }})
- PowerShell Gallery: [{{ module.name }}](https://www.powershellgallery.com/packages/{{ module.name }})
- Source: [AtlassianPS/{{ module.name }}](https://github.com/AtlassianPS/{{ module.name }})
{% endfor %}
