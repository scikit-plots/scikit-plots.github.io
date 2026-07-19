# Data Tables (Tabular Data)[#](#data-tables-tabular-data "Link to this heading")

📦 Data Preparation 🧬 Data Types & Structure Lesson 006

◀ [Previous](005-data-types-in-spreadsheets.html) · [Next](007-wide-data-vs-long-data.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The shape analysis lives in[#](#the-shape-analysis-lives-in "Link to this heading")

Most data analysis happens on ****tabular data**** — data arranged in a table of
rows and columns. It is the shape spreadsheets display, databases store, and
the analysis tools of this course expect. Understanding what makes a table
**well-formed** is the bridge between raw data and analysis, and it formalises
the layout rules the spreadsheet-organisation lesson introduced.

## The anatomy of a data table[#](#the-anatomy-of-a-data-table "Link to this heading")

A proper data table has a consistent structure:

* ****Rows are records**** (also called observations) — each row is one instance of
  the thing being measured: one sale, one patient, one day.
* ****Columns are variables**** (also called fields or attributes) — each column is
  one measured property, holding the same type of value down its length:
  `date`, `region`, `amount`.
* ****A header row**** names the columns, giving each variable an explicit,
  unique label.
* ****Cells**** hold one value each — the intersection of one record and one
  variable.

The defining discipline is consistency: every row has the same columns, and
every column holds one kind of value. That regularity is exactly what lets a
tool sort, filter, aggregate, or join the table mechanically.

## Why the structure is non-negotiable[#](#why-the-structure-is-non-negotiable "Link to this heading")

A table that breaks the pattern breaks the tools. Two variables crammed into one
column (“New York, NY” where city and state should be separate) cannot be
grouped by state. One record split across two rows double-counts under
aggregation. A column mixing types defeats sorting and math. The rules are not
aesthetic — they are the contract every downstream operation relies on, which
is why cleaning so often means **restoring** proper tabular structure before
anything else.

## Tables and the relational world[#](#tables-and-the-relational-world "Link to this heading")

The tabular shape is also the foundation of ****relational databases****, where
data lives in many linked tables — a topic the sources stage of this section
develops. The same “rows are records, columns are variables” discipline scales
from a single spreadsheet to a database of hundreds of related tables; learning
it here is learning the grammar of both.

## The caveat[#](#the-caveat "Link to this heading")

Not every table you receive is well-formed — spreadsheets in the wild are full
of merged cells, sub-headers, totals rows wedged between data, and summary
layouts meant for human eyes rather than analysis. Recognising the gap between a
**presentation** table and an **analysis** table is a core preparation skill: the
next lesson examines two legitimate analysis layouts — wide and long — and when
each is the right one.

> **Hint**
> * [Data Types in Spreadsheets](005-data-types-in-spreadsheets.html)
* [Wide Data vs. Long Data](007-wide-data-vs-long-data.html)
* [Structured Data and Data Models](004-structured-data-and-data-models.html)
* [Databases and Relational Database Concepts](016-databases-and-relational-database-concepts.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/09/04/data-tables-tabular-data/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: prep](../../../_tags/topic-prep.html) [topic: types](../../../_tags/topic-types.html)