🔗  ****AUUC (Area Under the Uplift Curve)****

# AUUC (Area Under the Uplift Curve)[#](#auuc-area-under-the-uplift-curve "Link to this heading")

**A summary of uplift-model quality as the area under its uplift curve.**

## What it is[#](#what-it-is "Link to this heading")

****AUUC (Area Under the Uplift Curve)**** is the ****cumulative incremental gain**** of an uplift model,
integrated over the ****entire population**** — the total area under the uplift curve (incremental gain
against population proportion). It is an ****overall**** measure of how well the model ranks individuals
by uplift.

## How it’s computed[#](#how-it-s-computed "Link to this heading")

Sort customers by predicted uplift score (descending) and partition them into bins such as deciles.
For each bin, compute the uplift as the treatment response rate minus the control rate,

\[\text{Uplift}\_k = \frac{y^{T}\_k}{n^{T}\_k} - \frac{y^{C}\_k}{n^{C}\_k},\]

then plot cumulative uplift against the fraction of the population targeted; ****AUUC is the area under
that curve****.

## The formula[#](#the-formula "Link to this heading")

\[\text{AUUC} = \int\_0^1 U(x) \, dx,\]

where \(U(x)\) is the cumulative uplift at population fraction \(x\). A strong model traces a
steep curve — targeting the top 20% might capture 80% of all achievable incremental responses — while
random targeting hugs the baseline near zero.

## AUUC versus the Qini coefficient[#](#auuc-versus-the-qini-coefficient "Link to this heading")

The two are close cousins. ****AUUC**** is a ****raw**** area, so it depends on dataset size and response
rate — much like raw accuracy. The ****Qini coefficient**** is a ****normalised**** AUUC, scaled between
random and perfect targeting, which makes it ****comparable across datasets**** — much like AUC. Both are
core metrics for evaluating uplift models.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Qini Coefficient](397-qini-coefficient.html) · [Uplift Curve](303-uplift-curve.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Total Incremental Benefit (TIB)](201-total-incremental-benefit-tib.html) · [Uplift Score](204-uplift-score.html) · [Uplift](424-uplift.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html) · [Qini Curve](203-qini-curve.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [AUUC (Area Under the Uplift Curve)](https://insightful-data-lab.com/2025/08/19/auuc-area-under-the-uplift-curve/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)