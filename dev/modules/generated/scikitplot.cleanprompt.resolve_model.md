# resolve\_model[#](#resolve-model "Link to this heading")

scikitplot.cleanprompt.resolve\_model(**language='en'**, **size='sm'**, **explicit=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_languages.py#L180)[#](#scikitplot.cleanprompt.resolve_model "Link to this definition")
:   Resolve a language and size into a spaCy model name.

    Parameters:
    :   ****language****str, default=’en’
        :   Language code.

        ****size****str, default=’sm’
        :   Preferred model size; one of [`MODEL_SIZES`](scikitplot.cleanprompt.MODEL_SIZES.html#scikitplot.cleanprompt.MODEL_SIZES "scikitplot.cleanprompt.MODEL_SIZES").

        ****explicit****str, optional
        :   A model name that overrides everything else.

    Returns:
    :   ****model****str
        :   The model name to load.

        ****note****dict
        :   What was decided: `language`, `requested_size`, `resolved_size`,
            `fallback` and, when a substitution happened, `reason`.

    Raises:
    :   PolicyError
        :   If `size` is not a known size.

    Parameters:
    :   * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****explicit**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

    Notes

    ****User notes.**** When `fallback` is `True` the multilingual model was
    substituted, and it recognises only broad categories. Treat thin results as
    a limitation of that model rather than as an empty document.

    Examples

    Try it in your browser!
    ```
    >>> resolve_model("en", "sm")[0]
    'en_core_web_sm'
    >>> resolve_model("de", "lg")[0]
    'de_core_news_lg'
    >>> model, note = resolve_model("tr")
    >>> model, note["fallback"]
    ('xx_ent_wiki_sm', True)
    >>> resolve_model("de", explicit="my_model")[0]
    'my_model'

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle