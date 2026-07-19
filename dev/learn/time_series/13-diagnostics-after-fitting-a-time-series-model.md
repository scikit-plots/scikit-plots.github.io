# Diagnostics After Fitting a Time Series Model[#](#diagnostics-after-fitting-a-time-series-model "Link to this heading")

****Stage 6 · 🏗️ Building & Forecasting Models**** · Lesson 13 of 18 · **advanced**

[◀ Previous · Maximum Likelihood Estimation for ARMA Models (Gaussian MLE)](12-maximum-likelihood-estimation-for-arma-models-gaussian-mle.html) · [Next · Order Selection for Time Series Models ▶](14-order-selection-for-time-series-models.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The goal[#](#the-goal "Link to this heading")

A fitted model is only as good as its ****residuals****. If the model has captured all the structure,
what remains should be ****white noise**** — patternless, uncorrelated, constant-variance. Diagnostics
****standardise**** the residuals (divide by their standard error) and then test that claim.

## What to look at[#](#what-to-look-at "Link to this heading")

Three views, read together:

* ****residual plot**** over time — should scatter randomly around zero, with ****no trend and no
  changing spread**** (heteroscedasticity);
* ****residual ACF / correlogram**** — essentially ****no spikes**** outside the
  \(\pm 1.96/\sqrt{n}\) bands (spikes at ****seasonal**** lags hint at missed seasonality);
* ****normality**** — a ****Q–Q plot**** and histogram, since valid prediction intervals lean on roughly
  normal errors.

`statsmodels` bundles these panels into `results.plot_diagnostics()`.

## The Ljung-Box test[#](#the-ljung-box-test "Link to this heading")

Eyeballing the ACF is subjective; the ****Ljung–Box**** test makes it formal. It is a ****portmanteau****
test of the residual autocorrelations ****jointly**** up to lag \(h\):

\[Q = n(n+2)\sum\_{k=1}^{h} \frac{\hat{r}\_k^2}{n-k},\]

compared against a \(\chi^2\) distribution. The null is ****no autocorrelation**** (white-noise
residuals), so a ****small p-value means the model is inadequate****. The degrees of freedom are reduced
by the number of fitted AR / MA parameters. (`acorr_ljungbox` in `statsmodels`.)

## When it fails[#](#when-it-fails "Link to this heading")

Failing diagnostics are a ****diagnosis, not a dead end****. Autocorrelation left in the residuals says
the model is ****missing structure**** — add an ****AR or MA**** term, or, if the leftover spikes fall at
****seasonal**** lags, move to a ****seasonal**** model. Re-fit and re-check until the residuals look like
noise.

> **Hint**
> ****Related lessons:**** [Order Selection for Time Series Models](14-order-selection-for-time-series-models.html) · [Maximum Likelihood Estimation for ARMA Models (Gaussian MLE)](12-maximum-likelihood-estimation-for-arma-models-gaussian-mle.html) · [Sample ACF and Sample PACF](10-sample-acf-and-sample-pacf.html) · [ARIMA Models: How Nonstationary Models Are Built from Stationary Ones](15-arima-models-how-nonstationary-models-are-built-from-stationary-ones.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/17/diagnostics-after-fitting-a-time-series-model-standardized-residuals-normality-and-autocorrelation/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: advanced](../../_tags/level-advanced.html)