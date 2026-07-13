# Spreadsheet Functions[#](#spreadsheet-functions "Link to this heading")

🎯 Data-Driven Decisions 📗 Spreadsheets for Analysis Lesson 016

◀ [Previous](015-common-spreadsheet-errors-and-how-to-fix-them.html) · [Next](017-defining-the-problem-domain.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## The analyst’s vocabulary[#](#the-analyst-s-vocabulary "Link to this heading")

A ****function**** is a named, prebuilt operation you use inside a formula:
`=SUM(B2:B100)` instead of `=B2+B3+...+B100`. Functions are the
spreadsheet’s vocabulary — each is a verb the analyst can call — and a modest
core covers the large majority of everyday work. This lesson names that core;
the cleaning and analysis sections expand it substantially.

## The core, by job[#](#the-core-by-job "Link to this heading")

* ****Aggregating**** — collapse many values to one. `SUM` (total), `AVERAGE`
  (mean), `COUNT` (how many numbers), `COUNTA` (how many non-empty),
  `MIN` / `MAX` (extremes), `MEDIAN`. These answer “how much / how many /
  how typical” for a whole column.
* ****Conditional aggregating**** — the same, but only for rows meeting a
  condition. `COUNTIF` / `SUMIF` / `AVERAGEIF` (“count orders over
  $100”, “sum revenue for the north region”) — the workhorses the analysis
  section devotes a full lesson to.
* ****Logical**** — decisions inside a cell. `IF(test, then, else)` returns one
  value or another; `IFERROR` handles the errors of the previous lesson.
* ****Text**** — manipulate strings. `LEN` (length), `LEFT` / `RIGHT`
  (extract characters), `FIND` (locate a substring), `CONCATENATE` /
  `&` (join), `TRIM` (strip stray spaces) — indispensable when cleaning
  messy labels.
* ****Lookup**** — pull a value from another table by matching a key. `VLOOKUP`
  and its modern successors join data across sheets — powerful, error-prone,
  and given full treatment (with troubleshooting) in the analysis section.

## The pattern of a function call[#](#the-pattern-of-a-function-call "Link to this heading")

Every function has the same shape: a ****name****, then ****arguments**** in
parentheses — `=FUNCTION(argument1, argument2, ...)`. `=SUMIF(B2:B100,
">100", C2:C100)` reads: over the range B2:B100, for rows greater than 100,
sum the matching cells of C2:C100. Learn to read the argument list and every
function — including ones you have never seen — becomes decipherable from its
name and its inputs.

```
=SUM(E2:E100)                 total revenue
=AVERAGE(E2:E100)             mean order value
=COUNTIF(D2:D100, "North")    number of northern orders
=IF(E2>100, "large", "small") tag each order by size
=LEN(A2)                      length of the text in A2

```

## Functions across the toolkit[#](#functions-across-the-toolkit "Link to this heading")

These are not spreadsheet trivia — they are the **same operations** you will meet
again as SQL aggregate functions (`SUM`, `COUNT`, `AVG`) and pandas
methods (`.sum()`, `.mean()`, `.groupby()`). Learning the vocabulary here,
where every intermediate value is visible, builds intuition that transfers
directly when the tools scale up. This closes the spreadsheet stage; the next
turns from computing on data to the human side of decisions — stakeholders and
communication.

## The caveat[#](#the-caveat "Link to this heading")

Functions make wrong answers as fluently as right ones: `=AVERAGE(B2:B99)`
computes a flawless mean of the wrong range. The function guarantees the
**operation**, never that it was the operation you needed on the data you meant —
so the sanity-check and verification habits apply to every function call, no
matter how simple it looks.

> **Hint**
> * [Spreadsheet Calculations with Formulas](014-spreadsheet-calculations-with-formulas.html)
* [Using COUNTIF and SUMIF for Conditional Aggregation in Spreadsheets](../5_analyze_data/021-using-countif-and-sumif-for-conditional-aggregation-in-spreadsheets.html)
* [Working with Strings in Spreadsheets (LEN, LEFT, RIGHT, FIND)](../5_analyze_data/010-working-with-strings-in-spreadsheets-len-left-right-find.html)
* [Using Spreadsheet Functions for Data Cleaning](../4_data_cleaning_preparation/015-using-spreadsheet-functions-for-data-cleaning.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/08/31/spreadsheet-functions/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [ddd](../../../_tags/ddd.html) [spreadsheets](../../../_tags/spreadsheets.html)