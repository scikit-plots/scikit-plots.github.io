# Overview of Core Tools Used by Data Analysts[#](#overview-of-core-tools-used-by-data-analysts "Link to this heading")

🌱 Foundations 🧰 Tools, Applications & Ethics Lesson 020

◀ [Previous](019-case-studies-in-data-analysis-and-the-practical-impact-of-data-driven-decision-making.html) · [Next](021-the-role-of-spreadsheets-in-data-analysis-and-basic-concepts.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## The working toolkit[#](#the-working-toolkit "Link to this heading")

Everything so far has been mindset and process; the rest of the course is
largely ****tools****. Four families cover the vast majority of working analysts’
time, and this course teaches all four. The right question is never “which is
best?” but “which fits this task, this data size, and this audience?”

## The four families[#](#the-four-families "Link to this heading")

* ****Spreadsheets**** (Excel, Google Sheets). The universal entry point: data
  visible in a grid, formulas for calculation, built-in sorting, filtering,
  pivot tables, and charts. Strengths: immediacy, transparency, and the fact
  that every stakeholder can open one. Fit: small-to-medium datasets, quick
  analyses, and anything a business partner must inspect themselves.
* ****SQL**** (Structured Query Language). The language for asking questions of
  ****databases****, where organisational data actually lives. A few clauses —
  `SELECT`, `FROM`, `WHERE`, `GROUP BY` — retrieve and aggregate
  millions of rows in seconds. Fit: data too large or too shared for a
  spreadsheet; the single most consistently demanded analyst skill.
* ****Visualization tools**** (Tableau and its peers). Purpose-built for turning
  results into interactive charts and dashboards. Fit: exploration by eye and
  communication to stakeholders — the Share phase, industrialised.
* ****Programming languages**** (Python — this course’s Section 7 — and R). Code
  handles what the others cannot: automation of repeated work, cleaning logic
  too complex for formulas, statistical analysis, and reproducible pipelines
  where the script **is** the documentation.

## One task, four lenses[#](#one-task-four-lenses "Link to this heading")

The same monthly-sales-by-region question: in a spreadsheet, a pivot table; in
SQL, `SELECT region, SUM(sales) ... GROUP BY region`; in Tableau, a map
coloured by the same aggregate; in Python, three lines of pandas that can run
automatically every month. Identical logic — grouping and summing — in four
costumes. Learn the **logic** once and each new tool is mostly new syntax, which
is why this course keeps re-solving familiar problems as the tools advance.

## Choosing, in practice[#](#choosing-in-practice "Link to this heading")

Three questions settle most choices. ****How big is the data?**** Spreadsheets
strain past tens of thousands of rows; SQL and Python do not. ****Who consumes
the result?**** A stakeholder who lives in Excel should receive Excel; a team
that monitors continuously deserves a dashboard. ****Will it repeat?**** One-off
work favours the fastest tool to hand; anything monthly favours a scripted,
rerunnable pipeline. Real projects chain the families — SQL to extract, Python
to clean, a spreadsheet or dashboard to deliver — and fluency across the chain
is precisely what the coming sections build.

## The caveat[#](#the-caveat "Link to this heading")

Tools date; the toolkit’s **shape** does not. Vendors and versions will change
after this course, but “a grid for inspection, a query language for scale, a
canvas for communication, code for automation” has been the stable anatomy for
decades. Invest accordingly: deepest in the logic, comfortably in today’s
tools, and calmly toward tomorrow’s.

> **Hint**
> * [The Role of Spreadsheets in Data Analysis and Basic Concepts](021-the-role-of-spreadsheets-in-data-analysis-and-basic-concepts.html)
* [The Concept and Basic Use of SQL (Query Language)](022-the-concept-and-basic-use-of-sql-query-language.html)
* [The Role and Importance of Data Visualization](023-the-role-and-importance-of-data-visualization.html)
* [Introduction to Python and Programming Fundamentals](../7_data_analysis_python/001-introduction-to-python-and-programming-fundamentals.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/07/30/overview-of-core-tools-used-by-data-analysts/> (insightful-data-lab.com).

Tags: [data-analytics](../../../_tags/data-analytics.html) [foundations](../../../_tags/foundations.html) [tools](../../../_tags/tools.html)