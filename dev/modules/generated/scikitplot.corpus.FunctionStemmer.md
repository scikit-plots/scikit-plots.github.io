# FunctionStemmer[#](#functionstemmer "Link to this heading")

class scikitplot.corpus.FunctionStemmer(**fn**, **name='custom'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L425)[#](#scikitplot.corpus.FunctionStemmer "Link to this definition")
:   Wrap any `Callable[[str], str]` as a [`StemmerProtocol`](scikitplot.corpus.StemmerProtocol.html#scikitplot.corpus.StemmerProtocol "scikitplot.corpus.StemmerProtocol").

    Parameters:
    :   ****fn****Callable[[str], str]
        :   Stemming function; takes a single word, returns its stem.

        ****name****str, optional
        :   Human-readable name.

    Parameters:
    :   * ****fn**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Examples

    Try it in your browser!
    ```
    >>> st = FunctionStemmer(lambda w: w[:4] if len(w) > 4 else w)
    >>> st.stem("running")
    'runn'

    ```
    Go BackOpen In Tab

    stem(**word**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L454)[#](#scikitplot.corpus.FunctionStemmer.stem "Link to this definition")
    :   Stem **word**.

        Parameters:
        :   ****word****str
            :   Input word.

        Returns:
        :   str
            :   Stemmed form.

        Parameters:
        :   ****word**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")