# Functions in Python[#](#functions-in-python "Link to this heading")

🐍 Data Analysis Using Python 🐍 Python Fundamentals Lesson 008

◀ [Previous](007-data-types-and-type-conversion-in-python.html) · [Next](009-code-reusability-modularity-and-clean-code-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Reusable blocks of code[#](#reusable-blocks-of-code "Link to this heading")

As programs grow, the same operations recur — and copying code to repeat them is the
duplication the foundations warned against. ****Functions**** are Python’s tool for reuse: a
named, reusable block of code that performs a task, defined once and called wherever
needed. This lesson covers defining and calling functions — the core of writing clean,
non-repetitive Python.

## Defining and calling a function[#](#defining-and-calling-a-function "Link to this heading")

A function is defined with `def`, given a name, parameters, and a body, and **called**
by name:

```
def add_tax(amount, rate):
    total = amount + amount * rate
    return total

result = add_tax(1000, 0.08)      # call it; result is 1080.0
print(add_tax(50, 0.10))          # 55.0

```

`def add_tax(amount, rate):` defines a function taking two **parameters**; the indented
body is what it does; `return` gives back a result. Calling `add_tax(1000, 0.08)`
runs the body with those **arguments** and evaluates to the returned value. The same
function serves any amount and rate — written once, used many times.

## Parameters, arguments, and return[#](#parameters-arguments-and-return "Link to this heading")

The pieces of a function:

* ****Parameters**** — the named inputs in the definition (`amount`, `rate`) — the
  “parameterized function” idea, letting one function handle many inputs.
* ****Arguments**** — the actual values passed in a call (`1000`, `0.08`).
* ****Return value**** — what the function gives back via `return`, usable by the caller. A
  function without `return` gives back `None`.
* ****Default arguments**** — parameters can have defaults used when an argument is omitted:

  ```
  def add_tax(amount, rate=0.08):    # rate defaults to 0.08
      return amount + amount * rate

  add_tax(1000)                      # uses default rate: 1080.0
  add_tax(1000, 0.10)               # overrides: 1100.0

  ```

Defaults are the “explicit defaults” principle from the foundations, in code.

## Why functions matter[#](#why-functions-matter "Link to this heading")

Functions are the primary tool for the foundations’ **reuse and abstraction** principles.
They eliminate duplication (write the logic once, call it many times), improve
readability (a well-named function like `add_tax` documents what a block of code does),
enable testing (a function can be verified in isolation), and localise change (fix the
logic in one place). A program built from well-named functions is modular, readable, and
maintainable — the same virtues good structure gives anything, achieved in code through
functions.

## The caveat[#](#the-caveat "Link to this heading")

Functions can be misused in opposite directions. **Too little** use — repeating code
instead of writing a function — produces the duplication that makes programs
unmaintainable (change the logic and you must find every copy). **Too much or wrong**
abstraction — functions that do too many things, or are split so finely that following
the logic means jumping among many tiny functions — harms readability in the other
direction. The balance is the single-responsibility idea: a function should do **one
well-defined thing**, be named for it, and be neither a sprawling catch-all nor a
needless fragment. And functions should ideally be **pure** where practical — depending
only on their inputs and returning a result, without hidden side effects — which makes
them predictable and testable, the controlled-side-effects principle in code. The next
lessons cover writing clean, well-documented Python.

> **Hint**
> * [Variables in Python](005-variables-in-python.html)
* [Code Reusability, Modularity, and Clean Code in Python](009-code-reusability-modularity-and-clean-code-in-python.html)
* [Comments, Algorithms, and Docstrings in Python](010-comments-algorithms-and-docstrings-in-python.html)
* [Object-Oriented Programming (OOP) in Python](004-object-oriented-programming-oop-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/functions-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: basics](../../../_tags/topic-basics.html)