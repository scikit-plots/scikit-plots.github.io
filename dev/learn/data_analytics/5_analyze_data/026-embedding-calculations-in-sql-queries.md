# Embedding Calculations in SQL Queries[#](#embedding-calculations-in-sql-queries "Link to this heading")

📊 Analyze Data 🧮 Calculations & Aggregation Lesson 026

◀ [Previous](025-comparing-calculations-in-spreadsheets-and-sql.html) · [Next](027-using-group-by-and-order-by-for-aggregated-calculations-in-sql.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Computing inside the query[#](#computing-inside-the-query "Link to this heading")

SQL does not only **retrieve** data — it **computes** on it, producing derived values as
part of the query result. ****Embedding calculations in SQL queries**** means writing
arithmetic and expressions directly in the `SELECT` clause, so the database
returns computed columns alongside stored ones. This is where SQL becomes a
calculation engine, not just a retrieval tool.

## Calculated columns in SELECT[#](#calculated-columns-in-select "Link to this heading")

Any expression in the `SELECT` clause produces a computed column:

```
SELECT product,
       quantity,
       price,
       quantity * price               AS line_total,
       price * 0.9                    AS discounted_price,
       (revenue - cost) / revenue     AS margin
FROM   orders;

```

Each expression — `quantity * price`, `price * 0.9`, the margin formula — is
computed per row and returned as a new column (named with `AS`). The arithmetic
operators (`+`, `-`, `*`, `/`) work as expected, and expressions can combine
columns, constants, and functions. This is the SQL equivalent of a spreadsheet
formula column, computed by the database.

## Calculations with functions[#](#calculations-with-functions "Link to this heading")

Embedded calculations extend beyond arithmetic to SQL’s functions:

* ****String calculations**** — `CONCAT`, `SUBSTR`, and the string functions from
  earlier, producing derived text.
* ****Date calculations**** — extracting parts of dates, computing differences between
  dates (days between order and ship), which are central to trend and duration
  analysis.
* ****Conditional calculations**** — `CASE` expressions producing values that depend
  on conditions (the conditional logic from the combine stage).
* ****Type conversions**** — `CAST` within a calculation, ensuring arithmetic happens
  on the right types.

Combining these, a single `SELECT` can compute a rich set of derived values from
the stored data — the analytical columns a question needs, produced at query time.

## Why compute in the query[#](#why-compute-in-the-query "Link to this heading")

Embedding calculations in the query, rather than retrieving raw data and computing
elsewhere, has real advantages: the computation happens **at the source** on the full
data (no exporting), the query is **reproducible** (the calculation is recorded in the
query text and reruns on new data), and only the **results** travel, not millions of
raw rows. It keeps the calculation logic with the data and the query, which is
cleaner and more scalable than pulling data out to compute on it.

## The caveat[#](#the-caveat "Link to this heading")

Embedded calculations inherit SQL’s precision demands. ****Integer division**** is a
classic trap — in many databases, `5 / 2` yields `2` (integer division) rather
than `2.5`, so a ratio computed on integer columns can be silently wrong unless
you cast to a decimal type first. ****Nulls propagate**** — any arithmetic involving a
null yields null (`price * quantity` is null if either is null), so calculated
columns can be unexpectedly empty. And ****division by zero**** errors or yields null
depending on the database. As always, the calculation returns exactly what the
expression specifies — verify that derived columns hold the values you intend,
checking especially division, nulls, and types. The next lesson combines embedded
calculation with grouping — the SQL pivot.

> **Hint**
> * [Comparing Calculations in Spreadsheets and SQL](025-comparing-calculations-in-spreadsheets-and-sql.html)
* [Using GROUP BY and ORDER BY for Aggregated Calculations in SQL](027-using-group-by-and-order-by-for-aggregated-calculations-in-sql.html)
* [Core SQL Queries for Data Cleaning and Analysis](../4_data_cleaning_preparation/020-core-sql-queries-for-data-cleaning-and-analysis.html)
* [Aggregating Data with Subqueries, HAVING, and CASE in SQL](019-aggregating-data-with-subqueries-having-and-case-in-sql.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/26/embedding-calculations-in-sql-queries/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: analyze](../../../_tags/topic-analyze.html) [topic: calc](../../../_tags/topic-calc.html)