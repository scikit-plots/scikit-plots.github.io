🧷  ****Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)****

# Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)[#](#time-based-splits-a-k-a-temporal-cross-validation-rolling-window-validation "Link to this heading")

**Validation that respects time order to avoid using the future to predict the past.**

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

A ****time-based split**** orders data by ****time**** and trains on the ****past**** while validating and testing on the
****future**** — the earliest records for training, the most recent held out. It reproduces the reality of
deployment, where ****future data doesn’t exist**** at training time.

## Why it’s needed[#](#why-it-s-needed "Link to this heading")

****Time-series**** data violates the ****i.i.d.**** assumption behind ordinary splitting — observations depend on
****prior**** ones. Shuffling or random k-fold would let the model ****train on the future**** to predict the past, a
****temporal leakage**** that badly ****overstates**** accuracy.

## How it’s done[#](#how-it-s-done "Link to this heading")

Schemes like a ****rolling forecasting origin**** (walk-forward) or an ****expanding / sliding window**** repeatedly
move the training window forward in time, so every evaluation always predicts ****later**** data than it trained
on. Look-ahead ****features**** must be avoided too.

---

**Theme:** [Validation & Cross-Validation](index.html#term-theme-validation)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [Time Series Forecasting](256-time-series-forecasting.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Evaluation Set](355-evaluation-set.html) · [Cross-Validation (CV)](136-cross-validation-cv.html)

---

> **Hint**
> ****More in Validation & Cross-Validation****

[Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Data Leakage](131-data-leakage.html) · [Evaluation Set](355-evaluation-set.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [k-fold cross-validation](135-k-fold-cross-validation.html) · [k-fold Stratified Cross-Validation (Stratified CV)](382-k-fold-stratified-cross-validation-stratified-cv.html) · [Multiclass stratified CV](134-multiclass-stratified-cv.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Stratified Group K-Fold](132-stratified-group-k-fold.html) · [Stratified Shuffle Split](133-stratified-shuffle-split.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](https://insightful-data-lab.com/2025/08/19/time-based-splits-a-k-a-temporal-cross-validation-rolling-window-validation/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)