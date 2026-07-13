# Expectation propagation[#](#expectation-propagation "Link to this heading")

****Part 3 · Stage 10 · 🎛️ Modal & Variational Approximation**** · Lesson 088 of 144 · **intermediate**

[◀ Previous · Variational inference](087-variational-inference.html) · [Next · Other approximations ▶](089-other-approximations.html) · [↑ Section](index.html)

## Approximate one factor at a time[#](#approximate-one-factor-at-a-time "Link to this heading")

The posterior is a ****product**** of factors — a prior and one likelihood term per observation (or per
group):

\[p(\theta \mid y) \;\propto\; p(\theta) \prod\_{i=1}^{n} p(y\_i \mid \theta).\]

****Expectation propagation**** replaces each awkward factor \(p(y\_i \mid \theta)\) by a tractable
****site approximation**** \(\tilde{t}\_i(\theta)\) — typically an unnormalised Gaussian — so that the
product is Gaussian and every quantity is available in closed form.

## The iteration[#](#the-iteration "Link to this heading")

Sites are refined one at a time. To update site \(i\):

1. form the ****cavity**** distribution by removing that site from the current approximation,
   \(q\_{-i} \propto q / \tilde{t}\_i\);
2. form the ****tilted**** distribution \(q\_{-i}(\theta) \, p(y\_i \mid \theta)\) — the cavity times the
   **true** factor;
3. ****match moments****: choose a Gaussian with the same mean and variance as the tilted distribution;
4. divide the cavity back out to recover the new \(\tilde{t}\_i\).

Each moment-matching step is the local minimiser of \(\mathrm{KL}(p \| q)\) — the ****opposite****
direction from variational inference. That direction is ****mass-covering****: it penalises \(q\) for
missing regions where \(p\) has mass, so EP tends to produce approximations that are ****wider****, with
better-calibrated variances than mean-field VI.

```
# sketch: Gaussian sites, natural parameters, one sweep
for i in range(n):
    cav_prec = q_prec - site_prec[i]                    # 1. cavity
    cav_mean = (q_prec * q_mean - site_prec[i] * site_mean[i]) / cav_prec
    m, v = tilted_moments(cav_mean, cav_prec, y[i])     # 2-3. moment match
    new_prec = 1 / v - cav_prec                          # 4. new site
    site_prec[i], site_mean[i] = new_prec, (m / v - cav_mean * cav_prec) / new_prec
    q_prec, q_mean = 1 / v, m                            # refresh global approximation

```

## Strengths and cautions[#](#strengths-and-cautions "Link to this heading")

EP is often strikingly accurate for ****latent Gaussian**** models — Gaussian-process classification, probit
regression — and it is naturally parallel across sites. It also yields an estimate of the ****marginal
likelihood**** as a by-product, which VI’s ELBO only bounds.

But EP carries no guarantees. It ****need not converge**** — there is no objective function being decreased,
so cycles are possible and damping is often required. Cavity variances can go ****negative****, breaking the
Gaussian assumption. And, like all approximations in this stage, it is silent about its own quality. The
place of EP is alongside VI and Laplace: fast, sometimes excellent, always to be ****checked against a
sampler**** on a case you can afford to sample.

> **Hint**
> ****Related lessons:**** [Variational inference](087-variational-inference.html) · [Other approximations](089-other-approximations.html) · [Normal and related mixture approximations](083-normal-and-related-mixture-approximations.html) · [Gaussian process regression](129-gaussian-process-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/23/expectation-propagation/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)