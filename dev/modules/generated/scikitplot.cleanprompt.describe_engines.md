# describe\_engines[#](#describe-engines "Link to this heading")

scikitplot.cleanprompt.describe\_engines(**language='en'**, **mode='auto'**, **model=None**, **size='sm'**, **check\_assets=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_engines.py#L791)[#](#scikitplot.cleanprompt.describe_engines "Link to this definition")
:   Report every engine’s readiness, and what `mode` would select.

    Parameters:
    :   ****language****str, default=’en’
        :   Language code to report against.

        ****mode****str, default=’auto’
        :   The mode being asked about.

        ****model****str, optional
        :   Explicit spaCy model.

        ****size****str, default=’sm’
        :   Preferred spaCy model size.

        ****check\_assets****bool, default=False
        :   Also check NLTK’s data packages, which imports NLTK. `doctor` passes
            `True`.

    Returns:
    :   dict
        :   JSON-safe report with one entry per engine, a `selected` list, and
            `ready`: whether every selected engine is ready.

    Parameters:
    :   * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****check\_assets**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Notes

    ****User notes.**** Per engine, `installed`, `language_supported` and
    `assets_ready` are the three conditions, `ready` is their conjunction,
    and `remedy` is the next step. `usable` is kept as a synonym of
    `ready`. The top-level `ready` is `False` when a selected engine is
    known not to be able to run, which is the case `doctor` must not call
    healthy.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle