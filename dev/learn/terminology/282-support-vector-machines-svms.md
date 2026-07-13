💡  ****Support Vector Machines (SVMs)****

# Support Vector Machines (SVMs)[#](#support-vector-machines-svms "Link to this heading")

**Classifiers that find the maximum-margin boundary, optionally via kernels.**

## What it is[#](#what-it-is "Link to this heading")

A ****support vector machine**** is a ****supervised max-margin**** algorithm for classification (and, as SVR,
regression). It finds the ****optimal separating hyperplane**** — the decision boundary that ****maximizes the
margin****, the distance to the nearest points of each class. Developed from the work of Vapnik and
Chervonenkis, with the soft-margin form due to Cortes & Vapnik (1995).

\[\mathbf{w}^\top \mathbf{x} + b = 0 \quad\text{(the separating hyperplane)}\]

## Margin and support vectors[#](#margin-and-support-vectors "Link to this heading")

The ****support vectors**** are the training points closest to the boundary — and they ****alone**** define it
(remove any other point and nothing changes). A ****hard margin**** separates the classes perfectly; a
****soft margin**** tolerates some violations through ****slack variables**** \(\xi\_i\), with the penalty
****C**** trading margin width against misclassification (large `C` → stricter, narrower margin; small
`C` → wider, more tolerant). The objective minimizes

\[\frac{1}{2}\|\mathbf{w}\|^2 + C \sum\_i \xi\_i,\]

where the per-point cost is the ****hinge loss**** \(\max(0,\, 1 - y\_i(\mathbf{w}^\top \mathbf{x}\_i + b))\).

## The kernel trick[#](#the-kernel-trick "Link to this heading")

When data is not linearly separable, a ****kernel**** maps it into a higher-dimensional space where it is —
****without ever computing the coordinates****, using only pairwise dot products. Common kernels are
****linear****, ****polynomial****, ****RBF**** (the most popular) and ****sigmoid****; the choice trades accuracy
against complexity and compute.

## When to use it[#](#when-to-use-it "Link to this heading")

SVMs are strong on ****high-dimensional**** data (text, images, bioinformatics), ****resilient to noise****, and
guard against overfitting, but are ****expensive on very large datasets**** and sensitive to kernel choice.

```
from sklearn.svm import SVC

clf = SVC(kernel="rbf", C=1.0)   # RBF kernel, soft margin
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)

```

---

**Theme:** [AI & ML Concepts](index.html#term-theme-concepts)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Logistic Regression](292-logistic-regression.html) · [Neural Networks](287-neural-networks.html) · [Decision Trees](340-decision-trees.html) · [Linear Models](341-linear-models.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [Discriminatory Power](185-discriminatory-power.html)

---

> **Hint**
> ****More in AI & ML Concepts****

[AI (Artificial Intelligence)](143-ai-artificial-intelligence.html) · [Classification Models](294-classification-models.html) · [Computer Vision (CV)](321-computer-vision-cv.html) · [Decision Trees](340-decision-trees.html) · [Linear Models](341-linear-models.html) · [LLMs (Large Language Models)](158-llms-large-language-models.html) · [Logistic Regression](292-logistic-regression.html) · [Machine Learning (ML)](144-machine-learning-ml.html) · [Medical AI](145-medical-ai.html) · [Natural Language Processing (NLP)](322-natural-language-processing-nlp.html) · [Neural Networks](287-neural-networks.html) · [Regression Models](309-regression-models.html) · [Target Variable](236-target-variable.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Support Vector Machines (SVMs)](https://insightful-data-lab.com/2025/08/21/support-vector-machines-svms/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)