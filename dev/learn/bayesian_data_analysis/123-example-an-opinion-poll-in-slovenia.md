# Example: an opinion poll in Slovenia[#](#example-an-opinion-poll-in-slovenia "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 123 of 144 · **advanced**

[◀ Previous · Missing values with counted data](122-missing-values-with-counted-data.html) · [Next · Example: serial dilution assay ▶](124-example-serial-dilution-assay.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## A referendum with missing answers[#](#a-referendum-with-missing-answers "Link to this heading")

Before Slovenia’s 1990 independence plebiscite, a survey asked citizens how they intended to vote — and,
as always, many respondents gave ****no answer**** to one or more questions. The stakes made the missing data
consequential: the result hinged on how “don’t know” and non-response were treated, and the analysis is a
clean demonstration of ignorability and imputation deciding a real number.

## The problem[#](#the-problem "Link to this heading")

Respondents answered (or did not) several related items — intention to vote, intended choice, attitude
toward independence. Simply ****dropping**** non-responders assumes their views match responders’, which is
precisely the MCAR assumption that is rarely safe: people who decline to answer a charged political
question are plausibly different from those who answer. The question is whether the missingness is
****ignorable**** given what **was** observed.

## The model-based analysis[#](#the-model-based-analysis "Link to this heading")

Treat the non-responses as ****missing data under MAR**** — missingness depending on observed covariates and
other answered items, not on the hidden intention itself — and build a joint model over the survey items.
Missing responses become parameters, imputed from their posterior predictive distribution given each
respondent’s observed answers:

\[\Pr(\text{vote} = k \mid \text{observed items}) \; \text{modelled jointly, then}\;
\theta = \sum\_{\text{cells}} N\_c \, \hat{p}\_c \Big/ \sum\_{\text{cells}} N\_c ,\]

so each respondent’s likely position is inferred from the pattern of their **other** answers, and the
overall estimate integrates over what they did not say.

```
import numpy as np, pymc as pm
items = np.ma.masked_invalid(survey_items)               # non-responses flagged
with pm.Model():
    # joint model over correlated categorical items; missing entries imputed
    ...                                                   # observed answers inform the gaps
    idata = pm.sample()
# estimate turnout/support by integrating over imputed non-responses, with honest intervals

```

## The lessons[#](#the-lessons "Link to this heading")

Three, and they close the stage. ****The missingness assumption changes the answer**** — treating
non-responders as a random subsample (MCAR) versus modelling them from their observed answers (MAR) gives
materially different estimates, so the assumption must be stated, not buried in a default. ****Ignorability
lets the observed answers speak for the missing ones****: a respondent’s other items carry information
about the answer they withheld, and a joint model extracts it. And where MAR itself is in doubt — perhaps
non-response **is** informative about the vote — the honest response is a ****sensitivity analysis**** across
plausible mechanisms, reporting how much the conclusion moves. Real surveys are never complete; this is
what taking their gaps seriously looks like.

> **Hint**
> ****Related lessons:**** [Multiple imputation](119-multiple-imputation.html) · [Notation](118-notation.html) · [Missing values with counted data](122-missing-values-with-counted-data.html) · [Sample surveys](052-sample-surveys.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/example-an-opinion-poll-in-slovenia/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)