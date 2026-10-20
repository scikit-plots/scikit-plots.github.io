# session[#](#session "Link to this heading")

scikitplot.cleanprompt.session(**\*\*options**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_api.py#L788)[#](#scikitplot.cleanprompt.session "Link to this definition")
:   Open a [`Session`](scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session").

    Parameters:
    :   ****\*\*options****
        :   Any keyword [`encode`](scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") accepts.

    Returns:
    :   Session
        :   Usable directly or as a context manager.

    Parameters:
    :   ****options**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**Session**](scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt._api.Session")

    Examples

    Try it in your browser!
    ```
    >>> with session(profile="minimal") as chat:
    ...     chat.encode("Mail ada@example.com")
    'Mail [EMAIL-1]'

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](../../auto_examples/cleanprompt/plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents