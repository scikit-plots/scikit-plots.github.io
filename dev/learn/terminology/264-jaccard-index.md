🎁  ****Jaccard index****

# Jaccard index[#](#jaccard-index "Link to this heading")

**Intersection over union of two sets, a similarity measure.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

The ****Jaccard index**** (Jaccard similarity coefficient) measures the overlap between two ****sets**** — the size
of their ****intersection**** over the size of their ****union****. For items, the sets are typically the ****users
who liked**** each item, or their ****tags / features****.

## The formula[#](#the-formula "Link to this heading")

\[J(A, B) = \frac{|A \cap B|}{|A \cup B|},\]

ranging 0 to 1 — ****0**** for disjoint sets, ****1**** for identical ones; the complement \(1 - J\) is the
****Jaccard distance****.

## When to use it[#](#when-to-use-it "Link to this heading")

It is the natural choice for ****binary**** (like / dislike, present / absent) data, where magnitudes don’t
matter — only which elements are shared. Contrast with ****cosine****, which works on real-valued vectors.

---

**Theme:** [Recommender Systems](index.html#term-theme-recsys)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Genre Overlap](263-genre-overlap.html) · [Cramér’s V](180-cramer-s-v.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Catalog Coverage](268-catalog-coverage.html)

---

> **Hint**
> ****More in Recommender Systems****

[Catalog Coverage](268-catalog-coverage.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Diminishing Utility](271-diminishing-utility.html) · [Diversity (in Recommender Systems)](410-diversity-in-recommender-systems.html) · [Dominating in Recommender Systems](267-dominating-in-recommender-systems.html) · [Genre Overlap](263-genre-overlap.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Item Coverage](270-item-coverage.html) · [Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Self-Information of Popularity](261-self-information-of-popularity.html) · [User Coverage](269-user-coverage.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Jaccard index](https://insightful-data-lab.com/2025/08/22/jaccard-index/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)