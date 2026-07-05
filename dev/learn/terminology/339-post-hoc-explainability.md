🔍  ****Post-hoc Explainability****

# Post-hoc Explainability[#](#post-hoc-explainability "Link to this heading")

**Interpreting an already-trained model rather than building it interpretable.**

## What it is[#](#what-it-is "Link to this heading")

****Post-hoc explainability**** means explaining a model’s behaviour ****after training****, without changing
its internal structure — making ****black-box models**** (deep nets, ensembles, gradient boosting)
interpretable. **Post-hoc** means **after the fact**: you do not train the model to be interpretable, you
****analyse its outputs afterward****. It contrasts with ****intrinsically interpretable**** models (linear
regression, small decision trees) that are transparent by design.

## Why it matters[#](#why-it-matters "Link to this heading")

Many high-performing models are ****opaque****, yet users, regulators and businesses need to know ****why**** a
prediction was made — for ****debugging****, ****trust and transparency****, and ****compliance**** (finance,
healthcare, GDPR / AI Act).

## The techniques[#](#the-techniques "Link to this heading")

The toolkit spans ****feature importance**** (global permutation or gain-based, and local),
****surrogate models**** (a simple tree approximating the black box), the local methods ****LIME**** and
****SHAP****, ****visualisations**** — partial-dependence plots, ICE plots, and saliency maps / Grad-CAM for
images — and ****counterfactual explanations****. For a black-box loan model, SHAP might flag low income
and short employment, while a counterfactual says “two more years of employment would flip the
decision.”

## Limitations[#](#limitations "Link to this heading")

Post-hoc explanations are ****approximations**** of the true model logic, risk being ****misleading**** (the
faithfulness problem), can be ****computationally expensive****, and are ****diagnostic only**** — not a
substitute for fair training practices.

---

****Mind map — connected ideas****

> [SHAP (SHapley Additive exPlanations)](338-shap-shapley-additive-explanations.html) · [LIME (Local Interpretable Model-agnostic Explanations)](337-lime-local-interpretable-model-agnostic-explanat.html) · [Counterfactual Explanations](336-counterfactual-explanations.html) · [Decision Trees](340-decision-trees.html) · [Feature Values](188-feature-values.html) · [Discriminatory Power](185-discriminatory-power.html)

---

****More in Explainability & Governance****

> [Basel III](333-basel-iii.html) · [Counterfactual Explanations](336-counterfactual-explanations.html) · [Fair Lending laws](332-fair-lending-laws.html) · [High-Stakes Domains](334-high-stakes-domains.html) · [LIME (Local Interpretable Model-agnostic Explanations)](337-lime-local-interpretable-model-agnostic-explanat.html) · [SHAP (SHapley Additive exPlanations)](338-shap-shapley-additive-explanations.html)

---

**Theme:** Explainability & Governance  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Post-hoc Explainability](https://insightful-data-lab.com/2025/08/20/post-hoc-explainability/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)