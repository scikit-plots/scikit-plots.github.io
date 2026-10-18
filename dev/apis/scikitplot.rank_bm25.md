# scikitplot.rank\_bm25[#](#module-scikitplot.rank_bm25 "Link to this heading")

Various BM25 algorithms for document ranking.

A collection of algorithms for querying a set of documents and returning the ones most relevant to the query.
The most common use case for these algorithms is, as you might have guessed, to create search engines.

So far the algorithms that have been implemented are:

* ▣ Okapi BM25
* ▣ BM25L
* ▣ BM25+
* ▢ BM25-Adpt
* ▢ BM25T

> **See also**
> * [dorianbrown/rank\_bm25](https://github.com/dorianbrown/rank_bm25)

Examples

Try it in your browser!

Build an index over tokenised documents:

```
>>> from scikitplot.rank_bm25 import BM25Okapi
>>> corpus = [
...     "Hello there good man!",
...     "It is quite windy in London",
...     "How is the weather today?",
... ]
>>> tokenized_corpus = [doc.split(" ") for doc in corpus]
>>> bm25 = BM25Okapi(tokenized_corpus)
>>> bm25.corpus_size
3

```

Score every document, which is a diagnostic rather than a retrieval path:

```
>>> tokenized_query = "windy London".split(" ")
>>> scores = bm25.get_scores(tokenized_query)
>>> [round(float(score), 4) for score in scores]
[0.0, 0.9373, 0.0]

```

Retrieve the best documents. `get_top_n` maps row offsets into the sequence
you pass, so it is correct only while that sequence is in corpus order:

```
>>> bm25.get_top_n(tokenized_query, corpus, n=1)
['It is quite windy in London']

```

Prefer binding results to identities the index holds, which has no such
precondition:

```
>>> bm25 = BM25Okapi(tokenized_corpus, doc_ids=["greeting", "weather", "question"])
>>> [doc_id for doc_id, _score in bm25.get_top_ids(tokenized_query, n=1)]
['weather']

```

The scoring formula is named and versioned rather than implied by the class:

```
>>> bm25.recipe.identifier
'okapi-epsilon-floor/1'

```
Go BackOpen In Tab

****User guide.**** See the [BM25 lexical ranking](../user_guide/rank_bm25/index.html#id1) section for further details.

## Identities for a lexical build[#](#rank-bm25-ref-identities-for-a-lexical-build "Link to this heading")

## BM25 Variations[#](#bm25-variations "Link to this heading")

|  |  |
| --- | --- |
| [`BM25`](../modules/generated/scikitplot.rank_bm25.BM25.html#scikitplot.rank_bm25.BM25 "scikitplot.rank_bm25.BM25") |  |
| [`BM25Okapi`](../modules/generated/scikitplot.rank_bm25.BM25Okapi.html#scikitplot.rank_bm25.BM25Okapi "scikitplot.rank_bm25.BM25Okapi") | Okapi BM25 with an epsilon floor on negative IDFs (ATIRE-style IDF). |
| [`BM25L`](../modules/generated/scikitplot.rank_bm25.BM25L.html#scikitplot.rank_bm25.BM25L "scikitplot.rank_bm25.BM25L") |  |
| [`BM25Plus`](../modules/generated/scikitplot.rank_bm25.BM25Plus.html#scikitplot.rank_bm25.BM25Plus "scikitplot.rank_bm25.BM25Plus") |  |

## Validation[#](#validation "Link to this heading")