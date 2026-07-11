# Working with generalized linear models[#](#working-with-generalized-linear-models "Link to this heading")

****Part 4 · Stage 13 · 🔗 Generalized Linear Models**** · Lesson 107 of 144 · **advanced**

[◀ Previous · Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html) · [Next · Weakly informative priors for logistic regression ▶](108-weakly-informative-priors-for-logistic-regression.html)

## Fitting is easy; interpreting is the work[#](#fitting-is-easy-interpreting-is-the-work "Link to this heading")

A GLM is a one-line change from linear regression to fit. The effort moves to ****interpretation**** — the
link function makes coefficients nonlinear on the outcome scale — and to the ****checks**** that catch a
misspecified likelihood.

## Interpreting on the right scale[#](#interpreting-on-the-right-scale "Link to this heading")

A coefficient lives on the ****link**** scale, not the outcome scale, and must be translated.

* ****Logistic.**** \(\beta\_j\) is a change in ****log odds**** per unit of \(x\_j\);
  \(e^{\beta\_j}\) is an ****odds ratio****. On the probability scale the effect is **nonlinear** — the same
  \(\beta\_j\) moves the probability a lot near \(0.5\) and little near the extremes. The
  ****divide-by-4 rule**** gives a quick upper bound: \(\beta\_j / 4\) is the maximum change in
  probability per unit.
* ****Poisson.**** \(e^{\beta\_j}\) is a ****rate ratio**** — a multiplicative effect on the count.

Because effects are nonlinear, a single number rarely captures them; ****average predictive comparisons****
and predicted-probability plots communicate far better than a coefficient table.

```
import numpy as np
beta = idata.posterior["beta"].values.reshape(-1, k)
odds_ratio = np.exp(beta[:, j])                         # logistic: multiplicative on odds
np.percentile(odds_ratio, [2.5, 97.5])

# honest effect: predicted-probability difference at representative x, averaged over posterior
from scipy.special import expit
p_hi = expit(X_hi @ beta.T); p_lo = expit(X_lo @ beta.T)
(p_hi - p_lo).mean()                                    # average change in probability

```

## Checking the fit[#](#checking-the-fit "Link to this heading")

The posterior predictive check adapts to the outcome type. For ****counts****, compare the observed and
predicted frequency of each value, and especially the number of ****zeros**** — excess zeros are the classic
sign of a wrong likelihood. For ****binary**** data, check ****calibration****: among cases with predicted
probability near \(p\), is the observed rate near \(p\)?

```
import arviz as az
az.plot_ppc(idata)                     # observed vs predicted outcome distribution
# counts: does the model reproduce the spike at zero?  binary: is it calibrated?

```

## The recurring failure[#](#the-recurring-failure "Link to this heading")

Most GLM trouble is the ****variance assumption****. The Poisson forces variance to equal the mean; real
counts are usually ****overdispersed****, with variance far larger, so Poisson intervals come out much too
narrow. The binomial makes an analogous assumption. Detecting this — variance exceeding what the
likelihood permits — and fixing it with a richer likelihood is the subject two lessons on. First,
though, the priors that make even the basic logistic model behave.

> **See also**
> ****Related lessons:**** [Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html) · [Weakly informative priors for logistic regression](108-weakly-informative-priors-for-logistic-regression.html) · [Overdispersed Poisson regression for police stops](109-overdispersed-poisson-regression-for-police-stops.html) · [Do the Inferences from the Model Make Sense?](041-do-the-inferences-from-the-model-make-sense.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/12/06/working-with-generalized-linear-models/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)