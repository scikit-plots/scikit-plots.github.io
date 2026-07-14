🎲  ****Frequentist****

# Frequentist[#](#frequentist "Link to this heading")

**The school of statistics treating probability as long-run frequency and parameters as fixed unknowns.**

## What it is[#](#what-it-is "Link to this heading")

The ****frequentist**** approach defines probability as the ****long-run frequency**** of an
event over infinitely many repeated trials. Parameters — a population mean, a
conversion rate, a treatment effect — are treated as ****fixed but unknown constants****,
and all the uncertainty comes from the ****randomness of the data (the sample)****, never
from the parameter itself.

## Key principles[#](#key-principles "Link to this heading")

* ****Probability = frequency**** — “P(heads) = 0.5” means about half of many flips land
  heads.
* ****Parameters fixed, data random**** — the true mean \(\mu\) is a fixed constant;
  the sample mean \(\bar{x}\) varies from sample to sample.
* ****Inference via repeated sampling**** — p-values, confidence intervals and tests are
  all defined by **what would happen if the experiment were repeated many times**.

## The toolkit[#](#the-toolkit "Link to this heading")

Point estimates (the sample mean \(\bar{x}\) for \(\mu\)), ****confidence
intervals**** (an interval procedure that captures the true parameter in, say, 95% of
repeated experiments), ****hypothesis tests**** (a null \(H\_0\) and a p-value — the
probability of data at least as extreme as observed, **assuming** \(H\_0\)), and
****maximum likelihood estimation****.

## A subtlety worth stating[#](#a-subtlety-worth-stating "Link to this heading")

A 95% confidence interval does ****not**** mean “95% probability the true value is in this
interval” — under frequentism the parameter is fixed, so it’s either in or out. It means
**the procedure** covers the truth 95% of the time across repetitions. The “95%
probability the mean lies here” reading is the ****Bayesian credible interval****.

## Example — an A/B test[#](#example-an-a-b-test "Link to this heading")

To ask whether variant B beats A, treat the true rates \(p\_A, p\_B\) as fixed,
estimate them with sample proportions \(\hat{p}\_A, \hat{p}\_B\), run a
****two-proportion z-test****, and reject \(H\_0\) if the p-value is below 0.05.

## Frequentist vs Bayesian[#](#frequentist-vs-bayesian "Link to this heading")

The two paradigms differ along clear lines: probability as ****long-run frequency**** vs
****degree of belief****; parameters as ****fixed constants**** vs ****random variables****;
uncertainty from ****data only**** vs ****prior + data****; inference via ****p-values and
confidence intervals**** vs ****posteriors and credible intervals****; and on sequential
data, frequentist peeking ****inflates error**** (needs corrections) while Bayesian updating
is ****continuously valid****. Frequentist methods remain dominant in medicine, the social
sciences and classic A/B testing.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Bayesian Inference.](375-bayesian-inference.html) · [A/B Testing](380-a-b-testing.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Sequential Settings](058-sequential-settings.html) · [Posterior](063-posterior.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Frequentist](https://insightful-data-lab.com/2025/08/28/frequentist/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)