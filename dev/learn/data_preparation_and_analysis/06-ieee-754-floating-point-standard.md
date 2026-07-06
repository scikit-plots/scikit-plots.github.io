# IEEE 754 Floating-Point Standard[#](#ieee-754-floating-point-standard "Link to this heading")

****Stage 1 · 📋 Foundations**** · Lesson 06 of 56 · **beginner**

[◀ Previous · The First Step in Knowing Your Data](05-the-first-step-in-knowing-your-data.html) · Next · Discovering Associations Through Data: From Everyday Patterns to Chicago Taxi Trips (September 2022) <07-discovering-associations-through-data-from-everyday-patterns-to-chicago-taxi-trips-september-2022> ▶

## Storing real numbers[#](#storing-real-numbers "Link to this heading")

Computers store real numbers in a ****finite**** number of bits, and the near-universal scheme for doing
so is the ****IEEE 754**** standard. Understanding it explains a whole class of surprises — why sums do
not quite add up, why you should never test two floats for exact equality — that otherwise look like
bugs.

## Sign, exponent, mantissa[#](#sign-exponent-mantissa "Link to this heading")

A floating-point number is stored in three parts, like scientific notation in binary: a ****sign**** bit,
an ****exponent**** (which scales the value), and a ****mantissa**** (the significant digits). The two common
sizes are ****single precision**** (32 bits: 1 sign, 8 exponent, 23 mantissa) and ****double precision****
(64 bits: 1 sign, 11 exponent, 52 mantissa) — the `float64` that `numpy` and `pandas` use by
default. More mantissa bits mean more precision.

## Why 0.1 + 0.2 ≠ 0.3[#](#why-0-1-0-2-0-3 "Link to this heading")

With finite mantissa bits, most decimal fractions ****cannot be represented exactly**** — \(0.1\) in
binary is a repeating fraction, rounded to fit. The rounding errors accumulate, so the famous result
is

\[0.1 + 0.2 = 0.30000000000000004 \neq 0.3.\]

It is not a language bug; it is the unavoidable cost of squeezing infinite decimals into 64 bits.

## What it means for data work[#](#what-it-means-for-data-work "Link to this heading")

Three habits follow. ****Never test floats for exact equality**** — compare within a tolerance
(`numpy.isclose`) instead. ****Beware accumulated error**** when summing many values, and prefer stable
formulations. And know the ****special values**** the standard defines — positive and negative infinity,
and `NaN` (not-a-number) — because `NaN` in particular is how missing or undefined numeric results
surface throughout `pandas`.

> **See also**
> ****Related lessons:**** [The First Step in Knowing Your Data](05-the-first-step-in-knowing-your-data.html) · [Big Data: Definition, Characteristics, Evolution, and Business Impact](04-big-data-definition-characteristics-evolution-and-business-impact.html) · [Least Squares Regression](31-least-squares-regression.html) · [Correlation Coefficients in Python (Pearson, Spearman, Kendall)](12-correlation-coefficients-in-python-pearson-spearman-kendall.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/ieee-754-floating-point-standard/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: beginner](../../_tags/level-beginner.html)