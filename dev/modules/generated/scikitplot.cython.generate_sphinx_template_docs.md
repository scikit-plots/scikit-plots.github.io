# generate\_sphinx\_template\_docs[#](#generate-sphinx-template-docs "Link to this heading")

scikitplot.cython.generate\_sphinx\_template\_docs(**output\_dir**, **\***, **title='Cython templates'**, **include\_python=True**, **include\_cython=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/cython/_templates_api.py#L957)[#](#scikitplot.cython.generate_sphinx_template_docs "Link to this definition")
:   Generate Sphinx `.rst` pages listing templates and their usage.

    This function does ****not**** import any `.pyx` code. It uses metadata files
    and `literalinclude` directives to embed source text.

    Parameters:
    :   ****output\_dir****str or pathlib.Path
        :   Output directory for generated `.rst` files.

        ****title****str, default=’Cython templates’
        :   Title used for the index page.

        ****include\_python****bool, default=True
        :   Include Python templates.

        ****include\_cython****bool, default=True
        :   Include Cython templates.

    Returns:
    :   list[pathlib.Path]
        :   Paths of generated `.rst` files.

    Parameters:
    :   * ****output\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****include\_python**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****include\_cython**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")]