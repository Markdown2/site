---
layout: syntax
title:  "Placeholders"
date:   2013-01-01 00:00:57
---

Placeholders are invisible marks that add additional fictionality. If `.md2` text document is parsed with Markdown 1 parser, this placeholders are invisible.

- `<!--  md-readmore -->` - place to separate file into 2 parts if one part have to be show in the list. This is useful for engines that use markdown to generate blogs or static sites.

- `<!--  md-toc -->` - Will generate table of content in the place where placeholder is placed. It will use H1-H3 to create structure and name #anchors.

### Comment systems

- `<!-- md-disqus shortname=myname -->` - insert [Disqus](http://www.disqus.com) comment system.

- `<!-- md-idebate acct=myname -->` - Insert [IntenseDebate](http://intensedebate.com/) comment system.

Also posible

- Cackle
- Facebook
- VK