# register\_stemmer[#](#register-stemmer "Link to this heading")

scikitplot.corpus.register\_stemmer(**name**, **stemmer**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L743)[#](#scikitplot.corpus.register_stemmer "Link to this definition")
:   Register a named [`StemmerProtocol`](scikitplot.corpus.StemmerProtocol.html#scikitplot.corpus.StemmerProtocol "scikitplot.corpus.StemmerProtocol") implementation.

    Parameters:
    :   ****name****str
        :   Registry key.

        ****stemmer****StemmerProtocol
        :   Stemmer instance.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****stemmer**** ([**StemmerProtocol**](scikitplot.corpus.StemmerProtocol.html#scikitplot.corpus.StemmerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.StemmerProtocol"))

    Return type:
    :   None