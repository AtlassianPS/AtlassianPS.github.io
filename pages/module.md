---
layout:    page
title:     Modules
permalink: /module/
---

# Modules

AtlassianPS maintains PowerShell modules for Atlassian products and shared AtlassianPS configuration.

{% assign activeModules = site.data.modules | where: "status", "active" %}
{% assign legacyModules = site.data.modules | where: "status", "legacy" %}

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

## Legacy modules

These modules remain available for historical context, but they are not active documentation targets.

<ul>
{% for module in legacyModules %}
    <li><a href="{{ module.github }}">{{ module.name }}</a>: {{ module.description }}</li>
{% endfor %}
</ul>
