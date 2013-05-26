---
layout: syntax
title:  "Configuration"
date:   2013-01-01 00:00:40
---

At the bottom of your document you can include configuration section. There you can set some page rendering parameters. This will not be visible by default. 

 	<!-- md-config
 		columns=2;
	 	prettify=1;
	 	bootstrap=1;
	 	tables_class=table table-stripped;
	 	css=http://mycss.com/bootstrap.css;
	 	javascript=http://mycss.com/bootstrap.js;
	 	author=Sergey Romanov;
	 	email=myemail@mail.ru;
	 	gravatar=myemail@mail.ru;
	 	profile=http://mysite.com;
	 	date=20013-12-25 00:00:00;
	 -->
You can type in one line if you want.

	<!-- md-config columns=2; prettify=1; -->

Here is the list of all possible configuration values.

Value         | Default | Description
--------------|---------|---
`columns`     | 2       | how many columns document should be. Apply CSS `column-count` property.
`prettify`    | 0       | Will load Google prettifier script on the page al call it.
`css`         | none    | Will import CSS file on the page. You can include few separated by coma.
`javascript`  | none    | Will load external Javascript. You can include few separated by coma.
`bootstrap`   | 0       | To load twitter bootstrap CSS vile or not.
`date` |  none | Publish date. Will be placed at the bottom of document. Time is optional.

`css` and `javascript` result example.

	<style type="text/css">
	  @import url("http://mycss.com/bootstrap.css");
	</style>
	<script src="http://mycss.com/bootstrap.js"></script>

Along with core config parameters you can add any other parameters for your own application. For example [Jekyll](http://jekyllrb.com/) have metadata attached to every `.md` file. This metadata can go into this part of file.  
