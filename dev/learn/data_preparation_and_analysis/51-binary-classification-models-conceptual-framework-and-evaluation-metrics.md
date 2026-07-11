# Binary Classification Models – Conceptual Framework and Evaluation Metrics[#](#binary-classification-models-conceptual-framework-and-evaluation-metrics "Link to this heading")

****Stage 8 · 📊 Model Evaluation**** · Lesson 51 of 56 · **advanced**

[◀ Previous · Assessing the Quality of Prediction Models](50-assessing-the-quality-of-prediction-models.html) · [Next · Nominal Classification Models: Model State and Evaluation Metrics ▶](52-nominal-classification-models-model-state-and-evaluation-metrics.html)

## Four kinds of outcome[#](#four-kinds-of-outcome "Link to this heading")

A binary classifier predicts one of two labels — ****positive**** or ****negative**** (churn / not, fraud /
not). Comparing its prediction to the truth, every case falls into one of ****four**** outcomes: a ****true
positive**** (predicted positive, really positive), a ****true negative**** (predicted negative, really
negative), a ****false positive**** (predicted positive, actually negative — a false alarm), and a ****false
negative**** (predicted negative, actually positive — a miss). These four counts are the raw material for
****every**** binary-classification metric.

## The confusion matrix[#](#the-confusion-matrix "Link to this heading")

Arranged in a 2×2 table — predicted versus actual — the four counts form the ****confusion matrix****, the
single most useful summary of a classifier’s behaviour. Its diagonal (****TP**** and ****TN****) holds the
****correct**** predictions; its off-diagonal (****FP**** and ****FN****) the ****errors****. Reading the matrix shows
not just ****how often**** the model is wrong, but ****in which direction**** — whether it tends to over-predict
or under-predict the positive class. scikit-plots draws it directly with a labelled confusion-matrix
plot.

## Metrics from the matrix[#](#metrics-from-the-matrix "Link to this heading")

The headline metrics are all ****ratios**** of these four counts, each answering a different question:

* ****Accuracy**** \(= \frac{TP + TN}{TP + TN + FP + FN}\) — overall, what fraction is correct?
* ****Precision**** \(= \frac{TP}{TP + FP}\) — of those ****predicted**** positive, how many truly are?
* ****Recall**** (sensitivity) \(= \frac{TP}{TP + FN}\) — of the ****actual**** positives, how many were caught?
* ****F1**** \(= 2 \cdot \frac{\text{precision} \cdot \text{recall}}{\text{precision} + \text{recall}}\) — the harmonic mean, balancing the two.

Precision and recall pull in ****opposite**** directions — catching more positives (higher recall) usually
means more false alarms (lower precision) — so F1 is a common single-number compromise.

## Which error costs more?[#](#which-error-costs-more "Link to this heading")

The crucial judgement is that the two errors are ****not equally bad****, and which matters more is
****domain-specific****. Missing a cancer diagnosis (a ****false negative****) is far graver than a false
alarm; flagging a legitimate transaction as fraud (a ****false positive****) annoys a customer but harms
less than letting fraud through. ****Accuracy**** alone hides this, and is especially ****misleading**** on
****imbalanced**** data — which is why precision, recall and the threshold-based tools of the next lessons
exist. The choice of which count to minimise is where evaluation meets the ****business goal****.

> **See also**
> ****Related lessons:**** [Assessing the Quality of Prediction Models](50-assessing-the-quality-of-prediction-models.html) · [Binary Classification Model Evaluation and Threshold Optimization](53-binary-classification-model-evaluation-and-threshold-optimization.html) · [AUC–ROC Curve: Evaluating Classification Model Performance](55-auc-roc-curve-evaluating-classification-model-performance.html) · [Nominal Classification Models: Model State and Evaluation Metrics](52-nominal-classification-models-model-state-and-evaluation-metrics.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/16/binary-classification-models-conceptual-framework-and-evaluation-metrics/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: advanced](../../_tags/level-advanced.html)