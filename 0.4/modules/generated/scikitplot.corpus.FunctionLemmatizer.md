# FunctionLemmatizer[#](#functionlemmatizer "Link to this heading")

class scikitplot.corpus.FunctionLemmatizer(**fn**, **name='custom'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L452)[#](#scikitplot.corpus.FunctionLemmatizer "Link to this definition")
:   Wrap any `Callable[[str, Optional[str]], str]` as a [`LemmatizerProtocol`](scikitplot.corpus.LemmatizerProtocol.html#scikitplot.corpus.LemmatizerProtocol "scikitplot.corpus.LemmatizerProtocol").

    Parameters:
    :   ****fn****Callable[[str], str] or Callable[[str, Optional[str]], str]
        :   Lemmatization function. May accept an optional `pos` argument.
            If the function accepts only one argument the `pos` parameter is
            silently dropped.

        ****name****str, optional
        :   Human-readable name.

    Parameters:
    :   * ****fn**** (**Callable****[****...****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Examples

    ```
    >>> lm = FunctionLemmatizer(lambda w, pos=None: w.lower())
    >>> lm.lemmatize("Running", pos="v")
    'running'

    ```

    lemmatize(**word**, **pos=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L492)[#](#scikitplot.corpus.FunctionLemmatizer.lemmatize "Link to this definition")
    :   Lemmatize **word** with optional POS hint.

        Parameters:
        :   ****word****str
            :   Input word.

            ****pos****str, optional
            :   Part-of-speech tag.

        Returns:
        :   str
            :   Lemma form.

        Parameters:
        :   * ****word**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****pos**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")