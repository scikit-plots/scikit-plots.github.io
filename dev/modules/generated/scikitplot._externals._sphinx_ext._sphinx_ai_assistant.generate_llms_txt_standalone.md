# generate\_llms\_txt\_standalone[#](#generate-llms-txt-standalone "Link to this heading")

scikitplot.\_externals.\_sphinx\_ext.\_sphinx\_ai\_assistant.generate\_llms\_txt\_standalone(**md\_root**, **\***, **base\_url=''**, **output\_file=None**, **project\_name='Documentation'**, **max\_entries=None**, **full\_content=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/_externals/_sphinx_ext/_sphinx_ai_assistant/__init__.py#L2873)[#](#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt_standalone "Link to this definition")
:   Write `llms.txt` from an existing set of `.md` files.

    This function is entirely ****Sphinx-free****.

    Parameters:
    :   ****md\_root****str or pathlib.Path
        :   Root directory containing `.md` files (searched recursively).

        ****base\_url****str, optional
        :   Base URL prepended to each `.md` path. Must be `http://` or
            `https://` if non-empty.

        ****output\_file****str or pathlib.Path or None, optional
        :   Explicit path for the output file. Defaults to
            `<md_root>/llms.txt`.

        ****project\_name****str, optional
        :   Project name written in the file header.

        ****max\_entries****int or None, optional
        :   Cap on the number of entries. `None` means unlimited.

        ****full\_content****bool, optional
        :   When `True`, embed each page’s Markdown content inline.

    Returns:
    :   pathlib.Path
        :   Absolute path of the written `llms.txt` file.

    Raises:
    :   ValueError
        :   If **base\_url** is non-empty and uses a non-HTTP scheme.

        FileNotFoundError
        :   If **md\_root** does not exist.

    Parameters:
    :   * ****md\_root**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****base\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_file**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****project\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****max\_entries**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****full\_content**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

    Examples

    Try it in your browser!
    ```
    >>> generate_llms_txt_standalone(
    ...     "/site/_build",
    ...     base_url="https://docs.example.com",
    ...     project_name="MyProject",
    ... )
    PosixPath('/site/_build/llms.txt')

    ```
    Go BackOpen In Tab