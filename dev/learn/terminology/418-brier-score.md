🎯  ****Brier Score****

# Brier Score[#](#brier-score "Link to this heading")

**The mean squared error of probabilistic predictions.**

## What it is[#](#what-it-is "Link to this heading")

The ****Brier score**** is the ****mean squared error**** of probabilistic predictions — the average squared gap
between the predicted probability and the ****actual**** (0/1) outcome:

\[\text{BS} = \frac{1}{N}\sum\_{i=1}^{N} (p\_i - y\_i)^2.\]

****Lower**** is better, with ****0**** perfect. It is a single sample-level number for binary or multiclass problems.

## Why it’s special[#](#why-it-s-special "Link to this heading")

Unlike ECE, the Brier score is a ****strictly proper scoring rule**** — it is minimized only by ****honest****
probabilities, and by ****Murphy’s decomposition**** it splits into ****calibration**** plus ****refinement**** terms. So
a low Brier score means the model is ****both**** well-calibrated ****and**** discriminating.

## Its limitation[#](#its-limitation "Link to this heading")

Because it ****blends**** calibration and discrimination, the Brier score can’t tell you ****which**** is lacking — a
sharp-but-miscalibrated model and a calibrated-but-vague one can score similarly. That is why it is reported
****alongside**** ECE and reliability curves, which isolate the calibration piece.

---

**Theme:** [Probability Calibration](index.html#term-theme-calibration)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Strictly Proper Scoring Rules](234-strictly-proper-scoring-rules.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html)

---

> **Hint**
> ****More in Probability Calibration****

[Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Brier Score](https://insightful-data-lab.com/2025/08/19/brier-score/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)