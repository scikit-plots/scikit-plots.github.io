🔬  ****KS Statistic (Kolmogorov–Smirnov Statistic)****

# KS Statistic (Kolmogorov–Smirnov Statistic)[#](#ks-statistic-kolmogorovsmirnov-statistic "Link to this heading")

**The maximum gap between two cumulative distributions; measures separation or shift.**

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

The ****KS statistic**** measures the ****maximum difference between two cumulative distribution functions
(CDFs)****. In statistics it underpins the ****KS test**** — do two samples come from the same
distribution? In ML, especially credit scoring and binary classification, it measures how well a
model ****separates positives from negatives****: far-apart distributions give a large KS, heavily
overlapping ones a small KS.

## The formula[#](#the-formula "Link to this heading")

For a binary problem, build the CDF of positives and the CDF of negatives across the score, then take
the largest vertical gap between them:

\[KS = \max\_x \left| F\_{\text{pos}}(x) - F\_{\text{neg}}(x) \right|,\]

where \(F\) is a cumulative distribution. Because it scans every threshold for the single point
of greatest separation, KS is ****threshold-independent****.

## A worked example[#](#a-worked-example "Link to this heading")

Score 1,000 customers — 500 good, 500 bad — and sort by predicted score. At each threshold track the
share of bads captured against the share of goods captured; KS is the largest gap between those
curves. If at score 0.65 the CDF of bads is 0.70 and the CDF of goods is 0.30, the gap is 0.40, so
****KS = 40%****.

## Reading it, and its cousin AUC[#](#reading-it-and-its-cousin-auc "Link to this heading")

KS runs from ****0 to 1****: 0 means no separating power (identical distributions), ****0.4-0.6**** is strong
(typical in credit risk), below 0.2 is weak. It is closely related to ****AUC**** — both measure class
separability and both are threshold-independent — but where AUC integrates the whole ROC curve, KS
reports only the ****single maximum point of separation****.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Discriminatory Power](185-discriminatory-power.html) · [Gini Coefficient](023-gini-coefficient.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [Energy Distance](176-energy-distance.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [KS Statistic (Kolmogorov–Smirnov Statistic)](https://insightful-data-lab.com/2025/08/23/ks-statistic-kolmogorov-smirnov-statistic/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)