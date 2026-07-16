# get\_sentence\_splitter[#](#get-sentence-splitter "Link to this heading")

scikitplot.corpus.get\_sentence\_splitter(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L768)[#](#scikitplot.corpus.get_sentence_splitter "Link to this definition")
:   Retrieve a registered sentence splitter by name.

    Parameters:
    :   ****name****str
        :   Registry key.

    Returns:
    :   SentenceSplitterProtocol
        :   The registered splitter.

    Raises:
    :   KeyError
        :   If **name** has not been registered.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**SentenceSplitterProtocol**](scikitplot.corpus.SentenceSplitterProtocol.html#scikitplot.corpus.SentenceSplitterProtocol "scikitplot.corpus._chunkers._custom_tokenizer.SentenceSplitterProtocol")