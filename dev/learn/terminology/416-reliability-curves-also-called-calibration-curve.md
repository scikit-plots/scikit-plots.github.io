🎯  ****Reliability Curves (also called Calibration Curves)****

# Reliability Curves (also called Calibration Curves)[#](#reliability-curves-also-called-calibration-curves "Link to this heading")

**Plots of predicted probability against observed frequency.**

## What it is[#](#what-it-is "Link to this heading")

A ****reliability curve**** (or calibration curve / reliability diagram) is the ****visual**** check for calibration —
it plots ****predicted probability**** on the x-axis against the ****observed frequency**** of the outcome on the
y-axis. A perfectly calibrated model traces the ****diagonal**** \(y = x\).

## Reading it[#](#reading-it "Link to this heading")

Points ****below**** the diagonal mean the model is ****overconfident**** (accuracy falls short of its confidence);
points ****above**** mean it is ****underconfident****. A companion ****histogram**** of confidences shows whether
predictions pile up at the ****extremes**** — a hallmark of overconfident networks.

## Why it complements ECE[#](#why-it-complements-ece "Link to this heading")

A single ECE number can’t say ****where**** miscalibration happens, and two models with the ****same**** ECE can have
very different curves. The reliability curve ****localizes**** the problem across the confidence range — and the
weighted gap between it and the diagonal ****is**** the ECE.

---

****Mind map — connected ideas****

> [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Overconfident](284-overconfident.html) · [Underconfident](283-underconfident.html) · [Confidence Level](285-confidence-level.html) · [Brier Score](418-brier-score.html) · [Temperature Scaling](279-temperature-scaling.html)

---

****More in Probability Calibration****

> [Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Temperature Scaling](279-temperature-scaling.html) · [Underconfident](283-underconfident.html)

---

**Theme:** [Probability Calibration](index.html#term-theme-calibration)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Reliability Curves (also called Calibration Curves)](https://insightful-data-lab.com/2025/08/19/reliability-curves-also-called-calibration-curves/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)