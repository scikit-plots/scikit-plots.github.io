# [Task 5: Code Blocks](#id6)[#](#task-5-code-blocks "Link to this heading")

## [RST Code Blocks](#id7)[#](#rst-code-blocks "Link to this heading")

Code blocks let you display literal text with or with or without
syntax highlighting.

There are are several ways [to show code examples](https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#showing-code-examples)
or preformatted text.

> * The `::` directive is a generic code of preformatted text. Sphinx tries
>   to guess at the language for syntax highlighted.
> * The `.. code-block:: language` directive adds syntax highlighting
>   and args.
> * RST supports many languages! Here is the list:
>
>   > * <http://pygments.org/languages/>
>   > * <http://pygments.org/docs/lexers/>
> * Code blocks can contain [additional parameters](https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#showing-code-examples),
>   such as:
>
>   * `:linenos:`
>   * `:lineno-start:`
>   * `:emphasize-lines:`
>   * `:caption:`
>   * `:dedent:`

Here are some examples:

> Generic block and syntax highlighting[#](#id1 "Link to this code")
> ```
> ::
>
>     This text is in a code block. Sphinx will use generic
>     text highlighting.
>
> ```
> Plain text block[#](#id2 "Link to this code")
> ```
> .. code-block:: text
>     :caption: Plain text block
>
>     <p>This text will have no styling. However, you can add
>     parameters to the block.</p>
>
> ```
> Basic code block[#](#id3 "Link to this code")
> ```
> .. code-block:: HTML
>
>     <span class="bold>sample HTML</span>
>
> ```
> Code block with syntax highlighting and line numbers[#](#id4 "Link to this code")
> ```
> 1.. code-block:: bash
> 2    :caption: Code block with syntax highlighting and line numbers
> 3    :linenos:
> 4    :emphasize-lines: 9,10,34,39,46
> 5
> 6    # This code block uses bash syntax highlighting
> 7    # Also, a code-block has args for line numbers,
> 8    # highlighting lines, and captions!
>
> ```

### [References](#id8)[#](#references "Link to this heading")

* <https://sublime-and-sphinx-guide.readthedocs.io/en/latest/code_blocks.html>
* <https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#showing-code-examples>
* <https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html#what-are-directives>

---

## [Task](#id9)[#](#task "Link to this heading")

****Task 5****: Add configuration instructions to learn about code blocks.

1. Add `important` and `note` boxes
2. Add a `bash` code block for the Sphinx configuration options.

   * Add a caption
   * Add line numbers and highlighting on lines 9,10,34,39,46.

---

## [Text to Add](#id10)[#](#text-to-add "Link to this heading")

> ```
> Important: Create and then change to the directory of your Sphinx
> code and RST content. The default installation directory is ``./``,
> which is the current directory.
>
> #. Create a project folder, then navigate to that folder
>
>    * For example: ``mkdir -p /opt/sphinx && cd /opt/sphinx``
>
> #. Execute command ``sphinx-quickstart``
> #. Follow the prompts (from version 1.x)
>
>    We've highlighted the lines that we entered a value *other than*
>    default. Add the extensions that you find useful.
>
> ```
> Output of ‘sphinx-quickstart’[#](#id5 "Link to this code")
> ```
>  1> Separate source and build directories (y/n) [n]:
>  2
>  3Inside the root directory, two more directories will be created; "_templates"
>  4for custom HTML templates and "_static" for custom stylesheets and other static
>  5files. You can enter another prefix (such as ".") to replace the underscore.
>  6> Name prefix for templates and static dir [_]:
>  7
>  8The project name will occur in several places in the built documentation.
>  9> Project name: Conference Demo
> 10> Author name(s): BilimEdtech
> 11> Project release []:
> 12
> 13If the documents are to be written in a language other than English,
> 14you can select a language here by its language code. Sphinx will then
> 15translate text that it generates into that language.
> 16
> 17For a list of supported codes, see
> 18http://sphinx-doc.org/config.html#confval-language.
> 19> Project language [en]:
> 20
> 21The file name suffix for source files. Commonly, this is either ".txt"
> 22or ".rst".  Only files with this suffix are considered documents.
> 23> Source file suffix [.rst]:
> 24
> 25One document is special in that it is considered the top node of the
> 26"contents tree", that is, it is the root of the hierarchical structure
> 27of the documents. Normally, this is "index", but if your "index"
> 28document is a custom template, you can also set this to another filename.
> 29> Name of your master document (without suffix) [index]:
> 30Indicate which of the following Sphinx extensions should be enabled:
> 31> autodoc: automatically insert docstrings from modules (y/n) [n]:
> 32> doctest: automatically test code snippets in doctest blocks (y/n) [n]:
> 33> intersphinx: link between Sphinx documentation of different projects (y/n) [n]:
> 34> todo: write "todo" entries that can be shown or hidden on build (y/n) [n]: y
> 35> coverage: checks for documentation coverage (y/n) [n]:
> 36> imgmath: include math, rendered as PNG or SVG images (y/n) [n]:
> 37> mathjax: include math, rendered in the browser by MathJax (y/n) [n]:
> 38> ifconfig: conditional inclusion of content based on config values (y/n) [n]:
> 39> viewcode: include links to the source code of documented Python objects (y/n) [n]: y
> 40> githubpages: create .nojekyll file to publish the document on GitHub pages (y/n) [n]:
> 41
> 42A Makefile and a Windows command file can be generated for you so that you
> 43only have to run e.g. `make html` instead of invoking sphinx-build
> 44directly.
> 45> Create Makefile? (y/n) [y]:
> 46> Create Windows command file? (y/n) [y]: n
>
> ```
> ```
> Note:
>
>     * The configurations for your Sphinx project are in file ``conf.py``.
>     * Delete file ``conf.py`` to run ``quickstart`` again.
>
> ```

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/workshops/rst/writing-rst-5.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.