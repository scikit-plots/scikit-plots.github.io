# TrainingExample[#](#trainingexample "Link to this heading")

class scikitplot.corpus.TrainingExample(**example\_id**, **prompt**, **completion**, **chunk=None**, **metadata=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1064)[#](#scikitplot.corpus.TrainingExample "Link to this definition")
:   A single example in an LLM fine-tuning dataset.

    Parameters:
    :   ****example\_id****str
        :   Unique identifier for this training example.

        ****prompt****str
        :   Input prompt / instruction text.

        ****completion****str
        :   Expected model completion / response.

        ****chunk****Chunk or None
        :   Source chunk this example was derived from (for provenance).

        ****metadata****MetadataDict
        :   Task type, dataset split, difficulty, …

    Parameters:
    :   * ****example\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****prompt**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****completion**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****chunk**** ([**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk") **|** **None**)
        * ****metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Notes

    This schema is intentionally format-agnostic. Serialisation to
    OpenAI JSONL, Anthropic HH, or Alpaca format is handled by the
    `_export` submodule, not here.

    chunk: [Chunk](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.TrainingExample.chunk "Link to this definition")

    completion: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1064)[#](#scikitplot.corpus.TrainingExample.completion "Link to this definition")

    example\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1064)[#](#scikitplot.corpus.TrainingExample.example_id "Link to this definition")

    metadata: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1064)[#](#scikitplot.corpus.TrainingExample.metadata "Link to this definition")

    prompt: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1064)[#](#scikitplot.corpus.TrainingExample.prompt "Link to this definition")