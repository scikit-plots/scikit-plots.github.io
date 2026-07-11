# Understanding ARMA Processes[#](#understanding-arma-processes "Link to this heading")

****Stage 3 · 🔗 Linear & ARMA Processes**** · Lesson 06 of 18 · **intermediate**

[◀ Previous · Linear Processes](05-linear-processes.html) · [Next · Computing ACFs of Causal AR(2) Processes Using Difference Equations ▶](07-computing-acfs-of-causal-ar-2-processes-using-difference-equations.html)

## The model[#](#the-model "Link to this heading")

An ****ARMA(p, q)**** process blends two mechanisms: an ****autoregressive (AR)**** part, where the value
depends on its own ****p**** past values, and a ****moving-average (MA)**** part, where it depends on the
last ****q**** white-noise ****shocks****:

\[x\_t = \phi\_1 x\_{t-1} + \dots + \phi\_p x\_{t-p}
+ w\_t + \theta\_1 w\_{t-1} + \dots + \theta\_q w\_{t-q}.\]

## Backshift form[#](#backshift-form "Link to this heading")

Using the ****backshift operator**** \(B\) (with \(B^j x\_t = x\_{t-j}\)), the model compresses
to

\[\phi(B)\, x\_t = \theta(B)\, w\_t,\]

where \(\phi(B) = 1 - \phi\_1 B - \dots - \phi\_p B^p\) is the ****AR polynomial**** and
\(\theta(B) = 1 + \theta\_1 B + \dots + \theta\_q B^q\) the ****MA polynomial****. This algebra makes
the next two properties easy to state.

## Causality and invertibility[#](#causality-and-invertibility "Link to this heading")

Two root conditions govern behaviour. The process is ****causal**** — expressible as a one-sided MA(∞)
of past shocks — when ****all roots of**** \(\phi(z)\) lie ****outside**** the unit circle
(\(|z| > 1\)). It is ****invertible**** — expressible as an AR(∞) in past values — when ****all roots
of**** \(\theta(z)\) lie ****outside**** the unit circle. Causality is what makes an ARMA a proper
linear process; invertibility makes its parameters ****identifiable**** from the data.

## Watch for redundancy[#](#watch-for-redundancy "Link to this heading")

If the AR and MA polynomials share a ****common factor****, the model is ****over-parameterised****: the
factor cancels and a simpler model fits identically. The extreme case \(\phi(B) = \theta(B)\)
reduces the whole model to \(x\_t = w\_t\), plain white noise. Always ****cancel common roots****
before trusting a fit; `statsmodels` exposes the fitted `.arroots` and `.maroots` for exactly
this check.

> **See also**
> ****Related lessons:**** [Linear Processes](05-linear-processes.html) · [Computing ACFs of Causal AR(2) Processes Using Difference Equations](07-computing-acfs-of-causal-ar-2-processes-using-difference-equations.html) · [Understanding ACFs via Difference Equations for AR(p) and ARMA(p, q)](08-understanding-acfs-via-difference-equations-for-ar-p-and-arma-p-q.html) · [Maximum Likelihood Estimation for ARMA Models (Gaussian MLE)](12-maximum-likelihood-estimation-for-arma-models-gaussian-mle.html) · [ARIMA Models: How Nonstationary Models Are Built from Stationary Ones](15-arima-models-how-nonstationary-models-are-built-from-stationary-ones.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/17/understanding-arma-processes/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: intermediate](../../_tags/level-intermediate.html)