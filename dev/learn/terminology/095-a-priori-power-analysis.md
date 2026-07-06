🧮  ****A Priori Power Analysis****

# A Priori Power Analysis[#](#a-priori-power-analysis "Link to this heading")

**Computing the sample size required before a study for a target power and effect size.**

## What it is[#](#what-it-is "Link to this heading")

****A-priori power analysis**** computes the ****sample size**** \(n\) ****needed before
collecting data****, from four inputs: the significance level \(\alpha\) (Type I risk),
the desired ****power**** \(1 - \beta\) (chance of detecting a true effect), the expected
****effect size**** \(\delta\), and the data variance. The aim: a study ****large enough to
detect a meaningful effect**** but no larger.

## Why it matters[#](#why-it-matters "Link to this heading")

It guards against ****underpowered**** studies (false negatives — missing real effects) and
****overpowered**** ones (wasted resources chasing trivial effects), and forces you to commit
to a ****minimum meaningful effect size**** in advance rather than rationalising after the
fact.

## The sample-size formula[#](#the-sample-size-formula "Link to this heading")

For a two-sample mean test,

\[n = \left(\frac{Z\_{1-\alpha/2} + Z\_{1-\beta}}{\delta}\right)^2,\]

where \(Z\_{1-\alpha/2}\) is the critical value for \(\alpha\) (1.96 at
\(\alpha = 0.05\), two-tailed), \(Z\_{1-\beta}\) the value for the target power
(0.84 for 80%), and \(\delta = (\mu\_1 - \mu\_2)/\sigma\) the standardised effect size
(Cohen’s d). In practice tools like ****G\*Power****, R or `statsmodels` do the arithmetic.

## Example[#](#example "Link to this heading")

To detect a conversion lift from 10% to 11% at \(\alpha = 0.05\) and ****80% power****
with an effect of 0.01, the analysis returns about ****7,850 users per group**** — testing
only 1,000 per arm would be badly underpowered.

## The power-analysis family[#](#the-power-analysis-family "Link to this heading")

****A-priori**** (before) sets the sample size; ****post-hoc**** (after) estimates achieved power
and is controversial; ****sensitivity**** asks, for a given \(n\), \(\alpha\) and
power, the **smallest detectable** effect. The everyday convention is \(\alpha = 0.05\),
power = 0.80.

---

****Mind map — connected ideas****

> [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Statistical Power](348-statistical-power.html) · [Effect Size (δ)](106-effect-size.html) · [Type I Error](080-type-i-error.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html)

---

****More in Statistical Inference & Power****

> [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [A Priori Power Analysis](https://insightful-data-lab.com/2025/08/24/a-priori-power-analysis/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)