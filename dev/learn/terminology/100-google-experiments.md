🧰  ****Google Experiments****

# Google Experiments[#](#google-experiments "Link to this heading")

**Google’s online experimentation / A-B testing tooling.**

## What it is[#](#what-it-is "Link to this heading")

“****Google Experiments****” is an umbrella for several Google A/B-testing and
experimentation products that have come and gone:

* ****Google Optimize**** — a free website-testing tool tied to Google Analytics (A/B,
  multivariate and split-URL tests), ****deprecated in 2023****.
* ****Google Ads Experiments**** — still active; lets advertisers split campaign traffic to
  test bids, keywords, creatives and audiences, comparing conversions, CPC and ROAS.
* ****GA4 + third-party platforms**** — Google now recommends pairing GA4 (event and
  conversion tracking) with external experimentation tools (Optimizely, VWO) that handle
  randomisation, stopping rules and statistics.
* ****Vertex AI “experiments”**** — a **different** meaning: tracking ML model versions,
  hyperparameters and metrics, not A/B testing.

## The statistics[#](#the-statistics "Link to this heading")

The reporting engine differed by product: ****Google Ads Experiments**** uses frequentist
methods with adjusted confidence intervals, while the legacy ****Optimize**** ran a
****Bayesian**** engine that reported a ****“probability to beat baseline”**** instead of
p-values — e.g. “variant B has a 95% probability of being better than A”, which
non-technical users found far easier to act on.

## Examples[#](#examples "Link to this heading")

An Ads experiment splitting traffic 50/50 to test a higher-bid strategy might show 12%
more conversions at significance after two weeks → adopt it. A legacy Optimize website
test of a red vs blue call-to-action might report “red has a 96% probability of beating
blue”.

## The takeaway[#](#the-takeaway "Link to this heading")

With Optimize retired, web and product experimentation on Google’s stack now means
****GA4 plus an external platform**** (Optimizely, VWO, LaunchDarkly or custom infra); Ads
Experiments remain the built-in option, but only for ad-campaign settings, not
full-site UX.

---

**Theme:** [ML Platforms & Tools](index.html#term-theme-platforms)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Optimizely](069-optimizely.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [A/B Testing](380-a-b-testing.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Bayesian Stopping Rules](068-bayesian-stopping-rules.html)

---

> **Hint**
> ****More in ML Platforms & Tools****

[AWS SageMaker](148-aws-sagemaker.html) · [Kaggle](273-kaggle.html) · [ONNX (Open Neural Network Exchange)](344-onnx-open-neural-network-exchange.html) · [OpenAI API (ML API)](150-openai-api-ml-api.html) · [TPU Clusters](347-tpu-clusters.html) · [Vertex AI](149-vertex-ai.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Google Experiments](https://insightful-data-lab.com/2025/08/25/google-experiments/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)