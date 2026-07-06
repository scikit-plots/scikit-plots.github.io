🔍  ****SHAP (SHapley Additive exPlanations)****

# SHAP (SHapley Additive exPlanations)[#](#shap-shapley-additive-explanations "Link to this heading")

**Attributing a prediction to features using Shapley values from game theory.**

## What it is[#](#what-it-is "Link to this heading")

****SHAP (SHapley Additive exPlanations)**** is a unified framework for explaining the predictions of
****any**** machine-learning model, built on ****Shapley values**** from cooperative game theory (Lloyd
Shapley, 1953). Treat each feature as a ****player**** in a game and the prediction as the ****payout****;
SHAP assigns each feature a ****fair share**** of the contribution — how much it pushed the prediction up
or down from a baseline.

## The additive decomposition[#](#the-additive-decomposition "Link to this heading")

A prediction is decomposed ****exactly**** into per-feature contributions,

\[\hat{y} = \phi\_0 + \sum\_{i=1}^{M} \phi\_i,\]

where \(\phi\_0\) is the ****baseline**** (the average prediction when no features are known) and
\(\phi\_i\) is the ****SHAP value**** of feature \(i\).

## A worked example[#](#a-worked-example "Link to this heading")

A loan-approval probability of ****0.8**** against a baseline of ****0.5**** might break down as Income
****+0.2****, Employment history ****+0.1****, Debt ratio ****0**** and Age ****0****, so
\(0.8 = 0.5 + 0.2 + 0.1\). Income and employment history raised the approval; the other features
were neutral.

## Strengths, visuals, limits[#](#strengths-visuals-limits "Link to this heading")

SHAP is ****consistent**** (a fair allocation), works both ****locally and globally****, and is
****model-agnostic or model-specific**** (tree models, deep nets, linear), with ****force****, ****summary**** and
****dependence**** plots. Its costs: exact Shapley values are ****exponential**** in the number of features
(SHAP uses approximations), explanations can be ****misused**** out of context, and ****correlated
features**** are hard to attribute fairly.

## In practice[#](#in-practice "Link to this heading")

```
import shap
import xgboost as xgb
from sklearn.datasets import fetch_california_housing

X, y = fetch_california_housing(return_X_y=True, as_frame=True)
model = xgb.XGBRegressor().fit(X, y)

explainer = shap.Explainer(model, X)
shap_values = explainer(X)

shap.summary_plot(shap_values, X)   # global feature importance
shap.plots.force(shap_values[0])    # local explanation for one row

```

---

****Mind map — connected ideas****

> [LIME (Local Interpretable Model-agnostic Explanations)](337-lime-local-interpretable-model-agnostic-explanat.html) · [Counterfactual Explanations](336-counterfactual-explanations.html) · [Post-hoc Explainability](339-post-hoc-explainability.html) · [Feature Values](188-feature-values.html) · [Discriminatory Power](185-discriminatory-power.html) · [Deep Ensembles](335-deep-ensembles.html)

---

****More in Explainability & Governance****

> [Basel III](333-basel-iii.html) · [Counterfactual Explanations](336-counterfactual-explanations.html) · [Fair Lending laws](332-fair-lending-laws.html) · [High-Stakes Domains](334-high-stakes-domains.html) · [LIME (Local Interpretable Model-agnostic Explanations)](337-lime-local-interpretable-model-agnostic-explanat.html) · [Post-hoc Explainability](339-post-hoc-explainability.html)

---

**Theme:** [Explainability & Governance](index.html#term-theme-xai)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [SHAP (SHapley Additive exPlanations)](https://insightful-data-lab.com/2025/08/20/shap-shapley-additive-explanations/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)