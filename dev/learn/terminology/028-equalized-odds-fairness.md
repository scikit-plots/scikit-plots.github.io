⚖️  ****Equalized Odds (Fairness)****

# Equalized Odds (Fairness)[#](#equalized-odds-fairness "Link to this heading")

**Requires equal true-positive and false-positive rates across groups.**

## What it is[#](#what-it-is "Link to this heading")

****Equalized odds**** requires a classifier to have the ****same true-positive rate and
the same false-positive rate**** across groups. Formally,

\[P(\hat{Y}=1 \mid Y=y, A=a) = P(\hat{Y}=1 \mid Y=y, A=b)
\quad \forall\, y \in \{0,1\},\ \forall\, a, b.\]

So among those who truly are positive (\(Y=1\)) every group is recognised at the
same rate, and among those who truly are negative (\(Y=0\)) every group is
wrongly flagged at the same rate.

## Where it sits among fairness criteria[#](#where-it-sits-among-fairness-criteria "Link to this heading")

This is the ****separation**** criterion, \(\hat{Y} \perp A \mid Y\) — the prediction
is independent of group once you condition on the truth. It is the strictest of the
error-rate criteria: equalized odds = ****equal opportunity**** (equal TPR) **plus** equal
FPR.

## Example[#](#example "Link to this heading")

A loan model approves qualified men at TPR 80% but qualified women at TPR 60%, and
wrongly approves unqualified men at FPR 20% but unqualified women at FPR 30%. Both
rates differ by group, so equalized odds is violated on both counts.

## The catch[#](#the-catch "Link to this heading")

Like the other criteria, equalized odds collides with ****predictive parity**** when base
rates differ (the impossibility theorem), and enforcing it can cost overall accuracy
— so practitioners often target **approximate** equalized odds within a tolerance.

## Limitations[#](#limitations "Link to this heading")

* Hard to satisfy exactly, especially with unequal base rates.
* Trades off against accuracy; usually relaxed rather than enforced exactly.

## In code[#](#in-code "Link to this heading")

```
from fairlearn.metrics import equalized_odds_difference

eod = equalized_odds_difference(y_true, y_pred, sensitive_features=A)  # 0 = parity

```

---

**Theme:** [Fairness & Calibration](index.html#term-theme-fairness)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Equal Opportunity (Fairness)](029-equal-opportunity-fairness.html) · [Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html) · [Predictive Parity (Calibration)](027-predictive-parity-calibration.html)

---

> **Hint**
> ****More in Fairness & Calibration****

[Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html) · [Equal Opportunity (Fairness)](029-equal-opportunity-fairness.html) · [Fairness Guardrails](351-fairness-guardrails.html) · [Fairness parity](372-fairness-parity.html) · [Four-Fifths (80%) Rule](189-four-fifths-80-rule.html) · [Predictive Parity (Calibration)](027-predictive-parity-calibration.html) · [Selection Rate](390-selection-rate.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Equalized Odds (Fairness)](https://insightful-data-lab.com/2025/08/29/equalized-odds-fairness/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)