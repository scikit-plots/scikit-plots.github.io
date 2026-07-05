🔗  ****Total Incremental Benefit (TIB)****

# Total Incremental Benefit (TIB)[#](#total-incremental-benefit-tib "Link to this heading")

**The total added benefit from treating a targeted population versus not.**

## What it is[#](#what-it-is "Link to this heading")

****Total incremental benefit (TIB)**** is the ****overall net gain**** from applying a treatment compared to
****not applying it at all**** — the absolute improvement an uplift strategy delivers across the whole
population. In uplift modelling it is the ****final value of the cumulative incremental gain curve****, at
100% of the targeted population.

## The formula[#](#the-formula "Link to this heading")

\[\text{TIB} = \sum\_{i=1}^{N} \left( y\_i^{\text{treat}} - y\_i^{\text{control}} \right),\]

summing the treated-minus-untreated outcome over the whole population \(N\). Expressed in money,
it becomes ****incremental conversions × profit per conversion****.

## A worked example[#](#a-worked-example "Link to this heading")

A promotion runs on 10,000 customers: the treatment group (5,000) makes 700 purchases (14%), the
control group (5,000) makes 500 (10%). That is ****200 incremental conversions****; at `$50` profit
each, the total incremental benefit is ****``$10,000``**** — 200 extra purchases the campaign genuinely
caused.

## Why it matters[#](#why-it-matters "Link to this heading")

TIB puts a single number on a campaign’s ****business value****. It feeds ROI directly —

\[\text{ROI} = \frac{\text{TIB} - \text{Campaign Cost}}{\text{Campaign Cost}},\]

and serves as a ****benchmark**** for comparing uplift models and a basis for ****budget allocation****, since
it reflects the true added impact rather than gross outcomes.

---

****Mind map — connected ideas****

> [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Incremental Gain](200-incremental-gain.html) · [Qini Curve](203-qini-curve.html) · [ROI (Return on Investment)](191-roi-return-on-investment.html) · [Incremental Revenue](193-incremental-revenue.html) · [Treatment Cost](192-treatment-cost.html)

---

****More in Causal Inference & Uplift****

> [AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)

---

**Theme:** Causal Inference & Uplift  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Total Incremental Benefit (TIB)](https://insightful-data-lab.com/2025/08/23/total-incremental-benefit-tib/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)