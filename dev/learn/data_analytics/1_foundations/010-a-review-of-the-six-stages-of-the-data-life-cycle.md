# A Review of the Six Stages of the Data Life Cycle[#](#a-review-of-the-six-stages-of-the-data-life-cycle "Link to this heading")

🌱 Foundations 🔄 The Analysis Process & Data Life Cycle Lesson 010

◀ [Previous](009-understanding-the-data-life-cycle.html) · [Next](011-the-stages-of-the-data-analysis-process-and-their-roles.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Consolidating the cycle[#](#consolidating-the-cycle "Link to this heading")

This lesson consolidates the life cycle into a compact reference: each stage,
its core question, its typical owner, and its characteristic failure — the thing
that goes wrong there and surfaces later as an analyst’s headache.

## The stages at a glance[#](#the-stages-at-a-glance "Link to this heading")

* ****Plan**** — **What data, managed how, by whom, under what rules?** Owned by data
  governance and the teams commissioning collection. Characteristic failure:
  undefined terms, so two departments capture “customer” differently and their
  numbers never reconcile.
* ****Capture**** — **How does the data enter?** Owned by the systems and people at
  the point of entry. Characteristic failure: no validation at entry — free-text
  dates, optional required fields — producing the dirty data Section 4 cleans.
* ****Manage**** — **Where does it live, and who can reach it?** Owned by data
  engineering and IT. Characteristic failure: silos and stale copies, where the
  warehouse and the team spreadsheet quietly disagree.
* ****Analyze**** — **What does it tell us?** Owned by analysts. Characteristic
  failure: analysing without checking the upstream stages — precise answers
  from compromised inputs.
* ****Archive**** — **What do we keep, and can we still find it?** Characteristic
  failure: archives nobody can query, so history is technically kept but
  practically lost.
* ****Destroy**** — **What must go, and did it?** Characteristic failure at both
  extremes: deleting too eagerly (losing the baseline for next year’s
  comparison) or never deleting (hoarding personal data past its lawful
  purpose).

## Two threads through every stage[#](#two-threads-through-every-stage "Link to this heading")

****Security and privacy**** are not a stage; they are obligations at **every** stage
— planned rules, protected capture, controlled access, careful analysis,
encrypted archives, verified destruction. Likewise ****documentation****: each stage
should leave a record the next stage can rely on, which is exactly the chain of
custody the detective lesson demanded.

## Using this review[#](#using-this-review "Link to this heading")

Two practical habits fall out. When you receive a dataset, **walk it backward** —
who manages it, how was it captured, what did the plan define? — before trusting
it. And when an analysis will recur, **walk it forward** — will the data still
exist, unarchived and legal to use, when the next cycle runs? Ten minutes of
life-cycle thinking routinely saves days of confused analysis.

> **Hint**
> * [Understanding the Data Life Cycle](009-understanding-the-data-life-cycle.html)
* [The Stages of the Data Analysis Process and Their Roles](011-the-stages-of-the-data-analysis-process-and-their-roles.html)
* [The Importance of Clean Data](../4_data_cleaning_preparation/001-the-importance-of-clean-data.html)
* [Data Ethics in Data Analysis](../3_data_preparation/013-data-ethics-in-data-analysis.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/07/30/a-review-of-the-six-stages-of-the-data-life-cycle/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [foundations](../../../_tags/foundations.html) [process](../../../_tags/process.html)