# Bayesian inference requires a model for data collection[#](#bayesian-inference-requires-a-model-for-data-collection "Link to this heading")

****Part 2 · Stage 7 · 🗳️ Data Collection & Decisions**** · Lesson 050 of 144 · **intermediate**

[◀ Previous · Implicit assumptions and model expansion: an example](049-implicit-assumptions-and-model-expansion-an-example.html) · [Next · Data-collection models and ignorability ▶](051-data-collection-models-and-ignorability.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The data did not arrive by magic[#](#the-data-did-not-arrive-by-magic "Link to this heading")

Every analysis so far quietly assumed that \(y\) is simply “the data”. But some process ****chose****
which units you observe: a survey sampled households, an experiment assigned treatments, a clinic
recorded only patients who returned. That process is part of the probability model, and ignoring it can
invalidate everything downstream.

## Model the inclusion indicator[#](#model-the-inclusion-indicator "Link to this heading")

Write \(y = (y\_{\text{obs}}, y\_{\text{mis}})\) for the complete data — everything that **could** have
been observed — and let \(I\) be the ****inclusion indicator****, \(I\_i = 1\) when unit \(i\) is
observed. The honest joint model covers both:

\[p(y, I \mid \theta, \phi) = p(y \mid \theta) \; p(I \mid y, \phi),\]

where \(\phi\) parameterises the ****data-collection mechanism****. What you actually condition on is
\((y\_{\text{obs}}, I)\), so the correct posterior integrates the missing values out:

\[p(\theta, \phi \mid y\_{\text{obs}}, I) \;\propto\;
p(\theta, \phi) \int p(y\_{\text{obs}}, y\_{\text{mis}} \mid \theta)
\; p(I \mid y\_{\text{obs}}, y\_{\text{mis}}, \phi) \; d y\_{\text{mis}} .\]

Analysing \(p(\theta \mid y\_{\text{obs}})\) alone — as if the observed data were the whole story —
is a ****modelling assumption****, not a neutral default.

## When it bites[#](#when-it-bites "Link to this heading")

The mechanism matters exactly when \(I\) depends on values you did ****not**** observe. Truncate a
sample at a threshold and the sample mean is biased for the population mean, however large \(n\)
grows. Let sicker patients drop out and the surviving cohort looks healthier. Publish only significant
results and the literature’s effect sizes are inflated. In each case the likelihood you wrote is not the
likelihood of the data you have.

```
import numpy as np
# a truncated sample: only y > 0 recorded. Naive mean is biased upward.
rng = np.random.default_rng(0)
y_full = rng.normal(0.0, 1.0, 100_000)
y_obs = y_full[y_full > 0]
y_full.mean(), y_obs.mean()          # ≈ 0.00  vs  ≈ 0.80 — the mechanism is not ignorable

```

## The good news[#](#the-good-news "Link to this heading")

Under identifiable conditions — the subject of the next lesson — the mechanism ****factors out**** and can
be ignored entirely, which is why the first seven stages were not wrong, merely conditional. Knowing
those conditions is what separates an analysis that may safely omit the design from one that must model
it. Randomisation, it will turn out, is precisely a device for ****making the mechanism ignorable by
construction****.

> **Hint**
> ****Related lessons:**** [Data-collection models and ignorability](051-data-collection-models-and-ignorability.html) · [Censoring and truncation](056-censoring-and-truncation.html) · [Notation](118-notation.html) · [Sample surveys](052-sample-surveys.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/bayesian-inference-requires-a-model-for-data-collection/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)