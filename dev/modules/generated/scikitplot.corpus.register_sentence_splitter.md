# register\_sentence\_splitter[#](#register-sentence-splitter "Link to this heading")

scikitplot.corpus.register\_sentence\_splitter(**name**, **splitter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L687)[#](#scikitplot.corpus.register_sentence_splitter "Link to this definition")
:   Register a named [`SentenceSplitterProtocol`](scikitplot.corpus.SentenceSplitterProtocol.html#scikitplot.corpus.SentenceSplitterProtocol "scikitplot.corpus.SentenceSplitterProtocol") implementation.

    Parameters:
    :   ****name****str
        :   Registry key.

        ****splitter****SentenceSplitterProtocol
        :   Sentence splitter instance.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****splitter**** ([**SentenceSplitterProtocol**](scikitplot.corpus.SentenceSplitterProtocol.html#scikitplot.corpus.SentenceSplitterProtocol "scikitplot.corpus._chunkers._custom_tokenizer.SentenceSplitterProtocol"))

    Return type:
    :   None

    Examples

    Try it in your browser!
    ```
    >>> register_sentence_splitter(
    ...     "pysbd_en", FunctionSentenceSplitter(lambda t: t.split(". "))
    ... )

    ```
    Go BackOpen In Tab