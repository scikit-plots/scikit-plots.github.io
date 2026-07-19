🧮  ****Hypothesis Testing****

# Hypothesis Testing[#](#hypothesis-testing "Link to this heading")

**A framework for deciding between a null and an alternative using data.**

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

****Hypothesis testing**** is a formal procedure for ****deciding about a population parameter
from sample data while controlling the risk of error****. It is best read not as proof but
as ****risk-managed decision-making****.

## The two hypotheses[#](#the-two-hypotheses "Link to this heading")

The ****null**** \(H\_0\) is the status quo — no effect, zero difference, zero coefficient.
The ****alternative**** \(H\_1\) is a departure from it, either ****two-sided**** (\(\neq\))
or ****one-sided**** (\(>\) or \(<\)). The test never **proves** \(H\_1\); it asks
whether the data are ****inconsistent with**** \(H\_0\).

## The logic[#](#the-logic "Link to this heading")

A proof-by-contradiction: ****assume**** \(H\_0\), ask how likely data this extreme (or
more) would be under it, and if that likelihood is tiny, ****reject**** \(H\_0\). The
machinery is a ****test statistic****,

\[\text{test statistic} = \frac{\text{observed effect} - \text{effect under } H\_0}{\text{standard error}},\]

which under \(H\_0\) follows a ****known sampling distribution**** (normal for z, t for
t-tests, \(\chi^2\), F) — that is what lets us turn it into a ****p-value****, the
probability under \(H\_0\) of data as extreme or more.

## The two errors[#](#the-two-errors "Link to this heading")

Decisions can fail two ways: a ****Type I error**** (reject a true \(H\_0\), rate
\(\alpha\)) and a ****Type II error**** (fail to reject a false one, rate \(\beta\)),
with ****power**** \(= 1 - \beta\). The two trade off — tightening \(\alpha\) raises
\(\beta\). A ****two-sided**** test is more conservative; a ****one-sided**** test has more
power but needs strong prior justification.

## What “fail to reject” means[#](#what-fail-to-reject-means "Link to this heading")

Crucially, failing to reject \(H\_0\) is ****not**** evidence that \(H\_0\) is true or
that no effect exists — only that the data are ****insufficient against**** \(H\_0\) at the
chosen \(\alpha\). It could be a true null, a ****small**** effect, or simply ****too little
power****. And because large samples make trivial effects significant, always read the
p-value ****alongside an effect size and a confidence interval**** — significance for whether,
effect size for how much.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Statistical Significance](096-statistical-significance.html) · [Significance Level (α)](105-significance-level.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Type I Error](080-type-i-error.html) · [Power (1 – β)](104-power-1.html) · [Effect Size (δ)](106-effect-size.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Hypothesis Testing](https://insightful-data-lab.com/2025/08/24/hypothesis-testing/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)