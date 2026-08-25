---
layout: documentation
---
# Contributing to AtlassianPS

Thank you for helping improve AtlassianPS.

You do **not** need to be an expert to contribute. Small fixes, typo corrections, and docs improvements are all valuable.
Every contribution matters, and we are glad you are here.

## 🚀 Start here

- Want to report a problem or suggest an idea? See [How To Report An Issue](#-how-to-report-an-issue).
- Want to submit changes? See [How To Submit Code Changes](#-how-to-submit-code-changes).
- Want coding standards? Read [Our Guidelines](our-guidelines.html).

## 🤝 Common ways to contribute

- Report bugs or unclear behavior.
- Improve documentation.
- Fix defects you can reproduce.
- Add small quality-of-life enhancements.
- Contribute larger features.

> **Tip:** Not sure where to begin? Small docs improvements are a great first contribution.

## 🐞 How To Report An Issue

When you notice something that could be improved, tell us by creating an issue.

Each of our projects has an _issue tracker_ where you can report your findings.

<div class="project-issue-list">
    <article class="project-issue-card">
        <h3>AtlassianPS.Configuration</h3>
        <a href="https://github.com/AtlassianPS/AtlassianPS.Configuration/issues/new">Open a new issue</a>
        <a href="https://github.com/AtlassianPS/AtlassianPS.Configuration/issues"><img src="https://img.shields.io/github/issues-raw/AtlassianPS/AtlassianPS.Configuration.svg?maxAge=2592000" alt="Open issues for AtlassianPS.Configuration"></a>
    </article>
    <article class="project-issue-card">
        <h3>AtlassianPS.github.io</h3>
        <a href="https://github.com/AtlassianPS/AtlassianPS.github.io/issues/new">Open a new issue</a>
        <a href="https://github.com/AtlassianPS/AtlassianPS.github.io/issues"><img src="https://img.shields.io/github/issues-raw/AtlassianPS/AtlassianPS.github.io.svg?maxAge=2592000" alt="Open issues for AtlassianPS.github.io"></a>
    </article>
    <article class="project-issue-card">
        <h3>ConfluencePS</h3>
        <a href="https://github.com/AtlassianPS/ConfluencePS/issues/new">Open a new issue</a>
        <a href="https://github.com/AtlassianPS/ConfluencePS/issues"><img src="https://img.shields.io/github/issues-raw/AtlassianPS/ConfluencePS.svg?maxAge=2592000" alt="Open issues for ConfluencePS"></a>
    </article>
    <article class="project-issue-card">
        <h3>JiraAgilePS</h3>
        <a href="https://github.com/AtlassianPS/JiraAgilePS/issues/new">Open a new issue</a>
        <a href="https://github.com/AtlassianPS/JiraAgilePS/issues"><img src="https://img.shields.io/github/issues-raw/AtlassianPS/JiraAgilePS.svg?maxAge=2592000" alt="Open issues for JiraAgilePS"></a>
    </article>
    <article class="project-issue-card">
        <h3>JiraPS</h3>
        <a href="https://github.com/AtlassianPS/JiraPS/issues/new">Open a new issue</a>
        <a href="https://github.com/AtlassianPS/JiraPS/issues"><img src="https://img.shields.io/github/issues-raw/AtlassianPS/JiraPS.svg?maxAge=2592000" alt="Open issues for JiraPS"></a>
    </article>
</div>

Legacy modules such as `AtlassianPS`, `BitbucketPS`, and `HipChatPS` are not active documentation targets on this website.
Use their GitHub repositories directly if you need historical source or issue context.

Before creating a new issue, please search open issues first.
If a similar issue already exists, add your details there.

## 🔁 How To Submit Code Changes

No matter if you are fixing a typo or shipping a new feature, changes are submitted through a Pull Request.

Start with **[Submitting A PR](submitting-a-pr.html)** for the full flow.
The guide also explains the release and changelog labels required before a pull request can merge.

### 🧰 Development Container

Our repository includes a ["Dev Container"](https://containers.dev/) / GitHub Codespaces development container.

> **Note:** A development container (or dev container for short) allows you to use
> a container as a full-featured development environment.
> It can be used to run an application, to separate tools, libraries,
> or runtimes needed for working with a codebase,
> and to aid in continuous integration and testing.

You can use the devcontainer to spin up a fine-tuned development environment with
everything you need for working on AtlassianPS projects.

You can use the devcontainer in your favorite editor or GitHub Codespace.

#### Working locally (in VS Code)

You can use the links below to get started.
The links will trigger VS Code to automatically install the Dev Containers extension if needed,
clone the source code into a container volume, and spin up a dev container for use.

- [AtlassianPS](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/atlassianps/atlassianps)
- [AtlassianPS.Configuration](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/atlassianps/atlassianps.configuration)
- [AtlassianPS.github.io](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/atlassianps/atlassianps.github.io)
- [ConfluencePS](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/atlassianps/confluenceps)
- [JiraAgilePS](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/atlassianps/jiraagileps)
- [JiraPS](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/atlassianps/jiraps)

#### Using GitHub Codespace

GitHub allows you to spin up a virtual editor ("VS Code in your browser").
You can create your own codespace by navigating to <https://github.com/codespaces>
or by using the "Code" button in the repository itself, as shown below.

![Create Codespace In Repository](../../assets/img/create_github_codespace.png)

## 📏 Our Guidelines

Please follow [Our Guidelines](our-guidelines.html) when contributing code or docs.

## 📚 Module Documentation Publishing

The website publishes module documentation from Git submodules.
The main `/docs/<Module>/` pages should match the latest released module package, not unreleased branch content.

See [Module Documentation Publishing](module-documentation.html) for the submodule policy and docs-only exception rules.

## 📚 Useful Material

- GitHub's guide on [Contributing to Open Source](https://guides.github.com/activities/contributing-to-open-source/#pull-request)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/): step-by-step instructions of GitHub flow.

<!-- reference-style links -->
  [AtlassianPS.Discord]: https://atlassianps.org/contact/
