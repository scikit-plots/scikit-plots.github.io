# Order Selection for Time Series Models[#](#order-selection-for-time-series-models "Link to this heading")

****Stage 6 · 🏗️ Building & Forecasting Models**** · Lesson 14 of 18 · **advanced**

[◀ Previous · Diagnostics After Fitting a Time Series Model](13-diagnostics-after-fitting-a-time-series-model.html) · [Next · ARIMA Models: How Nonstationary Models Are Built from Stationary Ones ▶](15-arima-models-how-nonstationary-models-are-built-from-stationary-ones.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The trade-off[#](#the-trade-off "Link to this heading")

Every extra parameter ****improves the in-sample fit**** but risks ****overfitting**** — chasing noise that
will not repeat. Order selection is the search for a model that is ****complex enough to fit, simple
enough to generalise****: the ****parsimony**** principle at the heart of Box–Jenkins.

## Information criteria[#](#information-criteria "Link to this heading")

The standard tools score fit ****against**** complexity. Both the ****Akaike**** and ****Bayesian****
information criteria reward the likelihood and ****penalise**** the parameter count \(k\):

\[\mathrm{AIC} = 2k - 2\ln \hat{L}, \qquad \mathrm{BIC} = k\ln n - 2\ln \hat{L}.\]

****Lower is better****, and you compare candidates fitted to the ****same**** data. (The small-sample
correction ****AICc**** is safer when \(n\) is not large.)

## AIC versus BIC[#](#aic-versus-bic "Link to this heading")

The two differ only in the penalty. ****BIC****’s per-parameter cost \(\ln n\) is harsher than
****AIC****’s \(2\) (once \(n > 7\)), so ****BIC favours simpler models**** and is preferred when
****parsimony**** matters; ****AIC**** tends to pick slightly richer models and suits ****predictive
accuracy****. When they disagree, the choice is yours to justify.

## Putting it together[#](#putting-it-together "Link to this heading")

In practice: pick ****d**** by differencing until stationary (ADF / KPSS), read tentative ****p, q**** off
the ACF / PACF, then ****grid-search**** nearby orders and keep the lowest-criterion model ****that also
passes diagnostics**** — a lower AIC means nothing if the residuals are still autocorrelated. Tools
like `pmdarima.auto_arima` automate the search; `statsmodels` exposes `.aic` and `.bic`.

> **Hint**
> ****Related lessons:**** [Diagnostics After Fitting a Time Series Model](13-diagnostics-after-fitting-a-time-series-model.html) · [Sample ACF and Sample PACF](10-sample-acf-and-sample-pacf.html) · [ARIMA Models: How Nonstationary Models Are Built from Stationary Ones](15-arima-models-how-nonstationary-models-are-built-from-stationary-ones.html) · [Understanding ARMA Processes](06-understanding-arma-processes.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/17/order-selection-for-time-series-models/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: advanced](../../_tags/level-advanced.html)