# Understanding Forward and Backward Stepwise Regression[#](#understanding-forward-and-backward-stepwise-regression "Link to this heading")

****Stage 5 · 📈 Regression**** · Lesson 36 of 56 · **intermediate**

[◀ Previous · Forward Selection and Model Interpretation in Linear Regression](35-forward-selection-and-model-interpretation-in-linear-regression.html) · [Next · How Shapley Values Work ▶](37-how-shapley-values-work.html) · [↑ Section](index.html)

## Three directions[#](#three-directions "Link to this heading")

Forward selection is one of ****three**** stepwise strategies, distinguished by the ****direction**** they
move. ****Forward**** starts empty and ****adds****; ****backward elimination**** starts full and ****removes****;
****bidirectional**** does ****both**** at every step. All three share the same goal — a parsimonious model —
and the same criteria (p-values, AIC, BIC, adjusted \(R^2\)), differing only in how they search.

## Backward elimination[#](#backward-elimination "Link to this heading")

****Backward elimination**** works in reverse. Begin with the ****full model**** containing ****all**** candidate
predictors, then repeatedly drop the ****least useful**** one — the feature with the ****highest p-value****
(least significant), or whose removal most improves the criterion — until every remaining feature
earns its place. Its advantage is that it weighs all variables ****together**** from the start, which can
handle ****correlated**** predictors more gracefully than forward selection. Its cost: it must fit the full
model, so it needs ****more observations than features****.

## Bidirectional stepwise[#](#bidirectional-stepwise "Link to this heading")

****Bidirectional**** (or plain “stepwise”) selection ****combines**** the two. At each step it can ****add**** a
promising feature the way forward does, but also ****re-examine**** features already included and ****drop****
any that have become redundant now that others are present. This flexibility corrects a weakness of
pure forward selection, where a feature admitted early can never be removed even if later additions
make it unnecessary.

## Use with caution[#](#use-with-caution "Link to this heading")

All three are ****greedy**** — they explore only a sliver of the possible models and offer ****no
guarantee**** of the best subset. And all carry real hazards: on small samples they ****overfit****, they
produce ****biased**** coefficient estimates, and the selected model can be ****non-reproducible**** — a
different sample yields a different set. Use them as ****exploratory**** tools when candidates are many and
theory is thin, always confirming the final model on held-out data. When you can, methods that assess
a feature’s contribution more fairly — like the ****Shapley values**** of the next lesson — sidestep some
of these pitfalls.

> **Hint**
> ****Related lessons:**** [Forward Selection: Definition and Core Idea](34-forward-selection-definition-and-core-idea.html) · [Forward Selection and Model Interpretation in Linear Regression](35-forward-selection-and-model-interpretation-in-linear-regression.html) · [Feature Importance in Linear Regression](33-feature-importance-in-linear-regression.html) · [Forward Selection with Nested Models and Deviance Tests](42-forward-selection-with-nested-models-and-deviance-tests.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/16/understanding-forward-and-backward-stepwise-regression/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)