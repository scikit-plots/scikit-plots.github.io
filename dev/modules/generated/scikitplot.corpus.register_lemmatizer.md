# register\_lemmatizer[#](#register-lemmatizer "Link to this heading")

scikitplot.corpus.register\_lemmatizer(**name**, **lemmatizer**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L888)[#](#scikitplot.corpus.register_lemmatizer "Link to this definition")
:   Register a named [`LemmatizerProtocol`](scikitplot.corpus.LemmatizerProtocol.html#scikitplot.corpus.LemmatizerProtocol "scikitplot.corpus.LemmatizerProtocol") implementation.

    Parameters:
    :   ****name****str
        :   Registry key.

        ****lemmatizer****LemmatizerProtocol
        :   Lemmatizer instance.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****lemmatizer**** ([**LemmatizerProtocol**](scikitplot.corpus.LemmatizerProtocol.html#scikitplot.corpus.LemmatizerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.LemmatizerProtocol"))

    Return type:
    :   None