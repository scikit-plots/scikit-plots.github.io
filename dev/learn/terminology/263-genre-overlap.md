🎁  ****Genre Overlap****

# Genre Overlap[#](#genre-overlap "Link to this heading")

**The degree to which recommended items share genres, a diversity signal.**

## What it is[#](#what-it-is "Link to this heading")

****Genre overlap**** measures how similar two items are by ****how many genres (or categories) they share**** — a
****metadata-based**** similarity for items that carry categorical labels, like movies, music or books. It is
the domain-specific counterpart to ****cosine**** or ****Jaccard**** similarity when the features are ****genres****.

## How it’s computed[#](#how-it-s-computed "Link to this heading")

Often as the ****Jaccard**** of the two items’ genre sets — the shared genres over the total distinct genres:

\[\text{overlap}(i, j) = \frac{|G\_i \cap G\_j|}{|G\_i \cup G\_j|}.\]

Two movies both tagged \(\{\text{action}, \text{thriller}\}\) overlap fully; an action film and a
documentary don’t overlap at all.

## Where it’s used[#](#where-it-s-used "Link to this heading")

It serves as the ****similarity kernel**** for ****intra-list similarity / diversity**** (a list of same-genre
items has high overlap → low diversity), and it underpins ****calibrated**** recommendation, where the ****genre
mix**** of a list is kept aligned with the user’s historical tastes.

---

**Theme:** [Recommender Systems](index.html#term-theme-recsys)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Jaccard index](264-jaccard-index.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Embedding Similarity](320-embedding-similarity.html) · [Catalog Coverage](268-catalog-coverage.html)

---

> **Hint**
> ****More in Recommender Systems****

[Catalog Coverage](268-catalog-coverage.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Diminishing Utility](271-diminishing-utility.html) · [Diversity (in Recommender Systems)](410-diversity-in-recommender-systems.html) · [Dominating in Recommender Systems](267-dominating-in-recommender-systems.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Item Coverage](270-item-coverage.html) · [Jaccard index](264-jaccard-index.html) · [Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Self-Information of Popularity](261-self-information-of-popularity.html) · [User Coverage](269-user-coverage.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Genre Overlap](https://insightful-data-lab.com/2025/08/22/genre-overlap/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)