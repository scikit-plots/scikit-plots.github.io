# Comments, Algorithms, and Docstrings in Python[#](#comments-algorithms-and-docstrings-in-python "Link to this heading")

🐍 Data Analysis Using Python 🐍 Python Fundamentals Lesson 010

◀ [Previous](009-code-reusability-modularity-and-clean-code-in-python.html) · [Next](011-boolean-data-comparators-and-logical-operators-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Documenting code[#](#documenting-code "Link to this heading")

Code expresses **what** it does; documentation explains **why** and **how**, and thinking in
****algorithms**** shapes code before it is written. This lesson covers ****comments****,
****docstrings****, and algorithmic thinking — the practices that make Python code
understandable and well-planned, completing the basics stage.

## Comments[#](#comments "Link to this heading")

A ****comment**** is text in code that Python ignores, written for human readers. In Python,
comments start with `#`:

```
# Convert the raw price strings to numbers before summing
prices = [float(p) for p in raw_prices]
total = sum(prices)              # sum() adds all elements

```

Good comments explain **why** — the reasoning, the intent, the non-obvious — not **what** the
code plainly does. `x = x + 1  # add one to x` is a useless comment (the code says
that); `# compensate for the zero-based index` is a useful one (it explains the reason).
The documentation principle from the foundations — explain why, not just what — applies
directly.

## Docstrings[#](#docstrings "Link to this heading")

A ****docstring**** is a string at the start of a function (or module or class) that
documents it, accessible programmatically and by tools. Python data work commonly uses
the ****NumPy documentation style****, which structures a docstring into sections:

```
def add_tax(amount, rate=0.08):
    """Return the amount with tax added.

    Parameters
    ----------
    amount : float
        The pre-tax amount.
    rate : float, optional
        The tax rate as a decimal (default 0.08).

    Returns
    -------
    float
        The amount including tax.
    """
    return amount + amount * rate

```

The docstring states what the function does, its ****Parameters****, and what it
****Returns**** — so a reader (or a documentation generator) understands the function without
reading its body. For reusable functions, a docstring is the interface’s documentation,
and the NumPyDoc section order (Parameters, Returns, and, as needed, Raises, Notes,
Examples) is a widely-followed convention in the data ecosystem.

## Thinking in algorithms[#](#thinking-in-algorithms "Link to this heading")

An ****algorithm**** is a step-by-step procedure for solving a problem — and thinking
algorithmically means **planning the steps before writing code**. Before coding, an analyst
works out the logic: what steps, in what order, transform the input into the desired
output. Writing the algorithm first (even as plain-language steps or “pseudocode”) clarifies
the approach before the syntax, catching logic problems early — the big-picture-first
discipline from the foundations, applied to code. Code is the **expression** of an algorithm;
getting the algorithm right first makes the code straightforward.

## Why documentation matters[#](#why-documentation-matters "Link to this heading")

Documentation is what makes code understandable to its future readers — including its
author months later. A comment explaining a non-obvious choice, a docstring describing a
function’s interface, and code that follows a clear algorithm together mean the **reasoning**
survives, not just the instructions. This is the reproducibility-and-maintainability
theme in code: undocumented code works until it must be understood or changed, at which
point its opacity becomes costly. Documentation is the small investment that keeps code
workable over time.

## The caveat[#](#the-caveat "Link to this heading")

Documentation has the same failure modes as any: too little leaves code opaque, but too
much — comments restating obvious code, docstrings on trivial one-line functions,
narration of every step — clutters and, worse, **drifts out of sync** with the code, so a
comment says one thing while the code does another, which misleads more than no comment.
The discipline is documentation that is **accurate, useful, and maintained**: comment the
**why** and the non-obvious, docstring the **interfaces** that will be reused, keep it truthful
to the code, and skip narrating what the code plainly says. Accurate, purposeful
documentation helps; stale or redundant documentation harms. This completes the Python
basics; the next stage turns to control flow — making code decide and repeat.

> **Hint**
> * [Code Reusability, Modularity, and Clean Code in Python](009-code-reusability-modularity-and-clean-code-in-python.html)
* [Functions in Python](008-functions-in-python.html)
* [Branching and Conditional Statements in Python](012-branching-and-conditional-statements-in-python.html)
* [Naming Conventions and Restrictions in Python](006-naming-conventions-and-restrictions-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/comments-algorithms-and-docstrings-in-python/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: basics](../../../_tags/topic-basics.html)