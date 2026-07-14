🎰  ****Sequential Probability Ratio Test (SPRT)****

# Sequential Probability Ratio Test (SPRT)[#](#sequential-probability-ratio-test-sprt "Link to this heading")

**A sequential test that accumulates the likelihood ratio and stops when it crosses preset bounds.**

## What it is[#](#what-it-is "Link to this heading")

The ****sequential probability ratio test (SPRT)****, due to Abraham ****Wald****, is a
hypothesis test that ****evaluates data as it arrives**** rather than fixing the sample size
in advance. It compares two ****simple**** hypotheses,

\[H\_0 : \theta = \theta\_0 \quad \text{vs} \quad H\_1 : \theta = \theta\_1,\]

and after each observation decides to ****accept**** \(H\_0\), ****accept**** \(H\_1\), or
****keep sampling****.

## The running likelihood ratio[#](#the-running-likelihood-ratio "Link to this heading")

After \(n\) observations, accumulate the likelihood ratio

\[\Lambda\_n = \frac{L(\text{data}\_{1:n} \mid H\_1)}{L(\text{data}\_{1:n} \mid H\_0)}.\]

## Decision boundaries[#](#decision-boundaries "Link to this heading")

Two boundaries are set from the desired Type I (\(\alpha\)) and Type II
(\(\beta\)) error rates:

\[A = \frac{1 - \beta}{\alpha}, \qquad B = \frac{\beta}{1 - \alpha}.\]

Then stop when \(\Lambda\_n \ge A\) (accept \(H\_1\)) or \(\Lambda\_n \le B\)
(accept \(H\_0\)); while \(B < \Lambda\_n < A\), continue.

## Worked example[#](#worked-example "Link to this heading")

For conversion rates \(H\_0 : p = 0.10\) vs \(H\_1 : p = 0.12\) with
\(\alpha = 0.05, \beta = 0.20\),

\[A = \frac{1 - 0.20}{0.05} = 16, \qquad B = \frac{0.20}{0.95} \approx 0.21.\]

Update \(\Lambda\_n\) as conversions come in; cross 16 → conclude \(H\_1\), drop
below 0.21 → conclude \(H\_0\), otherwise keep going.

## Strengths and limits[#](#strengths-and-limits "Link to this heading")

On average the SPRT needs ****fewer samples**** than a fixed-horizon test, stops as soon as
evidence is decisive, and holds the chosen \(\alpha\) and \(\beta\). The catch:
it’s built for ****simple**** hypotheses (fixed \(\theta\_0, \theta\_1\)), is awkward for
****composite**** ones (e.g. \(p \le 0.10\)), and needs real-time monitoring. Wald
introduced it for ****WWII quality control**** (accepting or rejecting munitions lots with
fewer inspections); today it appears in clinical trials, sequential A/B testing and
industrial QC. Versus group-sequential designs (which look at fixed checkpoints), the
SPRT is genuinely ****continuous****.

---

**Theme:** [Sequential Methods & Bandits](index.html#term-theme-bandits)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Likelihood Ratio (LR)](075-likelihood-ratio-lr.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Stopping Rules](071-stopping-rules.html) · [Sequential Settings](058-sequential-settings.html) · [Frequentist](059-frequentist.html) · [Group Sequential Testing](079-group-sequential-testing.html)

---

> **Hint**
> ****More in Sequential Methods & Bandits****

[Bandit Algorithms](113-bandit-algorithms.html) · [O’Brien–Fleming (OBF) Method](078-o-brienfleming-obf-method.html) · [Pocock Method](077-pocock-method.html) · [Sequential Settings](058-sequential-settings.html) · [Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](050-thompson-sampling-ts-in-bandits-multi-armed-band.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Sequential Probability Ratio Test (SPRT)](https://insightful-data-lab.com/2025/08/25/sequential-probability-ratio-test-sprt/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)