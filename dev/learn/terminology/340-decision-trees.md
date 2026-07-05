💡  ****Decision Trees****

# Decision Trees[#](#decision-trees "Link to this heading")

**Models that split data on feature thresholds to reach predictions.**

## What it is[#](#what-it-is "Link to this heading")

A ****decision tree**** is a supervised-learning algorithm that splits data into branches by ****feature
values****, forming a tree. Each ****internal node**** is a decision (a feature and a threshold) and each
****leaf**** a prediction (a class label or a number) — think of it as a flowchart: ask questions, follow
branches, reach a prediction. It comes in two flavours: ****classification trees**** (discrete labels) and
****regression trees**** (continuous values).

## How it learns, and splitting[#](#how-it-learns-and-splitting "Link to this heading")

Training is recursive: start with all data at the ****root****, evaluate candidate ****splits**** for each
feature, keep the split that best separates the data (minimises impurity), and repeat until a
****stopping rule**** (max depth, minimum samples per leaf). Classification trees split by ****Gini
impurity**** or ****entropy**** (information gain); regression trees by ****MSE reduction****. The Gini impurity
at a node is

\[G = 1 - \sum\_{k} p\_k^2,\]

where \(p\_k\) is the proportion of class \(k\) at that node.

## Strengths and weaknesses[#](#strengths-and-weaknesses "Link to this heading")

Trees are ****easy to interpret and visualise****, handle ****mixed numeric and categorical**** features,
capture ****nonlinear boundaries and interactions****, and need no feature scaling. But a deep tree
****overfits****, is ****unstable**** (a small data change reshapes it), splits ****greedily**** (it can miss the
global optimum), and is ****weaker alone**** than an ensemble.

## From one tree to many[#](#from-one-tree-to-many "Link to this heading")

****Pruning**** cuts back branches to curb overfitting; ****random forests**** bag many trees; and
****gradient-boosted trees**** (XGBoost, LightGBM, CatBoost) build trees sequentially to correct earlier
errors.

```
from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier, export_text

X, y = load_iris(return_X_y=True)
tree = DecisionTreeClassifier(max_depth=3).fit(X, y)

print(export_text(tree, feature_names=["sepal_length", "sepal_width",
                                       "petal_length", "petal_width"]))

```

---

****Mind map — connected ideas****

> [Post-hoc Explainability](339-post-hoc-explainability.html) · [Deep Ensembles](335-deep-ensembles.html) · [Uplift Random Forests](302-uplift-random-forests.html) · [SHAP (SHapley Additive exPlanations)](338-shap-shapley-additive-explanations.html) · [Discriminatory Power](185-discriminatory-power.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html)

---

****More in AI & ML Concepts****

> [AI (Artificial Intelligence)](143-ai-artificial-intelligence.html) · [Classification Models](294-classification-models.html) · [Computer Vision (CV)](321-computer-vision-cv.html) · [Linear Models](341-linear-models.html) · [LLMs (Large Language Models)](158-llms-large-language-models.html) · [Logistic Regression](292-logistic-regression.html) · [Machine Learning (ML)](144-machine-learning-ml.html) · [Medical AI](145-medical-ai.html) · [Natural Language Processing (NLP)](322-natural-language-processing-nlp.html) · [Neural Networks](287-neural-networks.html) · [Regression Models](309-regression-models.html) · [Support Vector Machines (SVMs)](282-support-vector-machines-svms.html) · [Target Variable](236-target-variable.html)

---

**Theme:** AI & ML Concepts  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Decision Trees](https://insightful-data-lab.com/2025/08/20/decision-trees/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)