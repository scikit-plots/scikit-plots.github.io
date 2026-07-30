# SEP29: Text light markup[#](#sep29-text-light-markup "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib MEPs.

## [Status](#id1)[#](#status "Link to this heading")

Discussion

## [Branches and Pull requests](#id2)[#](#branches-and-pull-requests "Link to this heading")

None at the moment, proof of concept only.

## [Abstract](#id3)[#](#abstract "Link to this heading")

This MEP proposes to add lightweight markup to the text artist.

## [Detailed description](#id4)[#](#detailed-description "Link to this heading")

Using different size/color/family in a text annotation is difficult because the
`~.Axes.text` method accepts argument for size/color/family/weight/etc. that are used
for the whole text. But, if one wants, for example, to have different colors,
one has to look at the gallery where one such example is provided:
[Concatenate text objects with different properties](https://matplotlib.org/devdocs/gallery/text_labels_and_annotations/rainbow_text.html "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")

This example takes a list of strings as well as a list of colors which makes it
cumbersome to use. An alternative would be to use a restricted set of [pango](https://docs.gtk.org/Pango/pango_markup.html#pango-markup)-like markup and to interpret this markup.

Some markup examples:

```
Hello <b>world!</b>`
Hello <span color="blue">world!</span>

```

## [Implementation](#id5)[#](#implementation "Link to this heading")

A proof of concept is provided in [markup\_example.py](https://github.com/rougier/matplotlib/blob/markup/examples/text_labels_and_annotations/markup.py) but it currently only handles the horizontal direction.

### [Improvements](#id6)[#](#improvements "Link to this heading")

* This proof of concept uses regex to parse the text but it may be better
  to use the html.parser from the standard library.
* Computation of text fragment positions could benefit from the OffsetFrom
  class. See for example item 5 in [Using Complex Coordinates with Annotations](https://matplotlib.org/devdocs/users/explain/text/annotations.html#using-complex-coordinates-with-annotations)

### [Problems](#id7)[#](#problems "Link to this heading")

* One serious problem is how to deal with text having both LaTeX and
  HTML-like tags. For example, consider the following:

  ```
  $<b>Bold$</b>

  ```

  Recommendation would be to have mutual exclusion.

## [Backward compatibility](#id8)[#](#backward-compatibility "Link to this heading")

None at the moment since it is only a proof of concept

## [Alternatives](#id9)[#](#alternatives "Link to this heading")

As proposed by @anntzer, this could be also implemented as improvements to
mathtext. For example:

```
r"$\text{Hello \textbf{world}}$"
r"$\text{Hello \textcolor{blue}{world}}$"
r"$\text{Hello \textsf{\small world}}$"

```