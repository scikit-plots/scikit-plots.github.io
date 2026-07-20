# Linear Congruential Random Number Generator (LCG)[#](#linear-congruential-random-number-generator-lcg "Link to this heading")

****Stage 4 · 🧩 Sampling, Partitioning & Segmentation**** · Lesson 24 of 56 · **intermediate**

[◀ Previous · Stratified Random Sampling](23-stratified-random-sampling.html) · [Next · Partitioning Observations to Train Objective Models ▶](25-partitioning-observations-to-train-objective-models.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Randomness you can repeat[#](#randomness-you-can-repeat "Link to this heading")

The sampling of the last lesson needs a source of ****randomness**** — but for science it must also be
****reproducible****, so that a colleague running the same code gets the same split. Computers square this
circle with ****pseudo-random**** number generators: deterministic recipes that produce sequences which
**look** random. The ****linear congruential generator (LCG)**** is the classic, and the simplest to
understand.

## The recurrence[#](#the-recurrence "Link to this heading")

An LCG produces each number from the previous one by a single formula:

\[X\_{n+1} = (a\,X\_n + c) \bmod m,\]

where \(m\) is the ****modulus****, \(a\) the ****multiplier****, \(c\) the ****increment****, and
\(X\_0\) the starting value. Each \(X\_n\) is an integer in \([0, m)\); dividing by
\(m\) rescales it to a fraction in \([0, 1)\). From three constants and a start value, an
endless stream of “random” numbers follows.

## The seed and the period[#](#the-seed-and-the-period "Link to this heading")

The starting value \(X\_0\) is the ****seed****. Because the formula is deterministic, ****the same seed
always yields the same sequence**** — precisely what makes results reproducible (`random.seed` /
`numpy.random.seed` set it). Being finite, the sequence must eventually ****repeat****; the length
before it does is the ****period****, at most \(m\). Careful choices of \(a\), \(c\) and
\(m\) (the Hull–Dobell conditions) achieve the full period.

## Simple, but dated[#](#simple-but-dated "Link to this heading")

The LCG is prized for being ****fast, tiny and easy to reason about****, and it makes seeded
reproducibility concrete. But its statistical quality is ****limited**** — successive values fall on
detectable lattice patterns, and the low-order bits are weakly random. Modern libraries therefore
default to stronger generators (numpy now uses a ****PCG64**** generator by default), while keeping the
same crucial habit: ****set a seed**** so your sampling, splitting and modelling can be reproduced exactly.

> **Hint**
> ****Related lessons:**** [Stratified Random Sampling](23-stratified-random-sampling.html) · [Partitioning Observations to Train Objective Models](25-partitioning-observations-to-train-objective-models.html) · [IEEE 754 Floating-Point Standard](06-ieee-754-floating-point-standard.html) · [Clustering](27-clustering.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/14/linear-congruential-random-number-generator-lcg/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)