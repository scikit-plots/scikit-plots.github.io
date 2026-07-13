🎁  ****Diversity (in Recommender Systems)****

# Diversity (in Recommender Systems)[#](#diversity-in-recommender-systems "Link to this heading")

**How varied the items within a recommendation list are.**

## What it is[#](#what-it-is "Link to this heading")

****Diversity**** measures how ****varied**** the items ****within**** a single recommendation list are — the opposite of
ten near-identical suggestions. A diverse list spans a user’s ****multiple**** interests rather than hammering
one.

## How it’s measured[#](#how-it-s-measured "Link to this heading")

The standard gauge is ****intra-list dissimilarity**** — the average ****pairwise**** distance between recommended
items (often 1 − ****cosine similarity**** of their features), captured by ****Intra-List Diversity****. At the
catalog level, ****Gini**** or ****entropy**** across all recommendations measures aggregate diversity.

## Why it matters[#](#why-it-matters "Link to this heading")

Diversity improves the ****experience**** — it hedges against a wrong guess about intent and keeps lists
interesting — but there’s an ****accuracy-diversity**** trade-off, since the most “accurate” items are often
****similar****. Good systems tune diversity ****without**** dumping relevance.

---

**Theme:** [Recommender Systems](index.html#term-theme-recsys)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Coverage](411-coverage.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [NDCG (Normalized Discounted Cumulative Gain)](413-ndcg-normalized-discounted-cumulative-gain.html)

---

> **Hint**
> ****More in Recommender Systems****

[Catalog Coverage](268-catalog-coverage.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Diminishing Utility](271-diminishing-utility.html) · [Dominating in Recommender Systems](267-dominating-in-recommender-systems.html) · [Genre Overlap](263-genre-overlap.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Item Coverage](270-item-coverage.html) · [Jaccard index](264-jaccard-index.html) · [Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Self-Information of Popularity](261-self-information-of-popularity.html) · [User Coverage](269-user-coverage.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Diversity (in Recommender Systems)](https://insightful-data-lab.com/2025/08/19/diversity-in-recommender-systems/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)