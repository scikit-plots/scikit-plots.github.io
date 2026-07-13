🔬  ****sMAPE (Symmetric Mean Absolute Percentage Error)****

# sMAPE (Symmetric Mean Absolute Percentage Error)[#](#smape-symmetric-mean-absolute-percentage-error "Link to this heading")

**A symmetric percentage error bounded between 0 and 200%.**

## What it is[#](#what-it-is "Link to this heading")

****Symmetric Mean Absolute Percentage Error**** fixes MAPE’s asymmetry by putting the ****average**** of actual and
forecast in the denominator:

\[\text{sMAPE} = \frac{1}{n}\sum\_{i=1}^{n} \frac{|y\_i - \hat{y}\_i|}{(|y\_i| + |\hat{y}\_i|)/2}.\]

In its common form it is ****bounded**** between 0% and 200%.

## What it fixes (and doesn’t)[#](#what-it-fixes-and-doesn-t "Link to this heading")

Plain MAPE penalizes ****over-forecasts**** more than under-forecasts and explodes as actuals approach zero;
sMAPE is more ****balanced**** and ****bounded****, which is why it served as the official metric of the
****M-competitions****. But it is ****not**** perfectly symmetric, and it still misbehaves when both actual and
forecast are near ****zero**** (the error jumps toward 100–200%).

## When to use it[#](#when-to-use-it "Link to this heading")

Reach for sMAPE when you want a ****bounded****, roughly symmetric percentage error for comparing across series —
but avoid it on ****intermittent**** or zero-heavy demand, where ****MASE**** is the safer scale-free choice.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [WMAPE (Weighted Mean Absolute Percentage Error)](405-wmape-weighted-mean-absolute-percentage-error.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Root Mean Squared Error (RMSE)](426-root-mean-squared-error-rmse.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [sMAPE (Symmetric Mean Absolute Percentage Error)](https://insightful-data-lab.com/2025/08/19/smape-symmetric-mean-absolute-percentage-error/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)