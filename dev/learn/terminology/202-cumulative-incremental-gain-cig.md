🔗  ****Cumulative Incremental Gain (CIG)****

# Cumulative Incremental Gain (CIG)[#](#cumulative-incremental-gain-cig "Link to this heading")

**The running sum of incremental gain as more of the ranked population is treated.**

## What it is[#](#what-it-is "Link to this heading")

****Cumulative incremental gain (CIG)**** is an uplift-modelling measure of the ****total additional
outcomes**** — purchases, sign-ups, conversions — won by targeting customers ****ranked by uplift score****,
relative to random or no targeting. It is the quantity plotted on the ****Y-axis of a Qini curve****.

## How it’s built[#](#how-it-s-built "Link to this heading")

Four steps: ****rank**** customers by predicted uplift score, highest to lowest; ****split**** them into
deciles or percentiles; for each segment compute the ****incremental gain**** as treatment responses minus
control responses; then take the ****running sum**** of those gains down to the segment of interest.

## The formula[#](#the-formula "Link to this heading")

\[\text{CIG}(p) = \sum\_{i=1}^{pN} \left( y\_i^{\text{treat}} - y\_i^{\text{control}} \right),\]

the treated-minus-untreated outcome accumulated over the top proportion \(p\) of a population of
size \(N\).

## A worked example[#](#a-worked-example "Link to this heading")

Across 10,000 customers, targeting the ****top 20%**** yields 400 treatment versus 300 control
conversions — a gain of ****100****; extending to the ****top 40%**** adds 750 versus 550 — a further ****200****.
The cumulative incremental gain at 40% is therefore ****300 conversions****.

## Reading the Qini curve[#](#reading-the-qini-curve "Link to this heading")

Plotting CIG against the percentage of the population targeted gives the ****Qini curve****. A ****steep
early slope**** means the model finds **persuadables** first and targeting pays off quickly; a ****flat****
curve means the model is no better than random. The shape reveals the ****optimal targeting fraction**** —
where gain stops rising — and lets you ****compare models**** by how much incremental value each delivers.

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Incremental Gain](200-incremental-gain.html) · [Total Incremental Benefit (TIB)](201-total-incremental-benefit-tib.html) · [Qini Curve](203-qini-curve.html) · [Treatment Effect](072-treatment-effect.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html) · [Qini Curve](203-qini-curve.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Cumulative Incremental Gain (CIG)](https://insightful-data-lab.com/2025/08/23/cumulative-incremental-gain-cig/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)