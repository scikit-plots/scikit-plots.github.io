# Computing ACFs of Causal AR(2) Processes Using Difference Equations[#](#computing-acfs-of-causal-ar-2-processes-using-difference-equations "Link to this heading")

****Stage 3 · 🔗 Linear & ARMA Processes**** · Lesson 07 of 18 · **intermediate**

[◀ Previous · Understanding ARMA Processes](06-understanding-arma-processes.html) · [Next · Understanding ACFs via Difference Equations for AR(p) and ARMA(p, q) ▶](08-understanding-acfs-via-difference-equations-for-ar-p-and-arma-p-q.html)

## The recursion[#](#the-recursion "Link to this heading")

For a causal ****AR(2)****, \(x\_t = \phi\_1 x\_{t-1} + \phi\_2 x\_{t-2} + w\_t\), the autocorrelations
obey the ****same recursion as the process itself**** — a homogeneous linear ****difference equation****:

\[\rho(h) = \phi\_1\,\rho(h-1) + \phi\_2\,\rho(h-2), \qquad h \ge 1.\]

With \(\rho(0) = 1\), the ****Yule–Walker**** start gives \(\rho(1) = \phi\_1 / (1 - \phi\_2)\),
and every later lag follows by iterating.

## Solving it[#](#solving-it "Link to this heading")

Rather than iterate forever, solve the difference equation ****in closed form**** through its
****characteristic equation**** — equivalently, the ****roots**** \(z\_1, z\_2\) of the AR polynomial
\(1 - \phi\_1 z - \phi\_2 z^2\). The ACF is then a combination of the terms \(z\_i^{-h}\),
whose magnitudes are controlled by how far the roots sit ****outside**** the unit circle (causality
guarantees they do).

## Two regimes[#](#two-regimes "Link to this heading")

The ****discriminant**** \(\phi\_1^2 + 4\phi\_2\) decides the shape. When it is ****positive****, the
roots are ****real**** and the ACF is a sum of two ****damped exponentials**** (decaying monotonically, with
uniform or alternating sign). When it is ****negative****, the roots are ****complex conjugates**** and the
ACF is a ****damped sinusoid**** — a decaying oscillation with system frequency

\[f\_0 = \frac{1}{2\pi}\cos^{-1}\!\left( \frac{\phi\_1}{2\sqrt{-\phi\_2}} \right).\]

## What it tells you[#](#what-it-tells-you "Link to this heading")

Either way the ACF ****tails off**** toward zero but never truly ****cuts off**** — the signature of an
autoregressive process. (Its partner, the ****PACF****, does cut off, after lag 2.) Reading whether the
decay is exponential or oscillatory is a first clue to the underlying dynamics.

> **See also**
> ****Related lessons:**** [Understanding ARMA Processes](06-understanding-arma-processes.html) · [Understanding ACFs via Difference Equations for AR(p) and ARMA(p, q)](08-understanding-acfs-via-difference-equations-for-ar-p-and-arma-p-q.html) · [Sample ACF and Sample PACF](10-sample-acf-and-sample-pacf.html) · [Weak and Strong Stationarity](04-weak-and-strong-stationarity.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/17/computing-acfs-of-causal-ar2-processes-using-difference-equations/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: intermediate](../../_tags/level-intermediate.html)