# load\_custom[#](#load-custom "Link to this heading")

scikitplot.cleanprompt.load\_custom(**paths**, **pattern\_risk=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_custom.py#L141)[#](#scikitplot.cleanprompt.load_custom "Link to this definition")
:   Load user definitions from one or more files into a catalog of their own.

    Parameters:
    :   ****paths****path or iterable of paths
        :   `.yaml`, `.yml` or `.json` files.

        ****pattern\_risk****{‘warn’, ‘ignore’, ‘refuse’}, optional
        :   What to do when a pattern has a shape that can backtrack
            catastrophically (`_pattern_risk`).
            Defaults to `CLEANPROMPT_PATTERN_RISK`, else `'warn'`. A pattern
            marked `risk: accepted` in its pack is never warned about or
            refused.

    Returns:
    :   Catalog
        :   A partial catalog of only the custom definitions, every one validated.
            Its `requires` may name built-in packs; those are checked when it is
            merged by [`with_custom`](scikitplot.cleanprompt.with_custom.html#scikitplot.cleanprompt.with_custom "scikitplot.cleanprompt.with_custom").

    Raises:
    :   PackError
        :   If any definition is invalid, listing every problem in it, or
            `pattern_risk` is `'refuse'` and a pattern has an open finding.

        CleanPromptError
        :   If a file is missing, too large, of an unknown type, or two files
            define the same name.

        ValueError
        :   If `pattern_risk` (or the environment variable) is not a mode.

    Warns:
    :   PatternRiskWarning
        :   Under `'warn'`, once per open finding, with rewrites and the ways to
            accept or silence it.

    Parameters:
    :   * ****paths**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]**)
        * ****pattern\_risk**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   **Catalog**

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](../../auto_examples/cleanprompt/plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders