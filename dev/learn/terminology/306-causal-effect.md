🔗  ****Causal Effect****

# Causal Effect[#](#causal-effect "Link to this heading")

**The change in an outcome caused by an intervention, all else equal.**

## What it is[#](#what-it-is "Link to this heading")

A ****causal effect**** is the change in an outcome ****directly caused**** by a change in a treatment,
****holding everything else constant**** — **if X changes, how much does Y change because of X, and not
because of other factors?** This is strictly stronger than ****correlation****, which shows only
association; causation means X ****produces**** the change in Y.

## The potential-outcomes view[#](#the-potential-outcomes-view "Link to this heading")

The ****Rubin causal model**** frames it with potential outcomes: \(Y(1)\) is a unit’s outcome if
treated and \(Y(0)\) its outcome if not, so the causal effect for that unit is
\(Y(1) - Y(0)\). Because we can only ever observe ****one**** of the two for any individual — the
****fundamental problem of causal inference**** — we estimate the ****average causal effect**** instead,
\(\text{ACE} = \mathbb{E}[Y(1) - Y(0)]\).

## Identifying it[#](#identifying-it "Link to this heading")

Every method exists to ****control for confounders**** — factors that influence both treatment and
outcome. The toolkit runs from ****randomised controlled trials**** and ****matching / stratification****
through ****regression adjustment****, ****instrumental variables**** and ****difference-in-differences****, up to
****causal graphs (DAGs)**** for reasoning about confounding formally.

## Why it matters[#](#why-it-matters "Link to this heading")

A causal effect is the ****true impact**** of one variable on another — what would change **if we
intervened**. It tests mechanisms in ****science****, tells ****policy**** whether an intervention actually
works, and measures the real business impact of ****marketing, pricing and product**** changes.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Treatment Effect](072-treatment-effect.html) · [Uplift](424-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html) · [Qini Curve](203-qini-curve.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Causal Effect](https://insightful-data-lab.com/2025/08/21/causal-effect/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)