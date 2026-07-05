🎁  ****Cosine Similarity of Item Features****

# Cosine Similarity of Item Features[#](#cosine-similarity-of-item-features "Link to this heading")

**Similarity as the cosine of the angle between two items’ feature vectors.**

## What it is[#](#what-it-is "Link to this heading")

****Cosine similarity**** measures how alike two items are by the ****cosine of the angle**** between their
****feature vectors**** — representations built from metadata (one-hot genres, tags, text) or learned
****embeddings****. It captures ****orientation****, not magnitude, so it is invariant to vector length.

## The formula[#](#the-formula "Link to this heading")

\[\cos(\theta) = \frac{\mathbf{A} \cdot \mathbf{B}}{\|\mathbf{A}\|\,\|\mathbf{B}\|},\]

ranging from \(-1\) to \(1\) (0 to 1 for non-negative features) — ****1**** means identical direction
(very similar), ****0**** means unrelated (orthogonal).

## Where it’s used[#](#where-it-s-used "Link to this heading")

It powers ****content-based filtering**** and ****item-item**** similarity (recommend items close to those a user
liked), and it is the usual kernel for computing ****intra-list similarity / diversity****.

---

****Mind map — connected ideas****

> [Jaccard index](264-jaccard-index.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Embedding Similarity](320-embedding-similarity.html) · [Genre Overlap](263-genre-overlap.html) · [Embedding](173-embedding.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html)

---

****More in Recommender Systems****

> [Catalog Coverage](268-catalog-coverage.html) · [Diminishing Utility](271-diminishing-utility.html) · [Diversity (in Recommender Systems)](410-diversity-in-recommender-systems.html) · [Dominating in Recommender Systems](267-dominating-in-recommender-systems.html) · [Genre Overlap](263-genre-overlap.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Item Coverage](270-item-coverage.html) · [Jaccard index](264-jaccard-index.html) · [Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Self-Information of Popularity](261-self-information-of-popularity.html) · [User Coverage](269-user-coverage.html)

---

**Theme:** Recommender Systems  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Cosine Similarity of Item Features](https://insightful-data-lab.com/2025/08/22/cosine-similarity-of-item-features/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)