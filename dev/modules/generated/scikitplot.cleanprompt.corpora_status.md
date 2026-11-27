# corpora\_status[#](#corpora-status "Link to this heading")

scikitplot.cleanprompt.corpora\_status()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_nltk.py#L580)[#](#scikitplot.cleanprompt.corpora_status "Link to this definition")
:   Report whether NLTK’s data packages are present.

    Returns:
    :   dict
        :   `{"available": bool, "missing": [...], "install_hint": str}`. When
            NLTK itself is absent, `available` is `False` and `missing` lists
            every package.

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Notes

    ****Developer notes.**** Used by `doctor`. Importing NLTK here is acceptable
    because the caller has already decided to ask about NLTK specifically; it
    is never called during `import scikitplot.cleanprompt`.