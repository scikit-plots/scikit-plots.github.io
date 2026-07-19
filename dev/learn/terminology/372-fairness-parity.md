⚖️  ****Fairness parity****

# Fairness parity[#](#fairness-parity "Link to this heading")

**Equalising a chosen metric across protected groups.**

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

****Fairness parity**** is the family of ****group-fairness**** criteria that demand some metric be ****equal across****
demographic groups — that the model treat protected groups ****comparably****. Which metric you equalize defines
the flavor of parity.

## The main flavors[#](#the-main-flavors "Link to this heading")

****Demographic (statistical) parity**** equalizes the ****positive-outcome rate**** across groups; ****equal
opportunity**** equalizes the ****true-positive rate**** (recall) among those who ****qualify****; ****equalized odds****
equalizes ****both**** TPR and FPR; ****predictive parity**** equalizes ****precision****. Each is measured as a
****difference**** or a ****ratio**** between groups.

## Why it’s hard[#](#why-it-s-hard "Link to this heading")

The different parities ****conflict**** — impossibility results show you generally ****can’t**** satisfy all at once
(the ****COMPAS**** debate turned on predictive parity holding while equalized odds failed). Enforcing any parity
also usually ****costs accuracy****, so teams choose the criterion that fits the ****harm**** they most need to
prevent. The ****four-fifths (80%) rule**** is a common legal threshold.

---

**Theme:** [Fairness & Calibration](index.html#term-theme-fairness)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Selection Rate](390-selection-rate.html) · [Recall](423-recall.html) · [Fairness Guardrails](351-fairness-guardrails.html) · [Fair Lending laws](332-fair-lending-laws.html) · [High-Stakes Domains](334-high-stakes-domains.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html)

---

> **Hint**
> ****More in Fairness & Calibration****

[Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html) · [Equal Opportunity (Fairness)](029-equal-opportunity-fairness.html) · [Equalized Odds (Fairness)](028-equalized-odds-fairness.html) · [Fairness Guardrails](351-fairness-guardrails.html) · [Four-Fifths (80%) Rule](189-four-fifths-80-rule.html) · [Predictive Parity (Calibration)](027-predictive-parity-calibration.html) · [Selection Rate](390-selection-rate.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Fairness parity](https://insightful-data-lab.com/2025/08/19/fairness-parity/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)