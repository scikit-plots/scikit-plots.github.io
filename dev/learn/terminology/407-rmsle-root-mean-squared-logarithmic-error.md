🔬  ****RMSLE (Root Mean Squared Logarithmic Error)****

# RMSLE (Root Mean Squared Logarithmic Error)[#](#rmsle-root-mean-squared-logarithmic-error "Link to this heading")

**RMSE on log-scaled values, penalising under-prediction and easing large magnitudes.**

## What it is[#](#what-it-is "Link to this heading")

****Root Mean Squared Logarithmic Error**** is RMSE computed on the ****logarithms**** of the predictions and
actuals — the root-mean-square of the differences in ****log space****:

\[\text{RMSLE} = \sqrt{\frac{1}{N}\sum\_{i=1}^{N}\big(\log(\hat{y}\_i + 1) - \log(y\_i + 1)\big)^2}.\]

The ****+1**** lets it handle zeros.

## What the log changes[#](#what-the-log-changes "Link to this heading")

Taking logs turns absolute errors into ****relative**** ones, so a fixed ****percentage**** miss costs the same
whether the value is small or huge — making RMSLE ****robust to scale**** and to large ****outliers****. It also
becomes ****asymmetric****: it penalizes ****under****-prediction more than over-prediction.

## When to use it[#](#when-to-use-it "Link to this heading")

RMSLE suits ****positive****, ****right-skewed**** targets that span orders of magnitude — prices, counts, demand —
and situations where ****under-forecasting**** is the costlier mistake. Its limits: it ****can’t**** take negative
values, and its log scaling makes the raw number ****less intuitive**** than RMSE.

---

****Mind map — connected ideas****

> [Root Mean Squared Error (RMSE)](426-root-mean-squared-error-rmse.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [WAPE (Weighted Absolute Percentage Error)](422-wape-weighted-absolute-percentage-error.html) · [Outlier](307-outlier.html)

---

****More in Model Evaluation & Uncertainty****

> [Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html)

---

**Theme:** Model Evaluation & Uncertainty  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [RMSLE (Root Mean Squared Logarithmic Error)](https://insightful-data-lab.com/2025/08/19/rmsle-root-mean-squared-logarithmic-error/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)