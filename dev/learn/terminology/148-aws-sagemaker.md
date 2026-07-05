🧰  ****AWS SageMaker****

# AWS SageMaker[#](#aws-sagemaker "Link to this heading")

**Amazon’s managed platform for building, training and deploying ML models.**

## What it is[#](#what-it-is "Link to this heading")

****Amazon SageMaker**** is AWS’s ****end-to-end, fully managed ML platform**** for ****building,
training, deploying and monitoring**** models at scale. It is the AWS answer to Google’s Vertex
AI and Microsoft’s Azure ML.

## The pipeline it covers[#](#the-pipeline-it-covers "Link to this heading")

SageMaker spans the whole lifecycle. ****Data prep**** with Data Wrangler and a Feature Store
(over S3, Redshift, Athena). ****Training**** for any major framework (TensorFlow, PyTorch,
scikit-learn, XGBoost) on managed CPU/GPU instances, with distributed training and ****automatic
hyperparameter tuning****. ****Deployment**** as real-time, asynchronous or batch endpoints, with
autoscaling. ****MLOps**** via Pipelines (CI/CD), Model Monitor (drift, bias, quality), Clarify
(bias and explainability) and Debugger. And ****generative AI**** through JumpStart’s pre-trained
models.

## Workflow, benefits, costs[#](#workflow-benefits-costs "Link to this heading")

The flow is: prepare data in S3 → train on managed infrastructure → auto-tune → deploy to an
endpoint → monitor and retrain. The upside is ****scale, framework flexibility**** (any Docker
container), deep ****AWS integration**** and a full ****MLOps**** toolkit. The downside is
****complexity**** — many services and a steep curve — and ****cost**** that climbs fast if endpoints
run 24/7.

## Versus the alternatives[#](#versus-the-alternatives "Link to this heading")

Against ****Vertex AI****, the two are close peers — both full end-to-end platforms, differing
mainly by cloud ecosystem (AWS vs GCP). Against the ****OpenAI API****, the trade is control for
simplicity: SageMaker trains and serves **any** custom model, while an inference-only API is
faster to start but limited to the provider’s models.

---

****Mind map — connected ideas****

> [Vertex AI](149-vertex-ai.html) · [OpenAI API (ML API)](150-openai-api-ml-api.html) · [Online Experimentation Platforms](070-online-experimentation-platforms.html) · [Drift Detection](138-drift-detection.html) · [Hyperparameter](142-hyperparameter.html) · [ONNX (Open Neural Network Exchange)](344-onnx-open-neural-network-exchange.html)

---

****More in ML Platforms & Tools****

> [Google Experiments](100-google-experiments.html) · [Kaggle](273-kaggle.html) · [ONNX (Open Neural Network Exchange)](344-onnx-open-neural-network-exchange.html) · [OpenAI API (ML API)](150-openai-api-ml-api.html) · [TPU Clusters](347-tpu-clusters.html) · [Vertex AI](149-vertex-ai.html)

---

**Theme:** ML Platforms & Tools  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [AWS SageMaker](https://insightful-data-lab.com/2025/08/24/aws-sagemaker/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)