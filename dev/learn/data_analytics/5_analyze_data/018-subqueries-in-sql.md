# Subqueries in SQL[#](#subqueries-in-sql "Link to this heading")

📊 Analyze Data 🔗 Problem-Solving & Combining Data Lesson 018

◀ [Previous](017-using-join-in-sql-to-combine-tables.html) · [Next](019-aggregating-data-with-subqueries-having-and-case-in-sql.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## A query inside a query[#](#a-query-inside-a-query "Link to this heading")

Sometimes answering a question requires the **result of one query** to be used
**inside another**. A ****subquery**** is exactly that — a query nested within another
query, whose result the outer query uses. Subqueries let you build analyses in
layers, answering a preliminary question and then querying against its answer, and
they are a step up in SQL expressiveness.

## How subqueries work[#](#how-subqueries-work "Link to this heading")

A subquery is a `SELECT` written inside another query, often in the `WHERE`
clause:

```
SELECT name, amount
FROM   orders
WHERE  amount > (SELECT AVG(amount) FROM orders);

```

The inner query `(SELECT AVG(amount) FROM orders)` computes the average amount;
the outer query then returns orders **above** that average. The subquery runs first,
produces a value, and the outer query uses it — answering “which orders are
above-average?” in one statement, without manually finding the average first.

## Where subqueries appear[#](#where-subqueries-appear "Link to this heading")

Subqueries serve in several positions:

* ****In WHERE, for comparison**** — comparing each row against a computed value
  (above average, above a threshold derived from the data), as above.
* ****In WHERE with IN, for membership**** — testing whether a value is in a set the
  subquery produces:

  ```
  SELECT name FROM customers
  WHERE customer_id IN (SELECT customer_id FROM orders WHERE amount > 1000);

  ```

  This finds customers who placed a large order — the subquery lists the qualifying
  customer IDs, the outer query returns their names.
* ****In FROM, as a derived table**** — using a subquery’s result as a table to query
  further, building a multi-step analysis in layers.
* ****In SELECT, for a computed column**** — producing a value per row from a related
  query.

## Why subqueries matter[#](#why-subqueries-matter "Link to this heading")

Subqueries let you express analyses that need an **intermediate result** — a
comparison against an aggregate, a filter based on another table’s contents, a
calculation built in stages — without breaking the work into separate manual
steps. They keep a multi-step analysis in one repeatable query, and they are the
foundation for the layered aggregation the next lesson builds. Much of SQL’s
analytical power comes from composing queries this way.

## The caveat[#](#the-caveat "Link to this heading")

Subqueries can grow hard to read and, sometimes, slow: a deeply nested query is
difficult to follow and debug (build and test it in layers, inner query first), and
a **correlated** subquery — one that references the outer query and thus re-runs for
every outer row — can be very slow on large data. Often a JOIN accomplishes the
same result more efficiently and readably, so when a subquery grows complex, ask
whether a JOIN would serve better. And the usual precision caution applies:
subqueries involving nulls or empty results can behave unexpectedly (a `NOT IN`
subquery that encounters a null can return no rows), so verify results against
expectation. The next lesson combines subqueries with aggregation and conditional
logic for real analytical queries.

> **Hint**
> * [Using JOIN in SQL to Combine Tables](017-using-join-in-sql-to-combine-tables.html)
* [Aggregating Data with Subqueries, HAVING, and CASE in SQL](019-aggregating-data-with-subqueries-having-and-case-in-sql.html)
* [Core SQL Queries for Data Cleaning and Analysis](../4_data_cleaning_preparation/020-core-sql-queries-for-data-cleaning-and-analysis.html)
* [Advanced SQL Functions for Data Cleaning](../4_data_cleaning_preparation/023-advanced-sql-functions-for-data-cleaning.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/26/subqueries-in-sql/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: analyze](../../../_tags/topic-analyze.html) [topic: combine](../../../_tags/topic-combine.html)