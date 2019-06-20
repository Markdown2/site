Just like all other compilers and parsers has support for it's own configuration file, M2 too. You can create `markdown2.json` file in your project root and parser have to use it automaticaly, or most probably you will have an option to point configuration file for parser.

The syntax is simple, key:value object style

```json
{
    "columns": 2,
    "big": 1.35,
    "footer": {
        "author": "Sergey romanov",
        "date": TRUE,
        "email" : "serg@mail.ru",
        "source": "http://link/to/source"
    }
}
```

## List of the values

Here is the list of all values.

### Document

| Value  | Default | Description                              |
| ------ | ------- | ---------------------------------------- |
| cols   | 1       | Number of columns                        |
| css    | []      | Array of additional CSS files to include |
| js     | []      | Array of additional JS files to include  |
| disqus |         | Insert DISQUS comment                    |

### Syntax

| Value              | Default               | Description                                    |
| ------------------ | --------------------- | ---------------------------------------------- |
| big                | 1.25                  | What would be big text size in em              |
| small              | 0.75                  | What would be small text size in em            |
| code               | highlightjs           | What engine to use to highlight code           |
| code-theme         | dracula               | Theme for code highlights                      |
| badge-class        | 'badge badge-primary' | What CSS class to assign to badges             |
| badge-accent-class | 'badge badge-ganger'  | What CSS class to assign to badges with accent |
| label-class        | 'label label-primary' | What CSS class to assign to labels             |
| label-accent-class | 'label label-danger'  | What CSS class to assign to labels with accent |
| alert-class        | 'alert alert-primary' | What CSS class to assign to alerts             |
| alert-accent-class | 'alert alert-danger'  | What CSS class to assign to alerts with accent |
| table-class        | 'table'               | What CSS class to assign to tables             |
| img-class          | 'img'                 | What CSS class to assign to images             |
| kbd-class          | 'kbd'                 | What CSS class to assign to kbd                |
