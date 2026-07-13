📏  ****Model Score****

# Model Score[#](#model-score "Link to this heading")

**The raw numeric output a model assigns before thresholding.**

## What it is[#](#what-it-is "Link to this heading")

A ****model score**** is the ****continuous output**** a classifier assigns each example — a ****probability**** or
real-valued score of belonging to the ****positive**** class — **before** it becomes a hard label. Logistic
regression, random forests, and neural nets all emit scores.

## Score vs label[#](#score-vs-label "Link to this heading")

Turning a score into a ****decision**** requires a ****threshold**** — above it, positive; below, negative. The score
carries ****more**** information than the label: its ****ranking**** (are positives scored above negatives?) is what
threshold-free metrics like ****AUC**** measure, and its ****magnitude**** matters for ranking and prioritization.

## Score vs probability[#](#score-vs-probability "Link to this heading")

A score need not be a ****calibrated**** probability — a score of 0.9 doesn’t guarantee a 90% chance of being
positive unless the model is calibrated (e.g., via ****temperature**** or ****Platt scaling****). Use the raw score
for ****ranking****, the calibrated one for ****decisions**** that need real probabilities.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[ROC Curve (Receiver Operating Characteristic)](277-roc-curve-receiver-operating-characteristic.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Confidence Level](285-confidence-level.html) · [Log-Odds](295-log-odds.html) · [Sigmoid Function](297-sigmoid-function.html) · [Temperature Scaling](279-temperature-scaling.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Model Score](https://insightful-data-lab.com/2025/08/20/model-score/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)