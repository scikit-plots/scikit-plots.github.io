🎯  ****Murphy's Decomposition****

# Murphy’s Decomposition[#](#murphy-s-decomposition "Link to this heading")

**A breakdown of a probabilistic score into calibration and refinement parts.**

## What it is[#](#what-it-is "Link to this heading")

****Murphy’s decomposition**** (1973) splits a ****proper scoring rule**** — classically the ****Brier score**** — into
three interpretable pieces:

\[\text{Brier} = \text{Reliability} - \text{Resolution} + \text{Uncertainty}.\]

It reveals **why** a probabilistic forecast scores as it does.

## The three terms[#](#the-three-terms "Link to this heading")

****Reliability**** is the ****calibration**** error (how far forecast probabilities sit from observed frequencies —
****lower**** is better); ****resolution**** is how much the forecasts ****vary**** from the base rate to ****separate****
outcomes (****higher**** is better); ****uncertainty**** is the ****irreducible**** variance of the event itself,
independent of the model.

## Why it matters[#](#why-it-matters "Link to this heading")

It shows a good score needs ****both**** good calibration ****and**** good resolution — a perfectly calibrated model
that always predicts the base rate has ****zero**** reliability error but ****zero**** resolution, and is useless. It
is the theoretical reason calibration metrics like ****ECE**** tell only ****half**** the story.

---

**Theme:** [Probability Calibration](index.html#term-theme-calibration)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Strictly Proper Scoring Rules](234-strictly-proper-scoring-rules.html) · [Confidence Level](285-confidence-level.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Temperature Scaling](279-temperature-scaling.html)

---

> **Hint**
> ****More in Probability Calibration****

[Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Murphy’s Decomposition](https://insightful-data-lab.com/2025/08/21/murphys-decomposition/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)