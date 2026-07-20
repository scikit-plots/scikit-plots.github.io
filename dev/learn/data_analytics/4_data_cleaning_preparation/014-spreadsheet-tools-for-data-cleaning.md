# Spreadsheet Tools for Data Cleaning[#](#spreadsheet-tools-for-data-cleaning "Link to this heading")

🧽 Data Cleaning & Preparation 🧹 Dirty Data & Spreadsheet Cleaning Lesson 014

◀ [Previous](013-cleaning-and-merging-multiple-datasets.html) · [Next](015-using-spreadsheet-functions-for-data-cleaning.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The built-in cleaning toolkit[#](#the-built-in-cleaning-toolkit "Link to this heading")

Beyond formulas, spreadsheets ship with dedicated **features** for cleaning —
menu-driven tools that handle common defects without writing anything. Knowing
the toolkit means reaching for the right built-in instead of doing by hand what
the software does in one click, and it complements the formula-based cleaning of
the next lesson.

## The core cleaning features[#](#the-core-cleaning-features "Link to this heading")

* ****Remove Duplicates**** — scans selected columns and deletes rows that repeat,
  in one operation. You choose **which columns** define a duplicate (all columns
  for exact copies, or a key column like email to catch near-duplicates).
* ****Text to Columns**** — splits a single column into several by a delimiter,
  turning `"New York, NY"` into separate city and state columns — restoring the
  one-variable-per-column structure.
* ****Find and Replace**** — standardises values across the sheet, replacing every
  `"N/A"` with a blank, every `"St."` with `"Street"`. Its scope and
  match-case options control precisely what changes.
* ****Data Validation**** — sets **rules** for what a cell may contain (a date in a
  range, a value from a fixed list, a positive number), which both catches
  existing invalid data and **prevents** new bad entries — cleaning that works
  going forward, not just once.
* ****Conditional Formatting**** — colours cells by rule to **reveal** defects
  visually: highlight duplicates, flag values outside a valid range, mark blanks
  — making problems visible before you fix them.
* ****Sort and Filter**** — bring defects together for inspection: sort to surface
  extremes and group blanks, filter to isolate the rows meeting (or failing) a
  condition (the next lesson develops these as diagnostic lenses).

## Tools versus formulas[#](#tools-versus-formulas "Link to this heading")

The built-in tools and the cleaning **functions** (next lesson) overlap but suit
different jobs. Tools are ****one-time, menu-driven, and immediate**** — best for a
one-off clean where you apply the operation and move on. Functions are
****formula-based and live**** — best when the cleaning must **recompute** as data
changes (a `TRIM` column that stays trimmed as new rows arrive). A common
pattern uses both: functions to build cleaned columns that update, tools for
one-time structural fixes like removing duplicates.

## The caveat[#](#the-caveat "Link to this heading")

Menu-driven tools apply **immediately and often irreversibly** — Remove Duplicates
deletes rows then and there, Find and Replace changes everything matching at once,
and an over-broad replace (turning `"St."` into `"Street"` also mangles
`"State St. Louis"`) corrupts data in bulk with one click. Because these tools
act fast and wide, the copy-first discipline matters most here: apply them to a
working copy, check the result (especially the row count after Remove
Duplicates), and keep the raw data untouched so an over-eager tool is never
fatal. The next lesson turns to the formula-based approach that recomputes as
data changes.

> **Hint**
> * [Data Cleaning with Spreadsheets](012-data-cleaning-with-spreadsheets.html)
* [Using Spreadsheet Functions for Data Cleaning](015-using-spreadsheet-functions-for-data-cleaning.html)
* [Viewing Data Differently for More Effective Data Cleaning](016-viewing-data-differently-for-more-effective-data-cleaning.html)
* [Common Issues in Dirty Data](011-common-issues-in-dirty-data.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/01/spreadsheet-tools-for-data-cleaning/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: cleaning](../../../_tags/topic-cleaning.html) [topic: dirty](../../../_tags/topic-dirty.html)