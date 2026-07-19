# Using GROUP BY and ORDER BY for Aggregated Calculations in SQL[#](#using-group-by-and-order-by-for-aggregated-calculations-in-sql "Link to this heading")

📊 Analyze Data 🧮 Calculations & Aggregation Lesson 027

◀ [Previous](026-embedding-calculations-in-sql-queries.html) · [Next](028-data-validation-as-an-ongoing-analytical-process.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The SQL pivot, complete[#](#the-sql-pivot-complete "Link to this heading")

The calculation stage culminates where SQL aggregation began: ****GROUP BY**** to
compute aggregates per group, and ****ORDER BY**** to order the summary. Together they
are the SQL equivalent of the pivot table — grouping data into categories,
computing an aggregate for each, and presenting the result in a meaningful order.
This lesson assembles them into the complete aggregated-calculation pattern, closing
the calculation stage.

## The core aggregated-calculation query[#](#the-core-aggregated-calculation-query "Link to this heading")

The pattern combines grouping, aggregating, and ordering:

```
SELECT   region,
         COUNT(*)      AS orders,
         SUM(amount)   AS revenue,
         AVG(amount)   AS avg_order
FROM     orders
GROUP BY region
ORDER BY revenue DESC;

```

This groups orders by region, computes each region’s order count, total revenue,
and average order value, and orders the result by revenue, highest first — a
complete regional summary in one query. It is exactly a pivot table (region as the
grouping, the aggregates as values, sorted) expressed as SQL, and it answers the
“summarise X by Y, ranked” question directly.

## Ordering the summary[#](#ordering-the-summary "Link to this heading")

`ORDER BY` on an aggregated query orders the **groups**, and can order by an
aggregate:

* `ORDER BY revenue DESC` — regions from highest revenue to lowest, surfacing the
  top performers.
* `ORDER BY COUNT(*) DESC` — groups by how many rows each contains.
* `ORDER BY region ASC` — the groups in category order.

Ordering by an aggregate is what turns a summary into a **ranking** — “regions by
revenue”, “products by units sold” — one of the most common analytical outputs.

## The full analytical query[#](#the-full-analytical-query "Link to this heading")

Combined with the earlier clauses, the complete pattern layers filtering,
grouping, group-filtering, and ordering:

```
SELECT   region, SUM(amount) AS revenue
FROM     orders
WHERE    order_date >= '2024-01-01'    -- filter rows first
GROUP BY region                        -- group
HAVING   SUM(amount) > 10000           -- filter groups
ORDER BY revenue DESC;                 -- order the result

```

This reads as a complete analytical sentence: **from** the orders, **where** they are
recent, **grouped by** region, **keeping** high-revenue regions, **ordered by** revenue.
The clause order (`WHERE` → `GROUP BY` → `HAVING` → `ORDER BY`) is both the
required SQL syntax and the logical sequence of the analysis, and mastering it is
mastering SQL aggregation.

## The caveat[#](#the-caveat "Link to this heading")

The full pattern concentrates the section’s precision traps in one place: the
`WHERE`/`HAVING` distinction (rows before grouping, aggregates after), nulls
interacting with aggregates (`COUNT(*)` versus `COUNT(column)`, `AVG` ignoring
nulls), and the requirement that every non-aggregated column in `SELECT` appear in
`GROUP BY` (or the query errors or, in some databases, returns arbitrary values).
A grouped-calculation query that looks right can be subtly wrong, so the
build-incrementally-and-verify discipline is essential — get the grouping right,
add each clause, check the result against expectation. This closes the calculation
stage; the final stage of the section covers advanced analytical techniques,
including temporary tables.

> **Hint**
> * [Embedding Calculations in SQL Queries](026-embedding-calculations-in-sql-queries.html)
* [Aggregating Data with Subqueries, HAVING, and CASE in SQL](019-aggregating-data-with-subqueries-having-and-case-in-sql.html)
* [Sorting and Filtering Data in SQL Using ORDER BY and WHERE](005-sorting-and-filtering-data-in-sql-using-order-by-and-where.html)
* [Comparing Calculations in Spreadsheets and SQL](025-comparing-calculations-in-spreadsheets-and-sql.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/26/using-group-by-and-order-by-for-aggregated-calculations-in-sql/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: analyze](../../../_tags/topic-analyze.html) [topic: calc](../../../_tags/topic-calc.html)