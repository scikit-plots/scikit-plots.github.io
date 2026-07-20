# Eta Squared (η²): Effect Size in ANOVA[#](#eta-squared-2-effect-size-in-anova "Link to this heading")

****Stage 2 · 🔗 Associations & Correlation**** · Lesson 16 of 56 · **beginner**

[◀ Previous · What Are Statistical Tests?](15-what-are-statistical-tests.html) · [Next · Understanding Market Baskets and Ideal Customers ▶](17-understanding-market-baskets-and-ideal-customers.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## How big, not just whether[#](#how-big-not-just-whether "Link to this heading")

A statistical test tells you ****whether**** a categorical variable relates to a numeric one — do taxi
fares ****differ**** by payment type? But “significant” does not mean “large”. ****Eta squared****
(\(\eta^2\)) answers the other half: ****how big**** is the effect? It is the ****effect size**** that
partners the ANOVA test, filling the “continuous ↔ categorical” slot of the association taxonomy.

## A number to a category[#](#a-number-to-a-category "Link to this heading")

The setting is ****ANOVA**** (analysis of variance): one ****categorical**** variable splits the data into
groups, and you ask how much of the spread in a ****continuous**** variable is explained by which group a
point falls in. ANOVA works by splitting the ****total**** variability into a ****between-group**** part
(differences among the group means) and a ****within-group**** part (scatter inside each group).

## The formula[#](#the-formula "Link to this heading")

Eta squared is simply the ****between-group**** share of the total:

\[\eta^2 = \frac{SS\_{\text{between}}}{SS\_{\text{total}}}, \qquad
SS\_{\text{total}} = SS\_{\text{between}} + SS\_{\text{within}}.\]

It ranges from \(0\) (the grouping explains nothing) to \(1\) (the grouping explains
everything). An \(\eta^2\) of 0.30 means ****30%**** of the variance in the numeric variable is
accounted for by the category.

## The cousin of r²[#](#the-cousin-of-r2 "Link to this heading")

Eta squared is the categorical twin of a familiar quantity: it is analogous to \(r^2\), the
****coefficient of determination****. Both report the ****proportion of variance explained**** in a continuous
variable — \(r^2\) when the predictor is also continuous (as in regression, Stage 5),
\(\eta^2\) when the predictor is a category. Seen this way, correlation and ANOVA are two faces of
the same question: ****how much does one variable tell you about another?**** (In multi-factor models, a
variant called **partial** eta squared isolates one factor’s contribution.)

> **Hint**
> ****Related lessons:**** [What Are Statistical Tests?](15-what-are-statistical-tests.html) · [Measuring Associations in Data](10-measuring-associations-in-data.html) · [Harald Cramér](14-harald-cramer.html) · [Feature Importance in Linear Regression](33-feature-importance-in-linear-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/14/eta-squared-%ce%b7%c2%b2-effect-size-in-anova/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: beginner](../../_tags/level-beginner.html)