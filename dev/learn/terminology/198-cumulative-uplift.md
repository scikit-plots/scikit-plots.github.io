🔗  ****Cumulative Uplift****

# Cumulative Uplift[#](#cumulative-uplift "Link to this heading")

**The running incremental effect as more of the targeted population is treated.**

## What it is[#](#what-it-is "Link to this heading")

****Cumulative uplift**** is the ****running total of the incremental effect**** — extra responses,
conversions or purchases — gained by targeting customers ranked by uplift score. It says how much
total benefit has accrued up to a given proportion of the population, and it is the quantity on the
****Y-axis of the Qini curve****.

## The formula[#](#the-formula "Link to this heading")

For the top \(k\%\) of customers ranked by uplift score,

\[\text{Cumulative Uplift}(k) = \sum\_{i=1}^{kN} \left( y\_i^{\text{treatment}} - y\_i^{\text{control}} \right),\]

summing the treated-minus-untreated outcome over those customers, where \(N\) is the total count.

## A worked example[#](#a-worked-example "Link to this heading")

Rank 1,000 customers (split treatment/control) by uplift score and walk down the deciles. The ****top
10%**** gives 18 treatment versus 12 control conversions — ****+6****, so cumulative uplift is ****6****. The
****top 20%**** adds 32 versus 24 — ****+8****, bringing it to ****14****. The ****top 30%**** adds ****+10****, reaching
****24****. At 100% the final cumulative uplift equals the ****total incremental benefit****.

## Why it matters, and its cousins[#](#why-it-matters-and-its-cousins "Link to this heading")

The curve shows ****where uplift concentrates**** (the top 20% may hold most of the benefit), fixes the
****optimal targeting cutoff**** (stop where it flattens), and ****evaluates models**** — steep early is
good, flat like the random baseline is bad. Its family: ****incremental gain**** is the per-group step,
****cumulative uplift**** (the cumulative incremental gain) the running sum, ****total incremental benefit****
the final value, and the ****Qini curve**** their plot.

---

****Mind map — connected ideas****

> [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Incremental Gain](200-incremental-gain.html) · [Total Incremental Benefit (TIB)](201-total-incremental-benefit-tib.html) · [Qini Curve](203-qini-curve.html) · [Uplift Score](204-uplift-score.html) · [Uplift Models](205-uplift-models.html)

---

****More in Causal Inference & Uplift****

> [AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html) · [Qini Curve](203-qini-curve.html)

---

**Theme:** Causal Inference & Uplift  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Cumulative Uplift](https://insightful-data-lab.com/2025/08/23/cumulative-uplift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)