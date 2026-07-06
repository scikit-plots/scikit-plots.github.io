🎯  ****Expected Calibration Error (ECE)****

# Expected Calibration Error (ECE)[#](#expected-calibration-error-ece "Link to this heading")

**The average gap between confidence and accuracy across probability bins.**

## What it is[#](#what-it-is "Link to this heading")

****Expected Calibration Error**** summarizes miscalibration in ****one number**** — the ****weighted average**** gap
between a model’s ****confidence**** and its ****accuracy****, taken over bins of predictions:

\[\text{ECE} = \sum\_{m=1}^{M} \frac{|B\_m|}{N}\,\big|\mathrm{acc}(B\_m) - \mathrm{conf}(B\_m)\big|.\]

Geometrically, it is the average distance of the ****calibration curve**** from the diagonal.

## How it’s computed[#](#how-it-s-computed "Link to this heading")

Predictions are grouped into ****bins**** by confidence; in each bin you compare the ****fraction correct****
(accuracy) to the ****average confidence****, and weight each bin’s gap by its ****size****. The result is
****bounded**** in [0, 1] and easy to report — the standard scalar for comparing calibration.

## Its caveats[#](#its-caveats "Link to this heading")

ECE is ****bin-dependent**** (the number and placement of bins move the value) and, being an ****average****, it can
****hide**** a badly miscalibrated region behind well-behaved bins. It is also ****not a proper scoring rule**** — a
trivial model can score low — so it is read with ****reliability curves**** and ****Brier score****. Its variants are
****MCE**** and ****Adaptive ECE****.

---

****Mind map — connected ideas****

> [Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Confidence Level](285-confidence-level.html) · [Temperature Scaling](279-temperature-scaling.html) · [Brier Score](418-brier-score.html)

---

****More in Probability Calibration****

> [Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)

---

**Theme:** [Probability Calibration](index.html#term-theme-calibration)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Expected Calibration Error (ECE)](https://insightful-data-lab.com/2025/08/19/expected-calibration-error-ece/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)