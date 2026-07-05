🔗  ****Uplift Curve****

# Uplift Curve[#](#uplift-curve "Link to this heading")

**A curve showing cumulative incremental gain as more of the ranked population is treated.**

## What it is[#](#what-it-is "Link to this heading")

An ****uplift curve**** is a tool for ****evaluating uplift models**** (incremental-response models). It plots
the ****incremental gain**** — the extra benefit caused by the treatment — against the ****proportion of the
population targeted****, showing how much improvement you gain by targeting the top fraction of customers
ranked by uplift score. It is closely related to, and often drawn as, the ****Qini curve****.

## Why not target everyone[#](#why-not-target-everyone "Link to this heading")

Traditional models (like logistic regression) predict response probability, but in marketing you
****don’t want to target everyone**** likely to buy — some would buy anyway, and some are even negatively
influenced. The uplift curve reflects the model’s job of isolating ****persuadables****, those who change
behaviour because of the treatment.

## How it’s built[#](#how-it-s-built "Link to this heading")

Rank customers by predicted uplift score from high to low, split them into buckets (top 10%, next
10%, …), and for each bucket compute the ****treated-minus-control**** difference in outcome rate. Plotting
the ****cumulative**** incremental gains against the percentage targeted gives the curve: the ****X-axis**** is
the fraction targeted, the ****Y-axis**** the incremental gain, with a ****random baseline**** line and the
****model curve**** ideally above it.

## Reading it, with an example[#](#reading-it-with-an-example "Link to this heading")

A ****steeper**** curve means the model is better at finding the most-influenced customers; a curve ****close
to the random line**** adds little value; and the ****area between the model curve and the random line****
serves as a performance metric, much like AUC. For an email renewal campaign, the curve might show
that targeting the ****top 20%**** by uplift score generates most of the incremental renewals, while
targeting everyone simply wastes resources.

---

****Mind map — connected ideas****

> [Qini Curve](203-qini-curve.html) · [AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Uplift Score](204-uplift-score.html) · [Incremental Gain](200-incremental-gain.html) · [Uplift Models](205-uplift-models.html) · [Uplift](424-uplift.html)

---

****More in Causal Inference & Uplift****

> [AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)

---

**Theme:** Causal Inference & Uplift  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Uplift Curve](https://insightful-data-lab.com/2025/08/21/uplift-curve/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)