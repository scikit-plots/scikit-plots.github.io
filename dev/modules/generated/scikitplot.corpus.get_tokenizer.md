# get\_tokenizer[#](#get-tokenizer "Link to this heading")

scikitplot.corpus.get\_tokenizer(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L728)[#](#scikitplot.corpus.get_tokenizer "Link to this definition")
:   Retrieve a registered tokenizer by name.

    Parameters:
    :   ****name****str
        :   Registry key.

    Returns:
    :   TokenizerProtocol
        :   The registered tokenizer.

    Raises:
    :   KeyError
        :   If **name** has not been registered.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**TokenizerProtocol**](scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.TokenizerProtocol")