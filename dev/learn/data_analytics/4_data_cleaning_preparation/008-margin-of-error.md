# Margin of Error[#](#margin-of-error "Link to this heading")

🧽 Data Cleaning & Preparation 🧱 Data Integrity & Sampling Lesson 008

◀ [Previous](007-sample-size-and-data-integrity.html) · [Next](009-dirty-data-vs-clean-data.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The plus-or-minus on an estimate[#](#the-plus-or-minus-on-an-estimate "Link to this heading")

Any number computed from a sample is an **estimate** of the population’s true
value, not the value itself — and honesty requires expressing how far off it
might be. The ****margin of error**** is the range above and below a sample estimate
within which the true population value is likely to fall. A survey reporting “48%
support, ±3%” is saying the true figure is likely between 45% and 51% — the ±3%
is the margin of error, and reporting it is the difference between an honest
estimate and a false precision.

## Reading a margin of error[#](#reading-a-margin-of-error "Link to this heading")

The margin of error is always paired with a ****confidence level**** — commonly 95% —
which states **how likely** the true value is to fall within the margin. “48% ±3%
at 95% confidence” means: if the sampling were repeated many times, about 95% of
the resulting intervals would contain the true population value. The two numbers
work together — a margin of error without a confidence level is incomplete, and a
confidence level tells you how much trust to place in the ± range.

The practical reading is a discipline against over-interpretation. If a poll
shows candidate A at 48% ±3% and candidate B at 46% ±3%, the intervals overlap
(45–51% versus 43–49%) — the “2-point lead” is ****within the margin of error**** and
therefore not a reliable difference at all. Treating overlapping estimates as a
real gap is one of the most common misreadings of sampled data, and knowing the
margin of error is what prevents it.

## What drives the margin[#](#what-drives-the-margin "Link to this heading")

The margin of error is governed chiefly by:

* ****Sample size**** — the dominant factor. Larger samples shrink the margin (with
  diminishing returns — roughly, quadrupling the sample halves the margin), which
  is the precise sense in which “more data” buys precision.
* ****Confidence level**** — demanding higher confidence **widens** the margin for a
  given sample: to be more certain the interval contains the truth, you must make
  the interval bigger.
* ****Variability**** — more variable populations produce larger margins.

This ties the stage together: sample size, confidence, and precision (the margin)
are three faces of one relationship, and fixing any two constrains the third.

## Why it matters for integrity and communication[#](#why-it-matters-for-integrity-and-communication "Link to this heading")

The margin of error is where statistical honesty meets communication. Reporting a
sample estimate **without** its margin implies a precision the data does not have —
“support is 48%” sounds exact; “48% ±3%” tells the truth. An analyst who omits
the margin of error, or a stakeholder who ignores it, will read noise as signal
and make decisions on differences that are not real. Presenting estimates **with**
their uncertainty is the honest-communication obligation from Section 2, applied
to sampled numbers.

## The caveat[#](#the-caveat "Link to this heading")

The margin of error captures only ****sampling error**** — the uncertainty from
examining a sample rather than the whole population. It says **nothing** about
****bias****: a biased sample can report a tight margin of error around the wrong
value, and the small ± lends false reassurance. A ±1% margin on a
self-selected online poll is precisely wrong. Margin of error quantifies one kind
of uncertainty; the biases and dirty-data problems of this section are others it
cannot see. This completes the data-integrity stage — the question of whether
there is enough sound data — and the next stage turns to the dirty data itself,
and how to clean it.

> **Hint**
> * [Sample Size and Data Integrity](007-sample-size-and-data-integrity.html)
* [Statistical Power in Data Analysis](006-statistical-power-in-data-analysis.html)
* [Population, Sample Size, and Random Sampling](005-population-sample-size-and-random-sampling.html)
* [Balancing Speed and Accuracy in Data Analysis](../2_data_driven_decisions/024-balancing-speed-and-accuracy-in-data-analysis.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/10/31/margin-of-error/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: cleaning](../../../_tags/topic-cleaning.html) [topic: integrity](../../../_tags/topic-integrity.html)