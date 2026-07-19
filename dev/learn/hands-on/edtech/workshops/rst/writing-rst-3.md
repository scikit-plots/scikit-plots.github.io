# [Task 3: Note Boxes](#id3)[#](#task-3-note-boxes "Link to this heading")

## [RST Colored Boxes](#id4)[#](#rst-colored-boxes "Link to this heading")

[Colored boxes](https://sphinx-rtd-theme.readthedocs.io/en/stable/demo/demo.html#admonitions)
provide a way to emphasize blocks of text using blue, green, orange/yellow,
or red using the directive `.. box-type::`.

They all use the same syntax using a different keyword:

Colored Box Types[#](#id1 "Link to this table")





| Type/Keyword | Color/Note | Example |
| --- | --- | --- |
| danger, error | red | `.. danger:: Watch out!` |
| attention, caution, warning | orange | `.. Caution:: Subroutine is not cross-platform.` |
| hint, important, tip | blue | `.. Note:: A generic blue box` |
| admonition | blue | ``` .. admonition:: Custom label      The contents of the blue box.  ``` |

> **Tip**
> * Colored boxes act as text blocks because anything indented
  four spaces stay in the text box.
* For example, this list!
> **Note**
> RST lines should be 80 characters long
> **As a final thought**
> You don’t have to use the **note** title for a blue box. Instead, use
your own text!
RST for the above boxes[#](#id2 "Link to this code")
```
.. tip::

    * Colored boxes act as paragraphs because anything indented
      four spaces stay in the text box.
    * For example, this list!

.. note:: RST lines should be 80 characters long

.. admonition:: As a final thought

    You don't have to use *note* for a blue box. Instead, use
    your own title!

```

### [References](#id5)[#](#references "Link to this heading")

* <https://sublime-and-sphinx-guide.readthedocs.io/en/latest/references.html>
* <https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html#colored-boxes-note-seealso-todo-and-warnings>
* <https://sphinx-rtd-theme.readthedocs.io/en/stable/demo/demo.html#admonitions>

---

## [Task](#id6)[#](#task "Link to this heading")

****Task 3****: Add text to **Installing Sphinx** to learn how to use a
`note` box.

* Use inline styles and hyperlinks appropriately.
* Add a `note` about using other distributions

  > **Note**
  > A default note has this style.
  There are other default boxes,
  such as [hint and warning](https://sphinx-rtd-theme.readthedocs.io/en/stable/demo/demo.html#admonitions).

---

## [Text to add](#id7)[#](#text-to-add "Link to this heading")

> ```
> The Sphinx documentation <https://www.sphinx-doc.org/en/master/usage/installation.html>
> provides instructions for Debian/Ubuntu (apt), RHEL/CentOS (yum),
> and MacOS (homebrew). This guide will uses the ``apt`` package manager.
>
> Unfortunately, the apt package manager for Debian has an old version of
> Sphinx (Sphinx 1.8.4). It works, but PyPI has the latest version of
> Sphinx <https://pypi.org/project/Sphinx/>. Therefore, this guide
> shows to install Sphinx using both ``apt`` and ``pip3``.
>
> Note: Other distributions are supported using pip, such as Alpine Linux.
> However, additional knowledge is required to install prerequisites for
> specific Python packages.
>
> ```

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/workshops/rst/writing-rst-3.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.