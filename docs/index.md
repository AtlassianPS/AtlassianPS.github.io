---
layout: documentation
hide: true
---
# Documentation

This is the fastest way to get productive with AtlassianPS modules.

## Start here

- New user? Start with [`New-JiraSession`](/docs/JiraPS/commands/New-JiraSession) and [`Get-Page`](/docs/ConfluencePS/commands/Get-Page/).
- Looking for examples? Visit the [Gallery](/docs/Gallery).
- Want to contribute? Read the [Contributing](/docs/Contributing) guides.

## Module documentation

{% assign docs = site.data.navigation | where: "name", "Documentation" | first %}
{% for module in docs.childs %}
{% unless module.path == "docs/Contributing" or module.path == "docs/Gallery" %}
- [{{ module.name }}](/{{ module.path }})
{% endunless %}
{% endfor %}

## Need help?

If you get stuck, open an issue in the relevant module repository or reach out in the AtlassianPS community channels.
