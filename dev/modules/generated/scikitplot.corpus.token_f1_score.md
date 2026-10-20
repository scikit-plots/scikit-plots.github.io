# token\_f1\_score[#](#token-f1-score "Link to this heading")

scikitplot.corpus.token\_f1\_score(**y\_true**, **y\_pred**, **\***, **normalize='squad'**, **tokenizer=None**, **sample\_weight=None**, **average='mean'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_text.py#L343)[#](#scikitplot.corpus.token_f1_score "Link to this definition")
:   Token-overlap F1 between predicted and reference answers (SQuAD style).

    Parameters:
    :   ****y\_true****sequence or mapping
        :   Reference answers per item: a `str` or a sequence of `str`.

        ****y\_pred****sequence or mapping
        :   Predicted answer per item (`str`), aligned with `y_true`.

        ****normalize****{“squad”, “basic”, None}, default=”squad”
        :   Normalisation before tokenisation.

        ****tokenizer****callable or None, default=None
        :   `tokenizer(text) -> sequence of str`; `None` splits on whitespace.

        ****sample\_weight****array-like of shape (n\_items,), default=None
        :   Per-item weights of the mean.

        ****average****{“mean”, None}, default=”mean”
        :   `None` returns per-item values.

    Returns:
    :   float or numpy.ndarray
        :   Per item, the best F1 over its references. Two empty token lists score
            1; one empty list scores 0.

    Raises:
    :   TypeError, ValueError
        :   For malformed inputs or a tokenizer that does not return strings.

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_pred**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****normalize**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****tokenizer**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****]** **|** **None**)
        * ****sample\_weight**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****average**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> token_f1_score(["the cat sat"], ["a cat sat down"])
    0.8

    ```
    Go BackOpen In Tab