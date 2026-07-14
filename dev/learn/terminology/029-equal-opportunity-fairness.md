⚖️  ****Equal Opportunity (Fairness)****

# Equal Opportunity (Fairness)[#](#equal-opportunity-fairness "Link to this heading")

**Requires equal true-positive rates across groups — a relaxation of equalized odds.**

## What it is[#](#what-it-is "Link to this heading")

****Equal opportunity**** is the relaxation of equalized odds that equalises only the
****true-positive rate**** across groups:

\[P(\hat{Y}=1 \mid Y=1, A=a) = P(\hat{Y}=1 \mid Y=1, A=b) \quad \forall\, a, b.\]

Among the people who **should** receive a positive outcome, every group has the same
chance of being correctly recognised — so it targets ****false negatives not falling
disproportionately on a disadvantaged group****.

## Where it sits among fairness criteria[#](#where-it-sits-among-fairness-criteria "Link to this heading")

It is a one-sided ****separation**** criterion: equalized odds asks for equal TPR **and**
equal FPR; equal opportunity keeps only the TPR condition. It sits between the
label-blind ****demographic parity**** and the full ****equalized odds****.

## Example[#](#example "Link to this heading")

Among genuinely qualified applicants, a loan model approves 80% of men but only 60%
of women. Qualified women are recognised less often — equal opportunity is violated,
even if overall approval rates happen to match.

## The catch[#](#the-catch "Link to this heading")

Because it uses ground-truth labels it is more practical than demographic parity, but
it ignores ****false positives****, and when base rates differ across groups achieving it
can still reduce accuracy and may clash with predictive parity.

## Limitations[#](#limitations "Link to this heading")

* Says nothing about false-positive fairness (a group could be over-approved).
* Base-rate differences can force an accuracy trade-off.

## In code[#](#in-code "Link to this heading")

```
from fairlearn.metrics import true_positive_rate, MetricFrame

tpr_by_group = MetricFrame(metrics=true_positive_rate,
                           y_true=y_true, y_pred=y_pred,
                           sensitive_features=A).by_group

```

---

**Theme:** [Fairness & Calibration](index.html#term-theme-fairness)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Equalized Odds (Fairness)](028-equalized-odds-fairness.html) · [Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html) · [Predictive Parity (Calibration)](027-predictive-parity-calibration.html)

---

> **Hint**
> ****More in Fairness & Calibration****

[Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html) · [Equalized Odds (Fairness)](028-equalized-odds-fairness.html) · [Fairness Guardrails](351-fairness-guardrails.html) · [Fairness parity](372-fairness-parity.html) · [Four-Fifths (80%) Rule](189-four-fifths-80-rule.html) · [Predictive Parity (Calibration)](027-predictive-parity-calibration.html) · [Selection Rate](390-selection-rate.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Equal Opportunity (Fairness)](https://insightful-data-lab.com/2025/08/29/equal-opportunity-fairness/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)