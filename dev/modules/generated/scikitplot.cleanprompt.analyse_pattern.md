# analyse\_pattern[#](#analyse-pattern "Link to this heading")

scikitplot.cleanprompt.analyse\_pattern(**source**, **flags=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_pattern_risk.py#L865)[#](#scikitplot.cleanprompt.analyse_pattern "Link to this definition")
:   Report the shapes in `source` that can backtrack catastrophically.

    Parameters:
    :   ****source****str
        :   A regular expression, as written in a pack.

        ****flags****int, default=0
        :   The [`re`](https://docs.python.org/3/library/re.html#module-re "(in Python v3.15)") flags the pattern is compiled with (case folding changes
            which characters overlap).

    Returns:
    :   tuple of PatternRisk
        :   Empty when no known risky shape is present. A source this parser
            cannot model gives one `not-analysed` finding rather than nothing.

    Parameters:
    :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****flags**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[**PatternRisk**, …]

    Examples

    Try it in your browser!
    ```
    >>> [risk.rule for risk in analyse_pattern(r"^(a+)+$")]
    ['nested-quantifier']
    >>> analyse_pattern(r"\bEMP-\d{6}\b")
    ()
    >>> analyse_pattern(r"(\w+,)+")
    ()

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](../../auto_examples/cleanprompt/plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders