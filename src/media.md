# Rich Media Content

> Still in work

New `{media}` placeholder aims to provide way to insert different media content into web page. The list bellow is just the beginning. I think this will be most frequently updated section.

The main `{media}` syntax looks like this

	{media}([service]::[options])

We tried to make it similar to current image and link syntax. Thus `{media}` supports short links.

	{media}(m1)
	[m1]: img::http://mycss.com/logo.png::img-rounded::left

## Picture

Although there is already syntax to insert picture, we really think that this should be more flexible.

**Markdown**

	{media}(img::http://mycss.com/logo.png::left)

**Raw HTML**

	<img src="http://mycss.com/logo.png" align="left">

## Video

This one of the most desired feature to insert video into your documents.

**Markdown**

	{media}(youtube::ww8kIy9BtsU::420)

**Raw HTML**

	<iframe width="420" height="315" src="http://www.youtube.com/embed/ww8kIy9BtsU" frameborder="0" allowfullscreen></iframe>

Available sizes are `420`, `480`, `640` and `960`. Size parameter is optional and by default it is `680`.

Icon | Service    | Description
---| -----------|------------
![youtube logo](http://www.cinemamuseum.org.uk/wordpress/wp-content/themes/Cutline-1-1.4-2ColumnRight/images/youtube-logo.gif) | [YouTube](http://www.youtube.com)    | inserts video from youtube. First parameter is video key which you can copy from URL or from embed url option under safe tab.
![vimeo](http://cdn1.iconfinder.com/data/icons/fatcow/32x32/vimeo.png) | [Vimeo](http://www.vimeo.com)      | Vimeo service was chosen because it's awesome features like for example domain restriction where video may be played.
![screencast](http://cdn.alternativeto.net/i/be16881a-f0b6-e011-9727-0025902c7e73_12342.png)| [Screencast](http://www.screencast.com) | screencast.com is a free video hosting that allow to post video with support of quizzes, TOC, internal navigations and many more. You can produce video in [Camtasia studio](http://www.techsmith.com/camtasia.html) which allows to create fully featureable, interactive education videos.

### JS Bin

[JS Bin](http://jsbin.com/) is one of the most popular service for creating JS/HTML/CSS snippets or code examples.  Very convenient way to insert as demo and HTML, CSS and JS source in single beautiful box.

**Markdown**
	
	{media}(jsbin::avamas/9)

**Raw HTML**
	
	<a class="jsbin-embed" href="http://jsbin.com/avamas/9/embed?live">JS Bin</a>
	<script src="http://static.jsbin.com/js/embed.js"></script>

**Result**

<a class="jsbin-embed" href="http://jsbin.com/avamas/9/embed?live">JS Bin</a>
<script src="http://static.jsbin.com/js/embed.js"> </script>

### Codepen

[Codepen](http://codepen.io/)  is another HTML/CSS/JS code example library. It is also very social and you can browse nice examples and use those as inspiration. And if you want to safe one of those right in your text, here it is. 

**Markdown**
	
	{media}(codepen::johnblazek::nceyw::300)

First parameter is a user name and second it snippet short code name. last one is the height of the example block. You can find those parameters when you click _share_ button on Codepen website. 

![](/site/img/codepen.png)

**Raw HTML**
	
	<pre class="codepen" data-height="300" data-type="result" data-href="nceyw" data-user="johnblazek" data-safe="false"><code></code><a href="http://codepen.io/johnblazek/pen/nceyw">Check out this Pen!</a></pre>
	<script  src="http://codepen.io/assets/embed/ei.js"></script>

**Result**

<pre class="codepen" data-height="300" data-type="result" data-href="nceyw" data-user="johnblazek" data-safe="false"><code> </code>
<a href="http://codepen.io/johnblazek/pen/nceyw">Check out this Pen!</a></pre>
<script src="http://codepen.io/assets/embed/ei.js"> </script>

### Github Gists

[GitHub Gists](https://gist.github.com/) may allow you to insert syntax highlighted code examples. Although now you can syntax highlight in typography too, gists will пуму you so much more. If you use gists, code sample will be automatically updated in the article when you or someone updated it in gist. This is very handy to have always latest actual code example without worry to update your article.

**Markdown**

	{media}(gist::vdemedes/5220932::gistfile1.js)


**Raw HTML**

	<script src="https://gist.github.com/vdemedes/5220932.js?file=gistfile1.js"></script>

**Result**

<script src="https://gist.github.com/vdemedes/5220932.js?file=gistfile1.js"> </script>

File parameter is optional and can be used only in Gists with few files when you want to show only one of them.