# PipelineGuard[#](#pipelineguard "Link to this heading")

class scikitplot.corpus.PipelineGuard(**policy=None**, **\***, **dedup=True**, **checkpoint\_path=None**, **checkpoint\_every=500**, **max\_retries=3**, **retry\_delay=1.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_base.py#L2729)[#](#scikitplot.corpus.PipelineGuard "Link to this definition")
:   Wrap any document stream with resilience, deduplication, and checkpointing.

    [`PipelineGuard`](#scikitplot.corpus.PipelineGuard "scikitplot.corpus.PipelineGuard") is a thin, composable layer you place around
    any [`DocumentReader.get_documents`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.get_documents "scikitplot.corpus.DocumentReader.get_documents") call (or any
    `Iterable[CorpusDocument]`) to get:

    * ****Error isolation**** — per-document failures are handled according to
      [`ErrorPolicy`](scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy "scikitplot.corpus._schema.ErrorPolicy") instead of crashing
      the whole pipeline.
    * ****Content deduplication**** — documents with identical `content_hash`
      are dropped after the first occurrence.
    * ****Checkpoint / resume**** — progress is periodically saved to a JSONL
      file so that a failed pipeline can resume from the last safe point.
    * ****Retry with back-off**** — transient errors (I/O, network) are retried
      up to `max_retries` times with exponential back-off.

    Parameters:
    :   ****policy****ErrorPolicy, optional
        :   How to handle per-document exceptions.
            Default: [`LOG`](scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy.LOG "scikitplot.corpus.ErrorPolicy.LOG") (log and skip).

        ****dedup****bool, optional
        :   Drop documents with duplicate `content_hash`.
            Default: `True`.

        ****checkpoint\_path****pathlib.Path or None, optional
        :   Path to a JSONL file for checkpoint/resume. When set, every
            `checkpoint_every` documents are written; on restart, already-seen
            `doc_id` values are skipped. Default: `None` (no checkpoint).

        ****checkpoint\_every****int, optional
        :   Flush checkpoint every N yielded documents. Default: 500.

        ****max\_retries****int, optional
        :   Maximum retry attempts for [`RETRY`](scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy.RETRY "scikitplot.corpus.ErrorPolicy.RETRY") policy.
            Default: 3.

        ****retry\_delay****float, optional
        :   Initial back-off in seconds between retries (doubles each attempt).
            Default: 1.0.

    Parameters:
    :   * ****policy**** (**Any** **|** **None**)
        * ****dedup**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****checkpoint\_path**** ([**pathlib.Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****checkpoint\_every**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_retries**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****retry\_delay**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Notes

    ****Zero-dependency design:**** [`PipelineGuard`](#scikitplot.corpus.PipelineGuard "scikitplot.corpus.PipelineGuard") uses only
    `pathlib`, `json`, `time`, and `hashlib` from the stdlib.
    It does not require the corpus schema module at import time (it
    reads `content_hash` and `doc_id` as plain attributes).

    ****Thread safety:**** Not thread-safe. Use one guard per thread when
    processing sources in parallel.

    Examples

    Try it in your browser!

    Basic error isolation — skip broken documents:

    ```
    >>> guard = PipelineGuard(policy=ErrorPolicy.SKIP)
    >>> docs = list(guard.iter(reader.get_documents()))

    ```

    Full pipeline with dedup and checkpoint:

    ```
    >>> from pathlib import Path
    >>> guard = PipelineGuard(
    ...     policy=ErrorPolicy.LOG,
    ...     dedup=True,
    ...     checkpoint_path=Path("corpus.ckpt.jsonl"),
    ...     checkpoint_every=200,
    ... )
    >>> for doc in guard.iter(reader.get_documents()):
    ...     process(doc)
    >>> guard.close()

    ```

    Context manager (auto-close):

    ```
    >>> with PipelineGuard(checkpoint_path=Path("run.ckpt")) as guard:
    ...     docs = list(guard.iter(reader.get_documents()))

    ```

    Wrap `_MultiSourceReader`:

    ```
    >>> reader = DocumentReader.create(Path("a.mp3"), Path("b.pdf"))
    >>> guard = PipelineGuard(policy=ErrorPolicy.SKIP)
    >>> docs = list(guard.iter(reader.get_documents()))

    ```
    Go BackOpen In Tab

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_base.py#L2979)[#](#scikitplot.corpus.PipelineGuard.close "Link to this definition")
    :   Flush and close the checkpoint file handle.

        Notes

        Called automatically when used as a context manager.
        Call manually when using [`iter`](#scikitplot.corpus.PipelineGuard.iter "scikitplot.corpus.PipelineGuard.iter") without `with`.

        Return type:
        :   None

    iter(**source**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_base.py#L2878)[#](#scikitplot.corpus.PipelineGuard.iter "Link to this definition")
    :   Iterate **source** with resilience, dedup, and checkpoint.

        Parameters:
        :   ****source****Iterable[CorpusDocument]
            :   Any document iterable — typically `reader.get_documents()`,
                a list, or another `iter()` call.

        Yields:
        :   CorpusDocument
            :   Documents that passed dedup and error policy filters.

        Parameters:
        :   ****source**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), None, None]

        Notes

        The guard opens the checkpoint file lazily on the first call to
        [`iter`](#scikitplot.corpus.PipelineGuard.iter "scikitplot.corpus.PipelineGuard.iter"). Call [`close`](#scikitplot.corpus.PipelineGuard.close "scikitplot.corpus.PipelineGuard.close") (or use as context manager) to
        ensure the file is flushed and closed.

    property stats: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")][#](#scikitplot.corpus.PipelineGuard.stats "Link to this definition")
    :   yielded, skipped (dedup), errors.

        Type:
        :   Runtime statistics