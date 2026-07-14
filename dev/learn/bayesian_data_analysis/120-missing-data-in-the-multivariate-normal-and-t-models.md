# Missing data in the multivariate normal and t models[#](#missing-data-in-the-multivariate-normal-and-t-models "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 120 of 144 · **advanced**

[◀ Previous · Multiple imputation](119-multiple-imputation.html) · [Next · Example: multiple imputation for a series of polls ▶](121-example-multiple-imputation-for-a-series-of-polls.html) · [↑ Section](index.html)

## Imputation from a joint model[#](#imputation-from-a-joint-model "Link to this heading")

The cleanest setting for missing-data methods is a set of continuous variables modelled ****jointly**** as
multivariate normal. There the imputation is not a heuristic but a ****direct consequence**** of the model:
the conditional distribution of the missing entries given the observed ones is available in closed form,
so imputing is exact.

## The multivariate normal case[#](#the-multivariate-normal-case "Link to this heading")

Model the complete rows as \(y\_i \sim \mathrm{N}(\mu, \Sigma)\). For a row with some entries missing,
partition into observed and missing parts; the conditional of the missing given the observed is again
normal, with the familiar regression form:

\[y\_{\text{mis}} \mid y\_{\text{obs}} \sim \mathrm{N}\bigl(
\mu\_m + \Sigma\_{mo}\Sigma\_{oo}^{-1}(y\_{\text{obs}} - \mu\_o), \;
\Sigma\_{mm} - \Sigma\_{mo}\Sigma\_{oo}^{-1}\Sigma\_{om}\bigr).\]

The conditional mean ****regresses**** the missing entries on the observed ones through the covariance, and
the conditional variance is what a proper imputation must sample from — plugging in only the mean would
be single imputation, discarding exactly the spread this formula provides.

## Computation by data augmentation[#](#computation-by-data-augmentation "Link to this heading")

Since \(\mu\) and \(\Sigma\) are themselves unknown, alternate — the Gibbs pattern of Stage 9,
here with missingness as the latent layer:

\[\text{(I-step) } y\_{\text{mis}} \sim p(y\_{\text{mis}} \mid y\_{\text{obs}}, \mu, \Sigma), \qquad
\text{(P-step) } \mu, \Sigma \sim p(\mu, \Sigma \mid y\_{\text{obs}}, y\_{\text{mis}}).\]

Impute the missing values given current parameters; update the parameters given the completed data;
repeat. Each cycle produces both a posterior draw of the parameters and a ****set of imputations**** —
multiple imputation and parameter estimation from one algorithm.

```
import pymc as pm
import numpy as np
# PyMC imputes automatically when observed data are a masked array
y_masked = np.ma.masked_invalid(Y)                       # NaNs flagged as missing
with pm.Model():
    mu = pm.Normal("mu", 0, 5, shape=Y.shape[1])
    chol, _, _ = pm.LKJCholeskyCov("chol", n=Y.shape[1], eta=2,
                                   sd_dist=pm.HalfNormal.dist(1.0), compute_corr=True)
    pm.MvNormal("y", mu=mu, chol=chol, observed=y_masked)   # missing entries become parameters
    idata = pm.sample()                                     # posterior includes the imputations

```

## The t extension, and the limits[#](#the-t-extension-and-the-limits "Link to this heading")

Swap the multivariate normal for a ****multivariate**** \(t\) and the imputation becomes ****robust****: the
model resists letting an outlier in the observed part of a row distort the imputed values in the rest —
the heavy-tailed lesson applied to filling gaps. Two limits remain. Everything here assumes ****MAR****; the
joint model integrates over missing values correctly only when the mechanism is ignorable. And the
approach wants roughly ****continuous, jointly-modellable**** variables — genuinely mixed data (categorical
with continuous) are handled by chained-equations imputation or by more elaborate joint models, but the
principle is unchanged: ****model the variables together, and the conditional distribution of the missing
given the observed is the imputation.****

> **Hint**
> ****Related lessons:**** [Multiple imputation](119-multiple-imputation.html) · [Notation](118-notation.html) · [Multivariate Normal with Unknown Mean and Variance](025-multivariate-normal-with-unknown-mean-and-variance.html) · [Robust regression using t-distributed errors](117-robust-regression-using-t-distributed-errors.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/07/missing-data-in-the-multivariate-normal-and-t-models/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)