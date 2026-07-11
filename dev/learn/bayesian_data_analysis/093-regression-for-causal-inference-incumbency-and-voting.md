# Regression for causal inference: incumbency and voting[#](#regression-for-causal-inference-incumbency-and-voting "Link to this heading")

****Part 4 · Stage 11 · 📈 Regression Foundations**** · Lesson 093 of 144 · **advanced**

[◀ Previous · Bayesian analysis of classical regression](092-bayesian-analysis-of-classical-regression.html) · [Next · Goals of regression analysis ▶](094-goals-of-regression-analysis.html)

## Does holding office help you win?[#](#does-holding-office-help-you-win "Link to this heading")

The ****incumbency advantage**** is the extra vote share a candidate receives merely by being the sitting
representative. It cannot be randomised — nobody assigns incumbency by coin flip — so the question is
observational, and regression must carry the causal weight. Stage 7’s warnings apply in full.

## Why the naive measures fail[#](#why-the-naive-measures-fail "Link to this heading")

Two classical estimators look reasonable and are ****biased****. ****Sophomore surge**** compares a legislator’s
vote share in their second election (as incumbent) with their first (as challenger). ****Retirement
slump**** compares a party’s share before and after its incumbent retires. Each conflates the incumbency
effect with the fact that ****incumbents are not a random sample****: they are the candidates who won, in
districts that favoured them. Gelman and King showed the bias directly — and showed that the information
in these comparisons, placed in a ****regression framework****, yields an unbiased estimate.

## The model[#](#the-model "Link to this heading")

Model district \(i\)’s vote share \(v\_{it}\) in election year \(t\), controlling for the
district’s ****previous**** vote share (a proxy for partisan strength) and party, with an indicator
\(I\_{it}\) for whether an incumbent is running:

\[v\_{it} = \beta\_0 + \beta\_1 \, v\_{i,t-1} + \beta\_2 \, P\_{it} + \underbrace{\gamma}\_{\text{incumbency}} I\_{it}
+ \epsilon\_{it} .\]

The coefficient \(\gamma\) is the estimand. Conditioning on the lagged vote is what removes the
selection: districts where incumbents run are compared with ****similar**** districts holding open seats.

```
import pymc as pm
with pm.Model():
    b = pm.Normal("b", 0, 0.5, shape=3)
    gamma = pm.Normal("gamma", 0, 0.1)               # incumbency effect, on vote-share scale
    mu = b[0] + b[1] * v_lag + b[2] * party + gamma * incumbent
    pm.Normal("v", mu, pm.HalfNormal("sigma", 0.1), observed=v)
    idata = pm.sample()
# posterior for gamma, by decade, shows the advantage growing over the century

```

## What makes it causal, and what does not[#](#what-makes-it-causal-and-what-does-not "Link to this heading")

The regression ****is**** the causal claim only under the no-unmeasured-confounding assumption of Stage 7:
that, given the lagged vote and party, whether an incumbent runs is as good as random. That is an
assumption about ****why**** incumbents retire — health, scandal, redistricting, or anticipated defeat — and
the last of these breaks it. If incumbents strategically retire when they expect to lose, retirement is
informative about \(\epsilon\_{it}\), and \(\gamma\) is biased upward.

So the honest report has three parts: the estimate, the assumption it rests on, and a ****sensitivity
analysis**** for how strong a confounder would need to be to erase it. Regression supplies the arithmetic;
the design supplies the license.

> **See also**
> ****Related lessons:**** [Observational studies](055-observational-studies.html) · [Goals of regression analysis](094-goals-of-regression-analysis.html) · [Sensitivity and the role of randomization](054-sensitivity-and-the-role-of-randomization.html) · [Bayesian analysis of classical regression](092-bayesian-analysis-of-classical-regression.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/23/regression-for-causal-inference-incumbency-and-voting/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)