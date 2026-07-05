🎯  ****Calibration quality (Model Calibration)****

# Calibration quality (Model Calibration)[#](#calibration-quality-model-calibration "Link to this heading")

**How well predicted probabilities match real-world frequencies.**

## What it is[#](#what-it-is "Link to this heading")

****Calibration quality**** describes how well a model’s predicted ****probabilities**** match ****reality**** — a
well-calibrated model that says “80% confident” is right about ****80%**** of the time. It is a property of the
****probabilities****, separate from whether the model is ****accurate****.

## Calibration vs accuracy[#](#calibration-vs-accuracy "Link to this heading")

A model can be ****accurate**** yet badly calibrated (right often, but its confidence numbers are meaningless) or
****calibrated**** yet weakly ****discriminating****. The two are distinct axes, which is why ****proper scores**** like
log loss and Brier — which reward ****both**** — are read together with pure calibration measures.

## Why it matters[#](#why-it-matters "Link to this heading")

Whenever probabilities feed ****decisions**** — thresholds, expected-value calculations, downstream systems —
calibration is essential, and modern deep networks are typically ****overconfident****. It is measured with
****ECE****, ****reliability curves****, and ****Brier score****, and repaired ****post-hoc**** with ****temperature****,
****Platt****, or ****isotonic**** scaling.

---

****Mind map — connected ideas****

> [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Overconfident](284-overconfident.html) · [Confidence Level](285-confidence-level.html) · [Brier Score](418-brier-score.html)

---

****More in Probability Calibration****

> [Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)

---

**Theme:** Probability Calibration  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Calibration quality (Model Calibration)](https://insightful-data-lab.com/2025/08/19/calibration-model-calibration/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)