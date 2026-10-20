# Completion[#](#completion "Link to this heading")

class scikitplot.corpus.Completion(**text**, **provider**, **model**, **finish\_reason=None**, **input\_tokens=None**, **output\_tokens=None**, **latency\_s=0.0**, **cached=False**, **usage=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_llm.py#L184)[#](#scikitplot.corpus.Completion "Link to this definition")
:   One model response.

    Parameters:
    :   ****text****str
        :   The response text.

        ****provider****str
        :   `"openai"`, `"anthropic"`, `"gemini"` or `"callable"`.

        ****model****str
        :   Model name as requested.

        ****finish\_reason****str or None, default=None
        :   The provider’s reason for stopping (OpenAI `finish_reason`,
            Anthropic `stop_reason`, Gemini `finish_reason` name).

        ****input\_tokens, output\_tokens****int or None, default=None
        :   The provider’s own counts: OpenAI `prompt_tokens` and
            `completion_tokens` (which include reasoning tokens), Anthropic
            `input_tokens` and `output_tokens`, Gemini `prompt_token_count`
            and `candidates_token_count` (thinking tokens are in `usage`).

        ****latency\_s****float, default=0.0
        :   Seconds spent in the provider call; `0.0` for a cache hit.

        ****cached****bool, default=False
        :   Whether the response came from the cache.

        ****usage****mapping, default={}
        :   Every integer usage counter the provider reported, by its own name.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****provider**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****finish\_reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****input\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****output\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****latency\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****cached**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****usage**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)

    cached: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.Completion.cached "Link to this definition")

    finish\_reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.Completion.finish_reason "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_llm.py#L237)[#](#scikitplot.corpus.Completion.from_dict "Link to this definition")
    :   Rebuild from [`to_dict`](#scikitplot.corpus.Completion.to_dict "scikitplot.corpus.Completion.to_dict") output.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**Completion**](#scikitplot.corpus.Completion "scikitplot.corpus._metrics._llm.Completion")

    input\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.Completion.input_tokens "Link to this definition")

    latency\_s: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.corpus.Completion.latency_s "Link to this definition")

    model: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_llm.py#L184)[#](#scikitplot.corpus.Completion.model "Link to this definition")

    output\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.Completion.output_tokens "Link to this definition")

    provider: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_llm.py#L184)[#](#scikitplot.corpus.Completion.provider "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_llm.py#L184)[#](#scikitplot.corpus.Completion.text "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_llm.py#L223)[#](#scikitplot.corpus.Completion.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    usage: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_llm.py#L184)[#](#scikitplot.corpus.Completion.usage "Link to this definition")