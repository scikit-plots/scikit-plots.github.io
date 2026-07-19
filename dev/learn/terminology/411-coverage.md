🔬  ****Coverage****

# Coverage[#](#coverage "Link to this heading")

**The share of outcomes that fall within predicted intervals.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Coverage**** measures how much of the ****catalog**** a recommender actually uses — the share of available items
it is able to, or chooses to, recommend. A system can be accurate yet only ever surface a ****handful**** of
popular items, ignoring the rest.

## Two flavors[#](#two-flavors "Link to this heading")

****Prediction coverage**** is the fraction of items for which the model ****can**** make a prediction at all;
****catalog coverage**** is the fraction of items that actually ****appear**** in the recommendation lists users see.
The latter is the usual beyond-accuracy target.

## Why it matters[#](#why-it-matters "Link to this heading")

High coverage means the ****long tail**** gets exposure and the catalog isn’t wasted — countering ****popularity
bias****. A limitation of plain coverage: it counts an item shown ****once**** the same as one shown ****thousands****
of times, which is why ****Gini**** and ****entropy**** refine it to capture how ****evenly**** exposure is spread.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Novelty (in Recommender Systems)](409-novelty-in-recommender-systems.html) · [Diversity (in Recommender Systems)](410-diversity-in-recommender-systems.html) · [Intra-List Diversity (ILD)](266-intra-list-diversity-ild.html) · [Relevance in Recommender Systems](262-relevance-in-recommender-systems.html) · [Hit Rate (HR)](412-hit-rate-hr.html) · [Mean Average Precision (MAP)](414-mean-average-precision-map.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Coverage](https://insightful-data-lab.com/2025/08/19/coverage/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)