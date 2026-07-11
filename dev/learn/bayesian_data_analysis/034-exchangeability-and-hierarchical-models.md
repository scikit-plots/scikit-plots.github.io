# Exchangeability and hierarchical models[#](#exchangeability-and-hierarchical-models "Link to this heading")

****Part 1 · Stage 5 · 🏛️ Hierarchical Models**** · Lesson 034 of 144 · **beginner**

[◀ Previous · Constructing a Parameterized Prior Distribution](033-constructing-a-parameterized-prior-distribution.html) · [Next · Bayesian analysis of conjugate hierarchical models ▶](035-bayesian-analysis-of-conjugate-hierarchical-models.html)

## The licence to pool[#](#the-licence-to-pool "Link to this heading")

Hierarchical models let groups ****borrow strength**** from one another. What entitles them to? The answer
is ****exchangeability****: the assumption that the group parameters are, before seeing the data,
****interchangeable**** — that nothing in the labelling distinguishes them.

## The definition[#](#the-definition "Link to this heading")

Parameters \(\theta\_1, \dots, \theta\_J\) are exchangeable if their joint distribution is invariant
under any permutation \(\pi\) of the indices:

\[p(\theta\_1, \dots, \theta\_J) = p(\theta\_{\pi(1)}, \dots, \theta\_{\pi(J)}) .\]

It is a statement of ****ignorance, not of equality****. The schools may differ enormously; you simply have
no prior reason, before the data, to expect school 3 to differ from school 7 in any particular
direction. Independent and identically distributed is a special case; exchangeability is weaker and
more useful.

## De Finetti’s bridge[#](#de-finetti-s-bridge "Link to this heading")

De Finetti’s theorem makes the connection precise: an exchangeable sequence can (in the infinite case)
be represented as ****iid draws given some parameter****, mixed over a distribution for that parameter,

\[p(\theta\_1, \dots, \theta\_J)
= \int \left[ \prod\_{j=1}^{J} p(\theta\_j \mid \phi) \right] p(\phi) \; d\phi .\]

Read the right-hand side: that ****is**** the hierarchical model of the last lesson. Exchangeability does
not merely permit hierarchy — it ****implies**** it. The population distribution \(p(\theta \mid \phi)\)
is not an extra assumption bolted on; it is what exchangeability means.

## Three pooling regimes[#](#three-pooling-regimes "Link to this heading")

The hyperparameter governing spread (call it \(\tau\)) interpolates between two extremes, and the
data choose where to sit:

* \(\tau \to 0\) — ****complete pooling****: all \(\theta\_j\) collapse to a common value; group
  identity is ignored.
* \(\tau \to \infty\) — ****no pooling****: each group is estimated alone, noisily.
* \(0 < \tau < \infty\) — ****partial pooling****: each estimate is shrunk toward the population mean
  by an amount reflecting its own precision and the between-group spread.

## When exchangeability fails[#](#when-exchangeability-fails "Link to this heading")

If you ****do**** know something distinguishing — schools differ by funding, counties by population — then
the parameters are not exchangeable as they stand. The repair is not to abandon the hierarchy but to
make the known structure explicit: model \(\theta\_j\) as depending on covariates \(x\_j\), and
assume exchangeability of the ****residuals****. This is ****conditional exchangeability****, and it is the
road from hierarchical models to hierarchical **regression** in Part IV.

> **See also**
> ****Related lessons:**** [Constructing a Parameterized Prior Distribution](033-constructing-a-parameterized-prior-distribution.html) · [General Notation for Statistical Inference](002-general-notation-for-statistical-inference.html) · [Normal model with exchangeable parameters](036-normal-model-with-exchangeable-parameters.html) · [Regression coeﬃcients exchangeable in batches](099-regression-coefficients-exchangeable-in-batches.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/09/exchangeability-and-hierarchical-models/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)