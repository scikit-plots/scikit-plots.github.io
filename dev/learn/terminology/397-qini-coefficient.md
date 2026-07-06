🔗  ****Qini Coefficient****

# Qini Coefficient[#](#qini-coefficient "Link to this heading")

**A normalised summary of the Qini curve measuring uplift-model performance.**

## What it is[#](#what-it-is "Link to this heading")

The ****Qini coefficient**** is a single-number ****performance metric for uplift models**** — their
equivalent of AUC. Where AUC asks how well a classifier predicts **who will buy**, the Qini coefficient
asks how well an uplift model ranks people by **who will buy because of the treatment**.

## How it’s computed[#](#how-it-s-computed "Link to this heading")

Sort customers by predicted uplift (descending), split them into deciles or percentiles, and plot the
****Qini curve**** — cumulative incremental response (treatment minus control) against the proportion
targeted. The coefficient is the ****normalised area between the model’s curve and the random-targeting
diagonal****.

## The formula[#](#the-formula "Link to this heading")

\[\text{Qini} = \frac{\int\_0^1 \left( G\_{\text{model}}(x) - G\_{\text{random}}(x) \right) dx}{\int\_0^1 \left( G\_{\text{perfect}}(x) - G\_{\text{random}}(x) \right) dx}.\]

It ranges from ****0 to 1**** — 0.5 and up is decent, and close to 1 is excellent separation.

## A worked example, and cousins[#](#a-worked-example-and-cousins "Link to this heading")

Targeting the top 20%, a random selection might yield +100 purchases while the model yields ****+300**** —
the model curve sits above random, and the coefficient quantifies that gap. It is the ****normalised****
form of the ****AUUC**** (raw area under the uplift curve), which makes it comparable across datasets:
ROC-AUC is to classification what the Qini coefficient is to uplift.

---

****Mind map — connected ideas****

> [Qini Curve](203-qini-curve.html) · [Uplift Score](204-uplift-score.html) · [AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Uplift Models](205-uplift-models.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Total Incremental Benefit (TIB)](201-total-incremental-benefit-tib.html)

---

****More in Causal Inference & Uplift****

> [AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Curve](203-qini-curve.html)

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Qini Coefficient](https://insightful-data-lab.com/2025/08/19/qini-coefficient/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)