🔬  ****Mann–Whitney U Test (also called the Wilcoxon rank-sum test)****

# Mann–Whitney U Test (also called the Wilcoxon rank-sum test)[#](#mannwhitney-u-test-also-called-the-wilcoxon-rank-sum-test "Link to this heading")

**A nonparametric, rank-based test of whether one group’s values tend to exceed another’s.**

## What it is[#](#what-it-is "Link to this heading")

The ****Mann–Whitney U test**** (equivalently the ****Wilcoxon rank-sum test****) is a
****non-parametric**** test for whether two **independent** groups come from the same
distribution. Unlike the t-test it makes ****no normality assumption**** — it works on
the ****ranks**** of the pooled data, so it is the natural choice for skewed or ordinal
data.

## Assumptions[#](#assumptions "Link to this heading")

* The two samples are ****independent****.
* The outcome is ****ordinal or continuous****.
* Strictly, it tests **stochastic dominance** (whether one group tends to be larger);
  only when the two distributions have the ****same shape**** does it become a test of
  ****medians****.

## The U statistic[#](#the-u-statistic "Link to this heading")

Pool both groups, rank everything, and sum the ranks of each group
(\(R\_1, R\_2\)). Then

\[U\_1 = n\_1 n\_2 + \frac{n\_1(n\_1 + 1)}{2} - R\_1, \qquad
U\_2 = n\_1 n\_2 + \frac{n\_2(n\_2 + 1)}{2} - R\_2, \qquad
U = \min(U\_1, U\_2).\]

For large samples \(U\) is approximately normal, giving a z-based p-value.

## Hypotheses[#](#hypotheses "Link to this heading")

* ****H₀**** — the two groups come from the same distribution.
* ****H₁**** — one group tends to produce larger (or smaller) values than the other.

## Worked example[#](#worked-example "Link to this heading")

Group A = {88, 92, 100, 75, 85}, Group B = {60, 70, 65, 80, 72}. Rank all ten
values, sum the ranks, compute \(U\), and look up the p-value; \(p < 0.05\)
means the groups differ significantly.

```
from scipy.stats import mannwhitneyu

U, p = mannwhitneyu(group_a, group_b, alternative="two-sided")

```

## The link to ROC-AUC[#](#the-link-to-roc-auc "Link to this heading")

The U statistic is ****mathematically equivalent to AUROC****:

\[\text{AUC} = \frac{U}{n\_1 n\_2},\]

i.e. the probability that a randomly chosen value from one group outranks a randomly
chosen value from the other — exactly the definition of AUROC. Testing whether two
score distributions differ is the same computation as measuring a classifier’s
ranking power.

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Ties**** — many tied values need a tie correction (most libraries apply one).
* ****The “median” shortcut**** — only valid under equal-shape distributions; otherwise
  report it as a test of stochastic dominance.
* ****Paired data**** — for **matched** samples use the Wilcoxon **signed-rank** test
  instead; this test is for **independent** groups.

---

****Mind map — connected ideas****

> [Multiclass AUROC](022-multiclass-auroc.html) · [One-vs-Rest (OvR) AUROC](017-one-vs-rest-ovr-auroc.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Probability](025-probability.html)

---

****More in Model Evaluation & Uncertainty****

> [Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](https://insightful-data-lab.com/2025/08/30/mann-whitney-u-test-also-called-the-wilcoxon-rank-sum-test/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)