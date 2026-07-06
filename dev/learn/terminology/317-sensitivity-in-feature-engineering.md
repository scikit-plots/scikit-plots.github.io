🧮  ****Sensitivity in Feature Engineering****

# Sensitivity in Feature Engineering[#](#sensitivity-in-feature-engineering "Link to this heading")

**How much a model’s output responds to changes in a feature.**

## What it is[#](#what-it-is "Link to this heading")

****Sensitivity**** in feature engineering is the degree to which a model’s predictions ****depend on how features
are represented**** — their ****scale****, distribution, and encoding. Some algorithms are highly ****sensitive**** to
these choices; others are nearly ****invariant**** — and that difference decides how much preprocessing you must
do.

## Who’s sensitive[#](#who-s-sensitive "Link to this heading")

****Distance-based**** models (KNN, SVM), ****gradient-descent**** learners (linear / logistic regression, neural
nets), and ****regularized**** models are ****scale-sensitive**** — a feature with a large range will ****dominate****
distances or gradients unless it’s ****normalized****. ****Tree-based**** models (decision trees, random forests,
gradient boosting) split one feature at a time and are essentially ****scale-invariant****.

## Why it matters[#](#why-it-matters "Link to this heading")

Knowing a model’s sensitivity tells you what preprocessing is ****required**** versus ****wasted**** — you ****must****
scale for KNN or a neural net, but scaling for a random forest changes little. The same lens underlies
****feature-sensitivity analysis****: measuring how much the output moves when a feature changes reveals which
features the model actually ****relies on****.

---

****Mind map — connected ideas****

> [Encode (in Feature Engineering)](318-encode-in-feature-engineering.html) · [Normalize (in Feature Engineering)](319-normalize-in-feature-engineering.html) · [Feature Values](188-feature-values.html) · [Outlier](307-outlier.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Decision Trees](340-decision-trees.html)

---

****More in Data Preparation & Features****

> [Advanced Sorting in Spreadsheets](431-advanced-sorting-in-spreadsheets.html) · [Encode (in Feature Engineering)](318-encode-in-feature-engineering.html) · [Normalize (in Feature Engineering)](319-normalize-in-feature-engineering.html)

---

**Theme:** [Data Preparation & Features](index.html#term-theme-features)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Sensitivity in Feature Engineering](https://insightful-data-lab.com/2025/08/20/sensitivity-in-feature-engineering/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)