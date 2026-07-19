# State-level opinons from national polls[#](#state-level-opinons-from-national-polls "Link to this heading")

****Part 4 · Stage 13 · 🔗 Generalized Linear Models**** · Lesson 110 of 144 · **advanced**

[◀ Previous · Overdispersed Poisson regression for police stops](109-overdispersed-poisson-regression-for-police-stops.html) · [Next · Models for multivariate and multinomial responses ▶](111-models-for-multivariate-and-multinomial-responses.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Small areas from big surveys[#](#small-areas-from-big-surveys "Link to this heading")

A national poll of a couple of thousand respondents estimates **national** opinion well but says little
about any single ****state**** — some states contain a handful of respondents. Yet state-level opinion is
exactly what redistricting, forecasting and representation require. ****Multilevel regression and
poststratification**** (MRP) extracts reliable small-area estimates from national data, and it is one of
the most consequential applications of the hierarchical models built in this part.

## The two steps[#](#the-two-steps "Link to this heading")

MRP is a ****model**** followed by a ****weighting****.

****Regression.**** Fit a multilevel logistic model for the individual response, with demographic predictors
(age, race, sex, education) as varying effects and a ****state effect**** that is partially pooled — often
with a state-level predictor such as past vote:

\[\Pr(y\_i = 1) = \mathrm{logit}^{-1}\!\bigl(\alpha\_{\text{state}[i]}
+ \beta\_{\text{age}[i]} + \beta\_{\text{race}[i]} + \cdots\bigr),
\qquad \alpha\_s \sim \mathrm{N}(\gamma\_0 + \gamma\_1 v\_s, \sigma^2).\]

Partial pooling stabilises the estimate for every demographic-by-state cell, even cells with almost no
respondents — the shrinkage of this entire part, doing the heavy lifting.

****Poststratification.**** Reweight the model’s cell predictions by the ****known population frequency**** of
each cell from the census, so the state estimate reflects that state’s actual demographic composition:

\[\theta\_s = \frac{\sum\_{c \in s} N\_c \, \hat{p}\_c}{\sum\_{c \in s} N\_c} .\]
```
import numpy as np
# 1. multilevel model gives p_hat for every (demographic x state) cell
p_cell = posterior_cell_predictions(idata)              # shape: (draws, n_cells)
# 2. reweight by census population counts N_cell within each state
theta_state = (N_cell * p_cell).sum(axis=1) / N_cell.sum()   # per state, with uncertainty

```

## Why it works[#](#why-it-works "Link to this heading")

The pieces cover each other’s weaknesses. The ****model**** borrows strength across states so that sparse
cells get sensible estimates instead of noise; ****poststratification**** corrects the sample’s demographic
imbalances against known population totals, removing the bias that makes raw subgroup means unreliable.
Together they turn a survey never designed for state estimates into a state-level instrument — and the
same machinery ****adjusts for non-representative samples**** generally, which is why MRP has become central
to modern survey inference and to forecasting from imperfect polls. It is the hierarchical logistic model
of this stage, put to work on the small-area problem.

> **Hint**
> ****Related lessons:**** [Working with generalized linear models](107-working-with-generalized-linear-models.html) · [Weakly informative priors for logistic regression](108-weakly-informative-priors-for-logistic-regression.html) · [Varying intercepts and slopes](102-varying-intercepts-and-slopes.html) · [Sample surveys](052-sample-surveys.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/06/state-level-opinons-from-national-polls/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)