# distance[#](#distance "Link to this heading")

scikitplot.levenshtein.distance(**a**, **b**, **\***, **backend='auto'**, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/levenshtein/_core.py#L430)[#](#scikitplot.levenshtein.distance "Link to this definition")
:   Return the Levenshtein edit distance between two sequences.

    Parameters:
    :   ****a, b****sequence-like
        :   Strings, bytes, or sequence-like values. The pure-Python and bundled
            internal backends support general sequences. External libraries may
            impose narrower type constraints.

        ****backend****str, optional
        :   `"auto"` (default), `"internal"`, `"rapidfuzz"`,
            `"levenshtein"` or `"python"`.

        ****strict****bool, optional
        :   If an explicitly selected backend is unavailable, raise instead of
            warning and falling back to the automatic safe chain.

    Parameters:
    :   * ****a**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****b**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_levenshtein_script_thumb.png)

[Use Levenshtein distance with Corpus retrieval](../../auto_examples/corpus/plot_corpus_levenshtein_script.html)

Use Levenshtein distance with Corpus retrieval![](../../_images/sphx_glr_plot_levenshtein_backends_script_thumb.png)

[Backend discovery and safe fallback](../../auto_examples/levenshtein/plot_levenshtein_backends_script.html)

Backend discovery and safe fallback![](../../_images/sphx_glr_plot_levenshtein_basics_script_thumb.png)

[Levenshtein basics](../../auto_examples/levenshtein/plot_levenshtein_basics_script.html)

Levenshtein basics![](../../_images/sphx_glr_plot_levenshtein_sequences_script_thumb.png)

[Sequences and explicit normalization](../../auto_examples/levenshtein/plot_levenshtein_sequences_script.html)

Sequences and explicit normalization