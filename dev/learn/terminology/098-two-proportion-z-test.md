🧮  ****Two-Proportion Z-Test****

# Two-Proportion Z-Test[#](#two-proportion-z-test "Link to this heading")

**A hypothesis test for whether two groups’ success proportions differ, using a normal approximation.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

The ****two-proportion z-test**** decides whether an outcome’s ****rate differs significantly
between two independent groups**** — the standard test behind A/B experiments (is control’s
5% really below treatment’s 6.2%, or just noise?).

## Hypotheses[#](#hypotheses "Link to this heading")

The null is ****equality****, \(H\_0 : p\_1 = p\_2\); the alternative is
\(H\_1 : p\_1 \neq p\_2\) (two-tailed) or a one-sided version.

## The statistic[#](#the-statistic "Link to this heading")

\[z = \frac{\hat{p}\_1 - \hat{p}\_2}{\sqrt{\hat{p}(1 - \hat{p})\left(\frac{1}{n\_1} + \frac{1}{n\_2}\right)}},\]

where \(\hat{p}\_i = x\_i / n\_i\) are the group proportions and
\(\hat{p} = (x\_1 + x\_2)/(n\_1 + n\_2)\) is the ****pooled**** proportion — the shared rate
**assumed under** \(H\_0\), used to build the standard error. Compare \(z\) to a
critical value (\(\pm 1.96\) at \(\alpha = 0.05\)) or convert it to a p-value.

## Worked example[#](#worked-example "Link to this heading")

Control: 100 of 1,000 → \(\hat{p}\_1 = 0.10\). Treatment: 130 of 1,000 →
\(\hat{p}\_2 = 0.13\). Pooled \(\hat{p} = 230/2000 = 0.115\); standard error
\(\sqrt{0.115 \times 0.885 \times 0.002} \approx 0.01425\); so
\(z = (0.10 - 0.13)/0.01425 \approx -2.11\), a two-tailed \(p \approx 0.035\).
Since \(p < 0.05\), reject \(H\_0\) — treatment converts significantly higher.

## Assumptions[#](#assumptions "Link to this heading")

Independent samples, binary (success/failure) observations, and samples large enough for
the normal approximation (\(np \ge 5\) and \(n(1 - p) \ge 5\)). It powers A/B
tests, clinical recovery-rate comparisons and survey yes/no contrasts alike.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Proportion](091-proportion.html) · [Z-Score](097-z-score.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [True Conversion Rate](083-true-conversion-rate.html) · [Traditional A/B Test (Fixed-Horizon A/B Test)](081-traditional-a-b-test-fixed-horizon-a-b-test.html) · [Statistical Significance](096-statistical-significance.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Two-Proportion Z-Test](https://insightful-data-lab.com/2025/08/24/two-proportion-z-test/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)