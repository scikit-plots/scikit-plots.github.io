# The Concept and Basic Use of SQL (Query Language)[#](#the-concept-and-basic-use-of-sql-query-language "Link to this heading")

🌱 Foundations 🧰 Tools, Applications & Ethics Lesson 022

◀ [Previous](021-the-role-of-spreadsheets-in-data-analysis-and-basic-concepts.html) · [Next](023-the-role-and-importance-of-data-visualization.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Asking questions of databases[#](#asking-questions-of-databases "Link to this heading")

Organisational data mostly does not live in spreadsheets; it lives in
****databases**** — structured collections of tables holding millions of records.
****SQL**** (Structured Query Language) is how you talk to them: a language for
**describing the data you want** and letting the database fetch it. Where a
spreadsheet shows you everything and lets you point, SQL lets you ****ask**** — and
the asking scales to sizes no grid could display.

## The core idea: declare, don’t fetch-and-loop[#](#the-core-idea-declare-don-t-fetch-and-loop "Link to this heading")

An SQL ****query**** states **what** you want, not **how** to find it:

```
SELECT customer_id, order_date, amount
FROM   orders
WHERE  amount > 100;

```

Read it as a sentence: **select** these columns, **from** this table, **where** this
condition holds. The three clauses are the irreducible core:

* `SELECT` — which columns (attributes) to return; `SELECT *` means all.
* `FROM` — which table the data lives in.
* `WHERE` — which rows qualify, via conditions (`=`, `>`, `<`,
  combined with `AND` / `OR`).

The database engine — not you — figures out the efficient way to satisfy the
request across millions of rows, which is precisely why the language stays this
simple at this scale.

## The spreadsheet translation[#](#the-spreadsheet-translation "Link to this heading")

Every clause has a spreadsheet counterpart you already know: `SELECT` is
choosing columns to look at, `FROM` is opening the right sheet, `WHERE` is
a filter. The difference is not conceptual but operational: the query is
****text**** — repeatable, shareable, reviewable — and it runs against the live,
shared source of record rather than a private copy. When the analysis section
later adds grouping and joining, those too will be filters and pivots you have
already met, in query form.

## Why every analyst learns it[#](#why-every-analyst-learns-it "Link to this heading")

Three durable reasons. ****Location:**** the data you need is already in a
database; SQL goes to it rather than exporting fragile copies. ****Scale:**** a
`WHERE` over ten million rows returns in seconds. ****Ubiquity:**** SQL has been
the standard interface to relational data for decades, is asked for in more
analyst job postings than any other technical skill, and transfers almost
unchanged across database products.

## The caveat[#](#the-caveat "Link to this heading")

A query answers exactly what it says, which is not always what you meant —
`WHERE amount > 100` silently excludes the row where amount is missing, and
no error will tell you so. SQL’s precision is a feature that demands the same
precision of your question; the deeper query techniques and their pitfalls get
full treatment in the cleaning and analysis sections.

> **Hint**
> * [Overview of Core Tools Used by Data Analysts](020-overview-of-core-tools-used-by-data-analysts.html)
* [The Role of Spreadsheets in Data Analysis and Basic Concepts](021-the-role-of-spreadsheets-in-data-analysis-and-basic-concepts.html)
* [Introduction to SQL](../4_data_cleaning_preparation/018-introduction-to-sql.html)
* [Querying Data with SQL](../3_data_preparation/023-querying-data-with-sql.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/07/30/the-concept-and-basic-use-of-sql-query-language/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: foundations](../../../_tags/topic-foundations.html) [topic: tools](../../../_tags/topic-tools.html)