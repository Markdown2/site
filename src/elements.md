# Elements

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

## Alerts

Alerts are just like blockquote, but different highlight color.

### Markdown

    >> My header
    >  This is alert body

    some text 

    >>> Important to know!
    >   Important alert type

### Raw HTML

```html
<div class="alert alert-primary">
    <h4>My header</h4>
    This is alert body
</div>
<p>some text</p>
<div class="alert alert-danger">
    <h4>Important to know!</h4>
    Important alert type
</div>
```

### Result

<div class="alert alert-primary">
    <h4>My header</h4>
    This is alert body
</div>
<p>some text</p>
<div class="alert alert-danger">
    <h4>Important to know!</h4>
    Important alert type
</div>

### Configuration

- `alert-class` - css class for simple alert
- `alert-accent-class` - css class for accent alert

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
