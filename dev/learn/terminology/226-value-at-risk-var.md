📉  ****Value-at-Risk (VaR)****

# Value-at-Risk (VaR)[#](#value-at-risk-var "Link to this heading")

**A threshold loss unlikely to be exceeded at a given confidence over a horizon.**

## What it is[#](#what-it-is "Link to this heading")

****Value-at-Risk**** summarizes downside risk in a single number: the ****maximum loss**** over a holding period
\(h\) that will ****not be exceeded**** with confidence \(\alpha\) (typically 95% or 99%) — anything
worse occurs only with probability \(1 - \alpha\). Formally it is the \(\alpha\)-****quantile**** of
the loss distribution (the negative \(\alpha\)-quantile of returns):

\[\mathrm{VaR}\_\alpha = -F\_r^{-1}(\alpha), \qquad \Pr\!\left(L > \mathrm{VaR}\_\alpha\right) = 1 - \alpha,\]

with \(F\_r\) the return CDF and \(L\) the loss.

## Where it comes from[#](#where-it-comes-from "Link to this heading")

VaR was introduced by J. P. Morgan’s ****RiskMetrics**** (1994) and enshrined by the ****Basel**** framework for
bank regulatory capital. It is estimated by ****historical simulation**** (the empirical quantile over a
rolling window), ****parametric**** methods (assume a normal / t distribution and scale by volatility, often
via ****GARCH****), or ****Monte Carlo****.

## Its blind spot[#](#its-blind-spot "Link to this heading")

VaR says ****nothing about how bad**** losses beyond the threshold are, and it is ****not coherent**** — it can
violate ****subadditivity****, so a diversified portfolio’s VaR may exceed the sum of its parts. ****Expected
Shortfall**** (CVaR) — the **average** loss ****given**** VaR is breached — repairs both and is coherent.

---

****Mind map — connected ideas****

> [Return Distribution](225-return-distribution.html) · [Risk Forecast](227-risk-forecast.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Probabilistic Scoring](228-probabilistic-scoring.html)

---

****More in Risk & Probabilistic Forecasting****

> [Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html)

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Value-at-Risk (VaR)](https://insightful-data-lab.com/2025/08/23/value-at-risk-var/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)