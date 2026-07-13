# Noninformative Prior Distributions[#](#noninformative-prior-distributions "Link to this heading")

****Part 1 · Stage 2 · 📍 Single-Parameter Models & Priors**** · Lesson 018 of 144 · **beginner**

[◀ Previous · Informative Prior Distribution for Cancer Rates](017-informative-prior-distribution-for-cancer-rates.html) · [Next · Weakly Informative Prior Distributions ▶](019-weakly-informative-prior-distributions.html) · [↑ Section](index.html)

## Letting the data speak[#](#letting-the-data-speak "Link to this heading")

Sometimes you want the prior to contribute as ****little**** as possible — to report what **these** data say,
with minimal external input. A ****noninformative**** (or **reference**, or **vague**) prior aims at that. The
ambition is honourable and the execution is subtler than it looks, because “knowing nothing” turns out
not to be a well-defined state.

## Flat is not neutral[#](#flat-is-not-neutral "Link to this heading")

The obvious candidate is a ****uniform**** prior, \(p(\theta) \propto 1\). But flatness is ****not
invariant**** under reparameterisation: if \(\theta\) is uniform, then \(\log \theta\) is not —
the Jacobian from the probability-theory lesson intervenes. A prior that claims ignorance about a rate
therefore asserts something quite specific about the ****log****-rate. “Noninformative” always means
noninformative **on some scale**, and that scale is a choice.

## Jeffreys’ prior[#](#jeffreys-prior "Link to this heading")

Harold ****Jeffreys**** solved the invariance problem by tying the prior to the model itself. The
****Jeffreys prior**** is proportional to the square root of the ****Fisher information****:

\[p\_J(\theta) \;\propto\; \sqrt{\det I(\theta)}, \qquad
I(\theta) = -\,\mathrm{E}\!\left[\frac{\partial^2}{\partial\theta^2} \log p(y \mid \theta)\right] .\]

Because the Fisher information transforms with exactly the Jacobian that densities need, this prior is
****invariant under smooth reparameterisation**** — the same beliefs, whatever coordinates you use. It
recovers the intuitive answers: ****flat**** \(p(\theta) \propto 1\) for a location parameter, and
\(p(\theta) \propto 1/\theta\) for a scale parameter. For the binomial it gives
\(\mathrm{Beta}(\tfrac12, \tfrac12)\).

## Improper priors[#](#improper-priors "Link to this heading")

Many noninformative priors are ****improper****: they do not integrate to a finite value (a flat prior on
the whole real line; \(1/\sigma\) on \((0, \infty)\)). This is tolerable ****only if the
resulting posterior is proper****, which must be checked, not assumed — for hierarchical variance
parameters especially, a natural-looking improper prior can yield a posterior that does not exist,
while the sampler reports numbers regardless.

```
from scipy import stats
y, n = 8, 10
flat     = stats.beta(1 + y, 1 + n - y)          # Beta(1,1): uniform
jeffreys = stats.beta(0.5 + y, 0.5 + n - y)      # Beta(1/2,1/2)
flat.mean(), jeffreys.mean()                     # 0.750, 0.773

```

Modern practice has largely moved on: rather than chase an unattainable neutrality, use a
****weakly informative**** prior that rules out the absurd while letting the data dominate.

> **Hint**
> ****Related lessons:**** [Weakly Informative Prior Distributions](019-weakly-informative-prior-distributions.html) · [Informative Prior Distributions](014-informative-prior-distributions.html) · [Some Useful Results from Probability Theory](008-some-useful-results-from-probability-theory.html) · [Normal Data with a Noninformative Prior Distribution](021-normal-data-with-a-noninformative-prior-distribution.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/noninformative-prior-distributions/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)