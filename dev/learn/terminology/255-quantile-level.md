📉  ****Quantile Level****

# Quantile Level[#](#quantile-level "Link to this heading")

**The probability level (e.g. 0.9) targeted by a quantile forecast.**

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

The ****quantile level**** \(\tau \in (0,1)\) (sometimes written \(\alpha\)) is the probability that
****names which quantile**** a forecast targets — the value \(q\_\tau\) below which the outcome is expected
to fall a fraction \(\tau\) of the time:

\[\Pr\!\left(Y \le q\_\tau\right) = \tau, \qquad \tau \in (0, 1).\]

## Reading levels[#](#reading-levels "Link to this heading")

\(\tau = 0.5\) is the ****median****; \(\tau = 0.1\) is the 10th percentile (a pessimistic lower value
the outcome undercuts 10% of the time); \(\tau = 0.9\) the 90th (an optimistic upper value). A ****set****
of levels \(\{0.1, 0.5, 0.9, \dots\}\) traces out the whole predictive distribution.

## Monotonicity[#](#monotonicity "Link to this heading")

In ****quantile regression**** the level is the ****tilting parameter**** of the pinball loss. Estimated quantiles
should be ****monotonically increasing**** in \(\tau\) — when a lower level’s forecast exceeds a higher
one’s, that is ****quantile crossing****, an error to constrain away.

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Regression](254-quantile-regression.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html)

---

> **Hint**
> ****More in Risk & Probabilistic Forecasting****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Regression](254-quantile-regression.html) · [Return Distribution](225-return-distribution.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Quantile Level](https://insightful-data-lab.com/2025/08/22/quantile-level/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)