🧮  ****Post Hoc Power Analysis****

# Post Hoc Power Analysis[#](#post-hoc-power-analysis "Link to this heading")

**Computing achieved power after a study from the observed effect — widely criticised as uninformative.**

## What it is[#](#what-it-is "Link to this heading")

****Post-hoc power analysis**** computes the ****statistical power of a test after the study is
finished****, plugging in the ****observed**** sample size \(n\), the ****observed**** effect
size \(\delta\), and the chosen \(\alpha\). It asks: **given what we actually saw,
what was the probability we could have detected an effect?**

## Why people run it[#](#why-people-run-it "Link to this heading")

Usually to interpret a ****non-significant**** result (“was it real-but-missed, or genuinely
null?”), to satisfy a journal asking about sensitivity, or to judge older studies in a
meta-analysis. The calculation is the a-priori one with the **observed** effect size
substituted in:

\[\text{Power} = P(\text{reject } H\_0 \mid \delta\_{\text{observed}}, n, \alpha).\]

## Example[#](#example "Link to this heading")

If \(H\_0\) is a 10% conversion rate, the treatment shows a tiny 10.2%, with 1,000 per
group at \(\alpha = 0.05\), post-hoc power might be only ****12%**** — the study was
****underpowered**** to detect so small a lift.

## The tautology problem[#](#the-tautology-problem "Link to this heading")

The deep flaw: post-hoc power is a ****deterministic function of the p-value****, so it adds
nothing. A non-significant result **always** yields low post-hoc power, and a significant
one **always** high — it merely restates the test. Worse, it invites the fallacy
“non-significant + low power ⇒ \(H\_0\) is true,” when it only means “this study wasn’t
sensitive enough.”

## Report this instead[#](#report-this-instead "Link to this heading")

Rather than post-hoc power, report the ****observed effect size**** (Cohen’s d, a difference
in proportions, an odds ratio) and a ****confidence interval**** for the effect — these convey
the strength and precision of the result without the circularity.

---

****Mind map — connected ideas****

> [A Priori Power Analysis](095-a-priori-power-analysis.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Statistical Power](348-statistical-power.html) · [Effect Size (δ)](106-effect-size.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Frequentist](059-frequentist.html)

---

****More in Statistical Inference & Power****

> [A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Post Hoc Power Analysis](https://insightful-data-lab.com/2025/08/24/post-hoc-power-analysis/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)