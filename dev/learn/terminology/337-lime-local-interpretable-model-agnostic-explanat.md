🔍  ****LIME (Local Interpretable Model-agnostic Explanations)****

# LIME (Local Interpretable Model-agnostic Explanations)[#](#lime-local-interpretable-model-agnostic-explanations "Link to this heading")

**Explaining a prediction by fitting a simple local surrogate model.**

## What it is[#](#what-it-is "Link to this heading")

****LIME (Local Interpretable Model-agnostic Explanations)**** explains an ****individual prediction**** of
any ML model by approximating the black box ****locally**** — around the instance of interest — with a
simpler, interpretable model such as linear regression. It answers: **why did the model predict this
for this example?**

## How it works[#](#how-it-works "Link to this heading")

Six steps. Take the instance to explain; create ****perturbed samples**** by slightly varying its
features; collect the black-box ****predictions**** for those samples; ****weight**** each sample by proximity
to the original; fit a ****simple interpretable model**** (linear or tree) on that local neighbourhood;
and read its ****coefficients**** as the feature contributions.

## A worked example[#](#a-worked-example "Link to this heading")

For a ****denied**** loan, perturbing income, age and debt and fitting a local linear model might yield
Income ****-0.4****, high debt ****+0.3**** and employment length ****+0.1**** — low income plus high debt pushed
the decision toward denial.

## Strengths, limits, and SHAP[#](#strengths-limits-and-shap "Link to this heading")

LIME is ****model-agnostic****, sharply ****local**** (one prediction at a time) and ****human-friendly****, but
it is ****unstable**** (different perturbations give different explanations), only ****locally faithful****,
****computationally expensive****, and shaky under ****correlated features****. Against SHAP: LIME fits
****local surrogate**** models (faster, less stable) while SHAP uses ****game theory**** (local **and** global,
more stable, an exact decomposition).

## In practice[#](#in-practice "Link to this heading")

```
import lime.lime_tabular
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier

X, y = load_iris(return_X_y=True)
model = RandomForestClassifier().fit(X, y)

explainer = lime.lime_tabular.LimeTabularExplainer(
    X,
    feature_names=["f1", "f2", "f3", "f4"],
    class_names=["setosa", "versicolor", "virginica"],
    discretize_continuous=True,
)
exp = explainer.explain_instance(X[0], model.predict_proba, num_features=2)
exp.show_in_notebook()

```

---

**Theme:** [Explainability & Governance](index.html#term-theme-xai)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[SHAP (SHapley Additive exPlanations)](338-shap-shapley-additive-explanations.html) · [Counterfactual Explanations](336-counterfactual-explanations.html) · [Post-hoc Explainability](339-post-hoc-explainability.html) · [Feature Values](188-feature-values.html) · [Discriminatory Power](185-discriminatory-power.html) · [Deep Ensembles](335-deep-ensembles.html)

---

> **Hint**
> ****More in Explainability & Governance****

[Basel III](333-basel-iii.html) · [Counterfactual Explanations](336-counterfactual-explanations.html) · [Fair Lending laws](332-fair-lending-laws.html) · [High-Stakes Domains](334-high-stakes-domains.html) · [Post-hoc Explainability](339-post-hoc-explainability.html) · [SHAP (SHapley Additive exPlanations)](338-shap-shapley-additive-explanations.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [LIME (Local Interpretable Model-agnostic Explanations)](https://insightful-data-lab.com/2025/08/20/lime-local-interpretable-model-agnostic-explanations/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)