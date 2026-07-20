🧷  ****k-fold cross-validation****

# k-fold cross-validation[#](#k-fold-cross-validation "Link to this heading")

**Train on k-1 folds and test on the held-out fold, rotating through all k.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****k-fold cross-validation**** splits the data into ****k roughly equal folds**** and trains and
tests the model ****k times****, each run holding out a ****different fold**** as the test set and
training on the other \(k-1\). Averaging the k scores gives a lower-variance estimate of
performance than any single train/test split — which is why it is the ****default**** CV method.

## How it works[#](#how-it-works "Link to this heading")

Shuffle (if order is irrelevant), split into ****k folds**** (commonly 5 or 10), and for each
fold \(i\) train on the other folds and test on fold \(i\). Collect the k scores and
****average**** them for the final metric.

## Example[#](#example "Link to this heading")

With 1,000 samples and `k = 5`, each fold is 200 samples: every run trains on ****800**** and
validates on ****200****, rotating which 200 is held out, and the result is the ****mean**** across
the five runs.

## Variations[#](#variations "Link to this heading")

****Stratified k-fold**** preserves class balance per fold (vital for imbalanced data);
****repeated k-fold**** re-runs the whole process with new splits for a steadier estimate; and
****leave-one-out (LOOCV)**** is the extreme \(k = N\), one sample per fold — very accurate,
very expensive.

## In scikit-learn, and the trade-offs[#](#in-scikit-learn-and-the-trade-offs "Link to this heading")

```
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5)
print(scores.mean(), scores.std())

```

The gains — a ****reliable estimate****, less dependence on one random split, full use of the
data, and a backbone for ****hyperparameter tuning**** — cost ****k model fits****, and plain k-fold
is ****wrong for time series****, where time-aware CV is required instead.

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Cross-Validation (CV)](136-cross-validation-cv.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Data Leakage](131-data-leakage.html)

---

> **Hint**
> ****More in Validation & Cross-Validation****

[Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [k-fold cross-validation](https://insightful-data-lab.com/2025/08/24/k-fold-cross-validation/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)