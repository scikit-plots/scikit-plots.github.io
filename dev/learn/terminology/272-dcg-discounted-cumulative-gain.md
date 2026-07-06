🔎  ****DCG (Discounted Cumulative Gain)****

# DCG (Discounted Cumulative Gain)[#](#dcg-discounted-cumulative-gain "Link to this heading")

**A ranking metric that rewards relevant items more when ranked higher.**

## What it is[#](#what-it-is "Link to this heading")

****Discounted Cumulative Gain**** scores a ****ranked list**** by summing each item’s ****graded relevance****,
discounted by how ****far down**** it sits — so a relevant result near the top counts far more than the same
result buried lower:

\[\text{DCG}\_p = \sum\_{i=1}^{p} \frac{\mathrm{rel}\_i}{\log\_2(i+1)}.\]

The ****logarithmic**** discount encodes that users examine top results most.

## Why it beats precision[#](#why-it-beats-precision "Link to this heading")

Unlike binary ****precision / recall****, DCG uses ****multi-level**** relevance (say 0–3) ****and**** position, capturing
both **how relevant** each item is and **where** it was ranked — exactly what matters for ****search**** and
****recommendation****.

## Normalizing it[#](#normalizing-it "Link to this heading")

Raw DCG isn’t comparable across queries with different numbers of relevant items, so
\(\text{NDCG} = \text{DCG} / \text{IDCG}\) divides by the ****ideal**** DCG (the best possible ordering),
giving a ****0-to-1**** score where ****1**** is a perfect ranking. It is the standard offline ranking metric.

---

****Mind map — connected ideas****

> [Kaggle](273-kaggle.html) · [TREC (Text REtrieval Conference)](274-trec-text-retrieval-conference.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html)

---

****More in Ranking & Interleaving****

> [Balanced Interleaving](111-balanced-interleaving.html) · [Interleaving Tests](379-interleaving-tests.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Probabilistic Interleaving](109-probabilistic-interleaving.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [Team Draft Interleaving (TDI)](110-team-draft-interleaving-tdi.html) · [TREC (Text REtrieval Conference)](274-trec-text-retrieval-conference.html)

---

**Theme:** [Ranking & Interleaving](index.html#term-theme-ranking)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [DCG (Discounted Cumulative Gain)](https://insightful-data-lab.com/2025/08/22/dcg-discounted-cumulative-gain/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)