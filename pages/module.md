---
layout:    page
title:     Modules
permalink: /module/
page_class: module-page
---

# Modules

AtlassianPS maintains PowerShell modules for Atlassian products and related repositories for project coordination.

{% assign activeModules = site.data.modules | where: "status", "active" %}
{% assign otherRepositories = site.data.modules | where: "status", "repository" %}

## Active modules

<div class="module-directory">
    <div class="module-directory-header" aria-hidden="true">
        <span>Module</span>
        <span>Install</span>
        <span>Stats</span>
        <span>Links</span>
    </div>
{% for module in activeModules %}
    <article class="module-directory-card">
        <div class="module-summary">
            <img src="/assets/img/{{ module.name }}.png" class="logo img-responsive" alt="{{ module.name }}" />
            <div>
                <h2 class="item-title h3"><a href="{{ module.path }}">{{ module.name }}</a></h2>
                <p>{{ module.description }}</p>
            </div>
        </div>
        {% if module.dependency %}
        <code>Installed as a dependency</code>
        {% else %}
        <code>Install-Module {{ module.name }}</code>
        {% endif %}
        <div class="module-directory-stats" aria-label="{{ module.name }} project statistics">
            <img src="https://img.shields.io/github/stars/AtlassianPS/{{ module.name }}?style=flat-square&label=Stars" alt="{{ module.name }} GitHub stars" />
            <img src="https://img.shields.io/powershellgallery/dt/{{ module.name }}?style=flat-square&label=Downloads" alt="{{ module.name }} PowerShell Gallery downloads" />
        </div>
        <div class="module-directory-links">
            <a href="{{ module.path }}">Details</a>
            {% if module.docs %}<a href="{{ module.docs }}">Docs</a>{% endif %}
            <a href="{{ module.github }}">Source</a>
            {% if module.gallery %}<a href="{{ module.gallery }}">Gallery</a>{% endif %}
        </div>
    </article>
{% endfor %}
</div>

## Other repositories

These repositories are part of AtlassianPS, but they are not published modules on this website.

<ul class="repository-list">
{% for module in otherRepositories %}
    <li><a href="{{ module.github }}">{{ module.name }}</a>: {{ module.description }}</li>
{% endfor %}
</ul>
