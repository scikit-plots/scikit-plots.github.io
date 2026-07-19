# Weak and Strong Stationarity[#](#weak-and-strong-stationarity "Link to this heading")

****Stage 2 · 📐 Stationarity**** · Lesson 04 of 18 · **beginner**

[◀ Previous · A Gentle Introduction to Stationarity](03-a-gentle-introduction-to-stationarity.html) · [Next · Linear Processes ▶](05-linear-processes.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Two definitions[#](#two-definitions "Link to this heading")

“Stationarity” comes in two strengths. ****Strong**** (strict) stationarity constrains the ****entire
distribution****; ****weak**** (second-order, or covariance) stationarity constrains only the ****first
two moments****. Most classical time-series theory — including ARMA — needs only the weaker one.

## Strong stationarity[#](#strong-stationarity "Link to this heading")

A series is ****strictly stationary**** if shifting time leaves its ****whole joint distribution****
unchanged: for any lag \(h\) and any set of times, the block \((x\_{t\_1}, \dots, x\_{t\_k})\)
has the same joint distribution as \((x\_{t\_1+h}, \dots, x\_{t\_k+h})\),

\[(x\_{t\_1}, \dots, x\_{t\_k}) \;\stackrel{d}{=}\; (x\_{t\_1+h}, \dots, x\_{t\_k+h}).\]

Nothing about the probabilistic structure depends on ****when**** you look — a strong condition that
is hard to verify from a single finite sample.

## Weak stationarity[#](#weak-stationarity "Link to this heading")

A series is ****weakly stationary**** if its ****mean is constant****, its ****variance is finite and
constant****, and its ****autocovariance depends only on the lag**** — not on absolute time:

\[\mathbb{E}[x\_t] = \mu, \qquad
\gamma(s, t) = \operatorname{Cov}(x\_s, x\_t) = \gamma(|s - t|).\]

This is all that ARMA modelling requires, and — unlike strict stationarity — it is checkable from
data through the sample mean and the sample autocorrelation.

## How they relate[#](#how-they-relate "Link to this heading")

The two coincide under mild conditions. ****Strong stationarity plus finite second moments implies
weak**** stationarity. The converse fails in general, ****except for Gaussian**** processes: a Gaussian
process is fully described by its mean and covariance, so ****weak + Gaussian implies strong****.
****White noise**** — zero mean, constant variance, zero autocorrelation — is the canonical weakly
stationary building block.

> **Hint**
> ****Related lessons:**** [A Gentle Introduction to Stationarity](03-a-gentle-introduction-to-stationarity.html) · [Linear Processes](05-linear-processes.html) · [Understanding ARMA Processes](06-understanding-arma-processes.html) · [Sample ACF and Sample PACF](10-sample-acf-and-sample-pacf.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/17/weak-and-strong-stationarity/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: beginner](../../_tags/level-beginner.html)