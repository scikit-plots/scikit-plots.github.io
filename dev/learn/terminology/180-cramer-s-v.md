🔬  ****Cramér's V****

# Cramér’s V[#](#cramer-s-v "Link to this heading")

**A measure of association between two categorical variables, derived from chi-squared.**

## What it is[#](#what-it-is "Link to this heading")

****Cramér’s V**** measures the ****strength of association between two categorical variables****. Built on
the ****chi-square statistic****, it ****normalises**** the result to lie between ****0 and 1****: 0 means the
variables are completely independent, 1 means one fully determines the other.

## The formula[#](#the-formula "Link to this heading")

\[V = \sqrt{\frac{\chi^2}{n \,(k - 1)}},\]

where \(\chi^2\) is the chi-square statistic, \(n\) the total sample size, and \(k\) the
smaller of the number of rows and columns in the contingency table. Dividing by \(k - 1\) is
what keeps \(V\) bounded regardless of table size.

## Reading the number[#](#reading-the-number "Link to this heading")

A rough guide: ****0.0-0.1**** very weak, ****0.1-0.3**** weak, ****0.3-0.5**** moderate, and ****above 0.5****
strong — though exact thresholds vary by field. Surveying 1,000 people on gender (male/female) and
drink preference (coffee/tea), a computed ****V = 0.25**** signals a weak-to-moderate link between the
two.

## Where it’s used[#](#where-it-s-used "Link to this heading")

In data science it does three jobs: detecting ****categorical drift**** by comparing distributions over
time, flagging ****redundant features**** (two categoricals so strongly associated that one can be
dropped), and testing ****feature-target association**** in classification.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Categorical Drift](179-categorical-drift.html) · [Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Data Drift](331-data-drift.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html) · [Drift Detection](138-drift-detection.html) · [Categorical Explosions](182-categorical-explosions.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Cramér’s V](https://insightful-data-lab.com/2025/08/23/cramers-v/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)