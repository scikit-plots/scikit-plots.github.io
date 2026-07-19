🎯  ****Isotonic Regression****

# Isotonic Regression[#](#isotonic-regression "Link to this heading")

**A nonparametric, monotonic fit used to calibrate predicted probabilities.**

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

****Isotonic regression**** is a ****non-parametric**** calibration method that fits a ****monotonic**** (non-decreasing)
****step function**** mapping raw scores to calibrated probabilities — it assumes only that a higher score should
mean a higher probability, nothing about the shape.

## Its strength[#](#its-strength "Link to this heading")

Because it is ****model-free****, it can correct ****arbitrary**** monotonic miscalibration that parametric methods
(Platt, temperature) miss — and with ****enough**** calibration data it typically ****outperforms**** them. It is
also a general tool for ****monotonic regression****, not only calibration.

## Its weakness[#](#its-weakness "Link to this heading")

That flexibility makes it ****prone to overfitting**** when calibration data is ****scarce****, and the
piecewise-constant fit is less smooth. Unlike temperature scaling it does ****not**** guarantee the model’s
accuracy is preserved.

---

**Theme:** [Probability Calibration](index.html#term-theme-calibration)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Platt Scaling](280-platt-scaling.html) · [Temperature Scaling](279-temperature-scaling.html) · [Confidence Level](285-confidence-level.html) · [Overconfident](284-overconfident.html) · [Regression Models](309-regression-models.html) · [Underconfident](283-underconfident.html)

---

> **Hint**
> ****More in Probability Calibration****

[Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Isotonic Regression](https://insightful-data-lab.com/2025/08/21/isotonic-regression/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)