# to\_langgraph\_state[#](#to-langgraph-state "Link to this heading")

scikitplot.corpus.to\_langgraph\_state(**documents**, **\***, **query=''**, **match\_mode=''**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_adapters.py#L226)[#](#scikitplot.corpus.to_langgraph_state "Link to this definition")
:   Convert documents to a LangGraph-compatible state dict.

    Parameters:
    :   ****documents****Sequence[CorpusDocument]
        :   Source documents.

        ****query****str, optional
        :   The original query text (for context in graph state).

        ****match\_mode****str, optional
        :   The match mode used (e.g., `"hybrid"`).

    Returns:
    :   dict[str, Any]
        :   State dict with keys `"documents"`, `"query"`,
            `"match_mode"`, `"n_results"`. `"documents"` is a
            list of LangChain-compatible dicts.

    Parameters:
    :   * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****User note:**** Use as input to a LangGraph node:

    ```
    state = to_langgraph_state(results, query="...")
    graph.invoke(state)

    ```