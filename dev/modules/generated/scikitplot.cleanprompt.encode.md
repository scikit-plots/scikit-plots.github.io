# encode[#](#encode "Link to this heading")

scikitplot.cleanprompt.encode(**text**, **\***, **policy=None**, **profile=None**, **hide=None**, **allow=None**, **kinds=None**, **ignore\_case=None**, **ner=False**, **engine='auto'**, **language='en'**, **model=None**, **size='sm'**, **registry=None**, **word\_boundary=False**, **suggest=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_api.py#L364)[#](#scikitplot.cleanprompt.encode "Link to this definition")
:   Replace sensitive values in `text` with placeholders.

    Parameters:
    :   ****text****str
        :   The prompt to make safe.

        ****policy****RedactionPolicy, optional
        :   Full policy. Overrides `profile` and the individual keywords.

        ****profile****str, optional
        :   Named bundle: `"minimal"`, `"balanced"` or `"strict"`.

        ****hide****iterable of str, optional
        :   Extra exact strings to remove.

        ****allow****iterable of str, optional
        :   Surfaces that must never be removed.

        ****kinds****iterable of str, optional
        :   Detection kinds to enable.

        ****ignore\_case****bool, optional
        :   Treat values differing only in case as one entity.

        ****ner****bool, default=False
        :   Also run named-entity detection.

        ****engine****str, default=’auto’
        :   `"auto"`, `"spacy"`, `"nltk"`, `"both"` or `"none"`.

        ****language****str, default=’en’
        :   Language code for the entity engine.

        ****model****str, optional
        :   Explicit spaCy model, overriding `language` and `size`.

        ****size****str, default=’sm’
        :   Preferred spaCy model size.

        ****registry****DetectorRegistry, optional
        :   Detectors to use, bypassing `ner` and the engine keywords.

        ****word\_boundary****bool, default=False
        :   Whether `hide` terms match only at word boundaries.

        ****suggest****bool, default=True
        :   Include candidate terms in the report.

    Returns:
    :   EncodedPrompt
        :   Unpacks as `(text, handle)`.

    Raises:
    :   TypeError
        :   If `text` is not a string.

        CapabilityError
        :   If `ner` was asked for and the chosen engine is unavailable.

        CleanPromptError
        :   For any other configuration or limit failure.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy") **|** **None**)
        * ****profile**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****hide**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****allow**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****kinds**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****ignore\_case**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****ner**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****engine**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****registry**** ([**DetectorRegistry**](scikitplot.cleanprompt.DetectorRegistry.html#scikitplot.cleanprompt.DetectorRegistry "scikitplot.cleanprompt._detectors.DetectorRegistry") **|** **None**)
        * ****word\_boundary**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****suggest**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**EncodedPrompt**](scikitplot.cleanprompt.EncodedPrompt.html#scikitplot.cleanprompt.EncodedPrompt "scikitplot.cleanprompt._api.EncodedPrompt")

    Notes

    ****User notes.**** Send the text; keep the handle. If
    `result.level == "alert"`, nothing was redacted **and** something was not
    looking — read the report before sending.

    Examples

    Try it in your browser!
    ```
    >>> safe, handle = encode("Mail ada@example.com")
    >>> safe
    'Mail [EMAIL-1]'
    >>> decode("Reply to [EMAIL-1]", handle)
    'Reply to ada@example.com'

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](../../auto_examples/cleanprompt/plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop![](../../_images/sphx_glr_plot_cleanprompt_basics_script_thumb.png)

[Cleanprompt Basics: Hide a Value, Then Get It Back](../../auto_examples/cleanprompt/plot_cleanprompt_basics_script.html)

Cleanprompt Basics: Hide a Value, Then Get It Back![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](../../auto_examples/cleanprompt/plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases