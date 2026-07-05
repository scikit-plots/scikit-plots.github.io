🎯  ****Underconfident****

# Underconfident[#](#underconfident "Link to this heading")

**When predicted probabilities are less extreme than the true accuracy warrants.**

## What it is[#](#what-it-is "Link to this heading")

A model is ****underconfident**** when its predicted probabilities are ****too low**** for its actual accuracy — it
hedges, claiming less certainty than it deserves. A model that is only 80% confident but 90% accurate is
underconfident.

## How to spot it[#](#how-to-spot-it "Link to this heading")

On a ****reliability diagram****, underconfident points fall ****above**** the diagonal (accuracy > confidence), and
predictions ****cluster near 0.5**** rather than committing. It is the mirror image of overconfidence, and a
single model can be ****overconfident in some ranges and underconfident in others****.

## Why it matters[#](#why-it-matters "Link to this heading")

Though it feels “safe,” underconfidence ****wastes**** the model’s discriminative signal — useful, correct
predictions get muted probabilities, so ****thresholds**** and ****risk-based decisions**** under-trigger. Like
overconfidence, it is fixed by ****recalibration****.

---

****Mind map — connected ideas****

> [Overconfident](284-overconfident.html) · [Confidence Level](285-confidence-level.html) · [Classification Probability](231-classification-probability.html) · [Risk-Based Decisions](286-risk-based-decisions.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Sigmoid Function](297-sigmoid-function.html)

---

****More in Probability Calibration****

> [Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html)

---

**Theme:** Probability Calibration  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Underconfident](https://insightful-data-lab.com/2025/08/21/underconfident/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)