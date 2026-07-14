# Importing Data into Spreadsheets[#](#importing-data-into-spreadsheets "Link to this heading")

📦 Data Preparation 🔢 Spreadsheets, SQL & Organization Lesson 020

◀ [Previous](019-accessing-data-internal-and-external-sources.html) · [Next](021-sorting-and-filtering-data-in-spreadsheets.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## From source to sheet[#](#from-source-to-sheet "Link to this heading")

The most common first step of a hands-on analysis is getting data **into** a
spreadsheet — importing it from a file, a database export, or an external
source. Done carelessly, import is where a surprising share of data problems are
born; done deliberately, it sets up everything after. This lesson is the
practical bridge from “data exists somewhere” to “data is in my sheet, correctly
typed and ready.”

## Common import routes[#](#common-import-routes "Link to this heading")

* ****CSV / TSV files**** — the universal exchange format from earlier; spreadsheets
  open them directly, parsing rows and delimiter-separated columns.
* ****Other spreadsheet files**** — opening or importing an existing `.xlsx`.
* ****Database exports**** — data pulled from a database (often **as** CSV) and loaded
  in.
* ****Copy and paste**** — quick for small data, but the most error-prone route for
  anything structured.
* ****Connected imports**** — some spreadsheets can pull directly from a URL, an
  API, or a database connection, refreshing as the source updates.

## The import traps[#](#the-import-traps "Link to this heading")

Import is where the **type** problems from earlier lessons are created, so it is
where to catch them:

* ****Numbers as text**** — a numeric column arrives as text (common from CSV,
  where everything is text) and refuses arithmetic until converted. The
  left-alignment tell from the data-types lesson is your early warning.
* ****Mangled dates**** — dates parse into the wrong format or get silently
  converted, especially across regional day/month conventions.
* ****Lost leading zeros**** — identifier codes like `00042` lose their zeros when
  auto-typed as numbers, corrupting keys.
* ****Delimiter and encoding issues**** — a comma inside a text field splits a
  column wrongly; non-UTF-8 characters arrive garbled.
* ****Header confusion**** — the header row imported as data, or missing entirely.

## Importing cleanly[#](#importing-cleanly "Link to this heading")

Three habits prevent most trouble. ****Check types immediately**** after import —
scan for left-aligned numbers, malformed dates, and dropped leading zeros before
doing anything else. ****Control the import**** rather than accepting defaults —
spreadsheets’ import dialogs let you specify delimiters and column types up
front, which is far easier than fixing corruption afterward. And ****keep the raw
import untouched**** — paste it to its own tab and work on copies, the
raw-stays-raw rule from the spreadsheet-organisation lesson, so a botched
transformation never destroys the original.

## The caveat[#](#the-caveat "Link to this heading")

A clean-looking import is not a verified one: data can import without error and
still be subtly wrong — a shifted column, a truncated field, an encoding that
corrupted a few characters. Import is the moment to apply the sanity checks from
the mathematical-thinking lesson — does the row count match the source, do
totals look right, do spot-checked values match the origin? Getting data into
the sheet is the **start** of trusting it, not the end. The next lessons, in the
analysis section proper, turn that imported data into answers — beginning with
sorting and filtering.

> **Hint**
> * [Accessing Data: Internal and External Sources](019-accessing-data-internal-and-external-sources.html)
* [Data Types in Spreadsheets](005-data-types-in-spreadsheets.html)
* [Building and Organizing a Spreadsheet](../2_data_driven_decisions/012-building-and-organizing-a-spreadsheet.html)
* [Sorting and Filtering Data in Spreadsheets](021-sorting-and-filtering-data-in-spreadsheets.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/09/04/importing-data-into-spreadsheets/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: prep](../../../_tags/topic-prep.html) [topic: spreadsheets\_sql](../../../_tags/topic-spreadsheets_sql.html)