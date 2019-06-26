# Rich Media Content

New media placeholder aims to provide way to insert different rich media content into web page. The list bellow is just the beginning. I think this will be most frequently updated section.

The main media syntax looks like this

```text
{(media[::options])}
```

We tried to make it similar to current image and link syntax. Thus `{media}` supports short links.

```text
{(m1)}
    
[m1]: img::http://mycss.com/logo.png::left
```

## Picture

Although there is already syntax to insert picture, we really think that this should be more flexible.

```text
{(img::url::align::size)}
```

### Markdown

```text
{(img:://via.placeholder.com/350x150::left::700x300)}
```

### Raw HTML

```html
<span style="display:block; float:left" class="img">
    <img src="//via.placeholder.com/350x150" class="img" 
        align="left" width="700" height="300">
</span>
```

### Configuration

- `img-class` - CSS class for IMG tag

## Video

One of the most desired feature to insert video into your documents.

### Youtube

[YouTube](http://www.youtube.com) is the most popular video hosting service.

```text
{(youtube::url::width)}
```

#### Markdown

```text
{(youtube::ww8kIy9BtsU::420px)}
```

#### Raw HTML

```html
<iframe width="420" height="315" 
    src="http://www.youtube.com/embed/ww8kIy9BtsU" 
    frameborder="0" allowfullscreen>
</iframe>
```

Height is automatically calculated based on width and 16:9 ratio.

### Vimeo

[Vimeo](http://www.vimeo.com) is a great video hosting to post private or domain restricted videos to controlled access to the video.

```text
{(vimeo::url::width)}
```

#### Markdown

```text
{(vimeo::343699764::640px)}
```

#### Raw HTML

```html
<iframe src="https://player.vimeo.com/video/343699764" 
    width="640" height="360" frameborder="0" 
    allow="autoplay; fullscreen" allowfullscreen>
</iframe>
```

### Screencast

 [Screencast](http://www.screencast.com) is a video hosting by Techsmith, you can post videos there directly from camtasia, screen recorder.

```text
{(screencast::url::width)}
```

#### Markdown

```text
{(screencast::SergeyRomanov/folders/3DP/media/a9c55590-6cd2-41ba-a368-600834c5da65::640px)}
```

#### Raw HTML

```html
<iframe class="embeddedObject shadow resizable" name="embedded_content" 
    scrolling="no" frameborder="0" type="text/html" style="overflow:hidden;" 
    src="https://www.screencast.com/users/SergeyRomanov/folders/3DP/media/a9c55590-6cd2-41ba-a368-600834c5da65/embed" 
    height="480" width="640" webkitallowfullscreen mozallowfullscreen 
    allowfullscreen>
</iframe>
```

## Source code

### Jsfiddle.net

[JSFiddle.net](http://jsfiddle.net/) is one of the most popular service for creating JS/HTML/CSS snippets or code examples.  Very convenient way to insert as demo and HTML, CSS and JS source in single beautiful box.

#### Markdown

```text
{(jsfiddle::Serhioromano/t7s3jrg4)}
```

#### Raw HTML

```html
<script async src="//jsfiddle.net/Serhioromano/t7s3jrg4/embed/"></script>
```

#### Result

<script async src="//jsfiddle.net/Serhioromano/t7s3jrg4/embed/"></script>

### JS Bin

[JS Bin](http://jsbin.com/) is one of the most popular service for creating JS/HTML/CSS snippets or code examples.  Very convenient way to insert as demo and HTML, CSS and JS source in single beautiful box.

#### Markdown

```text
{(jsbin::avamas/9)}
```

#### Raw HTML

```html
<a class="jsbin-embed" href="http://jsbin.com/avamas/9/embed?live">JS Bin</a>
<script src="http://static.jsbin.com/js/embed.js"></script>
```

#### Result

<a class="jsbin-embed" href="http://jsbin.com/avamas/9/embed?live">JS Bin</a>
<script src="http://static.jsbin.com/js/embed.js"></script>

### Codepen

[Codepen](http://codepen.io/)  is another HTML/CSS/JS code example library. It is also very social and you can browse nice examples and use those as inspiration. And if you want to safe one of those right in your text, here it is.

#### Markdown

```text
{(codepen::johnblazek::nceyw::300)}
```

First parameter is a user name and second it snippet short code name. last one is the height of the example block. You can find those parameters when you click _share_ button on Codepen website.

#### Raw HTML

```html
<pre class="codepen" data-height="300" data-type="result" 
    data-href="nceyw" data-user="johnblazek" 
    data-safe="false">
    <code></code>
    <a href="http://codepen.io/johnblazek/pen/nceyw">
        Check out this Pen!
    </a>
</pre>
<script  src="http://codepen.io/assets/embed/ei.js"></script>
```

#### Result

<pre class="codepen" data-height="300" data-type="result" data-href="nceyw" data-user="johnblazek" data-safe="false"><code> </code>
<a href="http://codepen.io/johnblazek/pen/nceyw">Check out this Pen!</a></pre>
<script src="http://codepen.io/assets/embed/ei.js"> </script>

### Github Gists

[GitHub Gists](https://gist.github.com/) may allow you to insert syntax highlighted code examples. Although now you can syntax highlight in typography too, gists will пуму you so much more. If you use gists, code sample will be automatically updated in the article when you or someone updated it in gist. This is very handy to have always latest actual code example without worry to update your article.

#### Markdown

```text
{(gist::vdemedes/5220932::gistfile1.js)}
```

#### Raw HTML

```html
<script src="https://gist.github.com/vdemedes/5220932.js?file=gistfile1.js"></script>
```

#### Result

<script src="https://gist.github.com/vdemedes/5220932.js?file=gistfile1.js"> </script>

File parameter is optional and can be used only in Gists with few files when you want to show only one of them.
