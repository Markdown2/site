# Typography

## Sup

Sup refers to the HTML `<sup>` element.

### Markdown

    ^2^

### Raw HTML

    <sup><small>2</small></sup>

### Result

| Markup       | HTML                                 | Result                             |
| ------------ | ------------------------------------ | ---------------------------------- |
| `C^0^`       | `C<sup><small>0</small></sup>`       | C<sup><small>0</small></sup>       |
| `Company^®^` | `Company<sup><small>®</small></sup>` | Company<sup><small>®</small></sup> |
| `Name^TM^`   | `Name<sup><small>TM</small></sup>`   | Name<sup><small>TM</small></sup>   |

## Small and Big

Although `<big>` is deprecated in HTML5 it is still supported by all browsers and in fact very handy if you want part of your text to stand out.

### Markdown

	--small text-- and ++big text++

### Raw HTML

	<span style="font-size: 0.75em">small text </span>
    <span style="font-size: 1.25em">big text</span>

### Result

<span style="font-size: 0.75em">small text </span> and <span style="font-size: 1.25em">big text</span>

### Configuration

- `big` - value in em, default 1.25
- `small` - value in em, default 0.75

## Notation

Notations is a simple way to add references without creating links and clattering text. The end HTML markup have not to be exact as in an example. For instance if you use markdown for Jekyll or MkDocs or other MD based static site generators, and you generate single page document for later processing it into PDF, you might collect notations from all documents and create one single page with all notation as bibliography. Or you might want to add notations for every page separately.

### Markdown

	This is example[:1], for notations[:2].

    [1][]: http://example.com/link1
    [2][Title]: http://example.com/link2

### Raw HTML

    <p>This is example<sup><small><a href="#notations">1</a></small></sup>, for notations<sup><small><a href="#notations">2</a></small></sup>.</p>

    <a name="notations"></a>
    <hr>
    <small>
        1 <a href="http://example.com/link1">http://example.com/link1</a>  
        2 <a href="http://example.com/link2">Title</a>
    </small>

### Result

This is example<sup><small><a href="#notations">1</a></small></sup>, for notations<sup><small><a href="#notations">2</a></small></sup>.

<a name="notations"></a>
<hr>
<small>
    1 <a href="http://example.com/link1">http://example.com/link1</a>  
    2 <a href="http://example.com/link2">Title</a>
</small>

<span style="font-size: 0.75em">small text </span> and <span style="font-size: 1.25em">big text</span>

## Keyboard keys

One of the very important thing is `<kbd>` tag. With proper formating it may be very useful for PC related tutorials. Or comments on [superuser.com](http://superuser.com) or other [stackoverflow.com](http://stackoverflow.com/) like websites.  

Square brackets are used already in many places. Even in notations. The rules to convert square brackets to `<kbd>` are:

1. It will convert any single character in square brackets.
2. It will convert any string in square brackets from list bellow.
   
    - `[Ctrl]`
    - `[Alt]`
    - `[Shift]`
    - `[Command]`
    - `[Windows]`
    - `[Tab]`
    - `[Backspace]`
    - `[Insert]`
    - `[Delete]`
    - `[Enter]`
    - `[F(1-16)]`
    - `[Ctrl *]`
    - `[Alt *]`
    - `[Shift *]`
    - `[Command *]`
    - `[Windows *]`

    Where `*` is an any single symbol. For example `[Command ⌘]`, `[Alt F]`.

    All other texts in single square brackets will be ignored.

### Markdown

	Please use [Ctrl]+[v] or [⌘]+[v] for Mac to insert message.

### Raw HTML

	Please use <kbd>Ctrl</kbd>+<kbd>v</kbd> or <kbd>⌘</kbd>+<kbd>v</kbd> for Mac to insert message.

### Result

Please use <kbd>Ctrl</kbd>+<kbd>v</kbd> or <kbd>⌘</kbd>+<kbd>v</kbd> for Mac to insert message.

### Configuration

- `kbd-class` - add css class to `<kbd>` tags

## Definition Lists

### Markdown

```
- Name:: John Doe
- Position:: Director
```

### Raw HTML

```html
<dl>
    <dt>Name</dt>
    <dd>John Doe</dd>
    <dt>Position</dt>
    <dd>Director</dd>
</dl>
```

### Result

<dl>
    <dt>Name</dt>
    <dd>John Doe</dd>
    <dt>Position</dt>
    <dd>Director</dd>
</dl>

## Badges and Labels

Badges and labels is another way to highlight text inline.

### Markdown

```
There are ((12)) pieces but only !((5)) of them are ![[usable]] and ((7)) are [[unusable]].
```

- `((x))` - badge
- `!((x))` - badge with accent
- `[[x]]` - label
- `![[x]]` - label with accent

### Raw HTML

```html
There are <span class="badge badge-primary">12</span> pieces but only <span class="badge badge-danger">5</span> of them are <span class="label label-danger">usable</span> and <span class="badge">12</span> are <span class="label label-primary">unusable</span>.
```

### Result

There are <span class="badge badge-primary">12</span> pieces but only <span class="badge badge-danger">5</span> of them are <span class="label label-danger">usable</span> and <span class="badge">12</span> are <span class="label label-primary">unusable</span>.

### Configuration

- `badge-class` - css class for simple badge
- `badge-accent-class` - css class for accent badge
- `label-class` - css class for simple label
- `label-accent-class` - css class for accent label
