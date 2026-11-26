# redacting[#](#redacting "Link to this heading")

class scikitplot.cleanprompt.redacting(**secrets=None**, **logger=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_logging.py#L437)[#](#scikitplot.cleanprompt.redacting "Link to this definition")
:   Scrub known secrets from log records for the duration of a block.

    Parameters:
    :   ****secrets****iterable of str, optional
        :   Surfaces to scrub.

        ****logger****logging.Logger, optional
        :   Logger to attach to. Defaults to this submodule’s root logger.

    Parameters:
    :   * ****secrets**** (**Iterable****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****logger**** ([**logging.Logger**](scikitplot.logging.Logger.html#scikitplot.logging.Logger "logging.Logger") **|** **None**)

    Notes

    ****User notes.**** Wrap anything that logs while holding personal data:

    ```
    with redacting(vault.export().values()):
        do_work()

    ```

    ****Developer notes.**** The filter is attached to **every logger in this
    namespace**, not to a handler, so it applies however the application has
    configured its output. Attaching it to the namespace root alone looked
    equivalent and was not: a logger’s filters see only that logger’s own
    records, never its children’s (`CP-059`).
    It is removed on exit, including when the block raises, so a long-lived
    process does not accumulate filters holding the secrets of every request it
    has ever served — which would be the very leak this is meant to prevent.

    Examples

    Try it in your browser!
    ```
    >>> with redacting(["topsecret@example.com"]):
    ...     pass

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](../../auto_examples/cleanprompt/plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents