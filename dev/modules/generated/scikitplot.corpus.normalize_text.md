# normalize\_text[#](#normalize-text "Link to this heading")

scikitplot.corpus.normalize\_text(**text**, **\***, **config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/corpus/_normalizers/_text_normalizer.py#L225)[#](#scikitplot.corpus.normalize_text "Link to this definition")
:   Normalise **text** according to **config**.

    Parameters:
    :   ****text****str
        :   Raw text to normalise.

        ****config****NormalizerConfig or None, optional
        :   Configuration. `None` uses defaults.

    Returns:
    :   str or None
        :   Normalised text, or `None` if the result is shorter than
            `config.min_length`.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****config**** (**NormalizerConfig** **|** **None**)

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | None

    Examples

    Try it in your browser!
    ```
    >>> normalize_text("The  ﬁrst  compu-\\nter  was huge.")
    'The first computer was huge.'

    ```
    Go BackOpen In Tab