# Placeholders

Placeholders are invisible marks that add additional functionality.

## Readmore

```html
<!-- md-readmore -->
```

Place to separate file into 2 parts if one part have to be show in the list. This is useful for engines that use markdown to generate blogs or static sites.

## TOC

```html
<!-- md-toc -->
```

Will generate table of content in the place where placeholder is placed. It will use H1-H3 to create structure and name #anchors.

### Configuration

- `toc.depth` - Depth of titles to create TOC

## Pagebreak

```html
<!-- md-page-break -->
```

Add page break. Especially useful when generating PDF or Word file from Markdown.
