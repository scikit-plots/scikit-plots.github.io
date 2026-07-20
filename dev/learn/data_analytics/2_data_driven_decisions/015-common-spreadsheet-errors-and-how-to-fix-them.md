# Common Spreadsheet Errors and How to Fix Them[#](#common-spreadsheet-errors-and-how-to-fix-them "Link to this heading")

🎯 Data-Driven Decisions 📗 Spreadsheets for Analysis Lesson 015

◀ [Previous](014-spreadsheet-calculations-with-formulas.html) · [Next](016-spreadsheet-functions.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Errors are messages, not failures[#](#errors-are-messages-not-failures "Link to this heading")

When a spreadsheet shows `#DIV/0!` or `#REF!`, it is not broken — it is
****telling you something specific****. Each error code names a distinct cause, and
reading the code is the fastest route to the fix. This lesson decodes the ones
you will actually meet, then covers the errors that show **no** code at all —
which are the dangerous kind.

## The coded errors, decoded[#](#the-coded-errors-decoded "Link to this heading")

* `#DIV/0!` — ****division by zero****. A formula divided by an empty or
  zero-valued cell (common in averages when the count is zero). Fix: ensure the
  denominator is non-zero, or handle the empty case explicitly.
* `#VALUE!` — ****wrong data type****. A formula expected a number but got text —
  `="ten"+5`, or a numeric column contaminated with `"12 approx"`. Fix:
  correct the offending value’s type.
* `#REF!` — ****invalid reference****. The formula points at a cell that no
  longer exists, usually because a row or column it referenced was deleted, or
  a relative formula was copied off the edge of the data. Fix: restore the
  reference or repair the formula (absolute references prevent the copy
  variant).
* `#NAME?` — ****unrecognised name****. A misspelled function or range —
  `=SUMM(...)` instead of `=SUM(...)`. Fix: correct the spelling; the
  editor’s autocomplete prevents most of these.
* `#N/A` — ****not available****. A lookup (`VLOOKUP` and friends) could not
  find its target. Often legitimate — the value genuinely is not there — and
  often caused by stray spaces or a mismatched type. Fix: confirm the lookup
  value exists and matches exactly.

## Suppress with care[#](#suppress-with-care "Link to this heading")

Functions like `IFERROR` can replace an error with a blank or a message —
`=IFERROR(B2/C2, 0)`. This is right for errors you **expect and understand**
(an average over a genuinely empty group). It is dangerous as a reflex:
wrapping everything in `IFERROR` ****hides**** structural problems — a `#REF!`
that signals broken logic gets silently turned into a zero, and the wrong
number propagates. Diagnose first; suppress only what you have understood.

## The errors with no code[#](#the-errors-with-no-code "Link to this heading")

The coded errors are the **safe** ones — the spreadsheet flagged them. The
genuinely dangerous errors show a perfectly normal-looking number:

* a ****relative reference that drifted**** on fill-down (previous lesson),
  computing against the wrong cells;
* a ****wrong range**** — `=SUM(B2:B99)` when data runs to B100, silently
  dropping the last row;
* a ****duplicate or off-by-one**** in a manual selection;
* ****mixed units**** summed together (dollars and euros, hours and minutes).

None raises an error. All produce confident, wrong output — which is why the
order-of-magnitude sanity check and, later, systematic ****verification**** exist:
the spreadsheet cannot warn you about the mistakes it cannot see.

## The caveat[#](#the-caveat "Link to this heading")

A visible error code is a gift — it points at its own cause. Train yourself to
find silent errors **before** trusting a number: does the total match a rough
estimate, does the row count look right, do spot-checked cells recompute by
hand? The coded errors teach the vocabulary; the discipline is hunting the
uncoded ones.

> **Hint**
> * [Spreadsheet Calculations with Formulas](014-spreadsheet-calculations-with-formulas.html)
* [Spreadsheet Functions](016-spreadsheet-functions.html)
* [Data Cleaning with Spreadsheets](../4_data_cleaning_preparation/012-data-cleaning-with-spreadsheets.html)
* [How Data Analysts Use Spreadsheets](013-how-data-analysts-use-spreadsheets.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/08/31/common-spreadsheet-errors-and-how-to-fix-them/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: ddd](../../../_tags/topic-ddd.html) [topic: spreadsheets](../../../_tags/topic-spreadsheets.html)