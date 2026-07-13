# Sorting and Filtering Data in SQL Using ORDER BY and WHERE[#](#sorting-and-filtering-data-in-sql-using-order-by-and-where "Link to this heading")

📊 Analyze Data 🗂️ Organizing & Formatting Data Lesson 005

◀ [Previous](004-sorting-data-in-spreadsheets.html) · [Next](006-data-formatting-and-unit-conversion-in-spreadsheets.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Sort and filter, in query form[#](#sort-and-filter-in-query-form "Link to this heading")

The two foundational moves — sorting and filtering — have direct SQL equivalents:
****ORDER BY**** sorts, and ****WHERE**** filters. Everything you did with a spreadsheet’s
sort and filter, SQL does with these two clauses, at database scale and in
repeatable text. This lesson makes the correspondence concrete, extending the
basic queries from the prep and cleaning sections into their analytical use.

## Filtering with WHERE[#](#filtering-with-where "Link to this heading")

`WHERE` restricts a query to rows meeting a condition — the SQL filter:

```
SELECT product, region, amount
FROM   orders
WHERE  region = 'North'
  AND  amount > 100;

```

Only rows where the region is North **and** the amount exceeds 100 are returned. The
`WHERE` toolkit from earlier applies fully: comparisons (`=`, `<>`, `>`,
`<`), combinations (`AND`, `OR`, `NOT`), ranges (`BETWEEN`), sets
(`IN`), and pattern matching (`LIKE`). `WHERE` is how you point analysis at
exactly the subset a question concerns.

## Ordering with ORDER BY[#](#ordering-with-order-by "Link to this heading")

`ORDER BY` sorts the result — the SQL sort:

```
SELECT product, amount
FROM   orders
WHERE  region = 'North'
ORDER  BY amount DESC;

```

`ORDER BY amount DESC` returns rows largest-first (`ASC`, the default, is
smallest-first). Multi-column sorting works exactly as in a spreadsheet — list
columns in priority order:

```
ORDER BY region ASC, amount DESC   -- by region, then by amount within region

```

This orders by region first, then by amount within each region — the SQL version
of the multi-column spreadsheet sort.

## The two together: the analytical query[#](#the-two-together-the-analytical-query "Link to this heading")

Combining `WHERE` and `ORDER BY` is the SQL filter-then-sort — the same
reflexive analytical move, now as a query. “The top ten northern orders this
quarter” becomes:

```
SELECT   product, amount
FROM     orders
WHERE    region = 'North'
  AND    order_date >= '2024-01-01'
ORDER BY amount DESC
LIMIT    10;

```

`WHERE` filters to the subset, `ORDER BY` ranks it, and `LIMIT` (a handy
companion) caps the output to the top ten. One query answers what would take
several spreadsheet steps — and reruns identically on new data.

## The safety advantage[#](#the-safety-advantage "Link to this heading")

SQL sorting sidesteps the spreadsheet’s most dangerous sort mistake entirely:
`ORDER BY` reorders the **query result**, always keeping each row’s values
together, so the isolated-column corruption that plagues spreadsheets simply
cannot happen. And `WHERE` filters without altering the stored data — the result
is a view, the table untouched. SQL’s structure makes these operations inherently
safer than their manual spreadsheet equivalents.

## The caveat[#](#the-caveat "Link to this heading")

`WHERE` and `ORDER BY` are precise about what they include and how they order,
which is not always what you intend. `WHERE amount > 100` silently excludes rows
where amount is **null** (the `IS NULL` trap from earlier), so a filter can drop
rows you meant to keep; and `ORDER BY` on a column with mixed or wrong types
sorts unexpectedly (text-numbers sort alphabetically, so “100” sorts before “99”).
The result reflects exactly what you asked — verify it matches what you meant, the
same check-your-results habit as everywhere. The next lessons turn from ordering
and subsetting to getting the data’s **format** analysis-ready.

> **Hint**
> * [Sorting Data in Spreadsheets](004-sorting-data-in-spreadsheets.html)
* [Querying Data with SQL](../3_data_preparation/023-querying-data-with-sql.html)
* [Core SQL Queries for Data Cleaning and Analysis](../4_data_cleaning_preparation/020-core-sql-queries-for-data-cleaning-and-analysis.html)
* [Sorting and Filtering in Data Analysis](003-sorting-and-filtering-in-data-analysis.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/26/sorting-and-filtering-data-in-sql-using-order-by-and-where/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [analyze](../../../_tags/analyze.html) [organize](../../../_tags/organize.html)