💡  ****Logistic Regression****

# Logistic Regression[#](#logistic-regression "Link to this heading")

**A linear model mapping features to a probability via the logistic function.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Logistic regression**** is a ****linear model for binary classification**** that predicts the ****probability****
of the positive class. Despite **regression** in the name it ****classifies****: it outputs a probability, then
a ****threshold**** (usually 0.5) assigns the label.

## The sigmoid and log-odds[#](#the-sigmoid-and-log-odds "Link to this heading")

It passes a linear combination through the ****sigmoid****, squashing any real number into \((0, 1)\):

\[\sigma(z) = \frac{1}{1 + e^{-z}}, \qquad z = \theta\_0 + \boldsymbol{\theta}^\top \mathbf{x}.\]

Equivalently, the ****log-odds**** (logit) — the natural log of the odds \(p/(1-p)\) — is ****linear in the
features****, which is what makes the coefficients interpretable:

\[\log \frac{p}{1 - p} = \theta\_0 + \boldsymbol{\theta}^\top \mathbf{x}.\]

## Fitting by maximum likelihood[#](#fitting-by-maximum-likelihood "Link to this heading")

Coefficients are chosen to ****maximize the likelihood**** of the observed labels — equivalently, to minimize
the ****log loss**** (negative log-likelihood), a ****convex**** objective solved by gradient-based methods:

\[\mathcal{L} = -\sum\_i \big[\, y\_i \log \hat{p}\_i + (1 - y\_i)\log(1 - \hat{p}\_i) \,\big].\]

## Assumptions and multiclass[#](#assumptions-and-multiclass "Link to this heading")

It assumes a ****linear log-odds**** relationship, ****few extreme outliers****, and enough data; it extends to
several classes via ****one-vs-rest**** or ****multinomial (softmax)****. Simple, fast and interpretable, it is a
workhorse for spam, fraud and medical diagnosis.

```
from sklearn.linear_model import LogisticRegression

clf = LogisticRegression(max_iter=1000)
clf.fit(X_train, y_train)
proba = clf.predict_proba(X_test)[:, 1]   # P(class 1)

```

---

**Theme:** [AI & ML Concepts](index.html#term-theme-concepts)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Linear Models](341-linear-models.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Neural Networks](287-neural-networks.html) · [Decision Trees](340-decision-trees.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [Discriminatory Power](185-discriminatory-power.html)

---

> **Hint**
> ****More in AI & ML Concepts****

[AI (Artificial Intelligence)](143-ai-artificial-intelligence.html) · [Classification Models](294-classification-models.html) · [Computer Vision (CV)](321-computer-vision-cv.html) · [Decision Trees](340-decision-trees.html) · [Linear Models](341-linear-models.html) · [LLMs (Large Language Models)](158-llms-large-language-models.html) · [Machine Learning (ML)](144-machine-learning-ml.html) · [Medical AI](145-medical-ai.html) · [Natural Language Processing (NLP)](322-natural-language-processing-nlp.html) · [Neural Networks](287-neural-networks.html) · [Regression Models](309-regression-models.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Target Variable](236-target-variable.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Logistic Regression](https://insightful-data-lab.com/2025/08/21/logistic-regression/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)