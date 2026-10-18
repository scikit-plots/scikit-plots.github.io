# make\_llm[#](#make-llm "Link to this heading")

scikitplot.corpus.make\_llm(**provider**, **model=None**, **\***, **client=None**, **max\_tokens=None**, **options=None**, **cache=None**, **clock=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_llm.py#L691)[#](#scikitplot.corpus.make_llm "Link to this definition")
:   Make an [`LLM`](scikitplot.corpus.LLM.html#scikitplot.corpus.LLM "scikitplot.corpus.LLM") for OpenAI, Anthropic, Gemini or a callable.

    Parameters:
    :   ****provider****{“openai”, “anthropic”, “gemini”} or callable
        :   A provider name, or `fn(prompt, system) -> str` (or ->
            [`Completion`](scikitplot.corpus.Completion.html#scikitplot.corpus.Completion "scikitplot.corpus.Completion")).

        ****model****str or None, default=None
        :   Model name, required for a named provider (no default: model names
            change). For a callable it is the name reported (default: the
            callable’s `__name__`).

        ****client****object or None, default=None
        :   A client with the provider SDK’s surface (`openai.OpenAI(...)`,
            `anthropic.Anthropic(...)`, `google.genai.Client(...)`, or a
            compatible object). `None` constructs the SDK’s default client,
            which reads the API key from the environment.

        ****max\_tokens****int or None, default=None
        :   Output-token limit for every request. Required for `"anthropic"`.

        ****options****mapping or None, default=None
        :   Further request arguments, sent unchanged: keyword arguments of
            `chat.completions.create` (OpenAI) or `messages.create`
            (Anthropic), fields of `GenerateContentConfig` (Gemini), for example
            `{"temperature": 0}` where the model accepts it. Must be
            JSON-compatible: they are part of the judge’s recorded identity.

        ****cache****mutable mapping or None, default=None
        :   Response cache keyed by [`LLM.cache_key`](scikitplot.corpus.LLM.html#scikitplot.corpus.LLM.cache_key "scikitplot.corpus.LLM.cache_key").

        ****clock****callable or None, default=None
        :   `clock() -> float` seconds for latency; `time.perf_counter` when
            `None`.

    Returns:
    :   LLM

    Raises:
    :   ValueError
        :   For an unknown provider, a missing model or `max_tokens`, an option
            that the adapter sets itself, or a request argument that the client’s
            explicit signature does not take (`openai` before 1.45 has no
            `max_completion_tokens`).

        TypeError
        :   For arguments of the wrong type, or options that are not
            JSON-compatible.

        ImportError
        :   If `client` is `None` and the provider’s SDK is not installed.

    Parameters:
    :   * ****provider**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****client**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****max\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****options**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****cache**** ([**MutableMapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.MutableMapping "(in Python v3.15)") **|** **None**)
        * ****clock**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****]****,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [**LLM**](scikitplot.corpus.LLM.html#scikitplot.corpus.LLM "scikitplot.corpus._metrics._llm.LLM")

    > **See also**
    > [`LLMJudge`](scikitplot.corpus.LLMJudge.html#scikitplot.corpus.LLMJudge "scikitplot.corpus.LLMJudge")
    :   Judges answers with an [`LLM`](scikitplot.corpus.LLM.html#scikitplot.corpus.LLM "scikitplot.corpus.LLM").

    Notes

    ****User note.**** For an OpenAI-compatible server (vLLM, a gateway), pass
    `client=openai.OpenAI(base_url=..., api_key=...)`. If it does not know
    `max_completion_tokens`, leave `max_tokens=None` and pass
    `options={"max_tokens": n}`.

    Examples

    Try it in your browser!
    ```
    >>> llm = make_llm(lambda prompt, system: '{"score": 5}', model="stub")
    >>> llm.complete("Rate this.").text
    '{"score": 5}'
    >>> llm.identity()
    {'provider': 'callable', 'model': 'stub', 'options': {}}

    ```
    Go BackOpen In Tab