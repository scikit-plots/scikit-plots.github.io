# Identifying Bad Data Sources (When Data Does Not ROCCC)[#](#da-3-prep-prep-012 "Link to this heading")

📦 Data Preparation ⚖️ Bias & Data Ethics Lesson 012

◀ [Previous](011-identifying-good-data-sources-roccc-framework.html) · [Next](013-data-ethics-in-data-analysis.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## ROCCC in reverse[#](#roccc-in-reverse "Link to this heading")

The ROCCC framework doubles as a detector for **bad** data: a source that fails
one or more criteria is one to distrust, or at least to use with open eyes. Just
as good data “ROCCCs”, bad data fails to — and learning to read each failure is
how an analyst avoids building on unsound ground. This lesson runs the five
criteria backward.

## The five failures[#](#the-five-failures "Link to this heading")

* ****Not Reliable**** — from an unvetted or low-quality origin, known for errors,
  or visibly incomplete and inconsistent. Red flags: no clear methodology, a
  source with no reputation to protect, obvious internal contradictions.
* ****Not Original**** — a copy of a copy, with no path back to who actually
  collected it. Red flags: data quoted from a secondary article that cites no
  primary source; aggregations whose components cannot be traced. Every removed
  hand is unverifiable distortion.
* ****Not Comprehensive**** — missing fields, populations, or time spans the
  question requires. Red flags: gaps in coverage, suspiciously round or sparse
  data, a scope narrower than the question needs.
* ****Not Current**** — too old to reflect present reality, in a domain that has
  moved on. Red flags: no collection date given, or a date that predates
  relevant changes in the subject.
* ****Not Cited**** — no documentation of who created it, when, where, or how. Red
  flags: data with no attribution, no methodology, no provenance — asking for
  blind trust.

A source failing several of these is not merely imperfect; it is a liability,
and analysis built on it inherits every weakness.

## The seductive-but-bad source[#](#the-seductive-but-bad-source "Link to this heading")

The dangerous case is data that is **convenient** — free, large, immediately
available — but fails ROCCC quietly. A big, easily-downloaded dataset with no
methodology and no date is tempting under deadline, and its problems do not
announce themselves: the analysis runs, the charts render, and the unreliability
surfaces only when a decision built on it goes wrong. Convenience is not a ROCCC
criterion; weigh it against the five that are.

## What to do with a flawed source[#](#what-to-do-with-a-flawed-source "Link to this heading")

Failing ROCCC is not always disqualifying — sometimes flawed data is the only
data available. The professional responses, in order of preference: ****find a
better source**** if one exists; ****supplement**** the weak source with others to
cover its gaps; ****validate**** what you can against independent data; and, at
minimum, ****disclose**** the limitation prominently, so anyone relying on the
conclusion knows the ground it stands on. What is never acceptable is using
known-bad data **silently**, letting others assume a soundness you know is absent.

## The caveat[#](#the-caveat "Link to this heading")

Source evaluation is a judgement, not a pass/fail gate — real data almost always
fails **some** criterion to **some** degree, and rejecting everything imperfect
would leave you with nothing to analyse. The skill is proportionality: matching
the required source quality to the stakes of the decision (the speed-versus-
accuracy trade-off, applied to data), and being honest about where the data
falls short of what the question deserves. This completes the bias and source-
quality core; the next lessons turn to the ethics and privacy obligations that
govern how data may be used at all.

> **Hint**
> * [Identifying Good Data Sources (ROCCC Framework)](011-identifying-good-data-sources-roccc-framework.html)
* [Sampling Bias and Unbiased Data](009-sampling-bias-and-unbiased-data.html)
* [Data Ethics in Data Analysis](013-data-ethics-in-data-analysis.html)
* [Choosing the Right Data to Collect](002-choosing-the-right-data-to-collect.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/09/04/identifying-bad-data-sources-when-data-does-not-roccc/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: prep](../../../_tags/topic-prep.html) [topic: bias\_ethics](../../../_tags/topic-bias_ethics.html)