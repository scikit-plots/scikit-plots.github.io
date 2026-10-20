# default\_patterns[#](#default-patterns "Link to this heading")

scikitplot.cleanprompt.default\_patterns()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_patterns.py#L641)[#](#scikitplot.cleanprompt.default_patterns "Link to this definition")
:   Return the patterns enabled when a policy does not name `kinds`.

    Returns:
    :   tuple of PatternSpec
        :   In descending priority, then alphabetical by kind, so the order is
            stable across runs.

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**PatternSpec**](scikitplot.cleanprompt.PatternSpec.html#scikitplot.cleanprompt.PatternSpec "scikitplot.cleanprompt._patterns.PatternSpec"), …]

    Examples

    Try it in your browser!
    ```
    >>> kinds = [spec.kind for spec in default_patterns()]
    >>> "EMAIL" in kinds and "URL" in kinds
    True

    ```
    Go BackOpen In Tab