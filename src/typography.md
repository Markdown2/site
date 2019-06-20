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

## Code

In standard code is indent. And it is already a standard to use ` for inline code and ``` for block code. Nothing is changed here, I add it here for configuration options.

### Markdown

    ```php
        <?php echo phpinfo(); ?>
    ```

### Example

```php
<?php echo phpinfo(); ?>
```

### Configuration

- `code` - Engine to highlight syntax prism or highlightjs
- `code-theme` - Color them

## Table

Although there already is table syntax, it only works for small tables with width less than 80 symbols and without multiple lines in a cell.

```md
| Name  | Lunch order | Spicy  | Owes |
| ----- | ----------- | ------ | ---: |
| Joan  | saag paneer | medium |  $11 |
| Sally | vindaloo    | mild   |  $14 |
| Erin  | lamb madras | HOT    |   $5 |
```

Sometimes we heed to create big table with multiple lines in cells and even other markdowns like code Result. On the other hand it should be still highly readable as a plain text document.

### Markdown

    ===========================
    Method Name:: `insert()`
    Description:: This method insert values into page. It accept `$list` parameter.

    - `$list` - array or elements
     
    Here is the example
            
    ```php
    <?php  insert(array($page, $header)); ?>
    ```

    ===========================
    Method Name:: `delete()`
    Description:: This method deletes given element.
        
    - `$element` - string element name
        
    Here is the example
       
    ```php
    <?php  delete('header'); ?>
    ```
    ==========================

As you can see this is very readable as text but we have all to generate a table. Long `======================` define table start and end and separation between rows.

You start every cell with column name and double semicolon `::`.

> All names of columns have to be the same in every row.

### Raw HTML

```html
<table>
    <thead>
    <tr>
        <th>Method Name</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>insert()</code></td>
            <td>
                <p>This method insert values into page. It accept <code>$list</code> parameter.</p>

                <ul>
                    <li>
                        <code>$list</code> - array or elements
                    </li>
                </ul>

                Here is the example

                <pre>&lt;?php  insert(array($page, $header)); ?&gt;</pre>
            </td>
        </tr>
        <tr>
            <td><code>delete()</code></td>
            <td>
                <p>This method deletes given element.</p>

                <ul>
                    <li>
                    <code>$element</code> - string element name
                    </li>
                </ul>

                Here is the example

                <pre>&lt;?php  delete('header'); ?&gt;</pre>
            </td>
        </tr>
    </tbody>
</table>
```

### Result

<table>
	<thead>
	<tr>
		<th>Method Name</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>insert()</code></td>
			<td>
				<p>This method insert values into page. It accept <code>$list</code> parameter.</p>

				<ul>
					<li>
						<code>$list</code> - array or elements
					</li>
				</ul>

				Here is the example

				<pre>&lt;?php  insert(array($page, $header)); ?&gt;</pre>
			</td>
		</tr>
		<tr>
			<td><code>delete()</code></td>
			<td>
				<p>This method deletes given element.</p>

				<ul>
					<li>
					<code>$element</code> - string element name
					</li>
				</ul>

				Here is the example

				<pre>&lt;?php  delete('header'); ?&gt;</pre>
			</td>
		</tr>
	</tbody>
</table>
