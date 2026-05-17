---
layout:    page
permalink: /module/
title: Modules
---

# Modules

AtlassianPS modules are published independently and share common conventions for authentication, configuration, and command naming.

{% assign navModules = site.data.navigation | where: "name", "Modules" | first %}
{% assign docsNav = site.data.navigation | where: "name", "Documentation" | first %}
{% assign docsModuleEntries = docsNav.childs | where_exp: "item", "item.path != 'docs/Contributing'" | where_exp: "item", "item.path != 'docs/Gallery'" %}
{% assign docsModuleNames = docsModuleEntries | map: "name" %}
{% for module in navModules.childs %}
## {{ module.name }}

- Site page: [/{{ module.path }}](/{{ module.path }})
{% if docsModuleNames contains module.name %}
- Docs: [/docs/{{ module.name }}](/docs/{{ module.name }})
{% endif %}
- PowerShell Gallery: [{{ module.name }}](https://www.powershellgallery.com/packages/{{ module.name }})
- Source: [AtlassianPS/{{ module.name }}](https://github.com/AtlassianPS/{{ module.name }})
{% endfor %}
