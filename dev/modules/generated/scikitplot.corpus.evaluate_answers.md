# evaluate\_answers[#](#evaluate-answers "Link to this heading")

scikitplot.corpus.evaluate\_answers(**system**, **dataset**, **\***, **judges=None**, **metrics=('faithfulness', 'answer\_relevance')**, **criteria=None**, **text\_metrics=('exact\_match', 'token\_f1')**, **on\_error='record'**, **n\_jobs=1**, **keep\_verdicts=True**, **metadata=None**, **clock=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_answers.py#L787)[#](#scikitplot.corpus.evaluate_answers "Link to this definition")
:   Evaluate a system’s answers with text metrics and LLM judges.

    Parameters:
    :   ****system****callable or None
        :   `system(question)` returning the answer (`str`, a
            [`Completion`](scikitplot.corpus.Completion.html#scikitplot.corpus.Completion "scikitplot.corpus._metrics._llm.Completion"), a mapping with `"answer"` and optional
            `"contexts"`, or an object with `.answer` and optional
            `.contexts`). `None` evaluates each item’s stored `"answer"`.

        ****dataset****sequence of mapping
        :   Items with `"question"` and optional `"id"`, `"reference"`,
            `"contexts"`, `"answer"` (see the module notes).

        ****judges****mapping, LLMJudge, LLM, callable or None, default=None
        :   Judges by name (`{"gpt": make_llm("openai", ...), "claude": ...}`);
            a single judge is named `"judge"`. `None` runs the text metrics
            only.

        ****metrics****sequence of str, default=(“faithfulness”, “answer\_relevance”)
        :   Judge metrics: any of `faithfulness`, `answer_relevance`,
            `context_precision`, `context_recall`, `answer_correctness`.

        ****criteria****mapping or None, default=None
        :   Rubrics by name, each reported as `criteria:<name>`.

        ****text\_metrics****sequence of str, default=(“exact\_match”, “token\_f1”)
        :   Deterministic metrics against the references (SQuAD normalisation).

        ****on\_error****{“record”, “raise”}, default=”record”
        :   What a failing system call or judge does: record it in the item
            (`NaN` scores) or raise.

        ****n\_jobs****int, default=1
        :   Threads for system and judge calls; results stay in dataset order.

        ****keep\_verdicts****bool, default=True
        :   Keep every [`JudgeResult`](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult") (verdicts and completions)
            in the report.

        ****metadata****mapping or None, default=None
        :   Free-form, JSON-compatible description stored in the report.

        ****clock****callable or None, default=None
        :   `clock() -> float` seconds for system latency.

    Returns:
    :   AnswerEvaluation

    Raises:
    :   TypeError, ValueError
        :   For a malformed dataset, unknown metric names, invalid options, or an
            item without an answer when `system` is `None`.

    Parameters:
    :   * ****system**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****dataset**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)
        * ****judges**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****metrics**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****criteria**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****text\_metrics**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****on\_error**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****n\_jobs**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****keep\_verdicts**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****metadata**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****clock**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****]****,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [**AnswerEvaluation**](scikitplot.corpus.AnswerEvaluation.html#scikitplot.corpus.AnswerEvaluation "scikitplot.corpus._metrics._answers.AnswerEvaluation")

    > **See also**
    > [`LLMJudge`](scikitplot.corpus.LLMJudge.html#scikitplot.corpus.LLMJudge "scikitplot.corpus.LLMJudge"), [`make_llm`](scikitplot.corpus.make_llm.html#scikitplot.corpus.make_llm "scikitplot.corpus.make_llm"), [`evaluate_preference`](scikitplot.corpus.evaluate_preference.html#scikitplot.corpus.evaluate_preference "scikitplot.corpus.evaluate_preference")

    Examples

    Try it in your browser!
    ```
    >>> data = [{"id": "q1", "question": "Capital of France?", "reference": "Paris"}]
    >>> report = evaluate_answers(lambda q: "Paris", data, judges=None)
    >>> report.metrics
    {'exact_match': 1.0, 'token_f1': 1.0}

    ```
    Go BackOpen In Tab