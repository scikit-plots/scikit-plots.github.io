🔬  ****WAPE (Weighted Absolute Percentage Error)****

# WAPE (Weighted Absolute Percentage Error)[#](#wape-weighted-absolute-percentage-error "Link to this heading")

**Total absolute error divided by total actuals.**

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

****Weighted Absolute Percentage Error**** divides the ****total**** absolute forecast error by the ****total**** actual
demand:

\[\text{WAPE} = \frac{\sum\_i |y\_i - \hat{y}\_i|}{\sum\_i |y\_i|}.\]

It expresses aggregate error as a single percentage, weighting each item by its ****volume****.

## Why retailers use it[#](#why-retailers-use-it "Link to this heading")

Unlike ****MAPE****, WAPE doesn’t ****blow up**** when individual actuals are near ****zero**** (common for slow-moving
SKUs), and it lets ****high-volume**** items dominate — reflecting real demand. It stays defined as long as total
demand isn’t zero, which makes it the ****default**** accuracy metric in demand planning.

## How it connects[#](#how-it-connects "Link to this heading")

WAPE is effectively the same quantity as ****WMAPE****, and it is the number that ****drives inventory**** — high WAPE
means forecasts are far off, feeding both ****overstock**** and ****stockouts****. Cutting WAPE is how planners
****shrink**** those costly failure modes.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[WMAPE (Weighted Mean Absolute Percentage Error)](405-wmape-weighted-mean-absolute-percentage-error.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Overstock %](400-overstock.html) · [Stockouts](401-stockouts.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [WAPE (Weighted Absolute Percentage Error)](https://insightful-data-lab.com/2025/08/17/wape-weighted-absolute-percentage-error/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)