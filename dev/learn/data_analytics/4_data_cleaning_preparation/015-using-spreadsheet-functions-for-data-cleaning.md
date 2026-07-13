# Using Spreadsheet Functions for Data Cleaning[#](#using-spreadsheet-functions-for-data-cleaning "Link to this heading")

🧽 Data Cleaning & Preparation 🧹 Dirty Data & Spreadsheet Cleaning Lesson 015

◀ [Previous](014-spreadsheet-tools-for-data-cleaning.html) · [Next](016-viewing-data-differently-for-more-effective-data-cleaning.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Cleaning by formula[#](#cleaning-by-formula "Link to this heading")

The menu tools clean data **once**; ****functions**** clean it **live** — a formula that
produces a cleaned value and recomputes whenever the source changes. Building
cleaned columns with functions is the reproducible complement to one-time tools:
the cleaning logic is visible in the formula and reapplies automatically as new
data arrives. This lesson covers the functions analysts reach for most.

## The cleaning functions, by defect[#](#the-cleaning-functions-by-defect "Link to this heading")

* ****Whitespace and stray characters**** — `TRIM` removes leading, trailing, and
  extra internal spaces (so `" New York "` becomes `"New York"`); `CLEAN`
  strips non-printable characters that sneak in from imports.
* ****Capitalisation**** — `UPPER`, `LOWER`, and `PROPER` normalise case, so
  `"new york"`, `"NEW YORK"`, and `"New York"` can be made uniform.
* ****Substitution**** — `SUBSTITUTE(text, old, new)` replaces specific substrings
  within a cell (removing `"$"` and `","` from `"$1,000"` before converting
  it to a number); `REPLACE` swaps by position.
* ****Type conversion**** — `VALUE` turns a text-number into a real number,
  `DATEVALUE` turns a text-date into a real date — fixing the import type traps
  from the prep section.
* ****Extraction**** — `LEFT`, `RIGHT`, and `MID` pull characters from a
  string; `FIND` / `SEARCH` locate a substring’s position; `LEN` gives
  length. Together they extract parts of a crammed field (the string lesson in
  the analysis section develops these).
* ****Conditional cleaning**** — `IF` applies a fix only when a condition holds;
  `IFERROR` handles the errors a cleaning formula might throw.

```
=TRIM(A2)                          strip stray spaces
=PROPER(TRIM(A2))                  trim, then title-case
=VALUE(SUBSTITUTE(B2,"$",""))      strip "$", convert to number
=IF(C2<0, 0, C2)                   replace negative values with 0

```

## Nesting for a full clean[#](#nesting-for-a-full-clean "Link to this heading")

Functions compose, so one formula can apply several fixes in sequence:
`=PROPER(TRIM(A2))` trims **then** title-cases; `=VALUE(SUBSTITUTE(SUBSTITUTE(
B2,"$",""),",",""))` strips both the currency symbol and the thousands
separator before converting to a number. This nesting builds a cleaning
**pipeline** in a single cell — powerful, and readable if built up step by step
rather than written as one dense expression from the start.

## The reproducibility advantage[#](#the-reproducibility-advantage "Link to this heading")

The reason to clean by formula rather than by hand is ****reproducibility****. A
cleaned column built from functions documents its own logic (the formula **is** the
record of what cleaning was applied) and reapplies automatically to new data —
paste next month’s raw values into the source column and the cleaned column
updates. This directly answers the reproducibility weakness of manual cleaning
from earlier: formula-based cleaning is a rerunnable transformation, the first
step toward the fully scripted pipelines of SQL and Python.

## The caveat[#](#the-caveat "Link to this heading")

Function-based cleaning has its own trap: the cleaned values live in **formula**
cells that depend on the source, so if you delete the raw column or paste the
cleaned column onto itself, the formulas break or vanish. The standard practice
is to build the cleaned columns with formulas, verify them, then — if you need
static cleaned data — **paste them as values** into a new location before removing
the source. And deeply nested formulas, while powerful, grow hard to debug: build
and test them in stages. The next lesson turns from transforming data to **seeing**
it differently, so defects reveal themselves in the first place.

> **Hint**
> * [Spreadsheet Tools for Data Cleaning](014-spreadsheet-tools-for-data-cleaning.html)
* [Working with Strings in Spreadsheets (LEN, LEFT, RIGHT, FIND)](../5_analyze_data/010-working-with-strings-in-spreadsheets-len-left-right-find.html)
* [Spreadsheet Functions](../2_data_driven_decisions/016-spreadsheet-functions.html)
* [Data Cleaning with Spreadsheets](012-data-cleaning-with-spreadsheets.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/01/using-spreadsheet-functions-for-data-cleaning/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [cleaning](../../../_tags/cleaning.html) [dirty](../../../_tags/dirty.html)