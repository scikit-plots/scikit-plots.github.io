# NormalizerProtocol[#](#normalizerprotocol "Link to this heading")

class scikitplot.corpus.NormalizerProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L835)[#](#scikitplot.corpus.NormalizerProtocol "Link to this definition")
:   Structural interface every text normaliser must satisfy.

    normalize(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L839)[#](#scikitplot.corpus.NormalizerProtocol.normalize "Link to this definition")
    :   Apply normalisation to **text**.

        Parameters:
        :   ****text****str
            :   Raw input text.

        Returns:
        :   str
            :   Normalised text.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    normalize\_batch(**texts**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L854)[#](#scikitplot.corpus.NormalizerProtocol.normalize_batch "Link to this definition")
    :   Apply normalisation to a list of texts.

        Parameters:
        :   ****texts****list[str]
            :   Input texts.

        Returns:
        :   list[str]
            :   Normalised texts.

        Parameters:
        :   ****texts**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]