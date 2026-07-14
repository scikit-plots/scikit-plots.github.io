🎁  ****Hit Rate (HR)****

# Hit Rate (HR)[#](#hit-rate-hr "Link to this heading")

**The share of users for whom a relevant item appears in the top-N list.**

## What it is[#](#what-it-is "Link to this heading")

****Hit Rate**** is the simplest top-N recommendation metric — it asks whether ****at least one**** relevant item
appears in a user’s top-****K**** list. Each user scores ****1**** if there’s any hit and ****0**** otherwise, and the
metric is the ****average**** across users:

\[\text{HR@}K = \frac{\#\{\text{users with} \ge 1 \text{ relevant item in top } K\}}{|U|}.\]

## What it captures[#](#what-it-captures "Link to this heading")

HR measures ****coverage of intent**** at the coarsest level — did we surface **something** the user wanted? — which
is exactly right for feeds, “you might also like” rows, and any setting where a ****single**** good hit is a win.
It is intuitive and easy to explain to stakeholders.

## Its limits[#](#its-limits "Link to this heading")

HR is ****binary**** and ****position-blind**** — it doesn’t care ****where**** in the list the hit landed or ****how
many**** relevant items were found, so a hit at rank 1 and a hit at rank 10 score the same. It also ****rises****
mechanically with ****K****, so always report the cutoff (Hit@5 vs [Hit@10](mailto:Hit%4010)) and pair it with a ****ranking**** metric.

---

**Theme:** [Recommender Systems](index.html#term-theme-recsys)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html) · [DCG (Discounted Cumulative Gain)](272-dcg-discounted-cumulative-gain.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Recall](423-recall.html)

---

> **Hint**
> ****More in Recommender Systems****

[Catalog Coverage](268-catalog-coverage.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Diminishing Utility](271-diminishing-utility.html) · [Diversity (in Recommender Systems)](410-diversity-in-recommender-systems.html) · [Dominating in Recommender Systems](267-dominating-in-recommender-systems.html) · [Genre Overlap](263-genre-overlap.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Item Coverage](270-item-coverage.html) · [Jaccard index](264-jaccard-index.html) · [Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Self-Information of Popularity](261-self-information-of-popularity.html) · [User Coverage](269-user-coverage.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Hit Rate (HR)](https://insightful-data-lab.com/2025/08/19/hit-rate-hr/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)