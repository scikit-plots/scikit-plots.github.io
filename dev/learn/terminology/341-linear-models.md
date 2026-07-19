💡  ****Linear Models****

# Linear Models[#](#linear-models "Link to this heading")

**Models predicting from a weighted sum of features.**

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

A ****linear model**** predicts from a ****weighted sum**** of the input features, optionally passed through a link
function:

\[\hat{y} = \mathbf{w}^\top \mathbf{x} + b.\]

Its defining trait is that it is ****linear in the parameters****, which makes it simple, fast, and highly
****interpretable****.

## Both tasks[#](#both-tasks "Link to this heading")

The family spans ****regression**** (****linear regression****, ridge, lasso) and ****classification**** (****logistic
regression****, linear SVM), where the linear combination is squashed by a ****sigmoid**** or ****softmax**** into
probabilities. In every case the learned ****weights**** show each feature’s direction and strength.

## Strengths and limits[#](#strengths-and-limits "Link to this heading")

Linear models are ****data-efficient****, ****cheap**** to train and serve, and ****transparent**** — but they can only
capture ****linear**** relationships unless you add ****interactions**** or feature transforms. They are the natural
****baseline**** against which more complex models must justify themselves.

---

**Theme:** [AI & ML Concepts](index.html#term-theme-concepts)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Logistic Regression](292-logistic-regression.html) · [Classification Models](294-classification-models.html) · [Regression Models](309-regression-models.html) · [Neural Networks](287-neural-networks.html) · [Loss Functions](289-loss-functions.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html)

---

> **Hint**
> ****More in AI & ML Concepts****

[AI (Artificial Intelligence)](143-ai-artificial-intelligence.html) · [Classification Models](294-classification-models.html) · [Computer Vision (CV)](321-computer-vision-cv.html) · [Decision Trees](340-decision-trees.html) · [LLMs (Large Language Models)](158-llms-large-language-models.html) · [Logistic Regression](292-logistic-regression.html) · [Machine Learning (ML)](144-machine-learning-ml.html) · [Medical AI](145-medical-ai.html) · [Natural Language Processing (NLP)](322-natural-language-processing-nlp.html) · [Neural Networks](287-neural-networks.html) · [Regression Models](309-regression-models.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Target Variable](236-target-variable.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Linear Models](https://insightful-data-lab.com/2025/08/20/linear-models/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)