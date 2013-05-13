---
layout: syntax
title:  "Typography"
date:   2013-01-01 00:00:58
---

## Sup

**Markdown**
	
	^2^

**Raw HTML**

	<sup><small>2</small></sup>

**Examples**

Markup | HTML | Result
-------|------|---
`C^0^` | `C<sup><small>0</small></sup>` | C<sup><small>0</small></sup>  
`Compant^&reg;^` | `Company<sup><small>&reg;</small></sup>` | Company<sup><small>&reg;</small></sup>

## Small and Big

Although `<big>` is deprecated in HTML5 it is still supported by all browsers and in fact very handy.

**Markdown**

	--small text-- and ++big text++

**Raw HTML**

	<small>small text </small> and <big>big text</big>

**Examples**

<small>small text</small>
and <big>big text</big>


## Keyboard keys

One of the very important thing is `<kbd>` tag. With proper formating it may be very useful for PC related tutorials. Or comments on [superuser.com](http://superuser.com) or other [stackoverflow.com](http://stackoverflow.com/) like websites.  

**Markdown**

	Please use [Ctrl]+[v] or [⌘]+[v] for Mac to insert message.

**Raw HTML**

	Please use <kbd>Ctrl</kbd>+<kbd>v</kbd> or <kbd>⌘</kbd>+<kbd>v</kbd> for Mac to insert message.

**Examples**

Please use <kbd>Ctrl</kbd>+<kbd>v</kbd> or <kbd>⌘</kbd>+<kbd>v</kbd> for Mac to insert message.

It is important to understand how it works if you want to use it.

1. It will convert any single character in square brackets.
2. It will convert any string in square brackets from list bellow.

List of allowed strings.

- `[Ctrl]`
- `[Alt]`
- `[Shift]`
- `[Command]`
- `[Windows]`
- `[Ctrl *]`
- `[Alt *]`
- `[Shift *]`
- `[Command *]`
- `[Windows *]`

Where `*` is any single symbol. For example `[Command ⌘]`.

All other texts in single square brackets will be ignored.

## Code

We always were lacking syntax highlights in Markdown. In Markdown 2 you have 2 options. First is [media](http://#_syntax_Media) Github Gist and second to use [Google code prettifier](https://code.google.com/p/google-code-prettify/). 

If you create code йшер quotes, insert language name right after first 3 quotes. 

	```(php)
	<?php echo phpinfo(); ?>
	```

If you create code with tabs, insert language as first line.
	
		(php)
		<?php echo phpinfo(); ?>

This language name will be added to `<pre>`'s `lang-` class.

	<pre class="prettyprint lang-php">

In addition in config you need to enable prettifier `<!-- md-config prettify=1; -->`. See [config](#_syntax_Configuration) section for more details and [Google code prettifier](http://google-code-prettify.googlecode.com/svn/trunk/README.html) for list of supported languages to highlight.

