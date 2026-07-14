# Hierarchical dependence[#](#hierarchical-dependence "Link to this heading")

****Part 5 · Stage 16 · ♾️ Mixtures & Nonparametric Bayes**** · Lesson 143 of 144 · **advanced**

[◀ Previous · Beyond density estimation](142-beyond-density-estimation.html) · [Next · Density regression ▶](144-density-regression.html) · [↑ Section](index.html)

## Sharing nonparametric structure across groups[#](#sharing-nonparametric-structure-across-groups "Link to this heading")

Data often arrive in ****groups**** — documents in a corpus, patients across hospitals, measurements per
site — and each group may need its own flexible distribution. Fitting a ****separate**** DP per group shares
nothing; fitting ****one**** DP to the pooled data ignores group identity. The ****hierarchical Dirichlet
process**** (Teh, Jordan, Beal and Blei) resolves the tension, letting groups have distinct distributions
that ****share components****.

## The construction[#](#the-construction "Link to this heading")

Make the DPs themselves draws from a ****higher-level**** DP. A global \(G\_0\) is drawn from a top DP;
each group’s \(G\_j\) is then drawn from a DP with \(G\_0\) as its base distribution:

\[G\_0 \sim \mathrm{DP}(\gamma, H), \qquad
G\_j \mid G\_0 \sim \mathrm{DP}(\alpha, G\_0) \;\; \text{for each group } j .\]

Because \(G\_0\) is itself discrete, every group-level \(G\_j\) draws its atoms ****from the same
shared set**** — so a cluster discovered in one group is **available** to all, while each group has its own
weights over that common inventory. Groups differ in ****how much**** they use each component, not in the
components available.

```
# Chinese restaurant franchise: the HDP's metaphor
#   each group is a restaurant; tables within a restaurant share DISHES from a global menu
#   a popular dish (component) recurs across restaurants -> shared clusters
#   new dish chosen w.p. ~ gamma (global);  new table w.p. ~ alpha (local)
# collapsed Gibbs (Teh et al. 2006) reseats customers and re-serves dishes

```

## Why sharing matters[#](#why-sharing-matters "Link to this heading")

The HDP is the nonparametric version of the ****partial pooling**** that runs through this entire book —
groups borrow strength by sharing a common set of components, and the number of shared components is
****learned****, not fixed. Its most famous use is ****topic modelling****: documents are groups, words are
observations, and the shared components are ****topics**** discovered across the corpus, with the number of
topics inferred rather than set. The same structure serves grouped density estimation, multi-population
clustering, and infinite hidden Markov models — anywhere related groups each need a flexible distribution
but ought to share what they have in common.

> **Hint**
> ****Related lessons:**** [Dirichlet process mixtures](141-dirichlet-process-mixtures.html) · [Exchangeability and hierarchical models](034-exchangeability-and-hierarchical-models.html) · [Beyond density estimation](142-beyond-density-estimation.html) · [State-level opinons from national polls](110-state-level-opinons-from-national-polls.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/13/hierarchical-dependence/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)