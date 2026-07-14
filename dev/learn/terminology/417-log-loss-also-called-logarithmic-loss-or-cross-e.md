📏  ****Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)****

# Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)[#](#log-loss-also-called-logarithmic-loss-or-cross-entropy-loss "Link to this heading")

**A loss penalising confident wrong probabilistic predictions.**

## What it is[#](#what-it-is "Link to this heading")

****Log loss**** (logarithmic loss / ****cross-entropy**** loss) scores a probabilistic classifier by the ****negative
log-likelihood**** of the true labels — how surprised the model is by reality. For binary labels:

\[\text{LogLoss} = -\frac{1}{N}\sum\_{i=1}^{N}\big[y\_i \log \hat{p}\_i + (1 - y\_i)\log(1 - \hat{p}\_i)\big].\]

It runs from ****0**** (perfect) to ****∞****.

## Its defining trait[#](#its-defining-trait "Link to this heading")

The ****logarithm**** makes log loss punish ****confident**** mistakes ****brutally**** — predicting 0.01 for a true
positive costs far more than predicting 0.4. This ****exponential**** penalty for overconfidence is exactly why
it is the standard ****training objective**** for logistic regression and neural nets, which optimize it directly.

## When to use it (and a caveat)[#](#when-to-use-it-and-a-caveat "Link to this heading")

Reach for log loss whenever ****calibrated**** probabilities matter — fraud, diagnosis, risk. It ****requires****
genuine probabilities, so raw ****logits**** must be squashed (softmax / sigmoid) first, and it is harsher on
overconfidence than the ****Brier score****. Compare a model’s log loss to the ****base-rate**** log loss to confirm
it adds value.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Brier Score](418-brier-score.html) · [Expected Calibration Error (ECE)](415-expected-calibration-error-ece.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Softmax Function](296-softmax-function.html) · [Logistic Regression](292-logistic-regression.html) · [Strictly Proper Scoring Rules](234-strictly-proper-scoring-rules.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](https://insightful-data-lab.com/2025/08/19/log-loss-also-called-logarithmic-loss-or-cross-entropy-loss/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)