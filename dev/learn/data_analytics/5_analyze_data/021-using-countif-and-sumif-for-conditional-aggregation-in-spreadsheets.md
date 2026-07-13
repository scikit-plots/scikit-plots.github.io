# Using COUNTIF and SUMIF for Conditional Aggregation in Spreadsheets[#](#using-countif-and-sumif-for-conditional-aggregation-in-spreadsheets "Link to this heading")

📊 Analyze Data 🧮 Calculations & Aggregation Lesson 021

◀ [Previous](020-using-spreadsheet-formulas-for-sales-trend-analysis.html) · [Next](022-using-sumproduct-for-advanced-spreadsheet-calculations.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Aggregating with a condition[#](#aggregating-with-a-condition "Link to this heading")

Plain `SUM` and `COUNT` aggregate **everything**; analysis usually needs to
aggregate only the rows meeting a **condition** — sales in one region, orders above a
threshold, customers of one type. ****COUNTIF**** and ****SUMIF**** are the spreadsheet’s
conditional-aggregation functions, and they are among the most-used analytical
tools, the spreadsheet counterparts of SQL’s `COUNT`/`SUM` with `WHERE`.

## COUNTIF and SUMIF[#](#countif-and-sumif "Link to this heading")

* `COUNTIF(range, condition)` — counts the cells in a range that meet a
  condition:

  ```
  =COUNTIF(region, "North")        how many northern orders
  =COUNTIF(amount, ">100")         how many orders over 100

  ```
* `SUMIF(range, condition, sum_range)` — sums the values in `sum_range` for the
  rows where `range` meets the condition:

  ```
  =SUMIF(region, "North", amount)  total revenue from northern orders
  =SUMIF(amount, ">100", amount)   total of all orders over 100

  ```

`COUNTIF` answers “how many meeting X”; `SUMIF` answers “the total of Y for rows
meeting X.” Together they compute the conditional counts and totals that most
analytical questions reduce to.

## Multiple conditions: COUNTIFS and SUMIFS[#](#multiple-conditions-countifs-and-sumifs "Link to this heading")

For **several** conditions at once, the plural forms `COUNTIFS` and `SUMIFS` take
multiple range-condition pairs:

```
=COUNTIFS(region, "North", amount, ">100")
=SUMIFS(amount, region, "North", month, "January")

```

`COUNTIFS` counts rows meeting **all** the conditions (northern **and** over 100);
`SUMIFS` sums for rows meeting all conditions. These handle the segmented
questions — “January revenue in the northern region” — that a single condition
cannot express, and they are the workhorses of spreadsheet analysis.

## Why conditional aggregation matters[#](#why-conditional-aggregation-matters "Link to this heading")

Most analytical questions are conditional: not “total sales” but “sales **in this
segment**”, not “how many orders” but “how many **of this type**”. `COUNTIF` and
`SUMIF` (and their plural forms) are how a spreadsheet answers these directly,
without first filtering the data by hand. They are also the conceptual bridge to
SQL’s `WHERE` plus aggregate and to pivot tables — the same “aggregate a subset”
idea in three forms, which is why recognising the pattern here pays off repeatedly.

## The caveat[#](#the-caveat "Link to this heading")

Conditional-aggregation functions are precise about their conditions, and small
mistakes mislead: a condition written as text must match exactly (`"North"` will
not catch `"north"` or `"North "` with a space — the cleaning issues resurface),
and the condition syntax for comparisons (`">100"` in quotes) trips up beginners.
The ranges must also align — `SUMIF`’s condition range and sum range must be the
same size and correspond row-for-row, or the result is silently wrong. As always,
verify a conditional total against a hand-check or an order-of-magnitude estimate:
a `SUMIF` that returns an implausible number usually has a condition or range
error. The next lesson covers a more advanced calculation function: SUMPRODUCT.

> **Hint**
> * [Using Spreadsheet Formulas for Sales Trend Analysis](020-using-spreadsheet-formulas-for-sales-trend-analysis.html)
* [Using SUMPRODUCT for Advanced Spreadsheet Calculations](022-using-sumproduct-for-advanced-spreadsheet-calculations.html)
* [Spreadsheet Functions](../2_data_driven_decisions/016-spreadsheet-functions.html)
* [Aggregating Data with Subqueries, HAVING, and CASE in SQL](019-aggregating-data-with-subqueries-having-and-case-in-sql.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/26/using-countif-and-sumif-for-conditional-aggregation-in-spreadsheets/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [analyze](../../../_tags/analyze.html) [calc](../../../_tags/calc.html)