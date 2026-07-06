⚖️  ****Predictive Parity (Calibration)****

# Predictive Parity (Calibration)[#](#predictive-parity-calibration "Link to this heading")

**A fairness criterion requiring equal positive predictive value (precision) across groups.**

## What it is[#](#what-it-is "Link to this heading")

****Predictive parity****, also called ****calibration by group****, asks that a score mean
the same thing regardless of group: among everyone assigned the same predicted
probability, the actual positive rate is equal across groups. Formally, for a
predicted probability \(\hat{p}\),

\[P(Y=1 \mid \hat{P}=\hat{p}, A=a) = P(Y=1 \mid \hat{P}=\hat{p}, A=b)
\quad \forall\, a, b,\]

with \(Y\) the true outcome, \(\hat{P}\) the score and \(A\) the
protected attribute. In plain terms: if two people from different groups are both
scored at 70%, then about 70% of **each** group should actually turn out positive.

## Where it sits among fairness criteria[#](#where-it-sits-among-fairness-criteria "Link to this heading")

This is the ****sufficiency**** criterion, \(Y \perp A \mid \hat{Y}\) — the label is
independent of group once you condition on the score. It is the counterpart to the
****independence**** criterion (demographic parity) and the ****separation**** criterion
(equalized odds / equal opportunity).

## Example[#](#example "Link to this heading")

A loan model scores a set of applicants at 0.7 predicted default probability. If 70%
of group A but only 50% of group B actually default, the score 0.7 does not carry the
same meaning across groups — predictive parity is violated.

## The catch: it conflicts with the others[#](#the-catch-it-conflicts-with-the-others "Link to this heading")

When the two groups have ****different base rates****, predictive parity and equalized
odds ****cannot both hold**** (except in degenerate cases). This is the **fairness
impossibility theorem** (Kleinberg–Chouldechova): independence, separation and
sufficiency are mutually incompatible whenever base rates differ, so you must choose
which to prioritise.

## Limitations[#](#limitations "Link to this heading")

* A model can be perfectly calibrated yet still distribute ****errors**** unevenly — it
  says nothing about false-positive or false-negative rates.
* Small groups look mis-calibrated from variance alone; check with enough data.

## In code[#](#in-code "Link to this heading")

```
from sklearn.calibration import calibration_curve

# compare reliability curves per group
for a in groups:
    frac_pos, mean_pred = calibration_curve(y_true[A == a], y_score[A == a], n_bins=10)

```

---

****Mind map — connected ideas****

> [Equalized Odds (Fairness)](028-equalized-odds-fairness.html) · [Equal Opportunity (Fairness)](029-equal-opportunity-fairness.html) · [Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html)

---

****More in Fairness & Calibration****

> [Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html) · [Equal Opportunity (Fairness)](029-equal-opportunity-fairness.html) · [Equalized Odds (Fairness)](028-equalized-odds-fairness.html) · [Fairness Guardrails](351-fairness-guardrails.html) · [Fairness parity](372-fairness-parity.html) · [Four-Fifths (80%) Rule](189-four-fifths-80-rule.html) · [Selection Rate](390-selection-rate.html)

---

**Theme:** [Fairness & Calibration](index.html#term-theme-fairness)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Predictive Parity (Calibration)](https://insightful-data-lab.com/2025/08/29/predictive-parity-calibration/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)