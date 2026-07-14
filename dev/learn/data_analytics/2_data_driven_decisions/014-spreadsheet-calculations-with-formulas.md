# Spreadsheet Calculations with Formulas[#](#spreadsheet-calculations-with-formulas "Link to this heading")

🎯 Data-Driven Decisions 📗 Spreadsheets for Analysis Lesson 014

◀ [Previous](013-how-data-analysts-use-spreadsheets.html) · [Next](015-common-spreadsheet-errors-and-how-to-fix-them.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Formulas: computation you can read[#](#formulas-computation-you-can-read "Link to this heading")

A ****formula**** is an expression, beginning with `=`, that computes a value
from other cells. Formulas are what make a spreadsheet a calculator rather than
a table: change an input and every dependent formula recomputes instantly. This
lesson covers the mechanics that trip up beginners — chiefly how cell
references behave when a formula is copied.

## The anatomy of a formula[#](#the-anatomy-of-a-formula "Link to this heading")

`=B2*C2` multiplies two cells. `=(B2-C2)/C2` computes a percentage change.
Formulas combine ****cell references**** (`B2`), ****operators****
(`+ - * /`), ****numbers****, and ****functions**** (next lesson). The power is the
reference: `=B2*C2` does not mean “6” — it means “whatever is in B2 times
whatever is in C2”, so the sheet stays live.

## The distinction that matters most: relative vs absolute[#](#the-distinction-that-matters-most-relative-vs-absolute "Link to this heading")

When you copy a formula down a column, its references ****move**** by default —
this is a ****relative reference****. Copy `=B2*C2` from row 2 to row 3 and it
becomes `=B3*C3`, which is usually exactly what you want: revenue per row,
computed for every row by writing the formula once and filling down.

Sometimes a reference must ****not**** move — a single tax rate in `E1` that
every row multiplies by. Freeze it with ****dollar signs****: `$E$1` is an
****absolute reference**** that stays fixed no matter where the formula is copied.
The `$` before the column letter locks the column; the `$` before the row
number locks the row; you can lock one and not the other (`$E1` or `E$1`)
for row- or column-only anchoring.

```
A2:  =B2*$E$1     -> fill down -> B3*$E$1, B4*$E$1, ...   (rate stays E1)
A2:  =B2*E1       -> fill down -> B3*E2,   B4*E3,  ...    (rate drifts -- a bug)

```

Getting this wrong is one of the most common spreadsheet bugs: a fill-down that
silently walks the “fixed” reference down the sheet, producing numbers that
look plausible and are wrong.

## Building calculations that hold up[#](#building-calculations-that-hold-up "Link to this heading")

Two habits prevent trouble. ****Reference, don’t retype****: put the tax rate in a
cell and reference `$E$1`, so changing it updates everything — a value typed
into fifty formulas is fifty places to miss. And ****build in steps****: a column
for subtotal, another for tax, another for total, rather than one monster
formula — each step is inspectable, and the order-of-magnitude sanity check
from the mathematical-thinking lesson has somewhere to land.

## The caveat[#](#the-caveat "Link to this heading")

Formulas are invisible once entered — the cell shows the result, not the logic
— so errors hide behind reasonable-looking numbers. That invisibility is why
the next lesson is entirely about **errors**: recognising when a formula has gone
wrong, and why.

> **Hint**
> * [How Data Analysts Use Spreadsheets](013-how-data-analysts-use-spreadsheets.html)
* [Spreadsheet Functions](016-spreadsheet-functions.html)
* [Common Spreadsheet Errors and How to Fix Them](015-common-spreadsheet-errors-and-how-to-fix-them.html)
* [Building and Organizing a Spreadsheet](012-building-and-organizing-a-spreadsheet.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/08/31/spreadsheet-calculations-with-formulas/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: ddd](../../../_tags/topic-ddd.html) [topic: spreadsheets](../../../_tags/topic-spreadsheets.html)