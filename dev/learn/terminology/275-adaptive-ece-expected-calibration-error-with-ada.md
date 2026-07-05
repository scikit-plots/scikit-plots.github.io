🎯  ****Adaptive ECE (Expected Calibration Error with Adaptive Binning)****

# Adaptive ECE (Expected Calibration Error with Adaptive Binning)[#](#adaptive-ece-expected-calibration-error-with-adaptive-binning "Link to this heading")

**A calibration error using adaptive bins so each holds a similar count.**

## What it is[#](#what-it-is "Link to this heading")

****Adaptive ECE**** measures a classifier’s ****miscalibration**** — the gap between its ****confidence**** and its
actual ****accuracy**** — using ****equal-count**** bins. Like standard ****Expected Calibration Error****, it is a
weighted average of [|accuracy − confidence|](#id1) across bins:

\[\text{ECE} = \sum\_{m=1}^{M} \frac{|B\_m|}{N}\,\big|\mathrm{acc}(B\_m) - \mathrm{conf}(B\_m)\big|.\]

The “adaptive” part changes only ****how the bins are drawn****.

## The problem it fixes[#](#the-problem-it-fixes "Link to this heading")

Standard ECE uses ****fixed equal-width**** bins ([0.0–0.1], …), so when predictions ****cluster**** (modern nets
pile probabilities near 1.0), some bins hold ****few or zero**** samples and give ****noisy**** estimates. Adaptive
binning instead makes each bin hold ****the same number**** of predictions, so bin ****widths vary**** with the data.

## Why it helps[#](#why-it-helps "Link to this heading")

Equal-count bins yield a ****more stable, fairer**** calibration estimate on ****skewed**** predictions, where
equal-width ECE is unreliable. It shares ECE’s caveat, though: the result still depends on the ****number of
bins****, and neither is a ****proper scoring rule****.

---

****Mind map — connected ideas****

> [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Confidence Level](285-confidence-level.html) · [Temperature Scaling](279-temperature-scaling.html) · [Overconfident](284-overconfident.html) · [Underconfident](283-underconfident.html)

---

****More in Probability Calibration****

> [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)

---

**Theme:** Probability Calibration  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Adaptive ECE (Expected Calibration Error with Adaptive Binning)](https://insightful-data-lab.com/2025/08/22/adaptive-ece-expected-calibration-error-with-adaptive-binning/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)