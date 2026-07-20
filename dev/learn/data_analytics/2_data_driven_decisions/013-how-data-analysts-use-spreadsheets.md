# How Data Analysts Use Spreadsheets[#](#how-data-analysts-use-spreadsheets "Link to this heading")

🎯 Data-Driven Decisions 📗 Spreadsheets for Analysis Lesson 013

◀ [Previous](012-building-and-organizing-a-spreadsheet.html) · [Next](014-spreadsheet-calculations-with-formulas.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The everyday toolkit[#](#the-everyday-toolkit "Link to this heading")

Beyond holding data, a spreadsheet is a small analysis workbench, and analysts
lean on a compact set of its features constantly. This lesson surveys that
working toolkit — what each feature does and the task it serves — so the
formula and function lessons that follow have a home.

## The core moves[#](#the-core-moves "Link to this heading")

* ****Sorting**** orders rows by a column — largest sales first, newest dates on
  top — to surface extremes and impose meaningful order. (A dedicated lesson
  in the analysis section treats sorting and filtering in depth.)
* ****Filtering**** hides rows that fail a condition, so you see only what matters
  right now — one region, orders above a threshold, this month.
* ****Formulas**** compute new values from existing cells, deriving the columns and
  totals a raw extract lacks.
* ****Functions**** are named, prebuilt calculations used inside formulas — the
  vocabulary the last lesson of this stage expands.
* ****Pivot tables**** summarise a table by grouping and aggregating —
  `revenue by region by quarter` from thousands of rows, with a few drags.
  They are the spreadsheet’s most powerful analysis feature, and the analysis
  section returns to them repeatedly.
* ****Conditional formatting**** colours cells by rule (overdue in red, top
  performers in green) to make patterns jump out visually.
* ****Charts**** turn a range into a bar, line, or scatter for exploration or a
  stakeholder summary.

## A task-to-tool map[#](#a-task-to-tool-map "Link to this heading")

The features map cleanly onto everyday questions. **“Which stores
underperformed?”** — filter to the period, sort by sales, eyeball the bottom.
**“What’s revenue by region?”** — pivot table. **“Which orders need attention?”** —
conditional formatting flags them. **“Show the trend”** — a line chart. Fluency
is knowing, on hearing the question, which feature answers it fastest.

## Where it fits the workflow[#](#where-it-fits-the-workflow "Link to this heading")

These moves cover the first, exploratory pass of most analyses — fast enough
to try several angles in an afternoon, transparent enough that a stakeholder
can watch. The cleaning and analysis sections rebuild each of them at greater
depth and scale (and in SQL and Python), but the spreadsheet versions are
where the intuitions form.

## The caveat[#](#the-caveat "Link to this heading")

Every one of these features assumes the tidy layout of the previous lesson:
sorting scrambles data if rows are not independent records, pivots break on
merged headers, filters mislead on mixed types. The toolkit is only as good as
the sheet it runs on — which is why layout came first.

> **Hint**
> * [Building and Organizing a Spreadsheet](012-building-and-organizing-a-spreadsheet.html)
* [Spreadsheet Calculations with Formulas](014-spreadsheet-calculations-with-formulas.html)
* [Sorting and Filtering Data in Spreadsheets](../3_data_preparation/021-sorting-and-filtering-data-in-spreadsheets.html)
* [Spreadsheet Functions](016-spreadsheet-functions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/08/31/how-data-analysts-use-spreadsheets/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: ddd](../../../_tags/topic-ddd.html) [topic: spreadsheets](../../../_tags/topic-spreadsheets.html)