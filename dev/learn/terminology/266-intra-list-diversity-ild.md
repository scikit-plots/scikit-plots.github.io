🎁  ****Intra-List Diversity (ILD)****

# Intra-List Diversity (ILD)[#](#intra-list-diversity-ild "Link to this heading")

**The average dissimilarity among items within a single recommendation list.**

## What it is[#](#what-it-is "Link to this heading")

****Intra-list diversity**** measures how ****varied**** the items within a ****single**** recommendation list are —
the antidote to lists of near-identical products. It is defined from the ****intra-list similarity (ILS)****,
the ****average pairwise similarity**** of all items in the list; diversity is its complement.

## The formula[#](#the-formula "Link to this heading")

\[\mathrm{ILD} = \frac{2}{|L|\,(|L|-1)} \sum\_{i < j} \big(1 - \mathrm{sim}(i, j)\big),\]

with \(\mathrm{sim}\) a ****cosine**** (over embeddings / features) or ****Jaccard**** (over tags / genres)
similarity. High ILS → similar items → ****low**** diversity; low ILS → varied items → ****high**** diversity.

## Why it matters[#](#why-it-matters "Link to this heading")

Accuracy alone rewards recommending ten versions of the same hit; ****diversity**** captures whether a list
actually ****broadens**** what the user sees. It trades off against relevance — the art is a ****diverse yet
relevant**** list.

---

****Mind map — connected ideas****

> [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Jaccard index](264-jaccard-index.html) · [Genre Overlap](263-genre-overlap.html) · [Catalog Coverage](268-catalog-coverage.html) · [Long-Tail Items](260-long-tail-items.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html)

---

****More in Recommender Systems****

> [Catalog Coverage](268-catalog-coverage.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Diminishing Utility](271-diminishing-utility.html) · [Diversity (in Recommender Systems)](410-diversity-in-recommender-systems.html) · [Dominating in Recommender Systems](267-dominating-in-recommender-systems.html) · [Genre Overlap](263-genre-overlap.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Item Coverage](270-item-coverage.html) · [Jaccard index](264-jaccard-index.html) · [Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Self-Information of Popularity](261-self-information-of-popularity.html) · [User Coverage](269-user-coverage.html)

---

**Theme:** Recommender Systems  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Intra-List Diversity (ILD)](https://insightful-data-lab.com/2025/08/22/intra-list-diversity-ild/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)