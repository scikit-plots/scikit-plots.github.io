# Best Linear Predictor of a Stationary Process[#](#best-linear-predictor-of-a-stationary-process "Link to this heading")

****Stage 4 · 🎯 Prediction & the Sample ACF / PACF**** · Lesson 09 of 18 · **intermediate**

[◀ Previous · Understanding ACFs via Difference Equations for AR(p) and ARMA(p, q)](08-understanding-acfs-via-difference-equations-for-ar-p-and-arma-p-q.html) · [Next · Sample ACF and Sample PACF ▶](10-sample-acf-and-sample-pacf.html) · [↑ Section](index.html)

## The prediction problem[#](#the-prediction-problem "Link to this heading")

Given a stationary series observed up to now, the ****best linear predictor**** of the next value is
the linear combination of past observations
\(\hat{x}\_{n+1} = \sum\_{k=1}^{n} a\_k\, x\_{n+1-k}\) that ****minimises the mean-squared error****.
“Best” here means ****within linear rules****; for a Gaussian process it is the best predictor of
****any**** kind.

## The projection principle[#](#the-projection-principle "Link to this heading")

The solution is ****geometric****: treat random variables as vectors with inner product
\(\langle X, Y\rangle = \mathbb{E}[XY]\), and the best predictor is the ****orthogonal
projection**** of the target onto the span of the predictors. Optimality is characterised by the
****orthogonality principle**** — the prediction ****error is uncorrelated with every predictor****:

\[\mathbb{E}\big[(x\_{n+1} - \hat{x}\_{n+1})\, x\_{n+1-k}\big] = 0, \qquad k = 1, \dots, n.\]

Writing these conditions out gives the ****prediction equations****, a linear system
\(\Gamma\_n \mathbf{a} = \gamma\_n\) in the autocovariances — the same ****Toeplitz**** system as
Yule–Walker.

## Solving efficiently[#](#solving-efficiently "Link to this heading")

Solving that system afresh at each order is wasteful. The ****Durbin–Levinson recursion**** builds the
order-\(h\) predictor from the order-\((h-1)\) one ****without inverting a matrix****, updating
the coefficients and the error variance in place — cheap and numerically stable.

## From predictor to PACF[#](#from-predictor-to-pacf "Link to this heading")

The recursion delivers a bonus. The ****last coefficient**** \(\phi\_{hh}\) of the best
order-\(h\) predictor ****is the partial autocorrelation**** at lag \(h\) — the correlation
between \(x\_t\) and \(x\_{t-h}\) ****after removing**** the linear influence of the intervening
values. For an ****AR(p)**** these coefficients vanish for \(h > p\), so the ****PACF cuts off at lag
p**** — the property that makes it the tool for reading autoregressive order.

> **Hint**
> ****Related lessons:**** [Sample ACF and Sample PACF](10-sample-acf-and-sample-pacf.html) · [Preliminary Estimation for AR Models and the Yule–Walker Equations](11-preliminary-estimation-for-ar-models-and-the-yule-walker-equations.html) · [Understanding ARMA Processes](06-understanding-arma-processes.html) · [Beyond One-Step Ahead Predictions](17-beyond-one-step-ahead-predictions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/17/best-linear-predictor-of-a-stationary-process-forecasting-principles-and-the-pacf/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: intermediate](../../_tags/level-intermediate.html)