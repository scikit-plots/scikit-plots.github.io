💡  ****Machine Learning (ML)****

# Machine Learning (ML)[#](#machine-learning-ml "Link to this heading")

**Algorithms that learn patterns from data rather than being explicitly programmed.**

## What it is[#](#what-it-is "Link to this heading")

****Machine learning (ML)**** is the branch of AI in which computers ****learn patterns from data****
rather than following hand-written rules. You supply ****examples****, the model ****learns the
relationship between inputs (features) and outputs (labels)****, and once trained it
****predicts**** on new, unseen data.

## The core idea[#](#the-core-idea "Link to this heading")

Formally, ML fits a function

\[y = f(X) + \varepsilon,\]

where \(X\) are the input features, \(y\) the output, \(f\) the function learned
from data, and \(\varepsilon\) irreducible noise. Learning means estimating \(f\).

## The kinds of learning[#](#the-kinds-of-learning "Link to this heading")

****Supervised**** learning uses labelled data — ****regression**** for continuous targets (house
price), ****classification**** for categories (spam or not). ****Unsupervised**** learning works on
unlabelled data — ****clustering**** (customer segmentation) and ****dimensionality reduction**** (PCA,
embeddings). ****Semi-supervised**** mixes a little labelled with much unlabelled data (costly
medical labels). ****Reinforcement learning**** has an agent learn from rewards by acting in an
environment. And ****self-supervised**** learning predicts part of the input from the rest (masked
words) — the engine behind modern LLMs.

## Workflow and an example[#](#workflow-and-an-example "Link to this heading")

The lifecycle is collect → clean → choose a model → train → evaluate → deploy → ****monitor and
retrain****. Train a model on thousands of houses — 1,000 sqft and 3 rooms sold for `$250,000` —
and it learns that price rises with size and rooms, so a new 1,200 sqft, 4-room house is
predicted at roughly `$300,000`. ML matters because it ****automates pattern discovery**** at a
scale and complexity beyond hand-coded rules.

---

****Mind map — connected ideas****

> [AI (Artificial Intelligence)](143-ai-artificial-intelligence.html) · [Neural Networks](287-neural-networks.html) · [Customer Segmentation](033-customer-segmentation.html) · [Embedding](173-embedding.html) · [Regression Coefficient](090-regression-coefficient.html) · [Medical AI](145-medical-ai.html)

---

****More in AI & ML Concepts****

> [AI (Artificial Intelligence)](143-ai-artificial-intelligence.html) · [Classification Models](294-classification-models.html) · [Computer Vision (CV)](321-computer-vision-cv.html) · [Decision Trees](340-decision-trees.html) · [Linear Models](341-linear-models.html) · [LLMs (Large Language Models)](158-llms-large-language-models.html) · [Logistic Regression](292-logistic-regression.html) · [Medical AI](145-medical-ai.html) · [Natural Language Processing (NLP)](322-natural-language-processing-nlp.html) · [Neural Networks](287-neural-networks.html) · [Regression Models](309-regression-models.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Target Variable](236-target-variable.html)

---

**Theme:** [AI & ML Concepts](index.html#term-theme-concepts)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Machine Learning (ML)](https://insightful-data-lab.com/2025/08/24/machine-learning-ml/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)