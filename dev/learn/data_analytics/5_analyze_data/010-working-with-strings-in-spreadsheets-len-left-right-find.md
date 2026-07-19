# Working with Strings in Spreadsheets (LEN, LEFT, RIGHT, FIND)[#](#working-with-strings-in-spreadsheets-len-left-right-find "Link to this heading")

📊 Analyze Data 🗂️ Organizing & Formatting Data Lesson 010

◀ [Previous](009-using-concat-in-sql-to-combine-text-from-multiple-columns.html) · [Next](011-problem-solving-and-seeking-help-in-data-analysis.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The spreadsheet string toolkit[#](#the-spreadsheet-string-toolkit "Link to this heading")

Text data — names, codes, addresses, categories — needs its own set of operations
to measure, extract, and locate parts of it, and spreadsheets provide a compact
****string function**** toolkit for exactly this. Building on the cleaning functions
from earlier, these functions let you take apart, inspect, and manipulate text as
precisely as you manipulate numbers.

## The core string functions[#](#the-core-string-functions "Link to this heading")

* `LEN(text)` — returns the ****length**** (number of characters) of a string.
  Useful for validation (is this code the right length?) and for calculations
  with other string functions.
* `LEFT(text, n)` — extracts the ****first n characters**** from the left
  (`LEFT("Product-123", 7)` → `"Product"`).
* `RIGHT(text, n)` — extracts the ****last n characters**** from the right
  (`RIGHT("Product-123", 3)` → `"123"`).
* `MID(text, start, n)` — extracts ****n characters starting at a position****, for
  pulling from the middle.
* `FIND(substring, text)` — returns the ****position**** where a substring first
  appears (`FIND("-", "Product-123")` → `8`), or an error if not found.
  (`SEARCH` is the case-insensitive variant.)

```
=LEN(A2)                    length of the text
=LEFT(A2, 3)                first 3 characters
=RIGHT(A2, 4)               last 4 characters
=MID(A2, 5, 2)              2 characters starting at position 5
=FIND("-", A2)              position of the first hyphen

```

## Combining them to extract[#](#combining-them-to-extract "Link to this heading")

The functions’ real power comes from **combining** them to extract variable-length
parts. To pull everything before a hyphen when the hyphen’s position varies, nest
`LEFT` and `FIND`:

```
=LEFT(A2, FIND("-", A2) - 1)    everything before the first hyphen

```

`FIND` locates the hyphen, and `LEFT` takes everything up to just before it —
so `"Product-123"` yields `"Product"` and `"Widget-45"` yields `"Widget"`,
each correctly, despite the different lengths. This `LEFT`/`RIGHT`/`MID` with
`FIND` pattern is how you split text on a delimiter by formula, the flexible
counterpart to the fixed-position extractions.

## Why string functions matter for analysis[#](#why-string-functions-matter-for-analysis "Link to this heading")

Text manipulation is constant analytical work: extracting a category code from a
product ID, pulling a domain from an email, splitting a combined field into its
parts for grouping, validating that codes have the right format. These functions
are the tools for all of it, and they mirror the SQL string functions (`SUBSTR`,
`LENGTH`, `POSITION`) exactly — the same operations in a different syntax, so
learning them in the visible spreadsheet builds intuition that transfers to SQL.

## The caveat[#](#the-caveat "Link to this heading")

String functions are precise about positions and counts, which makes them brittle
if the text’s structure varies unexpectedly: `LEFT(A2, 7)` assumes the part you
want is always seven characters, and breaks when it is not; `FIND` returns an
error when the substring is absent, which propagates through a nested formula. The
robust approach uses **position-finding** (`FIND`) rather than fixed counts where
lengths vary, and wraps extractions in `IFERROR` to handle the cases where the
expected structure is missing — so a few irregular rows do not break the whole
column. Text is messier than it looks; extract defensively. This closes the
organise stage; the next lessons turn to the analyst’s problem-solving craft as the
combine stage opens.

> **Hint**
> * [Using CONCAT in SQL to Combine Text from Multiple Columns](009-using-concat-in-sql-to-combine-text-from-multiple-columns.html)
* [Spreadsheet Functions](../2_data_driven_decisions/016-spreadsheet-functions.html)
* [Using Spreadsheet Functions for Data Cleaning](../4_data_cleaning_preparation/015-using-spreadsheet-functions-for-data-cleaning.html)
* [Data Validation in Spreadsheets](007-data-validation-in-spreadsheets.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/11/26/working-with-strings-in-spreadsheets-len-left-right-find/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: analyze](../../../_tags/topic-analyze.html) [topic: organize](../../../_tags/topic-organize.html)