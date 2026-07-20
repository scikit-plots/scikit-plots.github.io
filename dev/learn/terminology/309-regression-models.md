💡  ****Regression Models****

# Regression Models[#](#regression-models "Link to this heading")

**Models that predict continuous numeric outcomes.**

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

****Regression models**** predict a ****continuous number**** — a price, a temperature, a demand — rather than a
class. They learn a function mapping features to a ****real-valued**** output, fitting a curve or surface through
the data.

## The landscape[#](#the-landscape "Link to this heading")

The simplest is ****linear regression**** (a weighted sum of features), extending to ****polynomial****,
****regularized**** (ridge, lasso), tree-based (****random forests****, gradient boosting), and ****neural****
regressors. The same algorithm family often has both a classification and a regression form.

## How they’re judged[#](#how-they-re-judged "Link to this heading")

Regression is scored by how far predictions land from the truth — ****MSE / RMSE****, ****MAE****, and ****R²**** — and
trained to minimize a distance-based ****loss****. Because those errors use magnitudes, regression is
****sensitive to outliers****, which is why robust losses and metrics exist.

---

**Theme:** [AI & ML Concepts](index.html#term-theme-concepts)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Classification Models](294-classification-models.html) · [Linear Models](341-linear-models.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Loss Functions](289-loss-functions.html) · [Outlier](307-outlier.html) · [Neural Networks](287-neural-networks.html)

---

> **Hint**
> ****More in AI & ML Concepts****

[AI (Artificial Intelligence)](143-ai-artificial-intelligence.html) · [Classification Models](294-classification-models.html) · [Computer Vision (CV)](321-computer-vision-cv.html) · [Decision Trees](340-decision-trees.html) · [Linear Models](341-linear-models.html) · [LLMs (Large Language Models)](158-llms-large-language-models.html) · [Logistic Regression](292-logistic-regression.html) · [Machine Learning (ML)](144-machine-learning-ml.html) · [Medical AI](145-medical-ai.html) · [Natural Language Processing (NLP)](322-natural-language-processing-nlp.html) · [Neural Networks](287-neural-networks.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Target Variable](236-target-variable.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Regression Models](https://insightful-data-lab.com/2025/08/21/regression-models/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)