🎯  ****Overconfident****

# Overconfident[#](#overconfident "Link to this heading")

**When predicted probabilities are more extreme than the true accuracy warrants.**

## What it is[#](#what-it-is "Link to this heading")

A model is ****overconfident**** when its predicted probabilities are ****too high**** for its actual accuracy — it
claims more certainty than it earns. A model that is 99% confident but only 90% accurate is overconfident.

## How to spot it[#](#how-to-spot-it "Link to this heading")

On a ****reliability diagram****, overconfident points fall ****below**** the diagonal (accuracy < confidence), and
the histogram piles predictions near ****1.0****. Modern deep networks are frequently overconfident, having
“memorized” training data and carried that certainty to new inputs; ****log loss**** flags it by punishing
confident-wrong predictions heavily.

## Why it’s dangerous[#](#why-it-s-dangerous "Link to this heading")

Overconfidence is a ****safety**** hazard in high-stakes settings — an overconfident medical or fraud model
triggers costly actions on cases it has wrong. It is corrected ****post-hoc**** with methods like temperature
scaling, Platt scaling or isotonic regression.

---

**Theme:** [Probability Calibration](index.html#term-theme-calibration)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Underconfident](283-underconfident.html) · [Confidence Level](285-confidence-level.html) · [Classification Probability](231-classification-probability.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Risk-Based Decisions](286-risk-based-decisions.html) · [Softmax Function](296-softmax-function.html)

---

> **Hint**
> ****More in Probability Calibration****

[Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Overconfident](https://insightful-data-lab.com/2025/08/21/overconfident/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)