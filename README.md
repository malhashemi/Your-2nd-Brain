---
aliases: [Knowledge Vault Optimized for Work]
tags: []
location: []
title: Knowledge Vault Optimized for Work
linter-yaml-title-alias: Knowledge Vault Optimized for Work
date created: 2023-04-08 8:10:45 pm
date modified: 2023-04-17 10:37:04 am
---

# Knowledge Vault Optimized for Work

Welcome to this Vault! We're excited to have you here.

If you're new to Obsidian or seeking to optimize your experience with community plugins, this template serves as an ideal starting point. The template is **fully functional** and [ready for use](#Installation) right away.

To begin, simply click the _**"Use this Template"**_ button in the top right corner.

With this guide and template, you'll be well on your way to mastering Obsidian's powerful features.

## Installation

1. Ensure [git](https://git-scm.com/) is installed on your system.
2. Click `Use this Template` to create a separate GitHub repository, allowing you to customize and build upon the vault.
3. Download the repository to your local machine using `git clone` (recommended) or `download zip`.
4. Rename the vault to your desired name and open it in Obsidian.
5. Choose "Trust Author and enable plugins" to access the community plugins included in this vault.
6. Periodically, check for plugin updates using the [Plugin Update Tracker](obsidian://show-plugin?id=obsidian-plugin-update-tracker) found in the bottom right corner. If a red X appears next to the plug icon, see which [Plugins](Tutorials/Obsidian/Plugins.md) need updates and update them accordingly.
7. If the `Obsidian-Git` plugin is not working, ensure the `Custom Git binary path` points to your Git binary path (e.g., `C:\Program Files\Git\bin\git.exe`).
8. To integrate ChatGPT into your vault, enter your **OpenAI API** Key into the following three plugins:
    - ChatGPT MD: Engage in direct chat with ChatGPT from within Obsidian (`Ctrl+J` to continue a chat, `Ctrl+'` to start a new chat with the highlighted text)
    - Smart Connections: Chat with your vault
    - Text Generator: Generate text using pre-built prompt templates (`Ctrl+T`)
9. Customize your [Home Tab](obsidian://show-plugin?id=home-tab).
10. Click the "Open Today" button in the left ribbon to create a new daily note and embark on your Obsidian journey.

---

## Themes

You can easily customize the appearance of your Obsidian vault by selecting a theme from the Appearance Menu. This vault comes pre-loaded with two additional themes, besides the Default Obsidian theme, to cater to different preferences:

1. [80s Neon](https://github.com/deathau/80s-Neon-for-Obsidian.md)
    - Set as the default theme upon first use of Obsidian.
    - For the best visual experience, it is recommended to keep the _**Translucent window**_ option enabled.
    - Two CSS Snippets are associated with this theme to enhance its functionality:
        - `editor_translucency.css`: Allows the editor window to be translucent.
        - `editor-lineHighlight.css`: Highlights the current paragraph in editing mode.
2. [AnuPpuccin](https://github.com/AnubisNekhet/AnuPpuccin)
    - Highly customizable through the _**Style Settings Plugin**_.
    - Not suitable for translucency; make sure to disable the _**Translucent window**_ option, as well as the `editor_translucency.css` snippet.
    - This theme already includes additional checkboxes and paragraph highlighting, so you can disable the `alternativeCheckboxes.css` and `editor-lineHighlight.css` snippets.
    - For an AMOLED black background, activate the `extended-colorschemes.css` snippet.

Feel free to switch between these themes at any time to personalize your Obsidian experience. Remember to adjust the settings and snippets accordingly for the best results.

---

## Folder Structure

**Note:** Some folders are hidden in this vault by default. To quickly toggle their visibility, press `Ctrl+H`.

- Attachments: Public images and PDFs
- Calendar: Collection of time-bound notes.
- ChatGPT: ChatGPT conversations created using `Ctrl+'`
- Computed: Dataviews of information computed across your vault
- Databases: Collections of files with similar attributes, such as people
- Excalidraw: A list of Excalidraw items
- Inbox: Notes captured from external apps
- Templates: Files used by Templater to populate notes
    - Daily: Default template when you click on today note or on any date on the calendar.
    - newNote: Default template for creating a new note
    - People: Default template for creating a new note inside `/Database/Contacts`
- textgenerator: Contains the list of prompts used with GPT (`Ctrl+T`)
- Tutorials: Ideal starting point for Markdown or Obsidian newcomers
    1. Begin with the [Markdown Tutorial](Tutorials/Obsidian/Markdown%20Tutorial.md) and its branches.
    2. Familiarize yourself with the installed [Plugins](Tutorials/Obsidian/Plugins.md).
    3. As Markdown is a keyboard-first application, review the [Hot Keys](Tutorials/Hot%20Keys.md).

This folder structure is designed to help you organize your vault efficiently and easily access your content.

---

## Elements of Markdown Important to the Vault

### Footers

_Footers_ serve two very important roles: citation and non destructive updates. Citation is used in the vault to help link a note to its source material.

Footers also make for great **non destructive updates** to notes. This means you can revisit an old note, and instead of altering it directly, you can append a footnote to the end of a thought, without changing the structural meaning of the original file. Think of it as sedimentary rock, or a really lightweight [VCS](https://github.com/malhashemi/Zettelkasten-Vault#version-control-system).

Footnote Shortcut combined with Natural Language Dates allows for super easy non destructive updates that serve as asides, knowledge from a wiser and smarter future you[^1]

### YAML

_YAML_, or frontmatter, serves as a way to get computed values or track over time. For example, if you are looking to establish a daily reading habit, you may desire to put that habit in a YAML and then track it.

```markdown
// /Daily/2023-01-01

---
read: 0
---

// /Computed/Trackers.md

\`\`\`tracker
searchType: frontmatter
searchTarget: read
fixedScale: 1.0
fitPanelWidth: true
folder: Daily
datasetName: Read 20 mins or more
month:
\`\`\`

```

### Tags

Tags are great for searching and grouping. Try and choose memorable tags that will stick out. There is already a prompt from [Text Generator](obsidian://show-plugin?id=obsidian-textgenerator-plugin) Plugin that looks at the content and generate suitable tags. Try it by `Ctrl+T` then `Get Tags for Your Content`.

---

## Tips and Tricks

### How to Search Effectively

Searching for information and connecting ideas within your vault can be made easier through various methods:

- Quick Switcher: Press `Ctrl+O`
- Search All Files: Press `Shift` twice
- Graph View: Press `Ctrl+G`
- Local Graph View: Docked to the right side or access via command `Ctrl+P`
- [Smart Connections](obsidian://show-plugin?id=smart-connections) Chat:
    - Utilizes embeddings to let ChatGPT answer prompts based on your notes.
    - Docked to the right side or access via command `Ctrl+P`

Leveraging these search techniques will help you navigate and connect thoughts throughout your vault more effectively.

## Acknowledgment

This document and vault is heavily inspired by [Bramses' Highly Opinionated Vault 2023](https://github.com/bramses/bramses-highly-opinionated-vault-2023)

[^1]: Hello from the future you
