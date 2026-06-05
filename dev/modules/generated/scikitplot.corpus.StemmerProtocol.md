# StemmerProtocol[#](#stemmerprotocol "Link to this heading")

class scikitplot.corpus.StemmerProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L212)[#](#scikitplot.corpus.StemmerProtocol "Link to this definition")
:   Structural protocol for word stemmers.

    Examples

    Try it in your browser!
    ```
    >>> class MyStemmer:
    ...     def stem(self, word: str) -> str:
    ...         return word.rstrip("ing")
    >>> isinstance(MyStemmer(), StemmerProtocol)
    True

    ```
    Go BackOpen In Tab

    stem(**word**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L225)[#](#scikitplot.corpus.StemmerProtocol.stem "Link to this definition")
    :   Return the stem of **word**.

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