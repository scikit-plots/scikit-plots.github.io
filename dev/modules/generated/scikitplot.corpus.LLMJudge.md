# LLMJudge[#](#llmjudge "Link to this heading")

class scikitplot.corpus.LLMJudge(**llm**, **\***, **on\_error='raise'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L548)[#](#scikitplot.corpus.LLMJudge "Link to this definition")
:   Judge answers and contexts with a language model.

    Parameters:
    :   ****llm****LLM or callable
        :   An [`LLM`](scikitplot.corpus.LLM.html#scikitplot.corpus.LLM "scikitplot.corpus._metrics._llm.LLM") from `make_llm`, or
            `fn(prompt, system) -> str`, which is wrapped by
            `make_llm`.

        ****on\_error****{“raise”, “record”}, default=”raise”
        :   What a failed judgement does: raise, or return a [`JudgeResult`](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus.JudgeResult")
            with `score=NaN` and `error` set. Applies to provider errors,
            cut-off completions and invalid verdicts; never to invalid arguments,
            which always raise.

    Parameters:
    :   * ****llm**** ([**LLM**](scikitplot.corpus.LLM.html#scikitplot.corpus.LLM "scikitplot.corpus.LLM") **|** **Callable****[****...****,** **Any****]**)
        * ****on\_error**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    > **See also**
    > [`make_llm`](scikitplot.corpus.make_llm.html#scikitplot.corpus.make_llm "scikitplot.corpus.make_llm")
    :   The model behind a judge.

    [`evaluate_answers`](scikitplot.corpus.evaluate_answers.html#scikitplot.corpus.evaluate_answers "scikitplot.corpus.evaluate_answers")
    :   Runs judges over a dataset.

    Notes

    ****User note.**** Each method makes one model call (`preference`: two)
    and costs tokens; [`identity`](#scikitplot.corpus.LLMJudge.identity "scikitplot.corpus.LLMJudge.identity") records the model and prompt version
    so scores from different judges are never mixed unknowingly. To judge the
    same answers with several models (a panel), pass several judges to
    [`evaluate_answers`](scikitplot.corpus.evaluate_answers.html#scikitplot.corpus.evaluate_answers "scikitplot.corpus.evaluate_answers"), which reports each judge, their mean and their
    agreement.

    Examples

    Try it in your browser!
    ```
    >>> judge = LLMJudge(lambda prompt, system: '{"score": 4, "reason": "direct"}')
    >>> judge.answer_relevance("Capital of France?", "Paris.").score
    0.75

    ```
    Go BackOpen In Tab

    answer\_correctness(**question**, **answer**, **reference**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L857)[#](#scikitplot.corpus.LLMJudge.answer_correctness "Link to this definition")
    :   Statement-level F1 of the answer against the reference.

        Parameters:
        :   ****question, answer, reference****str
            :   The question, the answer under evaluation and the reference answer.

        Returns:
        :   JudgeResult
            :   `score = TP / (TP + (FP + FN) / 2)`. `details`: `tp`, `fp`,
                `fn`. Undefined when all three are zero.

        Parameters:
        :   * ****question**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****answer**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****reference**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**JudgeResult**](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")

    answer\_relevance(**question**, **answer**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L702)[#](#scikitplot.corpus.LLMJudge.answer_relevance "Link to this definition")
    :   How directly the answer addresses the question: `(rating - 1) / 4`.

        Parameters:
        :   ****question, answer****str
            :   The question and the answer under evaluation.

        Returns:
        :   JudgeResult
            :   `details`: `rating` (1-5).

        Parameters:
        :   * ****question**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****answer**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**JudgeResult**](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")

    context\_precision(**question**, **contexts**, **reference=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L732)[#](#scikitplot.corpus.LLMJudge.context_precision "Link to this definition")
    :   Average precision of the relevant contexts, in retrieval order.

        Parameters:
        :   ****question****str
            :   The question the contexts were retrieved for.

            ****contexts****iterable
            :   Retrieved contexts, best first (see [`context_texts`](scikitplot.corpus.context_texts.html#scikitplot.corpus.context_texts "scikitplot.corpus.context_texts")).

            ****reference****str or None, default=None
            :   A reference answer, which helps the judge decide usefulness.

        Returns:
        :   JudgeResult
            :   `score = sum(precision@k for each relevant rank k) / n_relevant`;
                `0.0` when no context is relevant. `details`: `relevant`
                (one boolean per context, in order), `n_relevant`. Undefined
                without contexts (no call made).

        Parameters:
        :   * ****question**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****contexts**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****reference**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**JudgeResult**](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")

        Notes

        The verdict must hold exactly one entry per context index (1-based);
        a missing, repeated or out-of-range index is an invalid verdict.

    context\_recall(**question**, **contexts**, **reference**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L809)[#](#scikitplot.corpus.LLMJudge.context_recall "Link to this definition")
    :   Fraction of the reference’s statements attributable to the contexts.

        Parameters:
        :   ****question****str
            :   The question the contexts were retrieved for.

            ****contexts****iterable
            :   Retrieved contexts (see [`context_texts`](scikitplot.corpus.context_texts.html#scikitplot.corpus.context_texts "scikitplot.corpus.context_texts")).

            ****reference****str
            :   The reference answer.

        Returns:
        :   JudgeResult
            :   `details`: `n_statements`, `n_attributed`. Undefined when the
                reference yields no statement, or without contexts (no call made).

        Parameters:
        :   * ****question**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****contexts**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****reference**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**JudgeResult**](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")

    criteria\_score(**question**, **answer**, **criteria**, **\***, **scale=5**, **reference=None**, **contexts=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L897)[#](#scikitplot.corpus.LLMJudge.criteria_score "Link to this definition")
    :   Rate the answer against a caller’s rubric: `(rating - 1) / (scale - 1)`.

        Parameters:
        :   ****question, answer****str
            :   The question and the answer under evaluation.

            ****criteria****str
            :   The rubric, in plain language (“cites a source for every number”).

            ****scale****int, default=5
            :   Highest rating, at least 2.

            ****reference****str or None, default=None
            :   Optional reference answer shown to the judge.

            ****contexts****iterable or None, default=None
            :   Optional contexts shown to the judge.

        Returns:
        :   JudgeResult
            :   `details`: `rating`, `scale`.

        Parameters:
        :   * ****question**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****answer**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****criteria**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****scale**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****reference**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****contexts**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**JudgeResult**](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")

    faithfulness(**question**, **answer**, **contexts**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L663)[#](#scikitplot.corpus.LLMJudge.faithfulness "Link to this definition")
    :   Fraction of the answer’s claims that the contexts support.

        Parameters:
        :   ****question, answer****str
            :   The question and the answer under evaluation.

            ****contexts****iterable
            :   The contexts the answer was generated from (see
                [`context_texts`](scikitplot.corpus.context_texts.html#scikitplot.corpus.context_texts "scikitplot.corpus.context_texts")).

        Returns:
        :   JudgeResult
            :   `details`: `n_claims`, `n_supported`. Undefined (`NaN`)
                when the answer makes no claim, or without contexts (no call made).

        Parameters:
        :   * ****question**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****answer**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****contexts**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**JudgeResult**](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")

    identity()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L604)[#](#scikitplot.corpus.LLMJudge.identity "Link to this definition")
    :   Return the judge’s identity: the model’s, the prompt version and hash.

        Returns:
        :   dict

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    preference(**question**, **answer\_a**, **answer\_b**, **\***, **reference=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L964)[#](#scikitplot.corpus.LLMJudge.preference "Link to this definition")
    :   Which of two answers is better, asked in both orders.

        Parameters:
        :   ****question, answer\_a, answer\_b****str
            :   The question and the two answers; the score is for `answer_a`.

            ****reference****str or None, default=None
            :   Optional reference answer shown to the judge.

        Returns:
        :   JudgeResult
            :   `score` for answer A: 1.0 (A wins), 0.0 (B wins) or 0.5 (tie).
                `details`: `winner` (`"a"`, `"b"` or `"tie"`) and
                `position_consistent`: whether both orders named the same
                winner. Two orders that disagree are a tie.

        Parameters:
        :   * ****question**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****answer\_a**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****answer\_b**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****reference**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**JudgeResult**](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")

        Notes

        The first call shows A first; the second shows B first. A judge that
        always picks the first (or second) position therefore yields a tie
        flagged `position_consistent=False`, not a win.