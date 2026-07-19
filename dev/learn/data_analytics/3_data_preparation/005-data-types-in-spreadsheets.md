# Data Types in Spreadsheets[#](#data-types-in-spreadsheets "Link to this heading")

📦 Data Preparation 🧬 Data Types & Structure Lesson 005

◀ [Previous](004-structured-data-and-data-models.html) · [Next](006-data-tables-tabular-data.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The type behind the cell[#](#the-type-behind-the-cell "Link to this heading")

The spreadsheet lessons of Section 2 treated cells as holding “values”; here we
get specific about what **kind** of value a cell holds, because a spreadsheet
quietly assigns every cell a ****data type****, and that type governs how the cell
behaves — what you can compute, how it sorts, and whether a formula works or
throws an error.

## The core spreadsheet types[#](#the-core-spreadsheet-types "Link to this heading")

* ****Text**** (string) — letters, words, or any characters treated as label rather
  than quantity: names, categories, IDs. Text is left-aligned by default and
  cannot be summed. Numbers **stored as text** (a common import problem) look
  numeric but refuse arithmetic — a frequent cause of the `#VALUE!` errors
  from earlier.
* ****Number**** — numeric values you can calculate with: integers and decimals,
  right-aligned by default. Currency and percentage are number **formats** — the
  underlying value is a number, displayed with a symbol or scaled by 100.
* ****Date and time**** — stored internally as serial numbers so they can be
  subtracted and sorted chronologically, but displayed as calendar dates. This
  dual nature is why a “date” that is really text will sort alphabetically
  (wrongly) and refuse date arithmetic.
* ****Boolean**** — logical `TRUE` / `FALSE` values, produced by comparisons
  and consumed by `IF` and filters.

## Why the type matters[#](#why-the-type-matters "Link to this heading")

The type determines the valid operation, exactly as the measurement levels did:
you sum numbers, sort dates chronologically, and count text. The everyday
failures trace to a mismatch between a cell’s **actual** type and its **apparent**
one — the classic being numbers or dates imported as text, which look right and
compute wrong. Recognising and fixing these is core Prepare-phase work, and it
connects directly to the value types (nominal, ordinal, discrete, continuous)
of the previous lessons: the spreadsheet type is how those abstract levels are
physically stored.

## Checking and fixing types[#](#checking-and-fixing-types "Link to this heading")

Two habits catch most trouble. ****Watch the alignment****: numbers and dates that
sit left-aligned are secretly text and will misbehave. ****Convert deliberately****:
use the spreadsheet’s type-conversion tools (or a helper column) to turn
text-numbers into real numbers and text-dates into real dates **before**
computing, rather than discovering the problem inside a broken formula. The
cleaning section builds these fixes into a systematic workflow.

## The caveat[#](#the-caveat "Link to this heading")

Spreadsheets guess types automatically, and the guess is sometimes wrong —
famously, identifiers that look like numbers (a product code `00123`) lose
leading zeros, and codes that look like dates get silently converted. Automatic
typing is a convenience that occasionally corrupts data on import, so part of
preparation is verifying that each column’s type is the one you **intended**, not
merely the one the software chose. The next lesson steps up from individual
cells to the table they form.

> **Hint**
> * [Understanding Data Types and Data Formats](003-understanding-data-types-and-data-formats.html)
* [Building and Organizing a Spreadsheet](../2_data_driven_decisions/012-building-and-organizing-a-spreadsheet.html)
* [Data Tables (Tabular Data)](006-data-tables-tabular-data.html)
* [Data Formatting and Unit Conversion in Spreadsheets](../5_analyze_data/006-data-formatting-and-unit-conversion-in-spreadsheets.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/09/04/data-types-in-spreadsheets/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: prep](../../../_tags/topic-prep.html) [topic: types](../../../_tags/topic-types.html)