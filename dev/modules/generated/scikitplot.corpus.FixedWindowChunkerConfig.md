# FixedWindowChunkerConfig[#](#fixedwindowchunkerconfig "Link to this heading")

class scikitplot.corpus.FixedWindowChunkerConfig(**window\_size=512**, **step\_size=256**, **unit=WindowUnit.CHARS**, **min\_length=10**, **include\_offsets=True**, **strip\_whitespace=True**, **multilang\_config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_chunkers/_fixed_window.py#L94)[#](#scikitplot.corpus.FixedWindowChunkerConfig "Link to this definition")
:   Configuration for [`FixedWindowChunker`](scikitplot.corpus.FixedWindowChunker.html#scikitplot.corpus.FixedWindowChunker "scikitplot.corpus.FixedWindowChunker").

    Parameters:
    :   ****window\_size****int
        :   Size of each chunk in **unit** units.

        ****step\_size****int
        :   Stride between consecutive chunk starts. `step_size == window_size`
            gives non-overlapping chunks. `step_size < window_size` gives
            sliding-window overlap.

        ****unit****WindowUnit
        :   Measurement unit: `CHARS` (default) or `TOKENS`.

        ****min\_length****int
        :   Minimum character length to keep the last (possibly partial) chunk.

        ****include\_offsets****bool
        :   Compute and store character offsets.

        ****strip\_whitespace****bool
        :   Strip leading/trailing whitespace from each chunk.

    Parameters:
    :   * ****window\_size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****step\_size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****unit**** ([**WindowUnit**](scikitplot.corpus.WindowUnit.html#scikitplot.corpus.WindowUnit "scikitplot.corpus._chunkers._fixed_window.WindowUnit"))
        * ****min\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****include\_offsets**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****strip\_whitespace**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****multilang\_config**** (**MultilangConfig** **|** **None**)

    include\_offsets: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.FixedWindowChunkerConfig.include_offsets "Link to this definition")

    min\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 10[#](#scikitplot.corpus.FixedWindowChunkerConfig.min_length "Link to this definition")

    multilang\_config: MultilangConfig | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.FixedWindowChunkerConfig.multilang_config "Link to this definition")

    step\_size: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 256[#](#scikitplot.corpus.FixedWindowChunkerConfig.step_size "Link to this definition")

    strip\_whitespace: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.FixedWindowChunkerConfig.strip_whitespace "Link to this definition")

    unit: [WindowUnit](scikitplot.corpus.WindowUnit.html#scikitplot.corpus.WindowUnit "scikitplot.corpus._chunkers._fixed_window.WindowUnit") = 'chars'[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_chunkers/_fixed_window.py#L)[#](#scikitplot.corpus.FixedWindowChunkerConfig.unit "Link to this definition")

    window\_size: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 512[#](#scikitplot.corpus.FixedWindowChunkerConfig.window_size "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples