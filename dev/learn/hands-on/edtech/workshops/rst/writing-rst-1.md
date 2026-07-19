# [Task 1: Page Structure](#id1)[#](#task-1-page-structure "Link to this heading")

## [RST Headings](#id2)[#](#rst-headings "Link to this heading")

Heading tags provide the structural element of a page. Unlike traditional
markdown, RST uses over and underlines.

RST has no official consensus on headings. [This site](https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html) states that

> Normally, there are no heading levels assigned to certain characters
> as the structure is determined from the succession of headings.
> However, it is better to stick to the same convention throughout a
> project. For instance:
>
> * `#` with overline, for parts
> * `*` with overline, for chapters
> * `=` for sections
> * `-` for subsections
> * `^` for subsubsections
> * `"` for paragraphs

[The RST Docutils](https://docutils.sourceforge.io/docs/user/rst/quickstart.html#sections)
site breaks down headings between document titles/subtitles and sections.
[TYPO3 Documentation](https://docs.typo3.org/m/typo3/docs-how-to-document/master/en-us/WritingReST/CheatSheet.html)
states that “in reST, you can use different styles in any order you want”.

A common consensus is to use and over and underline for the document header,
and then underlines for the other headers. The key is consistency in your
documentation set.

Read the docs theme is popular among RST users. Therefore, this workshop
will use the following headings used by [sphinx\_rtd\_theme](https://sphinx-rtd-theme.readthedocs.io/en/stable/demo/structure.html#),
which are:

```
******************
Document title
******************

Introduction text.


Header 1 (Document Section)
===========================

Header 1.1 (Document Subsection)
-----------------------------

Header 1.1.1 (Document Subsubsection)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

```
> **Important**
> 1. The over or underlines can be longer than the header
   text, but not shorter.
2. The over and underlines must be the same length

### [References](#id3)[#](#references "Link to this heading")

* <https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html#headings>
* <https://docutils.sourceforge.io/docs/user/rst/quickstart.html#sections>

---

## [Task](#id4)[#](#task "Link to this heading")

****Task 1****: Create the page structure using appropriate heading tags

1. Create a file with extension `.rst`.
2. Give the document a title similar to, **Setting up Sphinx**
3. Give the page some structure creating **the first four headings**
   using the appropriate heading tags
4. Fix the build warning (`WARNING: document isn't included in any toctree`)
   by adding the page to the TOC in `index.rst`

   1. Add the name of the file (without the extension) under the
      `toctree` directive in `index.rst`.

      ```
      .. toctree::
        :maxdepth: 2
        :caption: Contents:

        getting-sphinx-running

      ```
5. You can read more about the `toctree` directive in
   [Task 7: Menus and Navigation](writing-rst-7.html#writing-in-rst-task-7)

---

## [Text to add](#id5)[#](#text-to-add "Link to this heading")

> Setting up Sphinx
>
> > * Overview
> > * Installing Sphinx
> >
> >   * Spin up a VPS with your favorite Linux distro
> >   * Install Sphinx using the package manager
> > * Configure Sphinx using sphinx-quickstart
> > * Rendering to HTML
> > * Adding Content
> >
> >   * Default index.html
> >   * Create Folders
> > * Install a Different Theme
> >
> >   * Install Read the Docs Theme

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/workshops/rst/writing-rst-1.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.