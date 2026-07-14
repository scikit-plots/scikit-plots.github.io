🎁  ****Self-Information of Popularity****

# Self-Information of Popularity[#](#self-information-of-popularity "Link to this heading")

**An information-theoretic weighting that rewards recommending less popular items.**

## What it is[#](#what-it-is "Link to this heading")

A ****novelty**** measure borrowed from ****information theory****. The ****self-information**** (surprisal) of
recommending an item is the ****negative base-2 logarithm**** of its ****popularity**** — the probability that a
random user has interacted with it. Rare events carry more information, so ****rare items score high****.

## The formula[#](#the-formula "Link to this heading")

\[\text{self-information}(i) = -\log\_2\!\left(\frac{\text{count}(i)}{|U|}\right),\]

where \(\text{count}(i)\) is the number of users who consumed item \(i\) and \(|U|\) is the
total number of users. A metric averages this over a top-\(N\) list and across users.

## What it captures[#](#what-it-captures "Link to this heading")

****Popular**** items (high probability) have ****low**** self-information — they are unsurprising; ****long-tail****
items have ****high**** self-information — they are novel. It quantifies how much a recommendation tells the
user something ****new****.

---

**Theme:** [Recommender Systems](index.html#term-theme-recsys)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Long-Tail Items](260-long-tail-items.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Catalog Coverage](268-catalog-coverage.html) · [Diminishing Utility](271-diminishing-utility.html) · [Dominating in Recommender Systems](267-dominating-in-recommender-systems.html)

---

> **Hint**
> ****More in Recommender Systems****

[Catalog Coverage](268-catalog-coverage.html) · [Cosine Similarity of Item Features](265-cosine-similarity-of-item-features.html) · [Diminishing Utility](271-diminishing-utility.html) · [Diversity (in Recommender Systems)](410-diversity-in-recommender-systems.html) · [Dominating in Recommender Systems](267-dominating-in-recommender-systems.html) · [Genre Overlap](263-genre-overlap.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Item Coverage](270-item-coverage.html) · [Jaccard index](264-jaccard-index.html) · [Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [User Coverage](269-user-coverage.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Self-Information of Popularity](https://insightful-data-lab.com/2025/08/22/self-information-of-popularity/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)