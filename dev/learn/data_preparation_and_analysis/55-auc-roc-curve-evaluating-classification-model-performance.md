# AUC–ROC Curve: Evaluating Classification Model Performance[#](#aucroc-curve-evaluating-classification-model-performance "Link to this heading")

****Stage 8 · 📊 Model Evaluation**** · Lesson 55 of 56 · **advanced**

[◀ Previous · Identifying Outliers Using Residuals and Studentized Residuals](54-identifying-outliers-using-residuals-and-studentized-residuals.html) · [Next · Lift Analysis for Direct Mail Campaigns: Concept, Process, and Business Value ▶](56-lift-analysis-for-direct-mail-campaigns-concept-process-and-business-value.html)

## Every threshold at once[#](#every-threshold-at-once "Link to this heading")

Threshold optimisation showed that a classifier is really a ****family**** of operating points, one per
cutoff. The ****ROC curve**** (Receiver Operating Characteristic) displays that ****entire family in one
picture****. For every possible threshold it plots the ****true positive rate**** (recall — the share of
actual positives caught) against the ****false positive rate**** (the share of actual negatives wrongly
flagged). Sweeping the threshold from strictest to loosest traces the curve from the bottom-left
corner (nothing called positive) to the top-right (everything called positive).

## Reading the curve[#](#reading-the-curve "Link to this heading")

The curve’s ****shape**** grades the model. The ****ideal**** point is the ****top-left**** corner — all positives
caught, no false alarms — so the closer the curve bows toward it, the better the classifier. The
****diagonal**** line is the signature of ****random guessing****: any model whose curve hugs it has no
discriminating power, and a curve **below** the diagonal is systematically worse than chance (invert its
predictions and it becomes useful). Where curves for competing models are compared, the one bowing
further toward the corner wins — and scikit-plots draws exactly this chart, one line per model or
class.

## The area underneath[#](#the-area-underneath "Link to this heading")

The curve compresses into one number: the ****AUC****, the ****area under the curve****, ranging from ****0.5****
(random) to ****1.0**** (perfect). It has an elegant probabilistic meaning: the AUC is the probability
that a ****randomly chosen positive**** case receives a ****higher score**** than a randomly chosen negative
one — a pure measure of how well the model ****ranks****. As rough benchmarks, 0.9+ is excellent, 0.8–0.9
good, 0.7–0.8 acceptable; the retention model of Stage 6 reported its quality in exactly these terms.

## Strengths and cautions[#](#strengths-and-cautions "Link to this heading")

AUC’s virtue is being ****threshold-free****: it judges the scores themselves, before any cutoff is
chosen, which makes it ideal for ****comparing models**** and more informative than accuracy on
****imbalanced**** data. Its caution is the mirror image: because it averages over ****all**** thresholds —
including ones you would never operate at — a model can post a fine AUC yet disappoint at **your**
operating point, and AUC says nothing about whether the probabilities are ****calibrated****. Use it to
pick the ranker; use the threshold lesson to pick the cutoff; and, when only the top of the ranking
will ever be acted on, use the ****lift**** analysis of the final lesson.

> **See also**
> ****Related lessons:**** [Binary Classification Model Evaluation and Threshold Optimization](53-binary-classification-model-evaluation-and-threshold-optimization.html) · [Binary Classification Models – Conceptual Framework and Evaluation Metrics](51-binary-classification-models-conceptual-framework-and-evaluation-metrics.html) · [Lift Analysis for Direct Mail Campaigns: Concept, Process, and Business Value](56-lift-analysis-for-direct-mail-campaigns-concept-process-and-business-value.html) · [Interpreting and Assessing a Forward-Selection Logistic Regression Model for College Student Retention](43-interpreting-and-assessing-a-forward-selection-logistic-regression-model-for-college-student-retention.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/16/auc-roc-curve-evaluating-classification-model-performance/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: advanced](../../_tags/level-advanced.html)