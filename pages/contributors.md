---
layout: page
permalink: /contributors/
title: Contributors
---

# Contributors

This page is generated from GitHub data across AtlassianPS repositories.

{% assign generatedContributors = site.data.contributors.generated.contributors %}
{% assign generatedRepos = site.data.contributors.generated.repos %}
{% assign generatedError = site.data.contributors.generated.error %}

{% if generatedContributors and generatedContributors.size > 0 %}
Generated {{ site.data.contributors.generated.generated_at | date: "%Y-%m-%d %H:%M UTC" }} from {{ generatedRepos.size }} repositories.

<table>
  <thead>
    <tr>
      <th>Contributor</th>
      <th style="text-align:right;">Repositories</th>
      <th style="text-align:right;">Contributions</th>
    </tr>
  </thead>
  <tbody>
  {% for contributor in generatedContributors %}
    {% assign avatarSeparator = "?" %}
    {% if contributor.avatar_url contains "?" %}{% assign avatarSeparator = "&" %}{% endif %}
    <tr>
      <td>
        <a href="{{ contributor.html_url }}" target="_blank" rel="noopener noreferrer">
          <img src="{{ contributor.avatar_url }}{{ avatarSeparator }}s=24" alt="{{ contributor.login }}" style="vertical-align:middle;border-radius:50%;margin-right:.35rem;width:24px;height:24px;">
          {{ contributor.login }}
        </a>
      </td>
      <td style="text-align:right;">{{ contributor.repos_count }}</td>
      <td style="text-align:right;">{{ contributor.contributions }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>

## Repositories Included

{% for repo in generatedRepos %}
- [AtlassianPS/{{ repo }}](https://github.com/AtlassianPS/{{ repo }})
{% endfor %}
{% else %}
{% if generatedError %}
The automated contributors feed is temporarily unavailable ({{ generatedError }}). Showing the curated contributor list instead.
{% endif %}

<table>
  <thead>
    <tr>
      <th>Contributor</th>
      <th>Profile</th>
    </tr>
  </thead>
  <tbody>
  {% for person in site.data.index.people %}
    <tr>
      <td>{{ person.name }}{% if person.role %} ({{ person.role }}){% endif %}</td>
      <td><a href="https://github.com/{{ person.gh_user }}" target="_blank" rel="noopener noreferrer">@{{ person.gh_user }}</a></td>
    </tr>
  {% endfor %}
  </tbody>
</table>
{% endif %}
