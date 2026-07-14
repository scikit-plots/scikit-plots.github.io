🎁  ****Item Coverage****

# Item Coverage[#](#item-coverage "Link to this heading")

**The share of items that the system is able to recommend.**

## What it is[#](#what-it-is "Link to this heading")

****Item coverage**** is the fraction of individual items the recommender is ****able to recommend at all**** —
for which it can produce a prediction or place in a list. It asks **how many products can the system
reach?**, item by item:

\[\text{Item Coverage} = \frac{|\text{items the system can recommend}|}{|\text{total items}|}.\]

## What limits it[#](#what-limits-it "Link to this heading")

Items with ****no or few interactions**** — new or niche products (the ****cold-start**** problem, data
****sparsity****) — may be impossible to recommend, dragging item coverage down. ****Content-based**** signals or
****hybrid**** models raise it by letting the system reason about ****unseen**** items from their features.

## Recommendability[#](#recommendability "Link to this heading")

Item coverage is about ****recommendability**** (can this item ever surface?), whereas ****catalog coverage**** is
about how much of the catalog ****actually**** surfaces in practice.

---

**Theme:** [Recommender Systems](index.html#term-theme-recsys)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Catalog Coverage](268-catalog-coverage.html) · [User Coverage](269-user-coverage.html) · [Long-Tail Items](260-long-tail-items.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Diminishing Utility](271-diminishing-utility.html)

---

> **Hint**
> ****More in Recommender Systems****

[Catalog Coverage](268-catalog-coverage.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Diminishing Utility](271-diminishing-utility.html) · [Diversity (in Recommender Systems)](410-diversity-in-recommender-systems.html) · [Dominating in Recommender Systems](267-dominating-in-recommender-systems.html) · [Genre Overlap](263-genre-overlap.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Jaccard index](264-jaccard-index.html) · [Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Self-Information of Popularity](261-self-information-of-popularity.html) · [User Coverage](269-user-coverage.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Item Coverage](https://insightful-data-lab.com/2025/08/22/item-coverage/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)