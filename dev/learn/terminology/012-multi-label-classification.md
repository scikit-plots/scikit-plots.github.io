📏  ****Multi-label Classification****

# Multi-label Classification[#](#multi-label-classification "Link to this heading")

**Tasks where each instance may carry several non-exclusive labels at once.**

## What it is[#](#what-it-is "Link to this heading")

In ****multi-label classification**** each sample can carry **several** labels at once.
This is different from ****multi-class**** classification, where every sample gets
exactly one label from a set. Here the labels are ****not mutually exclusive**** — the
model makes an independent yes/no decision for every class:

\[f : X \;\rightarrow\; \{0, 1\}^K,\]

so for \(K\) classes the output is a length-\(K\) vector of binary
decisions. A movie can be **Action + Comedy**, a news story **Politics + Economy**, a
patient **diabetic + hypertensive**, an image **dog + car + tree**.

## Multi-label vs multi-class[#](#multi-label-vs-multi-class "Link to this heading")

| Feature | Multi-class | Multi-label |
| --- | --- | --- |
| Labels per sample | Exactly one | One or more |
| Class exclusivity | Mutually exclusive | Independent |
| Output layer | Softmax (probabilities sum to 1) | Sigmoid (independent probability per class) |
| Loss | Categorical cross-entropy | Binary cross-entropy per class |

## How it’s modelled[#](#how-it-s-modelled "Link to this heading")

The network ends in a ****sigmoid**** per class rather than a single softmax, and each
output is thresholded independently. The loss is ****binary cross-entropy**** summed or
averaged over the \(K\) labels — effectively \(K\) coupled binary problems
sharing one backbone.

## How it’s scored[#](#how-it-s-scored "Link to this heading")

Because a prediction is a **set** of labels, the metrics differ from single-label
ones:

* ****Per-label precision / recall / F1****, then aggregated with ****micro****, ****macro****
  or ****weighted**** averaging.
* ****Hamming loss**** — the fraction of individual label slots that are wrong.
* ****Subset accuracy**** — strict: 1 only if **every** label of the sample is correct,
  else 0.
* ****Jaccard similarity**** — intersection over union of predicted and true label
  sets.

## Worked example[#](#worked-example "Link to this heading")

True labels for an image: \(\{\text{Cat}, \text{Dog}\}\); the model predicts
\(\{\text{Cat}, \text{Horse}\}\).

* Precision \(= 1/(1+1) = 0.5\) (Cat right, Horse is a false positive).
* Recall \(= 1/(1+1) = 0.5\) (Dog was missed — a false negative).
* Jaccard \(= |\{\text{Cat}\}| / |\{\text{Cat},\text{Dog},\text{Horse}\}| = 1/3 \approx 0.33\).

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Subset accuracy is harsh**** — one wrong label out of many zeroes the whole
  sample; report it alongside Hamming loss, not alone.
* ****Per-label thresholds**** — a single 0.5 cutoff is rarely optimal for every label;
  tune thresholds per class, especially under imbalance.
* ****Label imbalance and correlation**** — rare labels and co-occurring labels (Cat
  with Dog) are easy to under-predict; micro averaging will hide that, macro will
  expose it.

---

****Mind map — connected ideas****

> [Single-label Classification](014-single-label-classification.html) · [Micro F1](013-micro-f1.html) · [Macro F1](019-macro-f1.html) · [Micro AUROC](011-micro-auroc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)

---

**Theme:** Classification & Averaging Metrics  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Multi-label Classification](https://insightful-data-lab.com/2025/08/30/multi-label-classification/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)