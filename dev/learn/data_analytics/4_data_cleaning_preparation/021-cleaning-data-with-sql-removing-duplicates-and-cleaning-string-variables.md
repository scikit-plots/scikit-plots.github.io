# Cleaning Data with SQL: Removing Duplicates and Cleaning String Variables[#](#cleaning-data-with-sql-removing-duplicates-and-cleaning-string-variables "Link to this heading")

🧽 Data Cleaning & Preparation 🐬 Cleaning with SQL Lesson 021

◀ [Previous](020-core-sql-queries-for-data-cleaning-and-analysis.html) · [Next](022-using-cast-to-clean-and-format-data-in-sql.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## The two most common SQL cleans[#](#the-two-most-common-sql-cleans "Link to this heading")

Two cleaning tasks dominate SQL work: removing ****duplicate**** records and
standardising ****string**** (text) values. They are the SQL versions of the
spreadsheet’s Remove Duplicates and Find-and-Replace, now at database scale, and
learning them is learning the everyday core of SQL cleaning.

## Removing duplicates[#](#removing-duplicates "Link to this heading")

The simplest deduplication is `SELECT DISTINCT`, which returns only unique
rows:

```
SELECT DISTINCT customer_id, name, email
FROM   customers;

```

`DISTINCT` collapses exact duplicate rows across the selected columns. To
**find** duplicates rather than just remove them — to see which records repeat and
how often — group and count:

```
SELECT   email, COUNT(*) AS copies
FROM     customers
GROUP BY email
HAVING   COUNT(*) > 1;

```

This lists every email appearing more than once (`HAVING` filters the **groups**,
keeping only those with a count above one) — the diagnostic step before deciding
how to resolve them. Which duplicate to **keep** when they disagree is a judgement,
often resolved by keeping the most recent or most complete record.

## Cleaning string variables[#](#cleaning-string-variables "Link to this heading")

Text fields accumulate the inconsistencies from earlier — stray spaces, mixed
case, unwanted characters — and SQL’s string functions fix them:

```
SELECT TRIM(name)                    AS name_trimmed,   -- remove edge spaces
       UPPER(region)                 AS region_upper,   -- uniform case
       REPLACE(phone, '-', '')       AS phone_digits    -- strip separators
FROM   customers;

```

* `TRIM` removes leading and trailing whitespace (`LTRIM` / `RTRIM` for one
  side).
* `UPPER` / `LOWER` normalise case, so `"NY"` and `"ny"` become uniform.
* `REPLACE(text, from, to)` substitutes one substring for another, stripping or
  swapping characters.

These are the same operations as the spreadsheet’s `TRIM`, `UPPER`, and
`SUBSTITUTE` — the SQL syntax differs slightly, the ideas are identical.

## Cleaning into a result, not in place[#](#cleaning-into-a-result-not-in-place "Link to this heading")

Notice these queries **select** cleaned values — they produce a cleaned result set
without altering the stored table. This is the safe default: you build and verify
the cleaned output with a `SELECT` first, confirming it does what you intend,
before ever writing changes back. Producing a cleaned view or table from a query
is both safer and more reproducible than editing data in place.

## The caveat[#](#the-caveat "Link to this heading")

SQL deduplication has a subtlety that catches beginners: `SELECT DISTINCT`
removes rows that are **identical across the selected columns**, so two records for
the same customer that differ in even one field (a different timestamp, a typo’d
name) are ****not**** duplicates to `DISTINCT` and both survive. True
deduplication of near-duplicates requires deciding **which columns define
sameness** and grouping on those — not a blind `DISTINCT *`. And string
functions are precise: `REPLACE` replaces **every** occurrence, so an over-broad
replacement corrupts as readily in SQL as in a spreadsheet. Verify the
`SELECT` output before trusting it. The next lesson tackles the type-conversion
cleaning that `CAST` handles.

> **Hint**
> * [Core SQL Queries for Data Cleaning and Analysis](020-core-sql-queries-for-data-cleaning-and-analysis.html)
* [Using CAST to Clean and Format Data in SQL](022-using-cast-to-clean-and-format-data-in-sql.html)
* [Using Spreadsheet Functions for Data Cleaning](015-using-spreadsheet-functions-for-data-cleaning.html)
* [Advanced SQL Functions for Data Cleaning](023-advanced-sql-functions-for-data-cleaning.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/01/cleaning-data-with-sql-removing-duplicates-and-cleaning-string-variables/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [cleaning](../../../_tags/cleaning.html) [sql](../../../_tags/sql.html)