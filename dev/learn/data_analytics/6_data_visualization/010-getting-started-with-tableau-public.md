# Getting Started with Tableau Public[#](#getting-started-with-tableau-public "Link to this heading")

🎨 Data Visualization 📊 Tableau Lesson 010

◀ [Previous](009-introduction-to-tableau.html) · [Next](011-creating-a-co-emissions-visualization-in-tableau-public.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The free way in[#](#the-free-way-in "Link to this heading")

****Tableau Public**** is a free version of Tableau that lets anyone build and publish
interactive visualizations — the practical entry point for learning the tool. This
lesson covers getting started with it: what it is, how the workflow goes from data to
published visualization, and what to know before diving in.

## What Tableau Public is[#](#what-tableau-public-is "Link to this heading")

Tableau Public is a no-cost version of Tableau with one defining characteristic: the
visualizations you create are **published publicly** to the web, to your Tableau Public
profile, where anyone can view them. This is its central trade-off — free and capable,
but not private, so it suits learning, portfolios, and public data storytelling, and
is **not** suitable for confidential or proprietary data.

## The basic workflow[#](#the-basic-workflow "Link to this heading")

Building a visualization in Tableau Public follows a consistent flow:

* ****Connect to data**** — load a data source: commonly a spreadsheet or CSV file for
  Tableau Public. Tableau reads the fields and classifies them as **dimensions**
  (categorical: region, date, product) and **measures** (numeric values to aggregate:
  sales, counts).
* ****Build a view**** — drag fields onto the **rows** and **columns** shelves to define the
  chart’s structure, and onto **marks** (colour, size, label) to encode more. Tableau
  draws the chart and re-draws as you adjust — the direct-manipulation exploration.
* ****Choose and refine the chart**** — pick or adjust the chart type, add filters, format
  the visualization applying the design principles (clear focus, right encoding,
  accessible colour).
* ****Publish**** — save to your Tableau Public profile, producing a shareable,
  interactive visualization on the web.

## Dimensions and measures[#](#dimensions-and-measures "Link to this heading")

A key Tableau concept is the **dimension** versus **measure** distinction. ****Dimensions****
are categorical fields you group or break data down by (the `GROUP BY` categories
from SQL); ****measures**** are numeric fields Tableau aggregates (sum, average — the
aggregates from the analysis section). Placing a dimension and a measure together —
region (dimension) and sales (measure) — produces an aggregated visualization, sales
by region, exactly the grouped aggregation the analysis section covered, now drawn
automatically. Understanding this mapping connects Tableau to the analytical concepts
already learned.

## The caveat[#](#the-caveat "Link to this heading")

Tableau Public’s defining limitation bears repeating because getting it wrong is
serious: ****everything published is public.**** Uploading confidential, proprietary, or
personal data to Tableau Public exposes it to the world — a data-privacy failure of
exactly the kind the ethics and PII lessons warned against. Tableau Public is for
public or non-sensitive data only; confidential work requires the paid Tableau
versions with private hosting. Beyond privacy, the free version has some feature and
data-size limits versus the commercial product. Use Tableau Public for learning,
portfolios, and public data — never for anything that must stay private. The next
lesson works through a concrete example.

> **Hint**
> * [Introduction to Tableau](009-introduction-to-tableau.html)
* [Creating a CO₂ Emissions Visualization in Tableau Public](011-creating-a-co-emissions-visualization-in-tableau-public.html)
* [Effective vs. Ineffective Data Visualizations in Tableau](012-effective-vs-ineffective-data-visualizations-in-tableau.html)
* [Choosing the Right Visualization: Audience-Centered Design and Chart Selection](006-choosing-the-right-visualization-audience-centered-design-and-chart-selection.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/26/getting-started-with-tableau-public/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: viz](../../../_tags/topic-viz.html) [topic: tableau](../../../_tags/topic-tableau.html)