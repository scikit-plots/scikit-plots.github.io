🧫  ****Bayesian Stopping Rules****

# Bayesian Stopping Rules[#](#bayesian-stopping-rules "Link to this heading")

**Criteria for ending an experiment based on posterior quantities, such as probability of being best.**

## What it is[#](#what-it-is "Link to this heading")

A ****Bayesian stopping rule**** is a ****predefined criterion — based on posterior
probabilities, Bayes factors, or credible intervals — for when to stop collecting data****
in an experiment. Where a frequentist test fixes the sample size to control the Type I
error rate \(\alpha\), a Bayesian rule watches the ****strength of evidence**** and stops
once it is decisive. In a sentence: **stop when the posterior probability of a hypothesis
is high enough.**

## Three kinds of rule[#](#three-kinds-of-rule "Link to this heading")

* ****Posterior-probability threshold**** — stop and accept \(H\_1\) once
  \(P(H\_1 \mid \text{data}) > 0.95\), or stop for ****futility**** if
  \(P(H\_0 \mid \text{data}) > 0.95\).
* ****Bayes-factor threshold**** — stop when the Bayes factor
  \(\text{BF} = P(\text{data} \mid H\_1) / P(\text{data} \mid H\_0)\) reaches a strong
  level on Jeffreys’ scale (\(\text{BF} > 10\) for \(H\_1\),
  \(\text{BF} < 1/10\) for \(H\_0\); otherwise keep sampling).
* ****Credible-interval rule**** — stop when the posterior credible interval for the effect
  ****excludes zero**** (e.g. a 95% interval of \([0.01, 0.03]\) for a conversion-rate
  difference).

## Why the peeking is allowed[#](#why-the-peeking-is-allowed "Link to this heading")

The headline advantage: ****continuous monitoring does not inflate false positives**** the
way repeated frequentist peeking does. The results are also directly interpretable —
“there is a 97% probability that B beats A” — priors can be folded in, and overwhelming
evidence lets you stop early and save traffic.

## Worked example[#](#worked-example "Link to this heading")

Control converts at 5%; the treatment shows 5.6% after 5,000 users, and the posterior
gives \(P(p\_B > p\_A \mid \text{data}) = 0.97\). With a “stop if posterior > 0.95”
rule, the decision is to ****stop and roll out B****.

## The catch[#](#the-catch "Link to this heading")

Stopping rules depend on the ****prior**** (which can sway the result), are more
****computationally intensive**** (often Monte Carlo / MCMC), and ask stakeholders to think
in posterior probabilities rather than the p-values they may know better. Versus
frequentist fixed-horizon or α-spending designs, the trade is intuitive probability
statements and peeking freedom for prior-sensitivity and compute.

---

**Theme:** [A/B Testing & Experimentation](index.html#term-theme-abtest)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Sequential Settings](058-sequential-settings.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Posterior Probability](073-posterior-probability.html) · [Frequentist](059-frequentist.html) · [A/B Testing](380-a-b-testing.html)

---

> **Hint**
> ****More in A/B Testing & Experimentation****

[A/B Testing](380-a-b-testing.html) · [A/B/n Test](114-a-b-n-test.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Fixed-Horizon Testing](082-fixed-horizon-testing.html) · [Group Sequential Testing](079-group-sequential-testing.html) · [Multivariate Test (MVT)](115-multivariate-test-mvt.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Optimizely](069-optimizely.html) · [Risk of Peeking](116-risk-of-peeking.html) · [Sequential Testing (also called sequential analysis)](376-sequential-testing-also-called-sequential-analys.html) · [Stopping Rules](071-stopping-rules.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Treatment Effect](072-treatment-effect.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Bayesian Stopping Rules](https://insightful-data-lab.com/2025/08/25/bayesian-stopping-rules/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)