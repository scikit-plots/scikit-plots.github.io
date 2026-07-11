# How Shapley Values Work[#](#how-shapley-values-work "Link to this heading")

****Stage 5 · 📈 Regression**** · Lesson 37 of 56 · **intermediate**

[◀ Previous · Understanding Forward and Backward Stepwise Regression](36-understanding-forward-and-backward-stepwise-regression.html) · [Next · Logistic Regression: Modeling Binary Outcomes via Odds and Log-Odds ▶](38-logistic-regression-modeling-binary-outcomes-via-odds-and-log-odds.html)

## A fair division problem[#](#a-fair-division-problem "Link to this heading")

The feature-importance question has a surprisingly deep answer borrowed from ****economics****. Imagine
several players cooperating to earn a joint payout — how should the winnings be split ****fairly****,
according to each player’s real contribution? Lloyd ****Shapley**** solved this in 1953, and the ****Shapley
value**** he defined turns out to be exactly what is needed to attribute a model’s ****prediction**** to its
features.

## Marginal contributions[#](#marginal-contributions "Link to this heading")

The idea rests on ****marginal contribution****. A player’s contribution to a group (a ****coalition****) is
how much the payout ****grows**** when they join it: \(v(S \cup \{i\}) - v(S)\) for a coalition
\(S\). But that depends on ****who is already there**** — a player may add a lot to a small group and
little to a large one. The Shapley value resolves this by ****averaging**** a player’s marginal
contribution over ****every**** possible coalition (equivalently, every order in which players could join).

## The formula[#](#the-formula "Link to this heading")

Written out, the Shapley value of feature \(i\) among \(n\) features is that weighted average:

\[\phi\_i = \sum\_{S \subseteq N \setminus \{i\}}
\frac{|S|!\,(n - |S| - 1)!}{n!}\,\bigl[v(S \cup \{i\}) - v(S)\bigr].\]

The weights count the orderings, so each coalition is credited correctly. What makes the Shapley value
special is that it is the ****unique**** scheme satisfying four fairness axioms: ****efficiency**** (the parts
sum to the whole), ****symmetry**** (equal contributors get equal shares), ****dummy**** (a feature that
changes nothing gets zero), and ****additivity****.

## Explaining predictions[#](#explaining-predictions "Link to this heading")

In machine learning the analogy is exact: the ****features are the players**** and the ****prediction is the
payout****. The Shapley value of a feature is how much it pushed **this** prediction ****above or below**** the
average prediction — a fair, model-agnostic attribution that works for any model, regression or
classification. The popular ****SHAP**** framework (2017) builds on this, decomposing a prediction into
feature contributions that ****sum**** to the output. The catch is cost: exact values require all
\(2^n\) coalitions, so in practice they are ****approximated****. Unlike the greedy selection of
earlier lessons, Shapley values weigh every feature ****fairly against all others****.

> **See also**
> ****Related lessons:**** [Feature Importance in Linear Regression](33-feature-importance-in-linear-regression.html) · [Understanding Forward and Backward Stepwise Regression](36-understanding-forward-and-backward-stepwise-regression.html) · [Multiple Linear Regression](32-multiple-linear-regression.html) · [Assessing the Quality of Prediction Models](50-assessing-the-quality-of-prediction-models.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/16/how-shapley-values-work/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)