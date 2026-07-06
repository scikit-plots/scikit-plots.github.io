⚖️  ****Demographic Parity (Statistical Parity)****

# Demographic Parity (Statistical Parity)[#](#demographic-parity-statistical-parity "Link to this heading")

**Requires the positive-prediction rate to be equal across groups, independent of the true label.**

## What it is[#](#what-it-is "Link to this heading")

****Demographic parity**** (or ****statistical parity****) asks that the model’s positive
decisions be ****independent of the protected attribute**** — every group receives a
positive prediction at the same rate:

\[P(\hat{Y}=1 \mid A=a) = P(\hat{Y}=1 \mid A=b) \quad \forall\, a, b.\]

Crucially it looks only at the prediction \(\hat{Y}\), never at the true label
\(Y\).

## Where it sits among fairness criteria[#](#where-it-sits-among-fairness-criteria "Link to this heading")

This is the ****independence**** criterion, \(\hat{Y} \perp A\). It is the simplest
and most label-blind of the three families — independence (here), ****separation****
(equalized odds / equal opportunity) and ****sufficiency**** (predictive parity).

## Measuring it[#](#measuring-it "Link to this heading")

Two common gap metrics, with \(a\) the disadvantaged group:

\[\text{DPD} = P(\hat{Y}=1 \mid A=a) - P(\hat{Y}=1 \mid A=b), \qquad
\text{DPR} = \frac{P(\hat{Y}=1 \mid A=a)}{P(\hat{Y}=1 \mid A=b)}.\]

The ratio connects to the legal ****four-fifths (80%) rule****: a selection-rate ratio
below 0.8 is treated as evidence of adverse impact.

## Example[#](#example "Link to this heading")

A hiring model marks 60% of men but only 40% of women as interview-worthy. The rates
differ, so demographic parity is violated (and the 0.40 / 0.60 ≈ 0.67 ratio fails the
four-fifths rule).

## The catch[#](#the-catch "Link to this heading")

Because it ignores the label, demographic parity can be satisfied only by
****approving unqualified members**** of one group to match rates — which may raise risk
and clash with equal opportunity, equalized odds and predictive parity.

## Limitations[#](#limitations "Link to this heading")

* Ignores genuine differences in qualification (the true label).
* Conflicts with the error-rate and calibration criteria when base rates differ.

## In code[#](#in-code "Link to this heading")

```
from fairlearn.metrics import demographic_parity_difference, demographic_parity_ratio

dpd = demographic_parity_difference(y_true, y_pred, sensitive_features=A)
dpr = demographic_parity_ratio(y_true, y_pred, sensitive_features=A)

```

---

****Mind map — connected ideas****

> [Equal Opportunity (Fairness)](029-equal-opportunity-fairness.html) · [Equalized Odds (Fairness)](028-equalized-odds-fairness.html) · [Predictive Parity (Calibration)](027-predictive-parity-calibration.html)

---

****More in Fairness & Calibration****

> [Equal Opportunity (Fairness)](029-equal-opportunity-fairness.html) · [Equalized Odds (Fairness)](028-equalized-odds-fairness.html) · [Fairness Guardrails](351-fairness-guardrails.html) · [Fairness parity](372-fairness-parity.html) · [Four-Fifths (80%) Rule](189-four-fifths-80-rule.html) · [Predictive Parity (Calibration)](027-predictive-parity-calibration.html) · [Selection Rate](390-selection-rate.html)

---

**Theme:** [Fairness & Calibration](index.html#term-theme-fairness)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Demographic Parity (Statistical Parity)](https://insightful-data-lab.com/2025/08/29/demographic-parity-statistical-parity/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)