# While Loops and Iteration in Python[#](#while-loops-and-iteration-in-python "Link to this heading")

🐍 Data Analysis Using Python 🔀 Control Flow Lesson 013

◀ [Previous](012-branching-and-conditional-statements-in-python.html) · [Next](014-for-loops-in-python.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Repeating while a condition holds[#](#repeating-while-a-condition-holds "Link to this heading")

The second pillar of control flow (after branching) is ****iteration**** — repeating code —
and the ****while loop**** is its most basic form: run a block **repeatedly as long as a
condition remains true**. Opening the discussion of loops, this lesson covers the while
loop and the idea of iteration that the for-loop and data-processing lessons build on.

## The while loop[#](#the-while-loop "Link to this heading")

A `while` loop repeats its block while its condition is true:

```
count = 1
while count <= 5:
    print(count)
    count += 1          # crucial: move toward ending the loop

```

Python checks the condition (`count <= 5`); if true, it runs the block, then checks
again — repeating until the condition becomes false. Here it prints 1 through 5, then
stops when `count` reaches 6. The condition uses the boolean logic from the earlier
lesson, and the loop continues until that condition fails.

## The crucial detail: making progress[#](#the-crucial-detail-making-progress "Link to this heading")

The single most important thing about a while loop is that **something in the loop must
eventually make the condition false** — otherwise it runs forever. In the example,
`count += 1` is what moves toward termination; without it, `count` stays 1, the
condition stays true, and the loop never ends (an ****infinite loop****). Every while loop
must contain something that progresses toward its exit condition, and forgetting this is
the classic while-loop bug.

## Iteration as a concept[#](#iteration-as-a-concept "Link to this heading")

****Iteration**** — doing something repeatedly — is fundamental to programming and
especially to data work, where the same operation applies to many items (every row, every
value, every file). The while loop expresses iteration in its most general form: repeat
until a condition says stop. This general form suits situations where you do not know in
advance how many repetitions are needed — keep going until something changes (until the
data runs out, until a target is reached, until input stops). For iterating a **known**
collection, the for loop (next lesson) is usually cleaner, but the while loop handles the
open-ended cases.

## The caveat[#](#the-caveat "Link to this heading")

The while loop’s power to repeat is exactly its danger: the ****infinite loop****. A
condition that never becomes false — because the loop forgets to make progress, or the
progress never reaches the exit — hangs the program indefinitely. This is the signature
while-loop failure, and guarding against it means ensuring every while loop has a clear
path to its exit condition and that something in the body advances toward it. When you do
know how many times to repeat, or you are iterating a collection, the for loop is safer
because it **cannot** loop infinitely over a finite collection. Reach for while only when
the open-ended condition genuinely calls for it, and always verify the loop can end. The
next lesson covers the for loop.

> **Hint**
> * [Branching and Conditional Statements in Python](012-branching-and-conditional-statements-in-python.html)
* [For Loops in Python](014-for-loops-in-python.html)
* [range() Function and Loop Control in Python](015-range-function-and-loop-control-in-python.html)
* [Boolean Data, Comparators, and Logical Operators in Python](011-boolean-data-comparators-and-logical-operators-in-python.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/12/06/while-loops-and-iteration-in-pytho/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: python](../../../_tags/topic-python.html) [topic: control](../../../_tags/topic-control.html)