# Linking Multiple Datasets in Tableau Public[#](#linking-multiple-datasets-in-tableau-public "Link to this heading")

🎨 Data Visualization 📊 Tableau Lesson 014

◀ [Previous](013-using-creativity-in-tableau.html) · [Next](015-data-storytelling-giving-numbers-a-clear-and-convincing-voice.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Combining sources for richer views[#](#combining-sources-for-richer-views "Link to this heading")

Real analysis often draws on several datasets, and Tableau can **combine** them —
linking multiple data sources so a single visualization draws on more than one table.
This lesson covers linking datasets in Tableau Public, applying the data-combining
concepts from the analysis section within the visualization tool.

## How Tableau links data[#](#how-tableau-links-data "Link to this heading")

Tableau offers a few ways to combine data sources, mirroring the combining techniques
already learned:

* ****Joins**** — combining tables on a matching key, exactly the SQL JOIN from the
  analysis section, configured visually in Tableau. Tables are joined on a shared
  field (a key), producing a combined dataset with the join-type choices (inner, left,
  right, full) the JOIN lesson covered.
* ****Relationships**** — Tableau’s flexible way to relate tables without a rigid
  up-front join, letting Tableau determine how to combine them per visualization.
* ****Blending**** — combining data from **different sources** (say a spreadsheet and a
  database) at the visualization level, aggregating each and linking on a common
  field.
* ****Unions**** — stacking tables with the same structure (appending rows), for
  combining like datasets (this month’s and last month’s data).

The concepts are the ones from the analysis section — joining on keys, combining
sources — now performed inside Tableau to feed richer visualizations.

## Why link datasets[#](#why-link-datasets "Link to this heading")

Linking data lets a visualization draw on information spread across tables — sales
data joined to product details joined to regional information, visualized together.
Just as the analysis section combined tables to answer richer questions, linking
datasets in Tableau enables richer **visualizations**, showing relationships across data
that no single table holds. It brings the relational-combine power into the
visualization layer.

## The caveat[#](#the-caveat "Link to this heading")

Combining data in Tableau carries exactly the hazards the analysis section flagged for
joins, now one step removed and thus easier to get wrong unnoticed. Joining on a
****non-unique key**** multiplies rows and inflates the aggregates Tableau computes — the
fan-out problem, now hidden inside a chart where the wrong numbers look authoritative.
****Mismatched keys**** silently drop data; ****blending**** aggregates before combining,
which can produce subtly different results than a join. The discipline is the same:
understand the relationship between the tables (one-to-one, one-to-many), verify that
combined visualizations show the row counts and totals you expect, and treat a chart
built on linked data with the same row-count skepticism as a SQL join. A visualization
of wrongly-combined data misleads with a confident, polished face. The next lessons
turn from building charts to telling stories with them.

> **Hint**
> * [Using Creativity in Tableau](013-using-creativity-in-tableau.html)
* [Getting Started with Tableau Public](010-getting-started-with-tableau-public.html)
* [Effective vs. Ineffective Data Visualizations in Tableau](012-effective-vs-ineffective-data-visualizations-in-tableau.html)
* [Data Storytelling: Giving Numbers a Clear and Convincing Voice](015-data-storytelling-giving-numbers-a-clear-and-convincing-voice.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/26/linking-multiple-datasets-in-tableau-public/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: viz](../../../_tags/topic-viz.html) [topic: tableau](../../../_tags/topic-tableau.html)