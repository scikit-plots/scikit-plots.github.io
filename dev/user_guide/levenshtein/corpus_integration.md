# Corpus integration[#](#corpus-integration "Link to this heading")

The Levenshtein facade is independently importable. Corpus integration is an
optional adapter created by [`make_corpus_scorer`](../../modules/generated/scikitplot.levenshtein.make_corpus_scorer.html#scikitplot.levenshtein.make_corpus_scorer "scikitplot.levenshtein.make_corpus_scorer").

## Create a scorer[#](#create-a-scorer "Link to this heading")

```
from scikitplot.levenshtein import make_corpus_scorer

scorer = make_corpus_scorer(
    backend="auto",
    score_cutoff=0.6,
)

```

The import of [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") happens only when `scorer` is called.

## Use Corpus documents[#](#use-corpus-documents "Link to this heading")

```
from scikitplot.corpus import CorpusDocument, RetrievalConfig
from scikitplot.levenshtein import make_corpus_scorer

docs = [
    CorpusDocument.create("a.txt", 0, "kitten"),
    CorpusDocument.create("b.txt", 0, "sitting"),
    CorpusDocument.create("c.txt", 0, "bitten"),
]

scorer = make_corpus_scorer(backend="python")
hits = scorer("kitten", docs, RetrievalConfig(top_k=2))

assert [hit.doc.text for hit in hits] == ["kitten", "bitten"]

```

## Retrieval metadata[#](#retrieval-metadata "Link to this heading")

The adapter records:

* `match_mode="levenshtein"`;
* normalized similarity as the score;
* the actual Levenshtein backend in `backend`;
* `native_metric="normalized_levenshtein_similarity"`.

## Normalized versus original text[#](#normalized-versus-original-text "Link to this heading")

By default the scorer prefers `doc.normalized_text` when present and falls
back to `doc.text`.

Pass `use_normalized_text=False` when the original document text is the
retrieval contract.

## When to use it[#](#when-to-use-it "Link to this heading")

Levenshtein retrieval is useful for:

* short names and identifiers;
* misspelling-tolerant lookup;
* small/medium candidate sets;
* deterministic local matching.

It is usually not the best first-stage retriever for large natural-language
corpora. Use lexical/vector retrieval to narrow the candidate set, then edit
distance as a reranker when appropriate.