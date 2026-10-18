# evaluate\_preference[#](#evaluate-preference "Link to this heading")

scikitplot.corpus.evaluate\_preference(**dataset**, **answers\_a**, **answers\_b**, **\***, **judges**, **names=('a', 'b')**, **on\_error='record'**, **n\_jobs=1**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_answers.py#L1072)[#](#scikitplot.corpus.evaluate_preference "Link to this definition")
:   Judge two systems’ answers head to head, in both orders.

    Parameters:
    :   ****dataset****sequence of mapping
        :   Items with `"question"` and optional `"id"` and `"reference"`,
            shown to the judges when the item has exactly one.

        ****answers\_a, answers\_b****sequence of str or mapping
        :   Each system’s answer per item: a sequence in dataset order, or a
            mapping from item id.

        ****judges****mapping, LLMJudge, LLM or callable
        :   At least one judge (see [`evaluate_answers`](scikitplot.corpus.evaluate_answers.html#scikitplot.corpus.evaluate_answers "scikitplot.corpus.evaluate_answers")).

        ****names****tuple of str, default=(“a”, “b”)
        :   Names of the two systems in the report.

        ****on\_error****{“record”, “raise”}, default=”record”
        :   What a failing judge does: record it (`NaN` score) or raise.

        ****n\_jobs****int, default=1
        :   Threads for judge calls; results stay in dataset order.

        ****metadata****mapping or None, default=None
        :   Free-form, JSON-compatible description stored in the report.

    Returns:
    :   PreferenceEvaluation

    Raises:
    :   TypeError, ValueError
        :   For malformed inputs, a missing answer, or no judge.

    Parameters:
    :   * ****dataset**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)
        * ****answers\_a**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****answers\_b**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****judges**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****names**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****on\_error**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****n\_jobs**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****metadata**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [**PreferenceEvaluation**](scikitplot.corpus.PreferenceEvaluation.html#scikitplot.corpus.PreferenceEvaluation "scikitplot.corpus._metrics._answers.PreferenceEvaluation")

    Notes

    Each judge is asked twice per item, once in each order (see
    `preference`); a judge that changes its mind
    with the order contributes a tie and lowers `position_consistency`.