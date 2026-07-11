# Stratified Random Sampling[#](#stratified-random-sampling "Link to this heading")

****Stage 4 · 🧩 Sampling, Partitioning & Segmentation**** · Lesson 23 of 56 · **intermediate**

[◀ Previous · Cross-Selling](22-cross-selling.html) · [Next · Linear Congruential Random Number Generator (LCG) ▶](24-linear-congruential-random-number-generator-lcg.html)

## Representative by design[#](#representative-by-design "Link to this heading")

A sample is only useful if it ****resembles**** the population it is drawn from. ****Stratified random
sampling**** guarantees that resemblance for the characteristics you care about, by sampling ****within****
subgroups rather than trusting chance to balance them. It is a workhorse of survey design and, in this
course, of splitting data for modelling.

## Strata[#](#strata "Link to this heading")

The method starts by dividing the population into ****strata**** — mutually exclusive, exhaustive
subgroups that share a characteristic (gender, region, customer type). Strata are chosen to be
****internally homogeneous****: alike within, different between. A ****simple random sample**** is then drawn
independently from ****each**** stratum, and the pieces combined. Under ****proportional allocation****, each
stratum contributes in proportion to its share of the population, so the sample mirrors the whole.

## Why not simple random?[#](#why-not-simple-random "Link to this heading")

Plain random sampling can, by luck, ****under-represent**** a small but important group — draw 100
customers at random and a rare segment might barely appear. Stratifying ****removes**** that luck: every
subgroup is present by construction, in the right proportion. The result is ****greater precision****
(lower sampling variability) than a simple random sample of the same size, especially when the strata
differ from one another.

## In machine learning[#](#in-machine-learning "Link to this heading")

The same idea is essential when splitting data. A ****stratified**** train/test split keeps the ****class
proportions**** identical in both parts — vital for ****imbalanced**** problems, where a naive split might
leave too few positive cases in the test set. In scikit-learn it is one argument:
`train_test_split(..., stratify=y)`, or `StratifiedKFold` for cross-validation. The next lessons
need this discipline, because honest model evaluation depends on representative partitions.

> **See also**
> ****Related lessons:**** [Partitioning Observations to Train Objective Models](25-partitioning-observations-to-train-objective-models.html) · [Linear Congruential Random Number Generator (LCG)](24-linear-congruential-random-number-generator-lcg.html) · [Creating Segments of Observations for Business Reasons (RFM)](30-creating-segments-of-observations-for-business-reasons-rfm.html) · [Assessing the Quality of Prediction Models](50-assessing-the-quality-of-prediction-models.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/14/stratified-random-sampling/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data preparation](../../_tags/topic-data-preparation.html) [level: intermediate](../../_tags/level-intermediate.html)