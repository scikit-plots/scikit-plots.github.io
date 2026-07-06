# What Are Statistical Tests?[#](#what-are-statistical-tests "Link to this heading")

****Stage 2 · 🔗 Associations & Correlation**** · Lesson 15 of 56 · **beginner**

[◀ Previous · Harald Cramér](14-harald-cramer.html) · Next · Eta Squared (η²): Effect Size in ANOVA <16-eta-squared-2-effect-size-in-anova> ▶

## Is it real or chance?[#](#is-it-real-or-chance "Link to this heading")

When you measure an association in a sample, one question always lurks: ****is it real, or could it be
chance?**** A correlation of 0.2 in a handful of taxi trips might vanish in the next batch. ****Statistical
tests**** answer this — they quantify how likely your finding is to have arisen by luck alone.

## Null and alternative[#](#null-and-alternative "Link to this heading")

A test pits two hypotheses against each other. The ****null hypothesis**** (\(H\_0\)) is the sceptic’s
position: ****no effect, no association**** — any pattern seen is chance. The ****alternative****
(\(H\_1\)) is the claim you are investigating: a real effect exists. The test computes a ****test
statistic**** from the data, measuring how far the sample departs from what \(H\_0\) would predict.

## The p-value[#](#the-p-value "Link to this heading")

That departure is summarised in a ****p-value****: the probability of seeing data ****at least as extreme****
as yours ****if the null hypothesis were true****. A ****small**** p-value means your result would be
surprising under “pure chance”, so chance is an unconvincing explanation; a ****large**** one means the
data is unremarkable and the null stands. You compare it to a chosen threshold, the ****significance
level**** \(\alpha\) (commonly 0.05), and ****reject**** \(H\_0\) when \(p < \alpha\).

## Reading the result[#](#reading-the-result "Link to this heading")

Two cautions make tests trustworthy. Rejecting a ****true**** null is a ****false positive**** (a Type I
error, at rate \(\alpha\)); failing to detect a ****real**** effect is a ****false negative**** (Type II).
And ****significance is not importance**** — with enough data a trivially small effect becomes
“significant”, which is why the next lesson pairs tests with a measure of ****effect size****. The
chi-square, t-test and ANOVA F-test are all instances of this one logic.

> **See also**
> ****Related lessons:**** [Measuring Associations in Data](10-measuring-associations-in-data.html) · [Eta Squared (η²): Effect Size in ANOVA](16-eta-squared-2-effect-size-in-anova.html) · [Karl Pearson](13-karl-pearson.html) · [Forward Selection with Nested Models and Deviance Tests](42-forward-selection-with-nested-models-and-deviance-tests.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/what-are-statistical-tests/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: beginner](../../_tags/level-beginner.html)