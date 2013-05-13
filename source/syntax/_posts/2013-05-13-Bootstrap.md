---
layout: syntax
title:  "Bootstrap"
date:   2013-01-01 00:00:55
---

[Twitted bootstrap](http://twitter.github.io/bootstrap) is the most popular frontend development framework nowadays. It is absolutely useful to have support of it. It means that you can use standard bootstrap classes to format your page. And you do not need to style it. Just include `bootstrap.css`.

On the other hand if you do not use or do not want to use bootstrap, this is still very useful and you can just ad your own CSS to format bootstrap classes that are used by Markdown 2.

## Badges and Labels

**Markdown**

	There are ((12)) pieces but only !((5)) of them are ![[usable]] and ((7)) are [[unusable]].

**Raw HTML**

	There are <span class="badge">12</span> pieces but only <span class="badge badge-important">5</span>
	of them are <span class="label label-important">usable</span> and <span class="badge">12</span> 
	are <span class="label">unusable</span>.

**Result**

There are <span class="badge">12</span> pieces but only <span class="badge badge-important">5</span> of them are <span class="label label-important">usable</span> and <span class="badge">12</span> are <span class="label">unusable</span>.


## Lead text

lead text is just like blockquote starts with `>` but with `!!!`

**Markdown**

	!!! This is is lead text

**Raw HTML**
	
	<div class="lead">This is lead text</div>

**Result**
<div class="lead">This is lead text</div>

## Alerts

**Markdown**

	[[ This is yellow alert. ]]
	
	some text 
	
	[[ Important: Another red alert. ]]

**Raw HTML**

	<div class="alert">This is yellow alert.</div>
	<p>some text</p>
	<div class="alert alert-error">Another red alert.</div>

If there is a `:` following by the first alert word, this word will become postfix for `alert-` class. 

Indicator | Class           | Color
----------|-----------------|-------
none      | `alert`         | Yeloow
Important | `alert-error`   | Red
Info      | `alert-info`    | Blue
Hint      | `alert-success` | Green

**Result**

<div class="alert">This is yellow alert.</div>
<p>Another alert</p>
<div class="alert alert-error">Another red alert.</div>

## Hero unit

**Markdown**

	#####################################
	Welcome To Markdown2
	---
	
	Awesome way to create text to HTML documents.
	
	#####################################

**Raw HTML**

	<div class="hero-unit">
		<h1>Welcome To Markdown2</h1>
		<p>Awesome way to create text to HTML documents.</p>
	</div>

**Result**
<div class="hero-unit">
	<h1>Welcome To Markdown2</h1>
	<p>Awesome way to create text to HTML documents.</p>
</div>