# Measuring Associations in Data[#](#measuring-associations-in-data "Link to this heading")

****Stage 2 · 🔗 Associations & Correlation**** · Lesson 10 of 56 · **beginner**

[◀ Previous · Objective Selection of the Bin Width for a Time Histogram](09-objective-selection-of-the-bin-width-for-a-time-histogram.html) · Next · Measuring Associations Between Two Continuous Variables <11-measuring-associations-between-two-continuous-variables> ▶

## One idea, many measures[#](#one-idea-many-measures "Link to this heading")

To move from “these two variables seem related” to a ****number****, you need an ****association measure**** —
a single value capturing how strongly, and often in which direction, two variables move together.
There is no one measure for all cases; the right choice depends on ****what kind of variables**** you have.

## It depends on the types[#](#it-depends-on-the-types "Link to this heading")

Variables come in two broad flavours — ****continuous**** (numbers on a scale, like fare or distance) and
****categorical**** (labels, like payment type or company). The pairing decides the tool: comparing two
numbers is a different problem from comparing two labels, or a number against a label.

## The taxonomy[#](#the-taxonomy "Link to this heading")

The map for this stage:

* ****continuous ↔ continuous**** — ****correlation**** (Pearson, Spearman, Kendall);
* ****categorical ↔ categorical**** — the ****chi-square**** test and ****Cramér’s V****;
* ****continuous ↔ categorical**** — ****ANOVA**** and its effect size ****eta-squared**** (\(\eta^2\)).

The lessons ahead take these in turn.

## Strength and direction[#](#strength-and-direction "Link to this heading")

Two properties matter. ****Strength**** — how tightly the variables track, usually scaled so that 0 means
“no association” and 1 (or \(\pm 1\)) means “perfect”; and ****direction**** — whether they rise
together or move oppositely, which only makes sense for ****ordered**** variables. A good measure reports
strength on a comparable scale, so associations across different variable pairs can be ranked.

> **See also**
> ****Related lessons:**** [Measuring Associations Between Two Continuous Variables](11-measuring-associations-between-two-continuous-variables.html) · [Correlation Coefficients in Python (Pearson, Spearman, Kendall)](12-correlation-coefficients-in-python-pearson-spearman-kendall.html) · [What Are Statistical Tests?](15-what-are-statistical-tests.html) · [Eta Squared (η²): Effect Size in ANOVA](16-eta-squared-2-effect-size-in-anova.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/measuring-associations-in-data/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: beginner](../../_tags/level-beginner.html)