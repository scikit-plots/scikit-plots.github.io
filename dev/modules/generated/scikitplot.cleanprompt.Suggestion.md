# Suggestion[#](#suggestion "Link to this heading")

class scikitplot.cleanprompt.Suggestion(**text**, **count**, **reason**, **first\_offset**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L176)[#](#scikitplot.cleanprompt.Suggestion "Link to this definition")
:   A candidate the active detectors did not claim.

    Parameters:
    :   ****text****str
        :   The candidate surface, exactly as it appears.

        ****count****int
        :   How many times it occurs.

        ****reason****str
        :   Why it is being offered.

        ****first\_offset****int
        :   Where it first appears, so a caller can highlight it.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****first\_offset**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Notes

    ****Developer notes.**** A suggestion is never redacted automatically. It is
    offered for a person to accept, and accepting it adds the term to the
    literal detector, which is exact. That keeps the guess on the human side of
    the boundary, where it belongs.

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L205)[#](#scikitplot.cleanprompt.Suggestion.as_dict "Link to this definition")
    :   Return a JSON-safe dictionary.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L176)[#](#scikitplot.cleanprompt.Suggestion.count "Link to this definition")

    first\_offset: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L176)[#](#scikitplot.cleanprompt.Suggestion.first_offset "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L176)[#](#scikitplot.cleanprompt.Suggestion.reason "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L176)[#](#scikitplot.cleanprompt.Suggestion.text "Link to this definition")