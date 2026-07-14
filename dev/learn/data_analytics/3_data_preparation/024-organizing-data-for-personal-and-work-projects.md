# Organizing Data for Personal and Work Projects[#](#organizing-data-for-personal-and-work-projects "Link to this heading")

📦 Data Preparation 🔢 Spreadsheets, SQL & Organization Lesson 024

◀ [Previous](023-querying-data-with-sql.html) · [Next](025-data-security-in-spreadsheets.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Organisation is preparation too[#](#organisation-is-preparation-too "Link to this heading")

Preparing data is not only about the data’s **content** — it is also about how the
**project** around it is organised: where files live, how they are named, which
versions are current. Poor project organisation causes a distinct and avoidable
class of problems — lost files, wrong versions analysed, work overwritten — that
have nothing to do with the analysis itself and everything to do with
discipline. This lesson closes the preparation section with the housekeeping
that keeps a data project sane.

## The elements of an organised project[#](#the-elements-of-an-organised-project "Link to this heading")

* ****A sensible folder structure.**** Separate raw data, working files, outputs,
  and documentation into clear folders (`raw/`, `working/`, `output/`,
  `docs/`). The single most valuable convention is a ****read-only ``raw/``
  folder**** holding untouched original data — the raw-stays-raw rule from the
  spreadsheet lesson, applied at the project level, so the source is always
  recoverable.
* ****Consistent file naming.**** Names that are descriptive, consistent, and
  sortable: include what the file is, and a date in `YYYY-MM-DD` form
  (which sorts chronologically as text). `2024-03-15_sales_north_raw.csv` tells
  you content, date, and status at a glance; `final_v3 (2).xlsx` tells you
  nothing reliable.
* ****Version control.**** A deliberate way to track versions rather than a
  graveyard of `final`, `final_real`, `final_ACTUAL`. Dated filenames help;
  proper version-control tools (as used for code) help more; the essential thing
  is **knowing which version is current** and never silently overwriting a version
  you might need.
* ****Documentation.**** A short README or notes file recording what the project
  is, where the data came from, what was done to it, and where things live — the
  chain-of-custody and metadata disciplines from earlier, at project scale.

## Why this is analyst work, not clerical work[#](#why-this-is-analyst-work-not-clerical-work "Link to this heading")

Disorganisation is not a harmless untidiness; it produces **wrong analysis**.
Analysing an outdated file version, overwriting the only copy of a source, or
being unable to find the data behind a published number are real failures with
organisational, not analytical, causes — and they are entirely preventable. Good
organisation is also what makes work ****reproducible**** and ****shareable****: a
colleague (or you in six months) can pick up a well-organised project and
understand it, where a disorganised one is a mystery even to its author.

## The caveat[#](#the-caveat "Link to this heading")

Organisation is a means, not an end — it is possible to over-engineer a folder
structure or a naming scheme so elaborate that maintaining it costs more than it
saves, and rigid conventions nobody follows are worse than simple ones everybody
does. The goal is **enough** structure to keep the project findable, recoverable,
and reproducible, matched to its size — a quick analysis needs little, a
long-running project needs more. The final lesson of this section addresses one
more project-level concern: keeping shared data secure.

> **Hint**
> * [Building and Organizing a Spreadsheet](../2_data_driven_decisions/012-building-and-organizing-a-spreadsheet.html)
* [Data Security in Spreadsheets](025-data-security-in-spreadsheets.html)
* [Importing Data into Spreadsheets](020-importing-data-into-spreadsheets.html)
* [The Importance of Clean Data](../4_data_cleaning_preparation/001-the-importance-of-clean-data.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/09/04/organizing-data-for-personal-and-work-projects/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: prep](../../../_tags/topic-prep.html) [topic: spreadsheets\_sql](../../../_tags/topic-spreadsheets_sql.html)