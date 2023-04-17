---
aliases: ['<% tp.date.now("YYYY-MM-DD") %>']
tags: [daily]
location: []
title: '<% tp.date.now("YYYY-MM-DD") %>'
linter-yaml-title-alias: '<% tp.date.now("YYYY-MM-DD") %>'
date created: '<% tp.date.now("YYYY-MM-DD HH:mm:ss a") %>'
date modified: '<% tp.date.now("YYYY-MM-DD HH:mm:ss a") %>'
---

## Tasks



## Notes



## Capture Notes From Today

```dataview
LIST 
FROM ""
WHERE contains(date-modified, this.file.name) OR contains(date-created, this.file.name) AND file.name !=this.file.name
```
