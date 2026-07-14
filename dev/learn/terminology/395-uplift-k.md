🔗  ****Uplift@k****

# Uplift@k[#](#uplift-k "Link to this heading")

**The incremental gain captured within the top-k targeted population.**

## What it is[#](#what-it-is "Link to this heading")

****Uplift@k**** is a performance metric in uplift modelling and causal ML. It measures the ****incremental
effect**** achieved if you target only the ****top k%**** of customers, ranked by the model’s predicted
uplift score. In plain terms: **if I contact only the top k%, how much extra impact do I get compared
to not contacting them?**

## The formula[#](#the-formula "Link to this heading")

It is the ****difference in average outcome**** between the treatment and control groups ****within the
top-k% segment****,

\[\text{Uplift@}k = \bar{y}\_{\text{treatment}}^{(k)} - \bar{y}\_{\text{control}}^{(k)},\]

where the averages are taken over the top k% by predicted uplift. Random targeting yields a small or
zero value (treatment and control behave alike); a good model makes treatment clearly outperform
control in that segment.

## A worked example[#](#a-worked-example "Link to this heading")

With 10,000 customers, targeting the ****top 20%**** (k = 20%) selects 2,000. If, within that segment, the
treatment group’s purchase probability exceeds the control group’s by ****5 percentage points****, then
uplift@k = ****+5pp**** — the extra impact the model captures by choosing those 2,000.

## Uses, and versus uplift[#](#uses-and-versus-uplift "Link to this heading")

In ****marketing**** it estimates incremental sales from promoting only the top k%; in ****healthcare****, the
incremental recovery from treating the top-k patients; in ****recommendation****, the extra engagement
from targeting the top-k users. The distinction from plain uplift is subtle but important: ****uplift****
asks **how effective is the treatment overall?**, while ****uplift@k**** asks **how good is my model at
selecting the best subset to treat?**

---

**Theme:** [Causal Inference & Uplift](index.html#term-theme-causal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Uplift Models](205-uplift-models.html) · [Uplift Score](204-uplift-score.html) · [AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Qini Curve](203-qini-curve.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Uplift](424-uplift.html)

---

> **Hint**
> ****More in Causal Inference & Uplift****

[AUUC (Area Under the Uplift Curve)](396-auuc-area-under-the-uplift-curve.html) · [Causal Effect](306-causal-effect.html) · [Causal Impact](112-causal-impact.html) · [Causal Inference](117-causal-inference.html) · [Causal ML (Causal Machine Learning)](197-causal-ml-causal-machine-learning.html) · [Causal Trees](301-causal-trees.html) · [Cumulative Incremental Gain (CIG)](202-cumulative-incremental-gain-cig.html) · [Cumulative Uplift](198-cumulative-uplift.html) · [Incremental Conversions](394-incremental-conversions.html) · [Incremental Gain](200-incremental-gain.html) · [Incremental Recovery Rate (IRR)](194-incremental-recovery-rate-irr.html) · [Incremental Revenue](193-incremental-revenue.html) · [Incremental Sales](195-incremental-sales.html) · [Qini Coefficient](397-qini-coefficient.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Uplift@k](https://insightful-data-lab.com/2025/08/19/upliftk/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)