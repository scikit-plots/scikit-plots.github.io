🔎  ****NDCG (Normalized Discounted Cumulative Gain)****

# NDCG (Normalized Discounted Cumulative Gain)[#](#ndcg-normalized-discounted-cumulative-gain "Link to this heading")

**DCG normalised by the ideal ordering, bounded between 0 and 1.**

## What it is[#](#what-it-is "Link to this heading")

****Normalized Discounted Cumulative Gain**** measures ****ranking quality**** using both ****graded relevance**** and
****position****. It sums each item’s relevance with a ****logarithmic**** discount for lower ranks (DCG), then
divides by the ****ideal**** ordering’s score (IDCG):

\[\text{NDCG@}K = \frac{\text{DCG@}K}{\text{IDCG@}K} \in [0, 1].\]

A perfect ranking scores ****1****.

## Why it’s powerful[#](#why-it-s-powerful "Link to this heading")

Unlike Hit Rate, NDCG rewards putting ****highly**** relevant items ****near the top**** and handles ****multi-level****
relevance (a 5-star match beats a 3-star one). Normalizing by IDCG makes it ****comparable**** across users with
different numbers of relevant items — the reason it is the ****default**** offline ranking metric for
recommenders and search.

## In recsys[#](#in-recsys "Link to this heading")

Computed ****per user**** then ****averaged****, NDCG@K captures the personalized-ordering quality that drives
engagement. It is the recommender-system application of the same ****DCG**** used in information retrieval, so IR
and recsys share this yardstick.

---

**Theme:** [Ranking & Interleaving](index.html#term-theme-ranking)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[DCG (Discounted Cumulative Gain)](272-dcg-discounted-cumulative-gain.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html)

---

> **Hint**
> ****More in Ranking & Interleaving****

[Balanced Interleaving](111-balanced-interleaving.html) · [DCG (Discounted Cumulative Gain)](272-dcg-discounted-cumulative-gain.html) · [Interleaving Tests](379-interleaving-tests.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html) · [Probabilistic Interleaving](109-probabilistic-interleaving.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [Team Draft Interleaving (TDI)](110-team-draft-interleaving-tdi.html) · [TREC (Text REtrieval Conference)](274-trec-text-retrieval-conference.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [NDCG (Normalized Discounted Cumulative Gain)](https://insightful-data-lab.com/2025/08/19/ndcg-normalized-discounted-cumulative-gain/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)