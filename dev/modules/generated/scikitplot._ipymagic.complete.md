# complete[#](#complete "Link to this heading")

scikitplot.\_ipymagic.complete(**line**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/_ipymagic/_completion.py#L58)[#](#scikitplot._ipymagic.complete "Link to this definition")
:   Return the completions of the last word of a `%scikitplot` line.

    Parameters:
    :   ****line****str
        :   The line typed so far, magic name included or not.

    Returns:
    :   list of str
        :   Sorted candidates that start with the word being typed.

    Parameters:
    :   ****line**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot._ipymagic import complete
    >>> "env" in complete("%scikitplot e")
    True
    >>> complete("%scikitplot info --format ")
    ['json', 'text', 'toml', 'yaml']

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_thumb.png)

[Run scikit-plots Commands from a Notebook](../../auto_examples/ipymagic/plot_ipymagic_scikit-plots.html)

Run scikit-plots Commands from a Notebook