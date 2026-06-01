---
layout: documentation
title: ConfluencePS classes
permalink: /docs/ConfluencePS/classes/
hide: true
---
# ConfluencePS Classes

<div class="reference-index">
{% assign pages = site.pages | where_exp: "p", "p.url contains '/docs/ConfluencePS/classes/'" | sort: "name" %}
{% for p in pages %}
{% unless p.url == page.url %}
    <a href="{{ p.url }}">{{ p.title | default: p.name | remove: '.html' | remove: '.md' }}</a>
{% endunless %}
{% endfor %}
</div>
