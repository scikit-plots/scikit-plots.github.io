# TrainingDataset[#](#trainingdataset "Link to this heading")

class scikitplot.corpus.TrainingDataset(**dataset\_id**, **examples**, **split='train'**, **metadata=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L1095)[#](#scikitplot.corpus.TrainingDataset "Link to this definition")
:   A named collection of [`TrainingExample`](scikitplot.corpus.TrainingExample.html#scikitplot.corpus.TrainingExample "scikitplot.corpus.TrainingExample") objects.

    Parameters:
    :   ****dataset\_id****str
        :   Unique dataset identifier.

        ****examples****list[TrainingExample]
        :   Training examples.

        ****split****str
        :   Dataset split label: `"train"`, `"validation"`, `"test"`.

        ****metadata****MetadataDict
        :   Dataset-level metadata (version, task, language, …).

    Parameters:
    :   * ****dataset\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****examples**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**TrainingExample**](scikitplot.corpus.TrainingExample.html#scikitplot.corpus.TrainingExample "scikitplot.corpus._types.TrainingExample")**]**)
        * ****split**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    dataset\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L1095)[#](#scikitplot.corpus.TrainingDataset.dataset_id "Link to this definition")

    examples: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[TrainingExample](scikitplot.corpus.TrainingExample.html#scikitplot.corpus.TrainingExample "scikitplot.corpus._types.TrainingExample")][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L1095)[#](#scikitplot.corpus.TrainingDataset.examples "Link to this definition")

    metadata: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L1095)[#](#scikitplot.corpus.TrainingDataset.metadata "Link to this definition")

    split: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'train'[#](#scikitplot.corpus.TrainingDataset.split "Link to this definition")