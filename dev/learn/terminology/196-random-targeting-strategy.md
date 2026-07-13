🔗  ****Random Targeting Strategy****

# Random Targeting Strategy[#](#random-targeting-strategy "Link to this heading")

**A random-selection baseline used to benchmark uplift models.**

## What it is[#](#what-it-is "Link to this heading")

A ****random targeting strategy**** selects customers (or units) ****at random**** for an intervention — a
campaign, treatment or policy — instead of using a predictive or uplift model. In uplift modelling it
is the ****baseline**** against which a model is judged: if a model cannot beat random targeting, it is
not useful.

## The diagonal baseline[#](#the-diagonal-baseline "Link to this heading")

Treat a random proportion of the whole population — 20%, 50%, 100% — and, because the choice is
random, the ****treatment effect spreads evenly****. On a Qini or uplift curve (proportion targeted on
the X-axis, cumulative incremental gain on the Y-axis) this traces a ****straight diagonal line****:
uplift accumulates linearly with the fraction treated.

## A worked example[#](#a-worked-example "Link to this heading")

With 10,000 customers and an average treatment effect of ****+5%****, random targeting of 20% (2,000)
yields about ****100**** incremental conversions; 40% yields about ****200****; and 100% yields about ****500****
— the campaign’s total incremental benefit. The line from (0, 0) to (100%, 500) is the random
baseline.

## Role, pros and cons[#](#role-pros-and-cons "Link to this heading")

That line is the ****benchmark****: a good model’s curve starts steep — finding persuadables first — and
stays ****above**** it throughout; a curve that hugs the diagonal adds no value. Random targeting is
****simple**** and ****fair**** (hence its use in A/B testing), but it ****wastes budget**** on sure things, lost
causes and do-not-disturbs, delivers lower ROI, and cannot adapt to customer heterogeneity.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Qini Curve](203-qini-curve.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Uplift Models](205-uplift-models.html) · [Uplift Score](204-uplift-score.html) · [Total Incremental Benefit (TIB)](201-total-incremental-benefit-tib.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Random Targeting Strategy](https://insightful-data-lab.com/2025/08/23/random-targeting-strategy/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)