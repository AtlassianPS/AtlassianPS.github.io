---
layout:    page
title:     Modules
permalink: /module/
---

# Modules

AtlassianPS maintains PowerShell modules for Atlassian products and shared AtlassianPS configuration.

{% assign activeModules = site.data.modules | where: "status", "active" %}
{% assign otherRepositories = site.data.modules | where: "status", "repository" %}

## Active modules

<div class="row module-wrapper">
{% for module in activeModules %}
    <div class="module item col-12 col-md-6">
        <div class="module-item card h-100">
            <div class="card-body">
                <a class="link" href="{{ module.path }}">
                    <img src="/assets/img/{{ module.name }}.png" class="logo img-responsive" alt="{{ module.name }}" />
                    <h2 class="item-title h3">{{ module.name }}</h2>
                </a>
                <p>{{ module.description }}</p>
                <p>
                    <a class="btn btn-square btn-outline" href="{{ module.path }}">Module details</a>
                    {% if module.docs %}<a class="btn btn-square btn-outline" href="{{ module.docs }}">Documentation</a>{% endif %}
                    <a class="btn btn-square btn-outline" href="{{ module.github }}">Source code</a>
                    {% if module.gallery %}<a class="btn btn-square btn-outline" href="{{ module.gallery }}">PowerShell Gallery</a>{% endif %}
                </p>
            </div>
        </div>
    </div>
{% endfor %}
</div>

## Other repositories

These repositories are part of AtlassianPS, but they are not published modules on this website.

<ul>
{% for module in otherRepositories %}
    <li><a href="{{ module.github }}">{{ module.name }}</a>: {{ module.description }}</li>
{% endfor %}
</ul>
