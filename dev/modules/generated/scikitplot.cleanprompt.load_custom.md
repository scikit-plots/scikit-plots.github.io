# load\_custom[#](#load-custom "Link to this heading")

scikitplot.cleanprompt.load\_custom(**paths**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_custom.py#L140)[#](#scikitplot.cleanprompt.load_custom "Link to this definition")
:   Load user definitions from one or more files into a catalog of their own.

    Parameters:
    :   ****paths****path or iterable of paths
        :   `.yaml`, `.yml` or `.json` files.

    Returns:
    :   Catalog
        :   A partial catalog of only the custom definitions, every one validated.
            Its `requires` may name built-in packs; those are checked when it is
            merged by [`with_custom`](scikitplot.cleanprompt.with_custom.html#scikitplot.cleanprompt.with_custom "scikitplot.cleanprompt.with_custom").

    Raises:
    :   PackError
        :   If any definition is invalid, listing every problem in it.

        CleanPromptError
        :   If a file is missing, too large, of an unknown type, or two files
            define the same name.

    Parameters:
    :   ****paths**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]**)

    Return type:
    :   **Catalog**

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](../../auto_examples/cleanprompt/plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders