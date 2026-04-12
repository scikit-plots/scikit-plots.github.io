# Markdown Cheat Sheet[#](#markdown-cheat-sheet "Link to this heading")

Info:
:   Markdown essentials — quick, copy/paste-friendly reminders.

Sources:
:   John-CD Markdown cheatsheet + referenced Markdown/GFM links.

## [Resources](#id1)[#](#resources "Link to this heading")

* Markdown main site: <https://daringfireball.net/projects/markdown/>
* GitHub Flavored Markdown (GFM) guide:
  <https://guides.github.com/features/mastering-markdown/>
* John-CD cheatsheet page:
  <https://john-cd.com/cheatsheets/Markup_and_Documentation/Markdown/>

## [Basics](#id2)[#](#basics "Link to this heading")

### [Paragraphs](#id3)[#](#paragraphs "Link to this heading")

A paragraph is one or more consecutive lines of text separated by one or more
blank lines. A blank line contains nothing but spaces or tabs.

Do ****not**** indent normal paragraphs with spaces or tabs.

### [Line breaks](#id4)[#](#line-breaks "Link to this heading")

Most Markdown renderers wrap lines inside a paragraph. To force a hard line
break, many flavors require two trailing spaces at line end (or an explicit
`<br>` in HTML-capable renderers).

### [Common “starter” syntax](#id5)[#](#common-starter-syntax "Link to this heading")

```
# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)

```

## [Emphasis](#id6)[#](#emphasis "Link to this heading")

```
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__

```

Emphasis can be used in the mi\*dd\*le of a word.

## [Headers](#id7)[#](#headers "Link to this heading")

### [ATX-style headers](#id8)[#](#atx-style-headers "Link to this heading")

```
# H1
## H2
### H3
#### H4
##### H5
###### H6

```

### [Setext-style headers](#id9)[#](#setext-style-headers "Link to this heading")

```
Alt-H1
======

Alt-H2
------

```

## [Lists](#id10)[#](#lists "Link to this heading")

### [Bulleted lists](#id11)[#](#bulleted-lists "Link to this heading")

```
- Item
- Item
  - Nested item (indent to nest)
- Item

```

### [Numbered lists](#id12)[#](#numbered-lists "Link to this heading")

```
1. First
2. Second
   1. Nested number (some renderers require re-numbering)
3. Third

```

## [Links and images](#id13)[#](#links-and-images "Link to this heading")

### [Inline link](#id14)[#](#inline-link "Link to this heading")

```
[Text for the link](URL)

```

### [Reference-style link](#id15)[#](#reference-style-link "Link to this heading")

```
This is [an example][id] reference-style link.
[id]: https://example.com/  "Optional Title Here"

```

### [Image](#id16)[#](#image "Link to this heading")

```
![Alt text](/path/to/img.jpg "Optional title")

```

## [Code](#id17)[#](#code "Link to this heading")

### [Inline code span](#id18)[#](#inline-code-span "Link to this heading")

Use backticks:

```
`inline code`

```

### [Indented code block](#id19)[#](#indented-code-block "Link to this heading")

Indent at least ****4 spaces**** (or a tab):

```
def hello(name):
    return f"Hello, {name}"

```

### [Fenced code block (syntax highlighted, common in GFM)](#id20)[#](#fenced-code-block-syntax-highlighted-common-in-gfm "Link to this heading")

Use triple backticks; many renderers support an optional language tag:

```
```python
def wiki_rocks(text):
    formatter = lambda t: "funky" + t
    return formatter(text)
```

```

Displayed as:

```
def wiki_rocks(text):
    formatter = lambda t: "funky" + t
    return formatter(text)

```

## [Blockquotes](#id21)[#](#blockquotes "Link to this heading")

```
> This is a blockquote with two paragraphs.
>
> Second paragraph.

```

## [Escaping special characters](#id22)[#](#escaping-special-characters "Link to this heading")

Use a backslash to escape Markdown punctuation when needed:

```
\*literal asterisk\*
\_literal underscore\_
\`literal backtick\`

```

## [GitHub Pages (note)](#id23)[#](#github-pages-note "Link to this heading")

GitHub Pages uses the layout and styles from the Jekyll theme selected in your
repository settings. The theme name is stored in the Jekyll `_config.yml`
configuration file.

## [Bitbucket (note)](#id24)[#](#bitbucket-note "Link to this heading")

Bitbucket often runs Markdown in a restricted/safe mode (HTML may be removed or
sanitized). Replace, remove, or escape HTML tags appropriately.

Some Bitbucket/Python-Markdown setups use `:::{language}` for code blocks:

```
:::python
friends = ['john', 'pat', 'gary', 'michael']
for i, name in enumerate(friends):
    print("iteration {iteration} is {name}".format(iteration=i, name=name))

```

## [Cloning a Bitbucket Wiki](#id25)[#](#cloning-a-bitbucket-wiki "Link to this heading")

```
git clone https://bitbucket.org/MY_USER/MY_REPO/wiki

```