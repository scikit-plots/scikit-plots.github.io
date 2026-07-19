📉  ****Prediction Intervals (PI)****

# Prediction Intervals (PI)[#](#prediction-intervals-pi "Link to this heading")

**A range expected to contain the outcome with a stated probability.**

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

A ****prediction interval**** is a range \([\,\text{lower},\ \text{upper}\,]\) expected to contain the
****future observation**** with a stated probability — its ****nominal coverage****, e.g. 90%. It is typically
built from a ****pair of quantiles****, the \((1-\alpha)/2\) and \((1+\alpha)/2\) levels (the 5th and
95th percentiles for 90% coverage):

\[\big[\, \hat{Q}\_{(1-\alpha)/2},\ \ \hat{Q}\_{(1+\alpha)/2} \,\big]
\quad\Rightarrow\quad \text{nominal coverage } 1-\alpha.\]

## Coverage vs width[#](#coverage-vs-width "Link to this heading")

Quality trades ****coverage**** — does the empirical fraction of actuals landing inside match the nominal
level? — against ****width / sharpness**** — narrower is more useful, but only if coverage holds. (A PI is
about a **future value**, distinct from a ****confidence interval****, which is about a **parameter**.)

## Calibrating them[#](#calibrating-them "Link to this heading")

****Conformal prediction**** is a model-agnostic wrapper that adjusts interval width on a held-out
****calibration**** set to guarantee the target coverage in ****finite samples****, under mild assumptions.

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Regression](254-quantile-regression.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Strictly Proper Scoring Rules](234-strictly-proper-scoring-rules.html)

---

> **Hint**
> ****More in Risk & Probabilistic Forecasting****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Return Distribution](225-return-distribution.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Prediction Intervals (PI)](https://insightful-data-lab.com/2025/08/22/prediction-intervals-pi/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)