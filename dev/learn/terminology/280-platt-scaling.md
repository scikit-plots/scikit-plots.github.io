🎯  ****Platt Scaling****

# Platt Scaling[#](#platt-scaling "Link to this heading")

**Fitting a logistic function to scores to produce calibrated probabilities.**

## What it is[#](#what-it-is "Link to this heading")

****Platt scaling**** calibrates a classifier by fitting a ****logistic (sigmoid)**** function on its raw scores,
mapping them to probabilities:

\[\hat{Q} = \sigma(a\,z + b).\]

The two parameters ****a**** and ****b**** are fit by ****negative log-likelihood**** on a validation set. It was invented
by John Platt for ****SVMs****.

## How it relates[#](#how-it-relates "Link to this heading")

It is a ****parametric**** method that assumes a ****sigmoid****-shaped miscalibration. ****Temperature scaling**** is
essentially its ****one-parameter, multi-class**** special case (fixing the slope and dropping the offset), so
the two are close cousins.

## When to use it[#](#when-to-use-it "Link to this heading")

Platt scaling is a solid default for ****binary**** classifiers with ****monotonic**** score miscalibration and
limited calibration data, since two parameters rarely overfit — but if the true miscalibration isn’t
sigmoid-shaped, a more flexible method like ****isotonic regression**** fits better.

---

****Mind map — connected ideas****

> [Temperature Scaling](279-temperature-scaling.html) · [Isotonic Regression](281-isotonic-regression.html) · [Sigmoid Function](297-sigmoid-function.html) · [Logistic Regression](292-logistic-regression.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Confidence Level](285-confidence-level.html)

---

****More in Probability Calibration****

> [Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)

---

**Theme:** [Probability Calibration](index.html#term-theme-calibration)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Platt Scaling](https://insightful-data-lab.com/2025/08/21/platt-scaling/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)