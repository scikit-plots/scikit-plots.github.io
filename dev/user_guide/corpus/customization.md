# Customization[#](#customization "Link to this heading")

Corpus has multiple extension layers. Choose the narrowest one that solves the
problem; do not replace the whole builder when a single stage is custom.

## Reader-level extractor[#](#reader-level-extractor "Link to this heading")

`DocumentReader.custom_extractor` is the lowest-friction escape hatch for a
single reader instance. Common invocation, kwargs forwarding, output
normalization and exception wrapping are centralized by [`DocumentReader`](../../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus.DocumentReader").

## Builder factories[#](#builder-factories "Link to this heading")

[`BuilderFactories`](../../modules/generated/scikitplot.corpus.BuilderFactories.html#scikitplot.corpus.BuilderFactories "scikitplot.corpus.BuilderFactories") is the construction policy used directly by
[`CorpusBuilder`](../../modules/generated/scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder"). [`FactoryCorpusBuilder`](../../modules/generated/scikitplot.corpus.FactoryCorpusBuilder.html#scikitplot.corpus.FactoryCorpusBuilder "scikitplot.corpus.FactoryCorpusBuilder") remains a compatibility
facade for code that already uses it. The native builder seam is preferred for
new code because every ingestion branch consults the same factory object.

Factories are available for:

* `reader_factory`
* `chunker_factory`
* `filter_factory`
* `downloader_factory`
* `normalizer_factory`
* `enricher_factory`
* `embedding_engine_factory`

Reader/filter/downloader factories apply through the builder’s central
`_make_*`/`_get_*` seams, so archive members and downloaded files do not
bypass them.

```
from scikitplot.corpus import BuilderFactories, CorpusBuilder

def reader_factory(source, *, chunker=None, **kwargs):
    from scikitplot.corpus import DocumentReader
    return DocumentReader.create(source, chunker=chunker, **kwargs)

builder = CorpusBuilder(
    factories=BuilderFactories(reader_factory=reader_factory)
)

```

The factory container is validated at construction time, while the factories
themselves stay lazy. This keeps ordinary [`CorpusBuilder`](../../modules/generated/scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder") construction
free from optional model imports. Reader, filter and downloader factories are
used for local files, downloaded files and archive members rather than being
patched onto one call path after construction.

## Custom downloader[#](#custom-downloader "Link to this heading")

Use [`CustomDownloader`](../../modules/generated/scikitplot.corpus.CustomDownloader.html#scikitplot.corpus.CustomDownloader "scikitplot.corpus.CustomDownloader") when the transfer itself is special, or provide a
`downloader_factory` when the builder should own a custom download policy.
The downloader result is still a [`DownloadResult`](../../modules/generated/scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult"), keeping download and
reader dispatch separate.

## Custom retrieval[#](#custom-retrieval "Link to this heading")

[`CustomRetrievalIndex`](../../modules/generated/scikitplot.corpus.CustomRetrievalIndex.html#scikitplot.corpus.CustomRetrievalIndex "scikitplot.corpus.CustomRetrievalIndex") accepts a scorer callback. The independent
`scikitplot.levenshtein` facade provides `scikitplot.levenshtein.make_corpus_scorer`
for edit-distance ranking without coupling the Levenshtein module back to
Corpus.

## Custom registries[#](#custom-registries "Link to this heading")

`CapabilityRegistry` is an explicit object. Copy the default registry or
build a private one and register `CapabilitySpec` objects. Registration
refuses accidental replacement unless `replace=True` is explicit.