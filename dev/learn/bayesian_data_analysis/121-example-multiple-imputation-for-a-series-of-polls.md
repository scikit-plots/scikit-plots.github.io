# Example: multiple imputation for a series of polls[#](#example-multiple-imputation-for-a-series-of-polls "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 121 of 144 · **advanced**

[◀ Previous · Missing data in the multivariate normal and t models](120-missing-data-in-the-multivariate-normal-and-t-models.html) · [Next · Missing values with counted data ▶](122-missing-values-with-counted-data.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Missingness across many surveys[#](#missingness-across-many-surveys "Link to this heading")

Pre-election polling assembles many surveys, and no two ask exactly the same questions of exactly the
same people. Some respondents skip items; some questions appear in only a subset of polls; demographic
variables are recorded unevenly. Analysing the pooled series requires ****filling these gaps coherently****,
and it is a natural showcase for multiple imputation at scale.

## The structure[#](#the-structure "Link to this heading")

The data form a large, ragged table: respondents in rows, survey items in columns, with a scattered
pattern of missingness. Crucially the gaps are plausibly ****MAR**** — whether an item is missing depends on
**which survey** a respondent was in and on their recorded demographics, not on the hidden answer itself.
That is exactly the condition under which imputation is valid, and it holds here by design: the
missingness is a feature of survey construction, observed in the data.

## The imputation model[#](#the-imputation-model "Link to this heading")

Fit a joint model rich enough to capture the relationships the analysis will use — demographic
predictors, survey indicators, and the correlations among responses — then draw completed datasets from
its posterior predictive distribution.

```
import numpy as np, pymc as pm
Y = np.ma.masked_invalid(responses)                      # ragged missingness flagged
with pm.Model():
    mu = pm.Normal("mu", 0, 5, shape=Y.shape[1])
    chol, _, _ = pm.LKJCholeskyCov("chol", n=Y.shape[1], eta=2,
                                   sd_dist=pm.HalfNormal.dist(1.0), compute_corr=True)
    pm.MvNormal("y", mu=mu, chol=chol, observed=Y)       # missing entries imputed
    idata = pm.sample()
# each posterior draw carries a completed dataset; analyse across draws, not one

```

## Why it matters here[#](#why-it-matters-here "Link to this heading")

Three lessons the polling context makes vivid. ****Completing the data unlocks the pooled analysis**** — with
gaps filled coherently, every survey contributes to every question, rather than fragmenting into
question-by-question subsamples. The imputation ****propagates uncertainty****: where a respondent’s answer
was never observed, the spread across imputations widens the final interval honestly, so the pooled
estimate is not falsely precise. And it ****respects survey structure**** — conditioning on the survey
indicator means a poll that asked a question informs imputations for polls that did not, without
pretending they are identical. The same machinery underlies modern poll aggregation: incomplete,
heterogeneous surveys combined into one coherent picture, with missingness modelled rather than deleted.

> **Hint**
> ****Related lessons:**** [Multiple imputation](119-multiple-imputation.html) · [Missing data in the multivariate normal and t models](120-missing-data-in-the-multivariate-normal-and-t-models.html) · [Missing values with counted data](122-missing-values-with-counted-data.html) · [State-level opinons from national polls](110-state-level-opinons-from-national-polls.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/07/example-multiple-imputation-for-a-series-of-polls/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)