# How many simulation draws are needed?[#](#how-many-simulation-draws-are-needed "Link to this heading")

****Part 3 · Stage 8 · 🧰 Simulation Basics**** · Lesson 066 of 144 · **intermediate**

[◀ Previous · Importance sampling](065-importance-sampling.html) · [Next · Computing environments ▶](067-computing-environments.html) · [↑ Section](index.html)

## Monte Carlo error is not posterior uncertainty[#](#monte-carlo-error-is-not-posterior-uncertainty "Link to this heading")

Two uncertainties coexist in a simulation-based analysis. The ****posterior**** standard deviation
\(\sigma\_{\theta}\) expresses what the data leave unknown — it cannot be reduced by computing
harder. The ****Monte Carlo standard error**** expresses how imprecisely your finite sample of draws
estimates a posterior summary — and it shrinks as you run longer:

\[\mathrm{MCSE}(\bar{\theta}) = \frac{\sigma\_{\theta}}{\sqrt{S\_{\text{eff}}}} .\]

Note \(S\_{\text{eff}}\), not \(S\): MCMC draws are ****autocorrelated****, so a thousand draws may
carry the information of a hundred.

## Fewer than you think, for the mean[#](#fewer-than-you-think-for-the-mean "Link to this heading")

The classic argument is bracing. Suppose you estimate the posterior mean with \(S = 100\)
independent draws. The MCSE is \(\sigma\_{\theta}/10\), so the **total** uncertainty about
\(\theta\) — posterior plus simulation — inflates from \(\sigma\_{\theta}\) to
\(\sigma\_{\theta}\sqrt{1 + 1/100} \approx 1.005 \, \sigma\_{\theta}\). ****A 0.5% increase.**** For
reporting a posterior mean and interval, a hundred effective draws is already enough, and the fourth
decimal place of a posterior mean was never meaningful anyway.

## More than you think, for tails[#](#more-than-you-think-for-tails "Link to this heading")

The picture changes for quantities that depend on ****rare**** draws. A 2.5% quantile is estimated from the
draws in that tail; a probability like \(\Pr(\theta > c \mid y) = 0.001\) requires enough draws to
see the event repeatedly. As a working rule, modern practice targets \(S\_{\text{eff}} \gtrsim 400\)
per quantity of interest — enough for stable tail quantiles and for the convergence diagnostics of Stage
9 to be trustworthy themselves.

```
import arviz as az
az.summary(idata)     # columns: mcse_mean, mcse_sd, ess_bulk, ess_tail, r_hat
# ess_bulk governs the mean/sd; ess_tail governs the 5%/95% quantiles.
# Report a number only to the precision its MCSE supports.

```

## The discipline[#](#the-discipline "Link to this heading")

Three habits follow. ****Report MCSE****, or at least check it: a posterior mean of 2.43 with an MCSE of
0.05 should be written as 2.4. ****Check ess\_tail separately**** from ess\_bulk, because a chain that mixes
well in the middle can crawl in the tails. And remember what more draws cannot buy: they shrink Monte
Carlo error toward zero and leave posterior uncertainty exactly where it was. If the interval is too
wide to act on, the remedy is more ****data**** or a better ****model****, never a longer chain.

> **Hint**
> ****Related lessons:**** [Importance sampling](065-importance-sampling.html) · [Numerical integration](062-numerical-integration.html) · [Eﬀective number of simulation draws](073-effective-number-of-simulation-draws.html) · [Inference and assessing convergence](072-inference-and-assessing-convergence.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/how-many-simulation-draws-are-needed/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)