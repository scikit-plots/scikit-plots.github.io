# The Role of Spreadsheets in Data Analysis and Basic Concepts[#](#the-role-of-spreadsheets-in-data-analysis-and-basic-concepts "Link to this heading")

🌱 Foundations 🧰 Tools, Applications & Ethics Lesson 021

◀ [Previous](020-overview-of-core-tools-used-by-data-analysts.html) · [Next](022-the-concept-and-basic-use-of-sql-query-language.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## The visible workbench[#](#the-visible-workbench "Link to this heading")

A ****spreadsheet**** is data you can **see**: a grid where every value sits in a
labelled cell, every change is immediate, and every intermediate step is
inspectable. That visibility is why it is the first tool this course teaches
and the tool most analyses still begin in — it makes the abstract operations of
analysis (sort, filter, compute, summarise) concrete and watchable.

## The anatomy[#](#the-anatomy "Link to this heading")

* ****Cells**** — the atoms, each addressed by column letter and row number
  (`B7`). A cell holds a value **or** a formula that computes one.
* ****Rows and columns**** — by convention, a ****row is one record**** (one sale, one
  customer, one day) and a ****column is one attribute**** (date, region, amount).
  Keeping that convention is half of good data design.
* ****Headers**** — the first row, naming each column. A header is context made
  explicit: `ORDER_DATE` tells you what the values below mean.
* ****Formulas**** — expressions beginning with `=` that compute from other
  cells: `=C2*D2` multiplies price by quantity. Change an input and every
  dependent formula updates — the spreadsheet’s quiet superpower.
* ****Functions**** — named, prebuilt operations used inside formulas:
  `=SUM(E2:E100)`, `=AVERAGE(...)`, `=COUNT(...)`, `=MAX(...)`. They
  are the vocabulary the analysis sections expand enormously.

## What analysts actually do with them[#](#what-analysts-actually-do-with-them "Link to this heading")

Across the six phases, the spreadsheet serves at least four roles: ****inspect****
(eyeball raw data for obvious problems), ****organise**** (sort and filter into
meaningful order), ****calculate**** (derive new columns and summary figures), and
****communicate**** (a labelled table or quick chart a stakeholder can open with no
special tools). A first pass on almost any small dataset — scan it, sort it,
total it — is a spreadsheet task done in minutes.

## A worked miniature[#](#a-worked-miniature "Link to this heading")

A sheet of orders with `PRICE` in column C and `QUANTITY` in column D:
add a header `REVENUE` in E1, put `=C2*D2` in E2, fill it down, and
`=SUM(E2:E101)` gives total revenue for a hundred orders. Three formulas,
and raw records have become a business number — the entire shape of analysis,
in miniature.

## The honest limits[#](#the-honest-limits "Link to this heading")

Spreadsheets strain as data grows past tens of thousands of rows, and their
flexibility is a double edge: any cell can be quietly overtyped, so errors hide
in plain sight and there is no built-in record of what changed. Later lessons
treat spreadsheet **errors** and **verification** as first-class topics for exactly
this reason. The scaling limit is what SQL, next, exists to remove.

> **Hint**
> * [Overview of Core Tools Used by Data Analysts](020-overview-of-core-tools-used-by-data-analysts.html)
* [The Concept and Basic Use of SQL (Query Language)](022-the-concept-and-basic-use-of-sql-query-language.html)
* [Building and Organizing a Spreadsheet](../2_data_driven_decisions/012-building-and-organizing-a-spreadsheet.html)
* [Spreadsheet Calculations with Formulas](../2_data_driven_decisions/014-spreadsheet-calculations-with-formulas.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/07/30/the-role-of-spreadsheets-in-data-analysis-and-basic-concepts/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [foundations](../../../_tags/foundations.html) [tools](../../../_tags/tools.html)