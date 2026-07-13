# Model comparison based on predictive performance[#](#model-comparison-based-on-predictive-performance "Link to this heading")

****Part 2 · Stage 6 · 🔍 Model Checking & Comparison**** · Lesson 046 of 144 · **intermediate**

[◀ Previous · Measures of predictive accuracy](045-measures-of-predictive-accuracy.html) · [Next · Model comparison using Bayes factors ▶](047-model-comparison-using-bayes-factors.html) · [↑ Section](index.html)

## Cross-validation, done cheaply[#](#cross-validation-done-cheaply "Link to this heading")

WAIC corrects the optimism of in-sample scoring with an analytic penalty. ****Leave-one-out
cross-validation**** estimates the same elpd more directly: predict each observation from a posterior
fitted without it,

\[\mathrm{elpd}\_{\text{loo}} = \sum\_{i=1}^{n} \log p(y\_i \mid y\_{-i}) .\]

Done literally this means refitting \(n\) times. The practical alternative reuses the ****single****
posterior you already have, reweighting its draws by \(1/p(y\_i \mid \theta^{(s)})\) — importance
sampling — to approximate the leave-one-out posterior.

## Pareto-smoothed importance sampling[#](#pareto-smoothed-importance-sampling "Link to this heading")

Raw importance weights are unstable: a single influential observation gives one draw enormous weight.
****PSIS-LOO**** (Vehtari, Gelman and Gabry) stabilises them by fitting a generalised Pareto distribution to
the largest weights and replacing them with smoothed order statistics. The fitted ****shape parameter****
\(\hat{k}\) is a free diagnostic, per observation:

* \(\hat{k} < 0.5\) — the estimate is reliable;
* \(0.5 \le \hat{k} < 0.7\) — acceptable, but the observation is influential;
* \(\hat{k} \ge 0.7\) — the approximation may be ****unreliable****; refit exactly for those points, or
  use \(k\)-fold.

A high \(\hat{k}\) is itself informative: it names an observation the model finds surprising.

```
import arviz as az
loo_a, loo_b = az.loo(idata_a, pointwise=True), az.loo(idata_b, pointwise=True)
az.compare({"simple": idata_a, "hierarchical": idata_b})   # elpd_diff, se_diff, weights
(loo_a.pareto_k > 0.7).sum()                               # observations to worry about

```

## Comparing honestly[#](#comparing-honestly "Link to this heading")

Report the ****difference**** in elpd together with the standard error of that difference — computed from
the pointwise components, which is far more precise than differencing two noisy totals. A rough rule:
if `elpd_diff` is not several times `se_diff`, the data do not distinguish the models. And the
comparison is ****relative****: LOO ranks the candidates you supply and says nothing about whether the best
of them is any good. That question belongs to posterior predictive checking.

Two limits worth naming. LOO presupposes that predicting a ****new observation**** is the relevant task; for
time series or grouped data, leave-****future****-out or leave-one-****group****-out is the honest analogue. And
selecting a model by LOO from a large set reintroduces overfitting — to the selection criterion itself.
Where models are many and similar, ****averaging**** them (stacking) usually beats picking one.

> **Hint**
> ****Related lessons:**** [Measures of predictive accuracy](045-measures-of-predictive-accuracy.html) · [Model comparison using Bayes factors](047-model-comparison-using-bayes-factors.html) · [Continuous model expansion](048-continuous-model-expansion.html) · [Graphical posterior predictive checks](043-graphical-posterior-predictive-checks.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/10/model-comparison-based-on-predictive-performance/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)