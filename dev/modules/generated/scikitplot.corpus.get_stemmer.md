# get\_stemmer[#](#get-stemmer "Link to this heading")

scikitplot.corpus.get\_stemmer(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L740)[#](#scikitplot.corpus.get_stemmer "Link to this definition")
:   Retrieve a registered stemmer by name.

    Parameters:
    :   ****name****str
        :   Registry key.

    Returns:
    :   StemmerProtocol
        :   The registered stemmer.

    Raises:
    :   KeyError
        :   If **name** has not been registered.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**StemmerProtocol**](scikitplot.corpus.StemmerProtocol.html#scikitplot.corpus.StemmerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.StemmerProtocol")