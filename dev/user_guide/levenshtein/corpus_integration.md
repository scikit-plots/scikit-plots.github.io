# Corpus integration[#](#corpus-integration "Link to this heading")

The Levenshtein facade is independently importable and never imports Corpus.
Corpus owns the adapter: [`make_levenshtein_ranker`](../../modules/generated/scikitplot.corpus.make_levenshtein_ranker.html#scikitplot.corpus.make_levenshtein_ranker "scikitplot.corpus.make_levenshtein_ranker") returns a ranker for
[`CustomRetrievalIndex`](../../modules/generated/scikitplot.corpus.CustomRetrievalIndex.html#scikitplot.corpus.CustomRetrievalIndex "scikitplot.corpus.CustomRetrievalIndex").

## Create a ranker[#](#create-a-ranker "Link to this heading")

```
from scikitplot.corpus import CustomRetrievalIndex, make_levenshtein_ranker

index = CustomRetrievalIndex(
    custom_scorer_fn=make_levenshtein_ranker(
        backend="auto",
        score_cutoff=0.6,
    )
)

```

[`scikitplot.levenshtein`](../../apis/scikitplot.levenshtein.html#module-scikitplot.levenshtein "scikitplot.levenshtein") is imported when the ranker is built; a Corpus
installation without it raises `ImportError` there, with
[`make_pairwise_ranker`](../../modules/generated/scikitplot.corpus.make_pairwise_ranker.html#scikitplot.corpus.make_pairwise_ranker "scikitplot.corpus.make_pairwise_ranker") and [`edit_similarity`](../../modules/generated/scikitplot.corpus.edit_similarity.html#scikitplot.corpus.edit_similarity "scikitplot.corpus.edit_similarity") named as the
dependency-free alternative.

## Use Corpus documents[#](#use-corpus-documents "Link to this heading")

```
from scikitplot.corpus import CorpusDocument, RetrievalConfig, make_levenshtein_ranker

docs = [
    CorpusDocument.create("a.txt", 0, "kitten"),
    CorpusDocument.create("b.txt", 0, "sitting"),
    CorpusDocument.create("c.txt", 0, "bitten"),
]

ranker = make_levenshtein_ranker(backend="python")
hits = ranker("kitten", docs, RetrievalConfig(top_k=2))

assert [hit.doc.text for hit in hits] == ["kitten", "bitten"]

```

## Retrieval metadata[#](#retrieval-metadata "Link to this heading")

The ranker records:

* `match_mode="levenshtein"`;
* normalized similarity as the score;
* the actual Levenshtein backend in `backend` (`"levenshtein:<name>"`),
  which differs from the requested one after a runtime fallback;
* `native_metric="normalized_levenshtein_similarity"`.

## Normalized versus original text[#](#normalized-versus-original-text "Link to this heading")

By default the ranker prefers `doc.normalized_text` when present and falls
back to `doc.text`.

Pass `use_normalized_text=False` when the original document text is the
retrieval contract.

## Any pairwise function[#](#any-pairwise-function "Link to this heading")

[`make_pairwise_ranker`](../../modules/generated/scikitplot.corpus.make_pairwise_ranker.html#scikitplot.corpus.make_pairwise_ranker "scikitplot.corpus.make_pairwise_ranker") accepts any `score_func(query, text)`. Pass
`greater_is_better=False` for a distance, which is negated so that higher is
better, as [`sklearn.metrics.make_scorer`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.make_scorer.html#sklearn.metrics.make_scorer "(in scikit-learn v1.10)") does for a loss:

```
from scikitplot import levenshtein
from scikitplot.corpus import make_pairwise_ranker

ranker = make_pairwise_ranker(levenshtein.distance, greater_is_better=False)

```

## Measuring retrieval quality[#](#measuring-retrieval-quality "Link to this heading")

To compare this ranker with BM25 or dense retrieval, run
[`evaluate_retrieval`](../../modules/generated/scikitplot.corpus.evaluate_retrieval.html#scikitplot.corpus.evaluate_retrieval "scikitplot.corpus.evaluate_retrieval") on a query set with relevance judgments; see
[Evaluating retrieval and answers](../corpus/evaluation.html#corpus-evaluation).

## When to use it[#](#when-to-use-it "Link to this heading")

Levenshtein retrieval is useful for:

* short names and identifiers;
* misspelling-tolerant lookup;
* small/medium candidate sets;
* deterministic local matching.

It is usually not the best first-stage retriever for large natural-language
corpora. Use lexical/vector retrieval to narrow the candidate set, then edit
distance as a reranker when appropriate.