📉  ****Probabilistic Scoring****

# Probabilistic Scoring[#](#probabilistic-scoring "Link to this heading")

**Evaluating forecasts by how well their predicted probabilities match outcomes.**

## What it is[#](#what-it-is "Link to this heading")

****Probabilistic scoring**** evaluates a ****probabilistic forecast**** — a whole predictive distribution —
against the outcome that occurs, using a ****scoring rule**** (a loss function for distributions). To be
trustworthy the rule should be ****strictly proper****, so a forecaster ****minimizes**** the expected score
**only** by reporting their true distribution.

## The workhorse: CRPS[#](#the-workhorse-crps "Link to this heading")

The ****Continuous Ranked Probability Score**** is the most-used score for real-valued forecasts. It
integrates the ****squared gap**** between the forecast CDF \(F\) and the step CDF of the observation
\(y\), and is ****negatively oriented**** (lower is better):

\[\mathrm{CRPS}(F, y) = \int\_{-\infty}^{\infty} \big(F(x) - \mathbb{1}\{x \ge y\}\big)^2 \, dx.\]

It ****generalizes the MAE**** (for point forecasts) and the ****Brier score**** (for binary ones), reducing to
them in those cases.

## What it captures[#](#what-it-captures "Link to this heading")

A proper score rewards both ****calibration**** (probabilities match reality) and ****sharpness**** (tight
distributions) — the CRPS in fact ****decomposes**** into calibration, discrimination and uncertainty parts.
The ****log score**** is a ****local**** alternative that looks only at the density assigned to the outcome.

---

****Mind map — connected ideas****

> [Strictly Proper Scoring Rules](234-strictly-proper-scoring-rules.html) · [Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Quantile Forecasts](232-quantile-forecasts.html)

---

****More in Risk & Probabilistic Forecasting****

> [Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Return Distribution](225-return-distribution.html)

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Probabilistic Scoring](https://insightful-data-lab.com/2025/08/23/probabilistic-scoring/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)