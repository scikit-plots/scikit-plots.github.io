🎁  ****Dominating in Recommender Systems****

# Dominating in Recommender Systems[#](#dominating-in-recommender-systems "Link to this heading")

**When a few popular items crowd out the rest of recommendations.**

## What it is[#](#what-it-is "Link to this heading")

A ****multi-criteria**** notion. One item ****dominates**** another (****Pareto dominance****) when it is ****at least as
good on every criterion**** and ****strictly better on at least one****:

\[a \succ b \iff \big(\forall k:\ a\_k \ge b\_k\big) \ \wedge\ \big(\exists k:\ a\_k > b\_k\big).\]

If a hotel is cheaper, closer ****and**** higher-rated than another, it dominates it.

## The skyline[#](#the-skyline "Link to this heading")

The items ****not dominated**** by any other form the ****skyline**** (the ****Pareto frontier****) — the only
candidates worth recommending under multiple objectives, since every dominated item is beaten outright by
something in the skyline.

## Why it matters[#](#why-it-matters "Link to this heading")

Multi-criteria recommenders (price, distance, rating, recency) use dominance to ****prune**** clearly-inferior
options before ranking. Dominance also names a ****failure mode**** — when a few ****popular**** items dominate
everyone’s lists, crowding out the long tail and harming exposure fairness.

---

**Theme:** [Recommender Systems](index.html#term-theme-recsys)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Long-Tail Items](260-long-tail-items.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Diminishing Utility](271-diminishing-utility.html) · [Catalog Coverage](268-catalog-coverage.html) · [Self-Information of Popularity](261-self-information-of-popularity.html)

---

> **Hint**
> ****More in Recommender Systems****

[Catalog Coverage](268-catalog-coverage.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Diminishing Utility](271-diminishing-utility.html) · [Diversity (in Recommender Systems)](410-diversity-in-recommender-systems.html) · [Genre Overlap](263-genre-overlap.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Item Coverage](270-item-coverage.html) · [Jaccard index](264-jaccard-index.html) · [Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Self-Information of Popularity](261-self-information-of-popularity.html) · [User Coverage](269-user-coverage.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Dominating in Recommender Systems](https://insightful-data-lab.com/2025/08/22/dominating-in-recommender-systems/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)