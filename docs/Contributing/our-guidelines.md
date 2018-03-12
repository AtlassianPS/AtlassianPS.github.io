---
layout: documentation
---
# Our Guidelines

**THIS PAGE IS IN WORK**

## Overview

This page describes:

* [Code Formatting and Conventions](#code-formatting-and-conventions)
  * [Formatting](#formatting)
  * [Templates](#templates)
  * [Variable Naming](#variable-naming)
  * [Function Naming](#function-naming)
  * [Splatting](#splatting)
  * [Aliases](#aliases)
  * [In-code Documentation](#in-code-documentation)
* [Code Separation and File Naming](#code-separation-and-file-naming)
* [Strive for 100% Code Coverage by Tests](#strive-for-100-code-coverage-by-tests)
* [Changes To the Build System](#changes-to-the-build-system)
* [Submitting Pull Requests](#submitting-pull-requests)

## Code Formatting and Conventions

### Formatting

All code must be properly formatted for a PR to be merged.
For examples of the formatting, take a look around the public functions of the projects.

If you are using VS Code, the project is already set up to help you with that.

### Templates

_No templates yet. Fill in when available._

### Variable Naming

The naming convention asks for Pascal Case for all parameters, function nouns, method names, property names, field names, etc.  
Local variable, which are created within the function, should be in Camel Case.

Example:

```powershell
$GlobalVariable = "this is global"
function Get-GlobalVariable {
    param(
        $InputObject,
        $Filter
    )
    $localVariable = "this is local"
    $global:GlobalVariable
}
```

Additional Information:
* [More about special case styles](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)

### Function Naming

Functions should use proper `Verb-Noun` names even on private functions
and only use [Approved Verbs](https://msdn.microsoft.com/en-us/library/ms714428(v=vs.85).aspx).

### Splatting

Use [splatting] whenever a command has 3 or more parameters. Use the `$params` variable for splatting.
If you need to splat more than one command in a pipeline use `$Params<command name>` (e.g. `$ParamsGetContent` ) for each command in the pipeline.

```powershell
# Single command
$Params = @{
    Name = 'Widget1'
    Id   = '5ABCD98727658'
    Type = 'Custom'
}
Get-Widget @Params

# Multi-command pipeline
$ParamsAddWidget = @{
    Name = 'Widget1'
    Id   = '5ABCD98727658'
    Type = 'Custom'
}
$ParamsSetWidget = @{
    Height = 10
    Width  = 20
    Depth  = 3
}
Add-Widget @ParamsAddWidget | Set-Widget @ParamsSetWidget
```

### Aliases

Expand all aliases prior to a PR.
No aliases are permitted, including `Sort`.
The PSAnalyzer tests should detect this and issue a failure.

### In-code Documentation

Limit in-code comments and documentation.
If you are using full command names and PowerShell best practices, the code should be fairly self-documenting.
Only use comments when doing something that is out of the norm or obscure.
If you feel you need to comment on code, you likely need to refactor.

## Code Separation and File Naming

* all functions (public and private), classes, and enums should be defined in separate files and organized according to their category.
* do not define more than one function, class, or enum per file.
* do not create nested functions (use separate private functions instead).
* the filename should match the function or enum name.

## Strive for 100% Code Coverage by Tests

This project strives to be as close to 100% code coverage as possible.
If you are submitting a new function (public or private), the PR will not be merged until a unit test has been added that tests all available code paths for the function.
The same goes for classes.
If you extend the functionality of an existing feature, please add the tests that describe the changes.

## Document as You Go

The documentation of a project is located in the `/docs/` folder and is the source of truth for all documentation.

We realize documentation is the boring part of coding, but it is a necessary evil and not something that can be thrown over the wall unless we gain some dedicated documentation contributors.
The only way to keep this project properly documented is to do it as we go and not after the fact.

Any code submission will be checked for the according changes to the documentation.

## Changes To the Build System

_This chapter must describe how to make changes and test them against AppVeyor/Travis._

_Maybe a page dedicated to this topic might be in order._

<!-- reference-style links -->
  [splatting]: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_splatting
