# How Data Is Generated and Collected[#](#how-data-is-generated-and-collected "Link to this heading")

📦 Data Preparation 🧬 Data Types & Structure Lesson 001

[Next](002-choosing-the-right-data-to-collect.html) ▶ · [↑ Section](index.html) · [↑ Hub](../index.html)

## Where data comes from[#](#where-data-comes-from "Link to this heading")

Section 2 treated data as something you **have**; this section starts one step
earlier, with where it **comes from**. Understanding how data is generated and
collected is the foundation of the Prepare phase, because the origin of a
dataset determines what it can honestly be used for — a point the context and
bias lessons already foreshadowed.

## How data is generated[#](#how-data-is-generated "Link to this heading")

Data comes into existence in a few characteristic ways:

* ****Observational**** — recording what happens without intervening: transactions
  as they occur, clicks as users browse, sensor readings over time. Most
  business data is observational, and it shows what **did** happen, not
  necessarily what **causes** what.
* ****Experimental**** — deliberately varying something and measuring the result:
  the A/B test that shows two homepage designs to comparable groups.
  Experiments are what let analysis speak about **causes** rather than only
  associations.
* ****Self-reported**** — people telling you directly: surveys, forms,
  registrations. Rich and often the only route to **why**, but filtered through
  memory, honesty, and who chose to respond.
* ****Derived**** — computed from other data: a “customer lifetime value” field
  built from transaction history. Convenient, but only as sound as its inputs
  and its formula.

## Sources: first-, second-, and third-party[#](#sources-first-second-and-third-party "Link to this heading")

Independently of **how** it is generated, data is classified by **whose** it is:

* ****First-party**** — collected by your own organisation directly from its own
  activity and customers. Usually the most trustworthy and relevant, because
  you control and understand its collection.
* ****Second-party**** — another organisation’s first-party data, obtained
  directly from them through a partnership. Its quality depends on their
  collection practices, which you must ask about.
* ****Third-party**** — aggregated and sold by an entity that did not collect it
  from the original source. Broad and convenient, but its provenance and
  quality are the hardest to verify — treat with corresponding caution.

The reliability gradient generally runs first → second → third-party, and it
maps directly onto how much you can know about the collection context.

## Why origin governs use[#](#why-origin-governs-use "Link to this heading")

Every downstream question about a dataset traces to its origin. **Can this show
causation?** — only if it was experimental. **Does it represent all customers?** —
only if collection reached them all. **Can I trust the definitions?** — most where
you controlled collection, least where a third party did. Knowing generation
and source is how you answer these before, not after, building an analysis on
the data.

## The caveat[#](#the-caveat "Link to this heading")

Origin is often **undocumented** — data arrives without a clear record of how or
by whom it was collected, and reconstructing that is real detective work. When
origin cannot be established, that uncertainty is itself a finding to state, not
a detail to gloss: an analysis built on data of unknown provenance inherits
unknown risk. The next lesson turns from where data comes from to **which** data
a question actually needs.

> **Hint**
> * [Understanding the Data Ecosystem](../1_foundations/007-understanding-the-data-ecosystem.html)
* [Choosing the Right Data to Collect](002-choosing-the-right-data-to-collect.html)
* [Accessing Data: Internal and External Sources](019-accessing-data-internal-and-external-sources.html)
* [Quantitative and Qualitative Data in Decision-Making](../2_data_driven_decisions/006-quantitative-and-qualitative-data-in-decision-making.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2023/09/04/how-data-is-generated-and-collected/> (insightful-data-lab.com).

Tags: [purpose: reference](../../../_tags/purpose-reference.html) [topic: data analytics](../../../_tags/topic-data-analytics.html) [topic: prep](../../../_tags/topic-prep.html) [topic: types](../../../_tags/topic-types.html)