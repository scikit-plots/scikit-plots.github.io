📉  ****Continuous Ranked Probability Score (CRPS)****

# Continuous Ranked Probability Score (CRPS)[#](#continuous-ranked-probability-score-crps "Link to this heading")

**A proper score comparing a full predicted distribution to the outcome.**

## What it is[#](#what-it-is "Link to this heading")

The ****Continuous Ranked Probability Score**** grades a ****full probabilistic**** forecast by comparing its
predicted ****CDF**** to the observed outcome — the integrated squared gap between the forecast distribution and a
step at the truth:

\[\text{CRPS}(F, y) = \int\_{-\infty}^{\infty} \big(F(z) - \mathbb{1}\{y \le z\}\big)^2\, dz.\]

****Lower**** is better, and it rewards mass placed ****near**** the observation.

## Its key properties[#](#its-key-properties "Link to this heading")

CRPS is a ****strictly proper scoring rule**** — it is minimized only by ****honest****, well-calibrated
distributions, penalizing ****overconfidence**** — and it reports in the target’s ****units**** (like MAE). It equals
the integral of ****pinball loss**** over ****all**** quantiles, tying the whole family together.

## How it relates to MAE[#](#how-it-relates-to-mae "Link to this heading")

For a ****point**** (degenerate) forecast, the predicted CDF becomes a step function and CRPS ****collapses to the
MAE****. So CRPS is literally MAE ****generalized**** to distributions — the natural score for ****weather****,
****energy****, and ****demand**** probabilistic forecasting, though it is ****unbounded****.

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Strictly Proper Scoring Rules](234-strictly-proper-scoring-rules.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Brier Score](418-brier-score.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html)

---

> **Hint**
> ****More in Risk & Probabilistic Forecasting****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Return Distribution](225-return-distribution.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Continuous Ranked Probability Score (CRPS)](https://insightful-data-lab.com/2025/08/19/continuous-ranked-probability-score-crps/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)