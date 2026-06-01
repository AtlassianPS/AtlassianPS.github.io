---
layout: documentation
title: AtlassianPS.Configuration classes
permalink: /docs/AtlassianPS.Configuration/classes/
hide: true
---
# AtlassianPS.Configuration Classes

<div class="reference-index">
{% assign pages = site.pages | where_exp: "p", "p.url contains '/docs/AtlassianPS.Configuration/classes/'" | sort: "name" %}
{% for p in pages %}
{% unless p.url == page.url %}
    <a href="{{ p.url }}">{{ p.title | default: p.name | remove: '.html' | remove: '.md' }}</a>
{% endunless %}
{% endfor %}
</div>
