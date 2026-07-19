🧷  ****Data Leakage****

# Data Leakage[#](#data-leakage "Link to this heading")

**When information from outside the training set leaks in, inflating performance.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Data leakage**** is when ****information from outside the training data slips into training****,
giving the model unfair access to ****future or hidden knowledge****. The signature is a model
that looks ****excellent in validation**** but ****collapses on real, unseen data****.

## The four types[#](#the-four-types "Link to this heading")

****Target leakage****: a feature encodes the answer — predicting loan default from
`debt_collected_after_default`, which only exists **because** of default. ****Train-test
contamination****: test information bleeds in via preprocessing — e.g. scaling with a mean and
standard deviation computed over the ****whole**** dataset instead of the training fold alone.
****Temporal leakage****: using ****future**** data to predict the past — forecasting January’s price
with March’s trading volume. ****Group leakage****: the ****same group**** (patient, user, session)
lands in both train and test, so the model just ****recognises the group****.

## How to prevent it[#](#how-to-prevent-it "Link to this heading")

Five guards: fit ****preprocessing on the training fold only**** and apply it to the rest; ****drop
features that wouldn’t exist at prediction time****; use ****time-aware splits**** for temporal
data; use ****group-aware CV**** (`GroupKFold`, `StratifiedGroupKFold`) to keep groups
intact; and ****monitor after deployment**** — a sharp drop from validation to production is the
classic leakage tell.

## Why it’s dangerous[#](#why-it-s-dangerous "Link to this heading")

Leakage manufactures a ****false sense of performance****, masking ****overfitting**** and poor
generalisation, and in regulated domains like finance and healthcare it can turn into a
****compliance problem**** when the model fails on the data that matters.

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Cross-Validation (CV)](136-cross-validation-cv.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Temporal autocorrelation (Serial Correlation)](127-temporal-autocorrelation-serial-correlation.html) · [Data Drift](331-data-drift.html)

---

> **Hint**
> ****More in Validation & Cross-Validation****

[Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Data Leakage](https://insightful-data-lab.com/2025/08/24/data-leakage/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)