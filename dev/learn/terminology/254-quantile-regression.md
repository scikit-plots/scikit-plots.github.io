📉  ****Quantile Regression****

# Quantile Regression[#](#quantile-regression "Link to this heading")

**Regression that estimates conditional quantiles rather than the mean.**

## What it is[#](#what-it-is "Link to this heading")

****Quantile regression**** estimates a ****conditional quantile**** of the target instead of its mean: for a
chosen level \(\tau \in (0, 1)\) it predicts the \(\tau\)-th quantile given the features. Fit
every level and you recover the ****inverse CDF**** — the whole conditional distribution.

## The pinball loss and τ[#](#the-pinball-loss-and "Link to this heading")

It minimizes the ****pinball loss****, which weights over- and under-prediction ****asymmetrically**** by
\(\tau\):

\[\begin{split}\ell\_\tau(y, \hat{y}) =
\begin{cases}
\tau\,(y - \hat{y}) & y \ge \hat{y}, \\[2pt]
(1 - \tau)(\hat{y} - y) & y < \hat{y}.
\end{cases}\end{split}\]

At \(\tau = 0.5\) this is symmetric and recovers the ****median**** (equivalent to minimizing MAE);
\(\tau < 0.5\) pushes the model to ****under-predict****, \(\tau > 0.5\) to ****over-predict****, and the
further \(\tau\) is from 0.5 the stronger the asymmetry.

## In practice[#](#in-practice "Link to this heading")

It is ****distribution-free**** and robust (built on absolute differences), but fits each quantile
****separately****, which can cause ****quantile crossing**** (a lower quantile predicted above a higher one)
unless constrained. Common estimators: the linear `QuantileRegressor`, gradient-boosted quantile
models, and quantile random forests.

```
from sklearn.linear_model import QuantileRegressor

lower = QuantileRegressor(quantile=0.05, alpha=0.0).fit(X_train, y_train)
upper = QuantileRegressor(quantile=0.95, alpha=0.0).fit(X_train, y_train)
# [lower.predict(X), upper.predict(X)] is a 90% prediction interval

```

---

****Mind map — connected ideas****

> [Quantile Forecasts](232-quantile-forecasts.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Quantile Level](255-quantile-level.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [R² (R-squared)](259-r2-r-squared.html)

---

****More in Risk & Probabilistic Forecasting****

> [Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Return Distribution](225-return-distribution.html)

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Quantile Regression](https://insightful-data-lab.com/2025/08/22/quantile-regression/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)