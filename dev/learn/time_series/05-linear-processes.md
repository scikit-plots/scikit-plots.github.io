# Linear Processes[#](#linear-processes "Link to this heading")

****Stage 3 · 🔗 Linear & ARMA Processes**** · Lesson 05 of 18 · **intermediate**

[◀ Previous · Weak and Strong Stationarity](04-weak-and-strong-stationarity.html) · [Next · Understanding ARMA Processes ▶](06-understanding-arma-processes.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

A ****linear process**** writes a series as a ****weighted sum of white-noise shocks**** — a linear filter
applied to an underlying noise sequence. It is the general form from which AR, MA and ARMA models
all descend.

## The white-noise filter[#](#the-white-noise-filter "Link to this heading")

With white noise \(\{w\_t\}\) (mean zero, variance \(\sigma^2\)), a linear process is

\[x\_t = \mu + \sum\_{j=-\infty}^{\infty} \psi\_j\, w\_{t-j},
\qquad \sum\_{j=-\infty}^{\infty} |\psi\_j| < \infty.\]

The ****absolute summability**** of the weights \(\psi\_j\) guarantees the sum ****converges**** and the
result is ****stationary****; it is a little stronger than square-summability and is what lets the
usual limit theorems apply.

## Causal and one-sided[#](#causal-and-one-sided "Link to this heading")

A linear process is ****causal**** when it uses only ****present and past**** shocks — the future never
appears:

\[x\_t = \mu + \sum\_{j=0}^{\infty} \psi\_j\, w\_{t-j}.\]

This one-sided form is the ****MA(∞)**** representation. It is exactly the sense in which a causal ARMA
model can be “unrolled” into an infinite moving average of past noise.

## Why it’s central[#](#why-it-s-central "Link to this heading")

****Wold’s decomposition**** says that **every** weakly stationary process has a linear-process (MA(∞))
component — so linear processes are not one model among many but the ****canonical template**** for
stationary series. Causality and invertibility (next lesson) are precisely the conditions under
which an ARMA model collapses into, or inverts back out of, this form.

> **Hint**
> ****Related lessons:**** [Understanding ARMA Processes](06-understanding-arma-processes.html) · [Weak and Strong Stationarity](04-weak-and-strong-stationarity.html) · [Best Linear Predictor of a Stationary Process](09-best-linear-predictor-of-a-stationary-process.html) · [Understanding ACFs via Difference Equations for AR(p) and ARMA(p, q)](08-understanding-acfs-via-difference-equations-for-ar-p-and-arma-p-q.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/17/linear-processes/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: intermediate](../../_tags/level-intermediate.html)