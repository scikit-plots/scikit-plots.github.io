🧫  ****Bayesian Sequential Testing****

# Bayesian Sequential Testing[#](#bayesian-sequential-testing "Link to this heading")

**Continuously monitoring an experiment in a Bayesian framework, valid to stop at any time.**

## What it is[#](#what-it-is "Link to this heading")

****Bayesian sequential testing**** evaluates evidence ****continuously (or at interim looks)
using Bayesian updating****, instead of frequentist p-values against a fixed
\(\alpha\). At every step you compute a ****posterior probability**** or ****Bayes factor****
and decide to ****stop for**** \(H\_1\), ****stop for**** \(H\_0\), or ****keep sampling**** —
with ****no pre-specified sample size****.

## The two evidence metrics[#](#the-two-evidence-metrics "Link to this heading")

* ****Posterior probability**** — via Bayes’ theorem,
  \(P(H \mid \text{data}) = P(\text{data} \mid H)\,P(H) / P(\text{data})\).
* ****Bayes factor**** — \(\text{BF} = P(\text{data} \mid H\_1)/P(\text{data} \mid H\_0)\);
  \(\text{BF} > 1\) favours \(H\_1\), with \(\text{BF} > 10\) and
  \(\text{BF} < 1/10\) as strong-evidence thresholds.

## Decision rules[#](#decision-rules "Link to this heading")

* ****Stop for efficacy**** — \(P(H\_1 \mid \text{data}) > 0.95\) (or
  \(\text{BF} > 10\)).
* ****Stop for futility**** — \(P(H\_0 \mid \text{data}) > 0.95\) (or
  \(\text{BF} < 1/10\)).
* ****Continue**** — evidence still inconclusive.

The key property: ****continuous monitoring does not inflate the Type I error rate****, so
peeking is allowed.

## Example[#](#example "Link to this heading")

An A/B test with equal priors: after 5,000 visitors the posterior that B beats A is
****0.93**** → keep sampling; after 8,000 it reaches ****0.97**** → stop and conclude B is
better.

## Vs frequentist sequential[#](#vs-frequentist-sequential "Link to this heading")

The upside: no fixed horizon (stop anytime), intuitive ****probability statements**** (“97%
chance B is better”), prior information can be folded in, and error is controlled
****without α-spending**** corrections. The downside: it needs a ****prior**** (a subjective
choice that can sway results) and more ****computation****. Where SPRT and group-sequential
methods speak in p-values and likelihood ratios with α-spending, Bayesian sequential
testing speaks in posteriors and Bayes factors and treats multiple looks as a non-issue.

---

****Mind map — connected ideas****

> [Posterior Probability](073-posterior-probability.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Sequential Settings](058-sequential-settings.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Frequentist](059-frequentist.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html)

---

****More in A/B Testing & Experimentation****

> [A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)

---

**Theme:** A/B Testing & Experimentation  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Bayesian Sequential Testing](https://insightful-data-lab.com/2025/08/25/bayesian-sequential-testing/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)