# Robust regression using t-distributed errors[#](#robust-regression-using-t-distributed-errors "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 117 of 144 · **advanced**

[◀ Previous · Robust inference for the eight schools](116-robust-inference-for-the-eight-schools.html) · [Next · Notation ▶](118-notation.html)

## Regression that ignores outliers[#](#regression-that-ignores-outliers "Link to this heading")

Ordinary regression puts a ****normal**** on the residuals, so a single aberrant point drags the whole line
toward it — least squares is exquisitely sensitive to outliers in \(y\). ****Robust regression****
replaces the normal error with a ****Student-****\(t\), and the fix is a one-line change with an
outsized effect on reliability.

## The model[#](#the-model "Link to this heading")

Keep the linear predictor; change only the error distribution:

\[y\_i \sim t\_\nu\bigl(X\_i \beta, \; \sigma\bigr).\]

The degrees of freedom \(\nu\) set the tail weight, and can be ****estimated**** so the data report their
own outlier-proneness. Everything else — priors on \(\beta\), hierarchical extensions, the sampler —
is unchanged from the normal model; only the likelihood’s tails have thickened.

```
import pymc as pm
with pm.Model():
    beta = pm.Normal("beta", 0, 2.5, shape=X.shape[1])
    sigma = pm.HalfNormal("sigma", 1)
    nu = pm.Gamma("nu", 2, 0.1)                          # estimate tail weight; Gamma keeps nu > 0
    pm.StudentT("y", nu=nu, mu=X @ beta, sigma=sigma, observed=y)
    idata = pm.sample()

```

## Why it works, and what to watch[#](#why-it-works-and-what-to-watch "Link to this heading")

The mechanism is the scale-mixture of the previous lesson: a \(t\) residual is a normal whose
variance can inflate for a single point, so an outlier is granted a ****large private variance**** and pulls
on the coefficients only weakly. The line is fitted to the ****bulk**** of the data. Because \(\nu\) is
estimated, the model interpolates: heavy tails when outliers are present, near-normal when they are not.

Two cautions carry the honest limits. Robustness is against outliers in \(y\), ****not in the
predictors**** — a high-leverage point at an extreme \(x\) can still distort the fit, because it sits
where the line has little data to argue with it. And down-weighting is not deletion: if an “outlier” is a
real signal (a regime change, a rare but valid case), the \(t\) will quietly discount evidence you
might have wanted. Robust regression is the right default for messy continuous outcomes — reach for it
before least squares on real data — but it guards against one failure mode, not all of them.

> **See also**
> ****Related lessons:**** [Posterior inference and computation](115-posterior-inference-and-computation.html) · [Overdispersed versions of standard models](114-overdispersed-versions-of-standard-models.html) · [Bayesian analysis of classical regression](092-bayesian-analysis-of-classical-regression.html) · [Aspects of robustness](113-aspects-of-robustness.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/12/07/robust-regression-using-t-distributed-errors/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)