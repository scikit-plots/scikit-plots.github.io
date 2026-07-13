🧫  ****True Conversion Rate****

# True Conversion Rate[#](#true-conversion-rate "Link to this heading")

**The unknown underlying probability that a user converts, estimated from observed conversions.**

## What it is[#](#what-it-is "Link to this heading")

The ****true conversion rate**** \(p\) is the ****actual probability that a user in the
whole population converts**** (clicks, buys, signs up). It is a ****population parameter**** —
fixed but unknown. What an experiment actually measures is the ****sample conversion rate****
\(\hat{p}\), an **estimate** of \(p\).

## Parameter vs estimate[#](#parameter-vs-estimate "Link to this heading")

\[p = \frac{\text{conversions in the population}}{\text{users in the population}},
\qquad
\hat{p} = \frac{x}{n},\]

where \(x\) is conversions in the sample and \(n\) the sample size. We can rarely
see the whole population, so we work with \(\hat{p}\) and quantify its uncertainty.

## Example[#](#example "Link to this heading")

1,000 users see version A and 50 convert, so \(\hat{p}\_A = 50/1000 = 0.05\) (5%). The
true rate might be \(p = 0.052\), but we never observe it exactly — only estimate it.

## Confidence interval for p[#](#confidence-interval-for-p "Link to this heading")

Because \(\hat{p}\) carries sampling error, a ****Wald confidence interval**** brackets
the likely range of \(p\):

\[\text{CI} = \hat{p} \pm z\_{\alpha/2}\, \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}}.\]

With \(\hat{p} = 0.05, n = 1000\) and 95% confidence, the standard error is
\(\sqrt{0.05 \times 0.95 / 1000} \approx 0.0069\), giving
\(0.05 \pm 1.96 \times 0.0069 \approx [0.036, 0.064]\) — we’re 95% confident the true
rate lies between ****3.6% and 6.4%****.

## Why it matters[#](#why-it-matters "Link to this heading")

In A/B testing we never know either group’s true rate; we estimate both with
\(\hat{p}\) and use a ****two-proportion z-test**** to judge whether the **observed**
difference is real evidence of a difference in the ****true**** conversion rates — the actual
quantity of interest.

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Standard Error (SE)](084-standard-error-se.html) · [Conversion Rate (CR)](299-conversion-rate-cr.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Frequentist](059-frequentist.html) · [A/B Testing](380-a-b-testing.html)

---

> **Hint**
> ****More in A/B Testing & Experimentation****

[A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [True Conversion Rate](https://insightful-data-lab.com/2025/08/25/true-conversion-rate/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)