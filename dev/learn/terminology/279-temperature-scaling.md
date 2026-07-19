🎯  ****Temperature Scaling****

# Temperature Scaling[#](#temperature-scaling "Link to this heading")

**A simple post-hoc method that rescales logits to calibrate probabilities.**

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

****Temperature scaling**** is the simplest ****post-hoc calibration**** method for neural nets — it divides the
****logits**** by a single learned scalar ****T**** before the ****softmax****, softening or sharpening the
probabilities:

\[\hat{Q} = \mathrm{softmax}(\mathbf{z} / T), \quad T > 0.\]

It is a one-parameter fix applied ****after**** training.

## What T does[#](#what-t-does "Link to this heading")

****T = 1**** leaves the model unchanged; ****T > 1**** makes predictions ****less confident**** (softer), which corrects
the ****overconfidence**** typical of modern networks; ****T < 1**** makes them sharper. T is fit on a ****held-out****
validation set by minimizing ****negative log-likelihood****.

## Why it’s popular[#](#why-it-s-popular "Link to this heading")

It is ****simple****, ****effective****, and crucially ****accuracy-preserving**** — dividing every logit by the same T
never changes the ****argmax****, so the decision boundary and accuracy are untouched. Its limit is
****expressiveness****: it can only rescale confidence uniformly, not fix region-specific miscalibration.

---

**Theme:** [Probability Calibration](index.html#term-theme-calibration)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Platt Scaling](280-platt-scaling.html) · [Isotonic Regression](281-isotonic-regression.html) · [Overconfident](284-overconfident.html) · [Confidence Level](285-confidence-level.html) · [Softmax Function](296-softmax-function.html) · [Underconfident](283-underconfident.html)

---

> **Hint**
> ****More in Probability Calibration****

[Adaptive ECE (Expected Calibration Error with Adaptive Binning)](275-adaptive-ece-expected-calibration-error-with-ada.html) · [Brier Score](418-brier-score.html) · [Calibration quality (Model Calibration)](419-calibration-quality-model-calibration.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Isotonic Regression](281-isotonic-regression.html) · [Maximum Calibration Error (MCE)](276-maximum-calibration-error-mce.html) · [Murphy’s Decomposition](278-murphy-s-decomposition.html) · [Overconfident](284-overconfident.html) · [Platt Scaling](280-platt-scaling.html) · [Reliability Curves (also called Calibration Curves)](416-reliability-curves-also-called-calibration-curve.html) · [Underconfident](283-underconfident.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Temperature Scaling](https://insightful-data-lab.com/2025/08/21/temperature-scaling/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)