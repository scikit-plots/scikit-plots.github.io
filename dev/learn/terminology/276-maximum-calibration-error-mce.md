🎯  ****Maximum Calibration Error (MCE)****

# Maximum Calibration Error (MCE)[#](#maximum-calibration-error-mce "Link to this heading")

**The largest gap between confidence and accuracy across calibration bins.**

## What it is[#](#what-it-is "Link to this heading")

****Maximum Calibration Error**** reports the ****worst**** calibration gap rather than the average — the ****largest****
difference between accuracy and confidence over all bins:

\[\text{MCE} = \max\_{m}\,\big|\mathrm{acc}(B\_m) - \mathrm{conf}(B\_m)\big|.\]

Where ECE asks **how miscalibrated on average?**, MCE asks **how bad does it get?**

## When it matters[#](#when-it-matters "Link to this heading")

MCE is the right lens for ****safety-critical**** systems — medical, autonomous, financial — where a single
****badly**** miscalibrated confidence region can cause harm, even if the ****average**** looks fine. Lower is
better, as with ECE.

## Its limits[#](#its-limits "Link to this heading")

Like ECE it is ****binning-dependent**** (the answer shifts with bin count and scheme), and it is ****not a proper
scoring rule**** — a model can achieve low calibration error with ****trivial**** predictions, so MCE must be read
****alongside**** discrimination metrics, not alone.

---

****Mind map — connected ideas****

> [Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Confidence Level](285-confidence-level.html) · [Temperature Scaling](279-temperature-scaling.html) · [Risk-Based Decisions](286-risk-based-decisions.html) · [Overconfident](284-overconfident.html)

---

****More in Probability Calibration****

> [Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)

---

**Theme:** Probability Calibration  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Maximum Calibration Error (MCE)](https://insightful-data-lab.com/2025/08/22/maximum-calibration-error-mce/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)