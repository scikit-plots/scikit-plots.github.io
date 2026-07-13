# Context and Bias in Data Analysis[#](#context-and-bias-in-data-analysis "Link to this heading")

🎯 Data-Driven Decisions 🗣 Stakeholders, Communication & Execution Lesson 018

◀ [Previous](017-defining-the-problem-domain.html) · [Next](019-stakeholder-expectations-in-data-analysis.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Context makes data mean something[#](#context-makes-data-mean-something "Link to this heading")

****Context**** is the condition in which data exists — the who, what, when, where,
and how of its creation. The foundations showed context is what makes a value
meaningful; this lesson shows the sharper edge: ****unexamined context is where
bias enters an analysis****. The same data yields opposite conclusions depending
on context the analyst did or did not establish.

## The questions that establish context[#](#the-questions-that-establish-context "Link to this heading")

Before trusting any dataset, five questions locate it:

* ****Who**** collected it, and who is **in** it — which populations are represented,
  and which are silently missing?
* ****What**** exactly does each field measure, in what units, under what
  definition?
* ****When**** was it collected — and is that period representative, or a holiday,
  an outage, a boom?
* ****Where**** did it come from — which systems, regions, channels?
* ****How**** was it gathered — self-reported, sensor-logged, sampled how?

A satisfaction score of 4.5 means one thing from a representative survey and
another from one answered only by the delighted and the furious. Context is not
background; it is half the meaning.

## Where context failures become bias[#](#where-context-failures-become-bias "Link to this heading")

****Bias**** is a preference in favour of or against a thing, person, or group,
and unexamined context is its commonest doorway. The specific mechanisms (which
the prep section dissects) all trace to a context question skipped:

* ****Sampling bias**** — the data over-represents some groups (the **who** went
  unasked).
* ****Historical bias**** — the data faithfully records a biased past and the
  analysis projects it forward (the Amazon recruiting case from the
  foundations).
* ****Selection and survivorship bias**** — only certain cases made it into the
  data (the **what got captured** went unasked).
* ****Confirmation bias**** — the analyst’s own preference, steering which
  questions get asked and which results get scrutinised.

Notice the last one is about the **analyst**, not the data: context includes
your own position and expectations, which shape the analysis as surely as the
data’s origin does.

## Establishing context in practice[#](#establishing-context-in-practice "Link to this heading")

Two cheap habits. ****Interrogate provenance**** on arrival — walk the data-life-
cycle backward (who planned, captured, managed it?) before computing.
****Disaggregate and compare**** — check results across relevant groups and time
periods, because bias hides in aggregates and surfaces in breakdowns. Neither
needs special tools; both need the decision that context is part of the job.

## The caveat[#](#the-caveat "Link to this heading")

Perfect context is unattainable — you rarely know everything about how data
was made. The professional standard is not omniscience but ****honesty about the
limits****: stating what context you established, what you could not, and how
that bounds the conclusion. An analysis that names its context gaps is trusted
far longer than one that hides them, which is exactly the fairness obligation
from the foundations, operating at the project level.

> **Hint**
> * [Fairness in Data Analysis](../1_foundations/026-fairness-in-data-analysis.html)
* [Understanding Bias in Data Analysis](../3_data_preparation/008-understanding-bias-in-data-analysis.html)
* [Common Types of Data Bias](../3_data_preparation/010-common-types-of-data-bias.html)
* [Defining the Problem Domain](017-defining-the-problem-domain.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/08/31/context-and-bias-in-data-analysis/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [ddd](../../../_tags/ddd.html) [execution](../../../_tags/execution.html)