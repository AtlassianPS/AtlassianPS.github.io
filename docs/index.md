---
layout: documentation
hide: true
---
# Documentation

{% assign activeModules = site.data.modules | where: "status", "active" %}

Use these docs to install AtlassianPS modules, connect to Atlassian products, and find command reference material.

<div class="docs-home">
    <section class="docs-home-section docs-home-start">
        <article>
            <span>Start here</span>
            <h2>Install and run your first command</h2>
            <p>Use the quick start when you want the shortest path from a fresh PowerShell session to a working AtlassianPS command.</p>
            <a href="quick-start.html">Open Quick Start</a>
        </article>
        <article>
            <span>Choose a module</span>
            <h2>Find the right tool</h2>
            <p>Compare active modules, source repositories, documentation, and PowerShell Gallery packages.</p>
            <a href="/module/">Browse Modules</a>
        </article>
    </section>

    <section class="docs-home-section">
        <div class="docs-home-heading">
            <span>Reference</span>
            <h2>Module documentation</h2>
        </div>
        <div class="docs-module-grid">
{% for module in activeModules %}
            <article>
                <h3><a href="{{ module.docs }}">{{ module.name }}</a></h3>
                <p>{{ module.description }}</p>
                <div>
                    <a href="{{ module.docs }}">Docs</a>
                    <a href="{{ module.path }}">Module page</a>
                    <a href="{{ module.gallery }}">Gallery</a>
                </div>
            </article>
{% endfor %}
        </div>
    </section>

    <section class="docs-home-section docs-home-paths">
        <div class="docs-home-heading">
            <span>Common paths</span>
            <h2>What are you trying to do?</h2>
        </div>
        <div>
            <a href="JiraPS/">Automate Jira issues and administration</a>
            <a href="ConfluencePS/">Automate Confluence pages and spaces</a>
            <a href="AtlassianPS.Configuration/">Share Atlassian server configuration</a>
            <a href="JiraAgilePS/">Work with Jira Agile resources</a>
        </div>
    </section>

    <section class="docs-home-section docs-home-community">
        <article>
            <h2>Contribute to the docs</h2>
            <p>Report issues, improve examples, or submit fixes through the contributing guide.</p>
            <a href="Contributing/">Read Contributing Guide</a>
        </article>
        <article>
            <h2>Browse examples</h2>
            <p>Use the gallery for practical snippets and community-submitted automation ideas.</p>
            <a href="Gallery/">Open Gallery</a>
        </article>
    </section>
</div>
