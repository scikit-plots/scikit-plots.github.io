# SufficiencySignals[#](#sufficiencysignals "Link to this heading")

class scikitplot.corpus.SufficiencySignals(**retrieval\_succeeded**, **provenance\_complete**, **independent\_evidence**, **required\_entities\_covered**, **subquestions\_answered**, **graph\_path\_found**, **conflicts\_detected**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L303)[#](#scikitplot.corpus.SufficiencySignals "Link to this definition")
:   The seven deterministic signals, computed before any model judgement.

    Notes

    `independent_evidence` counts ****distinct**** `doc_id`. A document found by
    two legs counts once, not twice: rank fusion scores it higher, which is right
    for ranking and wrong for counting independence (decision DEC-85).

    Parameters:
    :   * ****retrieval\_succeeded**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****provenance\_complete**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****independent\_evidence**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****required\_entities\_covered**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****subquestions\_answered**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****graph\_path\_found**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****conflicts\_detected**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    conflicts\_detected: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L303)[#](#scikitplot.corpus.SufficiencySignals.conflicts_detected "Link to this definition")

    graph\_path\_found: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L303)[#](#scikitplot.corpus.SufficiencySignals.graph_path_found "Link to this definition")

    independent\_evidence: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L303)[#](#scikitplot.corpus.SufficiencySignals.independent_evidence "Link to this definition")

    provenance\_complete: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L303)[#](#scikitplot.corpus.SufficiencySignals.provenance_complete "Link to this definition")

    required\_entities\_covered: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L303)[#](#scikitplot.corpus.SufficiencySignals.required_entities_covered "Link to this definition")

    retrieval\_succeeded: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L303)[#](#scikitplot.corpus.SufficiencySignals.retrieval_succeeded "Link to this definition")

    subquestions\_answered: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L303)[#](#scikitplot.corpus.SufficiencySignals.subquestions_answered "Link to this definition")

    sufficient(**\***, **min\_evidence=2**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L322)[#](#scikitplot.corpus.SufficiencySignals.sufficient "Link to this definition")
    :   Whether the evidence is deterministically sufficient.

        Parameters:
        :   ****min\_evidence**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_agentic.py#L331)[#](#scikitplot.corpus.SufficiencySignals.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]