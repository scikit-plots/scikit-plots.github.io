💡  ****Classification Models****

# Classification Models[#](#classification-models "Link to this heading")

**Models that assign inputs to discrete categories.**

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

****Classification models**** predict a ****discrete category**** — spam or not, which digit, which disease. The
output is a ****class label**** (often via a probability over classes), and the model learns a ****decision
boundary**** that separates the classes in feature space.

## The landscape[#](#the-landscape "Link to this heading")

They range from ****linear**** ones (****logistic regression****, linear SVM) to ****non-linear**** ones (****decision
trees****, random forests, ****neural networks****, kernel SVMs). Tasks split into ****binary**** (two classes),
****multiclass**** (one of many), and ****multilabel**** (several at once).

## How they’re judged[#](#how-they-re-judged "Link to this heading")

Because the target is categorical, classification uses metrics like ****accuracy****, ****precision / recall****,
****F1****, and ****AUC**** — not squared error — and its ****loss functions**** are typically ****cross-entropy**** rather
than a distance. The right metric depends on ****class balance**** and error costs.

---

**Theme:** [AI & ML Concepts](index.html#term-theme-concepts)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Regression Models](309-regression-models.html) · [Linear Models](341-linear-models.html) · [Logistic Regression](292-logistic-regression.html) · [Decision Trees](340-decision-trees.html) · [Binary Classification](293-binary-classification.html) · [Multiclass Classification](311-multiclass-classification.html)

---

> **Hint**
> ****More in AI & ML Concepts****

[AI (Artificial Intelligence)](143-ai-artificial-intelligence.html) · [Computer Vision (CV)](321-computer-vision-cv.html) · [Decision Trees](340-decision-trees.html) · [Linear Models](341-linear-models.html) · [LLMs (Large Language Models)](158-llms-large-language-models.html) · [Logistic Regression](292-logistic-regression.html) · [Machine Learning (ML)](144-machine-learning-ml.html) · [Medical AI](145-medical-ai.html) · [Natural Language Processing (NLP)](322-natural-language-processing-nlp.html) · [Neural Networks](287-neural-networks.html) · [Regression Models](309-regression-models.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Target Variable](236-target-variable.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Classification Models](https://insightful-data-lab.com/2025/08/21/classification-models/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)