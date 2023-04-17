---
aliases: [Contacts]
tags: []
title: Contacts
linter-yaml-title-alias: Contacts
date created: 2023-04-02 1:21:50 am
date modified: 2023-04-04 11:19:26 am
---

```dataview
table phone, email, birthday, relationship, 
choice(
	regexmatch("\w+", instagram), 
	elink("https://instagram.com/@" + instagram, instagram), "\-") as instagram,
choice(
	regexmatch("\w+", instagram),
	elink("https://twitter.com/" + twitter, twitter), "\-") as twitter,
choice(
	regexmatch("\w+", instagram),
	elink("https://linkedin.com/@" + linkedin, linkedin), "\-") as linkedin, url as url
from "Database/Contacts"
where file.name != "Contacts"
```
