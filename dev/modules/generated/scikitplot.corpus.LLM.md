# LLM[#](#llm "Link to this heading")

class scikitplot.corpus.LLM(**provider**, **model**, **\***, **client**, **max\_tokens**, **options**, **cache**, **clock**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_llm.py#L288)[#](#scikitplot.corpus.LLM "Link to this definition")
:   A language model behind one call shape; made by [`make_llm`](scikitplot.corpus.make_llm.html#scikitplot.corpus.make_llm "scikitplot.corpus.make_llm").

    Attributes:
    :   ****provider****str
        :   `"openai"`, `"anthropic"`, `"gemini"` or `"callable"`.

        ****model****str
        :   Model name.

        ****max\_tokens****int or None
        :   Output-token limit sent with every request, if any.

    Parameters:
    :   * ****provider**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****client**** (**Any**)
        * ****max\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****options**** (**Mapping****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]**)
        * ****cache**** (**MutableMapping** **|** **None**)
        * ****clock**** (**Callable****[****[****]****,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)

    > **See also**
    > [`make_llm`](scikitplot.corpus.make_llm.html#scikitplot.corpus.make_llm "scikitplot.corpus.make_llm")
    :   The constructor to use.

    cache\_key(**prompt**, **system=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_llm.py#L361)[#](#scikitplot.corpus.LLM.cache_key "Link to this definition")
    :   Return the cache key of one request (hex SHA-256).

        Parameters:
        :   ****prompt****str
            :   User prompt.

            ****system****str or None, default=None
            :   System instruction.

        Returns:
        :   str

        Parameters:
        :   * ****prompt**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****system**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

        Notes

        The key covers the provider, model, `max_tokens`, every option
        (unredacted, so two gateways’ headers never share an entry) and the
        client’s `base_url` where the client exposes one (OpenAI and
        Anthropic clients do), so two endpoints serving the same model name
        never share an entry. Only the hash is stored.

    complete(**prompt**, **\***, **system=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_llm.py#L403)[#](#scikitplot.corpus.LLM.complete "Link to this definition")
    :   Send one prompt and return the response.

        Parameters:
        :   ****prompt****str
            :   User prompt.

            ****system****str or None, default=None
            :   System instruction.

        Returns:
        :   Completion

        Raises:
        :   TypeError
            :   If `prompt` or `system` is not a string, or a normally ended
                response holds no text.

            IncompleteCompletionError
            :   If the model stopped for any reason but a normal end, whether or
                not it returned text (the completion keeps its token counts).

            CacheError
            :   If the cache mapping fails.

            Exception
            :   Whatever the provider’s client raises (authentication, rate limit,
                network); it is not caught here.

        Parameters:
        :   * ****prompt**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****system**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Completion**](scikitplot.corpus.Completion.html#scikitplot.corpus.Completion "scikitplot.corpus._metrics._llm.Completion")

    identity()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_llm.py#L331)[#](#scikitplot.corpus.LLM.identity "Link to this definition")
    :   Return what identifies this judge model in a report.

        Returns:
        :   dict
            :   `provider`, `model`, `max_tokens` (only when set, so the
                identity holds no `None` and survives every report format) and
                `options`, with the values of `REDACTED_OPTIONS`
                (`extra_headers`, `extra_query`) replaced by
                `"<redacted>"`. The client, and so its API key, is never
                included.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    property options: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][#](#scikitplot.corpus.LLM.options "Link to this definition")
    :   A copy of the extra request options.