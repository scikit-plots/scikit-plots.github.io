# get\_pattern[#](#get-pattern "Link to this heading")

scikitplot.cleanprompt.get\_pattern(**kind**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_patterns.py#L610)[#](#scikitplot.cleanprompt.get_pattern "Link to this definition")
:   Return one pattern specification by kind.

    Parameters:
    :   ****kind****str
        :   The category name.

    Returns:
    :   PatternSpec
        :   The specification.

    Raises:
    :   PatternError
        :   If no pattern of that kind exists. The message lists what does.

    Parameters:
    :   ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [**PatternSpec**](scikitplot.cleanprompt.PatternSpec.html#scikitplot.cleanprompt.PatternSpec "scikitplot.cleanprompt._patterns.PatternSpec")