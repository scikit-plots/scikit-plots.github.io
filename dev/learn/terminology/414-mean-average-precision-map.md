🔎  ****Mean Average Precision (MAP)****

# Mean Average Precision (MAP)[#](#mean-average-precision-map "Link to this heading")

**The mean of average-precision scores across queries.**

## What it is[#](#what-it-is "Link to this heading")

****Mean Average Precision**** is the ****mean****, across all users, of each user’s ****Average Precision (AP)****. AP
averages the ****precision**** measured at ****every**** rank where a relevant item appears — the area under that
user’s ****precision–recall**** curve:

\[\text{MAP} = \frac{1}{|U|}\sum\_{u \in U} \text{AP}\_u.\]

It rolls per-user ranking quality into one number.

## What AP rewards[#](#what-ap-rewards "Link to this heading")

Because AP recomputes precision at each ****relevant**** position, it ****emphasizes**** getting relevant items
****early**** — a relevant item at rank 1 lifts every later precision term, while one at rank 10 lifts few. So MAP
is strongly ****order-sensitive****, rewarding front-loaded relevance.

## How it compares[#](#how-it-compares "Link to this heading")

MAP works with ****binary**** relevance (relevant or not), where ****NDCG**** handles ****graded**** relevance; MAP
summarizes the ****whole**** precision–recall trade-off, where ****Hit Rate**** only checks for any hit. Reported at a
cutoff (MAP@K), it is a standard top-N metric for search and recommendation.

---

****Mind map — connected ideas****

> [Average Precision (AP)](366-average-precision-ap.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [DCG (Discounted Cumulative Gain)](272-dcg-discounted-cumulative-gain.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html)

---

****More in Ranking & Interleaving****

> [Balanced Interleaving](111-balanced-interleaving.html) · [DCG (Discounted Cumulative Gain)](272-dcg-discounted-cumulative-gain.html) · [Interleaving Tests](379-interleaving-tests.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Probabilistic Interleaving](109-probabilistic-interleaving.html) · [Ranking Algorithms](108-ranking-algorithms.html) · [Team Draft Interleaving (TDI)](110-team-draft-interleaving-tdi.html) · [TREC (Text REtrieval Conference)](274-trec-text-retrieval-conference.html)

---

**Theme:** [Ranking & Interleaving](index.html#term-theme-ranking)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Mean Average Precision (MAP)](https://insightful-data-lab.com/2025/08/19/mean-average-precision-map/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)