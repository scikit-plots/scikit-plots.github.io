🔎  ****Ranking Algorithms****

# Ranking Algorithms[#](#ranking-algorithms "Link to this heading")

**Methods that order items by relevance or predicted value.**

## What it is[#](#what-it-is "Link to this heading")

A ****ranking algorithm**** ****orders a set of items**** — documents, products, ads, songs — so
the ****most relevant or useful appear at the top****. Given a ****query**** (a search term, a user
profile), it scores items by predicted relevance, utility, or likelihood of interaction
(click, purchase, watch) and sorts by that score. Search engines, recommenders, ad systems
and social feeds are all ranking problems, and better ranking translates directly into user
satisfaction and revenue.

## Classical IR[#](#classical-ir "Link to this heading")

The oldest rankers are lexical. ****TF-IDF**** weights a term by how often it appears in a
document against how rare it is across the corpus; ****BM25**** refines this with
****term-frequency saturation**** and ****document-length**** normalisation, and remains a strong
search baseline.

## Learning to rank[#](#learning-to-rank "Link to this heading")

****Learning to rank (LTR)**** trains a model from labelled relevance data, in three paradigms
by what the loss looks at: ****pointwise**** scores each item alone (regression or
classification — predict a click probability with logistic regression or gradient-boosted
trees); ****pairwise**** learns from comparisons (“is A better than B?”, e.g. RankNet); and
****listwise**** optimises the whole ordering at once (LambdaMART, ListNet), often against a
ranking metric like ****NDCG****.

## Neural rankers[#](#neural-rankers "Link to this heading")

The newest models use ****embeddings**** (Word2Vec, BERT, Transformers) to capture **semantic**
match rather than exact words — ****DSSM**** projects queries and documents into a shared space,
and ****BERT-based rankers**** (monoBERT, ColBERT) read query and document in context, sharply
improving relevance at higher compute cost.

## How ranking is judged[#](#how-ranking-is-judged "Link to this heading")

Ranking has its own metrics: ****NDCG**** (rewards relevant items near the top), ****MAP****
(average precision across queries), ****MRR**** (rank of the first relevant item), ****CTR****, and
****precision@k / recall@k****. The hard parts are ****personalisation**** (every user’s “best”
differs), ****position bias**** (higher slots get clicks regardless of quality), ****scale****
(rank billions of items fast), and ****fairness**** to minority items.

---

****Mind map — connected ideas****

> [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html) · [Probabilistic Interleaving](109-probabilistic-interleaving.html) · [Team Draft Interleaving (TDI)](110-team-draft-interleaving-tdi.html) · [Embedding](173-embedding.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html)

---

****More in Ranking & Interleaving****

> [Balanced Interleaving](111-balanced-interleaving.html) · [DCG (Discounted Cumulative Gain)](272-dcg-discounted-cumulative-gain.html) · [Interleaving Tests](379-interleaving-tests.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Probabilistic Interleaving](109-probabilistic-interleaving.html) · [Team Draft Interleaving (TDI)](110-team-draft-interleaving-tdi.html) · [TREC (Text REtrieval Conference)](274-trec-text-retrieval-conference.html)

---

**Theme:** Ranking & Interleaving  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Ranking Algorithms](https://insightful-data-lab.com/2025/08/24/ranking-algorithms/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)