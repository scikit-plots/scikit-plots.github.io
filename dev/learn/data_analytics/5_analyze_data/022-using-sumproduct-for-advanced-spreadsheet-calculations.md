# Using SUMPRODUCT for Advanced Spreadsheet Calculations[#](#using-sumproduct-for-advanced-spreadsheet-calculations "Link to this heading")

📊 Analyze Data 🧮 Calculations & Aggregation Lesson 022

◀ [Previous](021-using-countif-and-sumif-for-conditional-aggregation-in-spreadsheets.html) · [Next](023-using-pivot-tables-for-calculations-and-trend-analysis.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Multiplying and summing at once[#](#multiplying-and-summing-at-once "Link to this heading")

Some calculations require **multiplying** corresponding values and then **summing** the
products — a weighted average, a total from quantities and prices, a count across
multiple conditions. ****SUMPRODUCT**** does exactly this in one formula: it multiplies
corresponding elements of arrays and sums the results. It is a more advanced
spreadsheet tool, and a versatile one, extending the calculation toolkit beyond the
conditional aggregates.

## How SUMPRODUCT works[#](#how-sumproduct-works "Link to this heading")

`SUMPRODUCT` takes arrays (ranges) of equal size, multiplies them element by
element, and sums the products:

```
=SUMPRODUCT(quantity, price)

```

If `quantity` is {2, 5, 3} and `price` is {10, 4, 20}, this computes
(2×10) + (5×4) + (3×20) = 20 + 20 + 60 = 100 — the total revenue, in one formula,
without a helper column of row-by-row products. That is the core use: a sum of
products across two aligned columns.

## Weighted averages and beyond[#](#weighted-averages-and-beyond "Link to this heading")

`SUMPRODUCT` shines for weighted calculations. A weighted average — where each
value counts according to a weight — is a `SUMPRODUCT` divided by the sum of
weights:

```
= SUMPRODUCT(scores, weights) / SUM(weights)

```

This computes the average score weighted by importance, a calculation that is
awkward without `SUMPRODUCT`. The function generalises the plain `SUM` of a
single column to a sum of **combinations** of columns.

## Multi-condition counting with SUMPRODUCT[#](#multi-condition-counting-with-sumproduct "Link to this heading")

A powerful advanced use: `SUMPRODUCT` can count or sum across **multiple
conditions** by multiplying arrays of TRUE/FALSE tests (which evaluate as 1/0):

```
=SUMPRODUCT((region="North")*(amount>100))

```

Each condition produces an array of 1s and 0s; multiplying them gives 1 only where
**both** hold; summing counts the rows meeting both — a flexible alternative to
`COUNTIFS` that can express conditions the plural functions cannot. This
array-logic capability is why `SUMPRODUCT` is a favourite of advanced spreadsheet
users.

## The caveat[#](#the-caveat "Link to this heading")

`SUMPRODUCT`’s power comes with complexity and pitfalls. The arrays ****must be the
same size**** — mismatched ranges produce an error or, worse, a wrong result; and the
array-condition syntax (`(region="North")*(amount>100)`) is unintuitive until
learned, making the formulas hard for others to read. `SUMPRODUCT` can also be
slower on large ranges than purpose-built functions. Because it is powerful but
opaque, use it where its multiply-then-sum or multi-condition logic is genuinely
needed — a weighted average, a condition `COUNTIFS` cannot express — rather than
where a clearer `SUMIF` or `COUNTIFS` would do, and comment what a
`SUMPRODUCT` formula computes. Clarity over cleverness applies. The next lesson
turns to the most powerful summarising tool of all: the pivot table.

> **Hint**
> * [Using COUNTIF and SUMIF for Conditional Aggregation in Spreadsheets](021-using-countif-and-sumif-for-conditional-aggregation-in-spreadsheets.html)
* [Using Pivot Tables for Calculations and Trend Analysis](023-using-pivot-tables-for-calculations-and-trend-analysis.html)
* [Spreadsheet Calculations with Formulas](../2_data_driven_decisions/014-spreadsheet-calculations-with-formulas.html)
* [Spreadsheet Functions](../2_data_driven_decisions/016-spreadsheet-functions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/26/using-sumproduct-for-advanced-spreadsheet-calculations/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: analyze](../../../_tags/topic-analyze.html) [topic: calc](../../../_tags/topic-calc.html)