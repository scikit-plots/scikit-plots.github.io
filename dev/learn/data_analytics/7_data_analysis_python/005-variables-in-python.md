# Variables in Python[#](#variables-in-python "Link to this heading")

🐍 Data Analysis Using Python 🐍 Python Fundamentals Lesson 005

◀ [Previous](004-object-oriented-programming-oop-in-python.html) · [Next](006-naming-conventions-and-restrictions-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Naming values for reuse[#](#naming-values-for-reuse "Link to this heading")

A program that could not **remember** values would be useless; ****variables**** are how
Python remembers. A variable is a named container for a value, letting you store data,
refer to it by name, and change it as the program runs. This lesson covers variables in
Python — assigning, reassigning, and using them — the foundation of holding data in code.

## Assignment[#](#assignment "Link to this heading")

A variable is created by **assigning** a value to a name with `=`:

```
sales = 1000
region = "North"
tax_rate = 0.08

```

The name on the left is bound to the value on the right; afterwards, the name stands for
the value:

```
total = sales + sales * tax_rate
print(total)              # 1080.0
print(region)             # North

```

The `=` here is **assignment**, not mathematical equality — it means “let this name
refer to this value,” a distinction worth keeping clear.

## Reassignment[#](#reassignment "Link to this heading")

A variable’s value can **change** — reassigning binds the name to a new value:

```
count = 5
count = count + 1         # count is now 6
count += 1                # shorthand for count = count + 1; now 7

```

The last form, `+=`, is an **augmented assignment** — a common shorthand for updating a
variable based on its current value (`-=`, `*=`, `/=` work similarly). Reassignment
is what lets a variable track a changing value as a program runs.

## Why variables matter[#](#why-variables-matter "Link to this heading")

Variables serve the same purposes as naming anything: **reuse** (compute a value once,
use it many times), **clarity** (a well-named variable documents what a value means —
`tax_rate` is clearer than `0.08` scattered through code), and **changeability**
(update a value in one place and everything using it updates). This is the
abstraction-and-naming principle from the foundations, in code: meaningful names for
values make programs readable and maintainable, exactly as meaningful column names make
data readable.

## The caveat[#](#the-caveat "Link to this heading")

Variables have subtleties that catch beginners. A variable must be **assigned before it
is used** — referencing a name Python has not seen raises an error. Reassignment means a
variable’s value depends on **when** you look (its value is whatever was last assigned),
which matters especially in notebooks where cells run out of order — a variable can hold
a surprising value if cells ran in an unexpected sequence. And Python variables are
**case-sensitive** (`Sales` ≠ `sales`), a frequent source of “undefined name” errors.
These are learned by writing code and reading the errors, which say precisely what went
wrong. The next lesson covers naming variables well.

> **Hint**
> * [Python Fundamentals](002-python-fundamentals.html)
* [Naming Conventions and Restrictions in Python](006-naming-conventions-and-restrictions-in-python.html)
* [Data Types and Type Conversion in Python](007-data-types-and-type-conversion-in-python.html)
* [Object-Oriented Programming (OOP) in Python](004-object-oriented-programming-oop-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/variables-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: basics](../../../_tags/topic-basics.html)