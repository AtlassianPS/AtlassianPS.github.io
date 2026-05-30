---
layout:    page
title:     Modules
permalink: /module/
---

# Modules

AtlassianPS maintains PowerShell modules for Atlassian products and shared AtlassianPS configuration.

<div class="row module-wrapper">
{% for module in site.data.modules %}
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
                    <a class="btn btn-square btn-outline" href="{{ module.github }}">Source code</a>
                </p>
            </div>
        </div>
    </div>
{% endfor %}
</div>
