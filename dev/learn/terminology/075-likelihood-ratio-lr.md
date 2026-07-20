🔬  ****Likelihood Ratio (LR)****

# Likelihood Ratio (LR)[#](#likelihood-ratio-lr "Link to this heading")

**The ratio of data likelihoods under two hypotheses; central to many sequential and diagnostic tests.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

The ****likelihood ratio (LR)**** measures ****how much more likely the observed data is under
one hypothesis than another****, by dividing their likelihoods:

\[\Lambda = \frac{L(\text{data} \mid H\_1)}{L(\text{data} \mid H\_0)}.\]

\(\Lambda = 1\) means the data is equally likely under both; \(\Lambda > 1\)
favours \(H\_1\); \(\Lambda < 1\) favours \(H\_0\).

## Two roles in testing[#](#two-roles-in-testing "Link to this heading")

* ****Likelihood-ratio test (LRT)**** — the generalised statistic
  \(\Lambda = \sup\_{\theta \in \Theta\_0} L(\theta) / \sup\_{\theta \in \Theta} L(\theta)\)
  compares the best fit under the null to the best fit overall; a small \(\Lambda\)
  is strong evidence against \(H\_0\). (By the Neyman–Pearson lemma, the LR is the
  **most powerful** test for simple hypotheses.)
* ****Sequential probability ratio test (SPRT)**** — accumulate the ratio as data arrives,
  \(\Lambda\_n = L(\text{data}\_{1:n} \mid H\_1)/L(\text{data}\_{1:n} \mid H\_0)\), and
  stop when it crosses an upper bound \(A\) (accept \(H\_1\)) or lower bound
  \(B\) (accept \(H\_0\)), else continue.

## Worked example[#](#worked-example "Link to this heading")

Seven heads in 10 tosses, with \(H\_0: p = 0.5\) vs \(H\_1: p = 0.7\):

\[L(H\_0) = \binom{10}{7}(0.5)^{10} \approx 0.117, \quad
L(H\_1) = \binom{10}{7}(0.7)^7(0.3)^3 \approx 0.266, \quad
\Lambda = \frac{0.266}{0.117} \approx 2.27,\]

so the data is about ****2.3 times more likely**** under the biased hypothesis. Rough
reading: \(\Lambda \approx 1\) no evidence, \(> 3\) moderate, \(> 10\)
strong.

## Where it shows up[#](#where-it-shows-up "Link to this heading")

The LR is the backbone of likelihood-based inference: the ****LRT**** and ****SPRT****, nested
****model comparison****, and — closely related — the ****Bayes factor****, which **is** a
likelihood ratio when the hypotheses are simple (and an evidence ratio of marginal
likelihoods when they are composite). In medicine, diagnostic ****LR+ and LR−**** update the
odds of disease from a test result.

---

**Theme:** [Model Evaluation & Uncertainty](index.html#term-theme-evaluation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Sequential Probability Ratio Test (SPRT)](076-sequential-probability-ratio-test-sprt.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Frequentist](059-frequentist.html) · [Posterior Probability](073-posterior-probability.html)

---

> **Hint**
> ****More in Model Evaluation & Uncertainty****

[Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Baseline Heuristics](428-baseline-heuristics.html) · [Bootstrap](365-bootstrap.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Coverage](411-coverage.html) · [Cramér’s V](180-cramer-s-v.html) · [DeLong’s Test](352-delong-s-test.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Mean Absolute Percentage Error (MAPE)](425-mean-absolute-percentage-error-mape.html) · [Mean Squared Error (MSE)](308-mean-squared-error-mse.html) · [Relative accuracy](258-relative-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Likelihood Ratio (LR)](https://insightful-data-lab.com/2025/08/25/likelihood-ratio-lr/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)