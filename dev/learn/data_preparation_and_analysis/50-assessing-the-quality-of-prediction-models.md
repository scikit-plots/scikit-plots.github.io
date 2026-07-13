# Assessing the Quality of Prediction Models[#](#assessing-the-quality-of-prediction-models "Link to this heading")

****Stage 8 · 📊 Model Evaluation**** · Lesson 50 of 56 · **advanced**

[◀ Previous · Using Decision Trees to Explain Clustering Results](49-using-decision-trees-to-explain-clustering-results.html) · [Next · Binary Classification Models – Conceptual Framework and Evaluation Metrics ▶](51-binary-classification-models-conceptual-framework-and-evaluation-metrics.html) · [↑ Section](index.html)

## The essential question[#](#the-essential-question "Link to this heading")

A model has been built — a regression, a classifier, a tree. The question that decides whether anyone
should ****trust**** it is simple: ****how good is it?**** Model evaluation is the discipline of answering this
****rigorously****, with numbers rather than hope. It is the last stage of the workflow and, for
****scikit-plots**** especially, its centre of gravity — most of the library’s charts exist to
****visualise**** exactly these answers.

## It depends on the task[#](#it-depends-on-the-task "Link to this heading")

There is ****no single measure**** of quality, because it depends on the ****kind**** of prediction. For
****regression**** — predicting a number — quality means small errors, captured by measures like ****mean
squared error**** (MSE), its square-root ****RMSE****, ****mean absolute error**** (MAE), and the familiar
\(R^2\). For ****classification**** — predicting a class — it means getting labels right, captured by
****accuracy****, ****precision****, ****recall**** and the ****AUC**** of the lessons ahead. The right family of
metrics follows from the problem type.

## On held-out data[#](#on-held-out-data "Link to this heading")

One rule overrides all the metric choices: quality is measured on ****held-out test data****, never the
data the model was trained on. A model’s score on its ****training**** set flatters it — it may simply have
memorised those examples (the overfitting of Stage 4). Only performance on ****unseen**** data estimates
how the model will behave in the real world, which is the entire reason for the partitioning discipline
established earlier. This is the course’s standing warning, and it applies to every metric below.

## Match metric to goal[#](#match-metric-to-goal "Link to this heading")

Even within a task, the ****best**** metric depends on the ****business goal****. High accuracy can hide
disastrous behaviour on a ****rare**** but crucial class; a fraud detector that flags nothing is 99.9%
accurate and useless. So the metric must mirror what actually ****matters**** — catching positives,
avoiding false alarms, ranking well — and results should be judged against a sensible ****baseline****
rather than in the abstract. The remaining lessons build the concrete tools: the confusion matrix and
its metrics, ROC and lift curves, threshold tuning, and residual diagnostics.

> **Hint**
> ****Related lessons:**** [Binary Classification Models – Conceptual Framework and Evaluation Metrics](51-binary-classification-models-conceptual-framework-and-evaluation-metrics.html) · [Partitioning Observations to Train Objective Models](25-partitioning-observations-to-train-objective-models.html) · [AUC–ROC Curve: Evaluating Classification Model Performance](55-auc-roc-curve-evaluating-classification-model-performance.html) · [Assessing Model Fit in Logistic Regression](40-assessing-model-fit-in-logistic-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/16/assessing-the-quality-of-prediction-models/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: advanced](../../_tags/level-advanced.html)