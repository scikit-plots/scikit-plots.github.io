🎲  ****Regression Coefficient****

# Regression Coefficient[#](#regression-coefficient "Link to this heading")

**The estimated effect of a predictor on the response in a regression model.**

## What it is[#](#what-it-is "Link to this heading")

A ****regression coefficient**** \(\beta\) quantifies the ****relationship between a
predictor**** \(X\) ****and the outcome**** \(Y\) in a regression model: how much
\(Y\) changes when \(X\) rises by ****one unit****, holding all other predictors
fixed.

## Simple and multiple regression[#](#simple-and-multiple-regression "Link to this heading")

In ****simple**** linear regression, \(Y = \beta\_0 + \beta\_1 X + \varepsilon\), where
\(\beta\_0\) is the ****intercept**** (the value of \(Y\) at \(X = 0\)) and
\(\beta\_1\) the ****slope****. In ****multiple**** regression,
\(Y = \beta\_0 + \beta\_1 X\_1 + \dots + \beta\_k X\_k + \varepsilon\), each
\(\beta\_i\) is a ****partial**** coefficient — the effect of \(X\_i\) **controlling for**
the other predictors.

## Reading a coefficient[#](#reading-a-coefficient "Link to this heading")

Its ****sign**** gives direction (positive: \(Y\) rises with \(X\); negative: it
falls), its ****magnitude**** the strength of the effect, and its ****p-value**** whether it
differs significantly from 0 (a non-significant coefficient may not contribute). For
example, `Salary = 30000 + 2000 × years` says each extra year adds about 2,000 in
salary; `Price = 50000 + 100 × sqft + 20000 × garage` says each square foot adds 100
**holding garage fixed**, and a garage adds 20,000 **holding size fixed**.

## Standardised and logistic[#](#standardised-and-logistic "Link to this heading")

****Unstandardised**** coefficients are in original units (dollars, cm); ****standardised**** ones
(\(\beta^\*\)) are in standard-deviation units, so effects on different scales can be
compared. In ****logistic**** regression the coefficients are in ****log-odds****; exponentiating
gives an ****odds ratio**** — e.g. \(\beta = 0.7\) gives \(e^{0.7} \approx 2.0\), so a
one-unit increase roughly ****doubles the odds**** of the event.

## Why it matters[#](#why-it-matters "Link to this heading")

Regression coefficients are the ****parameters of interest**** in regression — read in
context, alongside p-values, confidence intervals and effect sizes, and (in multiple
models) always as **partial** effects.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Parameter(s) of Interest](065-parameter-s-of-interest.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Logistic Regression](292-logistic-regression.html) · [Sample Mean](089-sample-mean.html) · [Frequentist](059-frequentist.html) · [Standard Error (SE)](084-standard-error-se.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Regression Coefficient](https://insightful-data-lab.com/2025/08/25/regression-coefficient/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)