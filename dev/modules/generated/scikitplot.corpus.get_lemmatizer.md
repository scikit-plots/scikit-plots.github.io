# get\_lemmatizer[#](#get-lemmatizer "Link to this heading")

scikitplot.corpus.get\_lemmatizer(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L774)[#](#scikitplot.corpus.get_lemmatizer "Link to this definition")
:   Retrieve a registered lemmatizer by name.

    Parameters:
    :   ****name****str
        :   Registry key.

    Returns:
    :   LemmatizerProtocol
        :   The registered lemmatizer.

    Raises:
    :   KeyError
        :   If **name** has not been registered.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**LemmatizerProtocol**](scikitplot.corpus.LemmatizerProtocol.html#scikitplot.corpus.LemmatizerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.LemmatizerProtocol")