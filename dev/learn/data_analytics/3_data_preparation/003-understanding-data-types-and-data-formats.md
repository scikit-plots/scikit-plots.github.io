# Understanding Data Types and Data Formats[#](#understanding-data-types-and-data-formats "Link to this heading")

📦 Data Preparation 🧬 Data Types & Structure Lesson 003

◀ [Previous](002-choosing-the-right-data-to-collect.html) · [Next](004-structured-data-and-data-models.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Two different questions[#](#two-different-questions "Link to this heading")

“What type is this data?” has two distinct meanings, and analysts need both.
One is about the ****nature of the values**** — are they numbers, categories,
dates? The other is about the ****file format**** the data travels in — CSV, JSON,
a database table. This lesson separates them, because the first governs what
analysis is **valid** and the second governs how you **load** the data at all.

## Value types: the measurement levels[#](#value-types-the-measurement-levels "Link to this heading")

The nature of a value determines which operations make sense on it. The
standard classification:

* ****Nominal**** — named categories with no inherent order: country, product
  colour, payment method. You can count and group them, but “average colour”
  is meaningless.
* ****Ordinal**** — categories with a meaningful order but no fixed spacing:
  satisfaction ratings (poor/fair/good), t-shirt sizes. You can rank them, but
  the gap between “good” and “fair” is not a defined quantity.
* ****Discrete**** (quantitative) — countable numbers: orders placed, employees,
  defects. Whole units; you cannot have 2.5 orders.
* ****Continuous**** (quantitative) — measured numbers on a scale, any value in a
  range: revenue, temperature, duration. Arithmetic and averages are fully
  meaningful.

The practical payoff: the value type dictates the valid summary and chart. You
average continuous data, count nominal data, and never compute a mean of
category labels — the `#VALUE!`-style mistakes of the spreadsheet lessons
often start as a value-type confusion.

## Data formats: the containers[#](#data-formats-the-containers "Link to this heading")

Independently, data arrives in formats — the file structures that hold it:

* ****CSV / TSV**** — plain text, one row per line, values separated by commas or
  tabs. Simple, universal, the lingua franca of tabular exchange.
* ****JSON**** — nested key–value structure, good for hierarchical data; the native
  shape of most web APIs.
* ****Spreadsheet files**** (`.xlsx`) — tabular data plus formatting and formulas.
* ****Database tables**** — structured, queryable storage (the SQL section’s home).
* ****XML, Parquet, and others**** — further containers for specific needs.

The format determines **how you get the data in** — which tool and which step —
but not what the data **means**; a column of prices is continuous whether it
arrives as CSV or JSON.

## Why keep them separate[#](#why-keep-them-separate "Link to this heading")

Confusing the two questions causes trouble. Loading a JSON file as if it were
CSV fails at the format level. Averaging a column of postal codes fails at the
value-type level — the load succeeded, the analysis is nonsense. Competent
preparation checks both: **can I read this container**, and **what may I validly
do with these values**.

## The caveat[#](#the-caveat "Link to this heading")

Formats and types blur at the edges. A CSV stores everything as text, so a
column of numbers arrives **looking** like text and must be converted before
arithmetic — a frequent source of the type errors seen earlier. Part of the
Prepare phase is confirming that each column’s **actual** type matches its
**intended** type, not merely its appearance. The next lesson goes deeper into
how data is structured overall.

> **Hint**
> * [Choosing the Right Data to Collect](002-choosing-the-right-data-to-collect.html)
* [Structured Data and Data Models](004-structured-data-and-data-models.html)
* [Data Types in Spreadsheets](005-data-types-in-spreadsheets.html)
* [Data Tables (Tabular Data)](006-data-tables-tabular-data.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/09/04/understanding-data-types-and-data-formats/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: prep](../../../_tags/topic-prep.html) [topic: types](../../../_tags/topic-types.html)