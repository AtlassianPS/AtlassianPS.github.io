---
layout: documentation
---

# Introduction

Get started with Bootstrap, the world's most popular framework for building responsive, mobile-first sites, with the Bootstrap CDN and a template starter page.

<!-- {{ site.collections }} -->

{% for data in site.collections %}
>     {{ data }}
{% for page in data %}
    {{ page }}
{% endfor %}
{% endfor %}

## Test

Lorem ipsum
