> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-decile-plot-modelplotpy-legacy-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Introduction to modelplotpy (legacy)[#](#introduction-to-modelplotpy-legacy "Link to this heading")

To install the latest version (with pip):

```
>>> pip install scikit-learn scikit-plots --upgrade
>>> ## Cause numpy>=2.0.0 but support old numpy
>>> pip install numpy==1.26.4

```

This exercise is used in [`scikitplot.decile.modelplotpy.ModelPlotPy`](../../modules/generated/scikitplot.decile.modelplotpy.ModelPlotPy.html#scikitplot.decile.modelplotpy.ModelPlotPy "scikitplot.decile.modelplotpy.ModelPlotPy") class the part of the
[ModelPlotPy](../../user_guide/decile/modelplotpy.html#decile-modelplotpy-index) and [modelplotpy financial](../../user_guide/decile/modelplotpy.html#decile-modelplotpy-financial-index) sections.

References

* <https://modelplot.github.io/intro_modelplotpy.html>

A tutorial exercise example: Predictive models from sklearn
on the Bank Marketing Data Set

This example is based on a publicly available dataset, called the Bank Marketing Data Set.
It is one of the most popular datasets which is made available on the
[UCI Machine Learning Repository](https://archive.ics.uci.edu/dataset/222/bank+marketing).

The data set comes from a Portuguese bank and deals with a frequently-posed marketing question:
whether a customer did or did not acquire a term deposit, a financial product.
There are 4 datasets available and the bank-additional-full.csv is the one we use.
It contains the information of 41.188 customers and 21 columns of information.

To illustrate how to use modelplotpy, let’s say that we work for this bank
and our marketing colleagues have asked us to help to select the customers
that are most likely to respond to a term deposit offer. For that purpose,
we will develop a predictive model and create the plots to discuss the results
with our marketing colleagues. Since we want to show you how to build the plots,
not how to build a perfect model, we’ll use six of these columns in our example.

Here’s a short description on the data we use:

* `y`: has the client subscribed a term deposit?
* `duration`: last contact duration, in seconds (numeric)
* `campaign`: number of contacts performed during this campaign and for this client
* `pdays`: number of days that passed by after the client was last contacted from a previous campaign
* `previous`: number of contacts performed before this campaign and for this client (numeric)
* `euribor3m`: euribor 3 month rate

Let’s load the data and have a quick look at it:

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## Loading the dataset[#](#loading-the-dataset "Link to this heading")

```
import io
import os
import zipfile

import warnings

warnings.filterwarnings("ignore")

import numpy as np

np.random.seed(0)  # reproducibility

import requests
import pandas as pd

# You can change the path, currently the data is written to the working directory
path = os.getcwd()

# r = requests.get(
#     "https://archive.ics.uci.edu/ml/machine-learning-databases/00222/bank-additional.zip"
# )
# we encountered that the source at uci.edu is not always available,
# therefore we made a copy to our repos.
r = requests.get("https://modelplot.github.io/img/bank-additional.zip")
z = zipfile.ZipFile(io.BytesIO(r.content))
z.extractall(path)

# Load csv data
bank = pd.read_csv(path + "/bank-additional/bank-additional-full.csv", sep=";")

# select the 6 columns
bank = bank[["y", "duration", "campaign", "pdays", "previous", "euribor3m"]]

# rename target class value 'yes' for better interpretation
bank.y[bank.y == "yes"] = "term deposit"

# dimensions of the data
print(bank.shape)

# show the first rows of the dataset
print(bank.head())

```
```
(41188, 6)
    y  duration  campaign  pdays  previous  euribor3m
0  no       261         1    999         0      4.857
1  no       149         1    999         0      4.857
2  no       226         1    999         0      4.857
3  no       151         1    999         0      4.857
4  no       307         1    999         0      4.857

```

## Train models on the bank dataset[#](#train-models-on-the-bank-dataset "Link to this heading")

On this data, we’ve applied some predictive modeling techniques from the sklearn module.
This well known module is a wrapper for many predictive modeling techniques,
such as logistic regression, random forest and many, many others.
Lets train a few models to evaluate with our plots.

```
# to create predictive models
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# define target vector y
y = bank.y
# define feature matrix X
X = bank.drop("y", axis=1)

# Create the necessary datasets to build models
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=2018
)

# Instantiate a few classification models
clf_rf = RandomForestClassifier().fit(X_train, y_train)
clf_mult = LogisticRegression(max_iter=int(1e5), random_state=0).fit(
    X_train, y_train
)

```

## Plotting partial dependence for two features[#](#plotting-partial-dependence-for-two-features "Link to this heading")

For now, we focus on explaining to our marketing colleagues how good our predictive model
can help them select customers for their term deposit campaign.

```
# from scikitplot.decile import modelplotpy as mp
import scikitplot.decile.modelplotpy as mp  # legacy ModelPlotPy

obj = mp.ModelPlotPy(
    feature_data=[X_train, X_test],
    label_data=[y_train, y_test],
    dataset_labels=["train_data", "test_data"],
    models=[clf_rf, clf_mult],
    model_labels=["random_forest", "multinomial_logit"],
    ntiles=10,
)

# transform data generated with prepare_scores_and_deciles into aggregated data for chosen plotting scope
ps = obj.plotting_scope(
    select_model_label=["random_forest"], select_dataset_label=["test_data"]
)

```
```
Default scope value no_comparison selected, single evaluation line will be plotted.
The label with smallest class is term deposit
Target class term deposit, dataset test_data and model random_forest.

```

What just happened? In the modelplotpy a class is instantiated and the plotting\_scope function specifies
the scope of the plots you want to show. In general, there are 3 methods (functions) that can be applied to
the modelplotpy class but you don’t have to specify them since they are chained to each other.

These functions are:

* `prepare_scores_and_deciles`: scores the customers in the train dataset
  and test dataset with their probability to acquire a term deposit
* `aggregate_over_deciles`: aggregates all scores to deciles and calculates the information to show
* `plotting_scope`: allows you to specify the scope of the analysis.

In the second line of code, we specified the scope of the analysis.
We’ve not specified the “scope” parameter, therefore the default - no comparison - is chosen.
As the output notes, you can use modelplotpy to evaluate your model(s) from several perspectives:

* `Interpret just one model (the default)`
* `Compare the model performance across different datasets`
* `Compare the performance across different models`
* `Compare the performance across different target classes`

Here, we will keep it simple and evaluate - from a business perspective - how well a selected model
will perform in a selected dataset for one target class. We did specify values for some parameters,
to focus on the random forest model on the test data. The default value for the target class is
`term deposit` since we want to focus on customers that do take term deposits,
this default is perfect.

## Let’s introduce the Gains, Lift and (cumulative) Response plots.[#](#let-s-introduce-the-gains-lift-and-cumulative-response-plots "Link to this heading")

Although each plot sheds light on the business value of your model
from a different angle, they all use the same data:

* Predicted probability for the target class
* Equally sized groups based on this predicted probability
* Actual number of observed target class observations in these groups

### 1. Cumulative gains plot[#](#cumulative-gains-plot "Link to this heading")

The cumulative gains plot - often named ‘gains plot’ - helps you answer the question:

When we apply the model and select the best X deciles,
what % of the actual target class observations can we expect to target?

```
# plot the cumulative gains plot and annotate the plot at decile = 3
ax = mp.plot_cumgains(ps, highlight_ntile=3, save_fig=True)

```
![Cumulative gains, model: random_forest & dataset: test_data & target class: term deposit](../../_images/sphx_glr_plot_modelplotpy_legacy_script_001.png)
```
When we select 30 with the highest probability according to model random_forest, this selection holds 93% of
all term deposit cases in dataset test_data.

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: model evaluation](../../_tags/model-workflow-model-evaluation.html) [plot-type: line](../../_tags/plot-type-line.html) [plot-type: decile](../../_tags/plot-type-decile.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

### 2. Cumulative lift plot[#](#cumulative-lift-plot "Link to this heading")

The cumulative lift plot, often referred to as lift plot or index plot, helps you answer the question:

When we apply the model and select the best X deciles,
how many times better is that than using no model at all?

```
# plot the cumulative lift plot and annotate the plot at decile = 3
ax = mp.plot_cumlift(ps, highlight_ntile=3, save_fig=True)

```
![Cumulative lift, model: random_forest & dataset: test_data & target class: term deposit](../../_images/sphx_glr_plot_modelplotpy_legacy_script_002.png)
```
When we select 30 with the highest probability according to model random_forest in dataset test_data,
this selection for target class term deposit is 3.13 times than selecting without a model.

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: model evaluation](../../_tags/model-workflow-model-evaluation.html) [plot-type: line](../../_tags/plot-type-line.html) [plot-type: decile](../../_tags/plot-type-decile.html) [domain: statistics](../../_tags/domain-statistics.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

### 3. Response plot[#](#response-plot "Link to this heading")

One of the easiest to explain evaluation plots is the response plot.
It simply plots the percentage of target class observations per decile.
It can be used to answer the following business question:

When we apply the model and select decile X,
what is the expected % of target class observations in that decile?

```
# plot the response plot and annotate the plot at decile = 3
ax = mp.plot_response(ps, highlight_ntile=3, save_fig=True)

```
![Response, model: random_forest & dataset: test_data & target class: term deposit](../../_images/sphx_glr_plot_modelplotpy_legacy_script_003.png)
```
When we select decile 3 from model random_forest in dataset test_data the percentage of term deposit cases in the selection is 13% .

```

### 4. Cumulative response plot[#](#cumulative-response-plot "Link to this heading")

Finally, one of the most used plots: The cumulative response plot.
It answers the question burning on each business reps lips:

When we apply the model and select up until decile X,
what is the expected % of target class observations in the selection?

```
# plot the cumulative response plot and annotate the plot at decile = 3
ax = mp.plot_cumresponse(ps, highlight_ntile=3, save_fig=True)

```
![Cumulative response, model: random_forest & dataset: test_data & target class: term deposit](../../_images/sphx_glr_plot_modelplotpy_legacy_script_004.png)
```
When we select decile 3 from model random_forest in dataset test_data the percentage of term deposit cases in the selection is 35% .

```

## All four plots together[#](#all-four-plots-together "Link to this heading")

With the function call plot\_all we get all four plots on one grid.
We can easily save it to a file to include it in a presentation or share it with colleagues.

```
# plot all four evaluation plots and save to file
ax = mp.plot_all(
    ps,
    # save_fig=True,
    # overwrite=False,
    # add_timestamp=True,
    # verbose=True,
)

```
![model: random_forest & dataset: test_data & target class: term deposit, Cumulative gains, Cumulative lift, Response, Cumulative response](../../_images/sphx_glr_plot_modelplotpy_legacy_script_005.png)

## Financial Implications[#](#financial-implications "Link to this heading")

To plot the financial implications of implementing a predictive model,
modelplotr provides three additional plots: the Costs & revenues plot,
the Profit plot and the ROI plot.

For financial plots, three extra parameters need to be provided:

Parameter | Type.and.Description |:-: | :-: |fixed\_costs | Numeric. Specifying the fixed costs related to a selection based on the model. These costs are constant and do not vary with selection size (ntiles). |variable\_costs\_per\_unit | Numeric. Specifying the variable costs per selected unit for a selection based on the model. These costs vary with selection size (ntiles). |profit\_per\_unit | Numeric. Specifying the profit per unit in case the selected unit converts / responds positively. |

### 1. Return on investment plot[#](#return-on-investment-plot "Link to this heading")

The Return on Investment plot plots the cumulative revenues as a percentage of investments up
until that decile when the model is used for campaign selection.
It can be used to answer the following business question:

When we apply the model and select up until decile X,
what is the expected % return on investment of the campaign?

```
# Return on Investment (ROI) plot
ax = mp.plot_roi(
    ps,
    fixed_costs=1000,
    variable_costs_per_unit=10,
    profit_per_unit=50,
    highlight_ntile=3,
    save_fig=True,
)

```
![Return on Investment (ROI), model: random_forest & dataset: test_data & target class: term deposit](../../_images/sphx_glr_plot_modelplotpy_legacy_script_006.png)
```
When we select decile 1 until 3 from model random_forest in dataset test_data the percentage of term deposit cases in the expected roi is 70.

```

### 2. Costs & Revenues plot[#](#costs-revenues-plot "Link to this heading")

The costs & revenues plot plots both the cumulative revenues and the cumulative costs
(investments) up until that decile when the model is used for campaign selection.
It can be used to answer the following business question:

When we apply the model and select up until decile X,
what are the expected revenues and investments of the campaign?

```
# Costs & Revenues plot, highlighted at max roi instead of max profit
ax = mp.plot_costsrevs(
    ps,
    fixed_costs=1000,
    variable_costs_per_unit=10,
    profit_per_unit=50,
    highlight_ntile=3,
    # highlight_ntile = "max_roi",
    save_fig=True,
)

```
![Costs / Revenues, model: random_forest & dataset: test_data & target class: term deposit](../../_images/sphx_glr_plot_modelplotpy_legacy_script_007.png)
```
When we select decile 1 until 3 from model random_forest in dataset test_data the percentage of term deposit cases in the revenue is 64950.

```

### 3. Profit plot[#](#profit-plot "Link to this heading")

The profit plot visualized the cumulative profit up until that decile
when the model is used for campaign selection.
It can be used to answer the following business question:

When we apply the model and select up until decile X,
what is the expected profit of the campaign?

```
# Profit plot , highlighted at custom ntile instead of at max profit
ax = mp.plot_profit(
    ps,
    fixed_costs=1000,
    variable_costs_per_unit=10,
    profit_per_unit=50,
    highlight_ntile=3,
    save_fig=True,
)

```
![Profit, model: random_forest & dataset: test_data & target class: term deposit](../../_images/sphx_glr_plot_modelplotpy_legacy_script_008.png)
```
When we select decile 1 until 3 from model random_forest in dataset test_data the percentage of term deposit cases in the expected profit is 26880.

```

## Get more out of modelplotpy: using different scopes[#](#get-more-out-of-modelplotpy-using-different-scopes "Link to this heading")

As we mentioned discussed earlier, the modelplotpy also enables to make interesting comparisons,
using the scope parameter. Comparisons between different models, between different datasets
and (in case of a multiclass target) between different target classes. Curious?
Please have a look at the package documentation or read our other posts on modelplot.

### 1. compare\_models[#](#compare-models "Link to this heading")

However, to give one example, we could compare whether random forest
was indeed the best choice to select the top-30% customers for a term deposit offer:

```
ps2 = obj.plotting_scope(scope="compare_models", select_dataset_label=["test_data"])

# plot the cumulative response plot and annotate the plot at decile = 3
ax = mp.plot_cumresponse(ps2, highlight_ntile=3, save_fig=True)

```
![Cumulative response, Scope: comparing models & dataset: test_data & target class: term deposit](../../_images/sphx_glr_plot_modelplotpy_legacy_script_009.png)
```
compare models
The label with smallest class is ['term deposit']
When we select decile 3 from model multinomial_logit in dataset test_data the percentage of term deposit cases in the selection is 33% .
When we select decile 3 from model random_forest in dataset test_data the percentage of term deposit cases in the selection is 35% .

```
```
import scikitplot as sp

sp.utils.remove_path()

```

Seems like the algorithm used will not make a big difference in this case.
Hopefully you agree by now that using these plots really can make a difference in explaining
the business value of your predictive models!

In case you experience issues when using modelplotpy, please let us know
via the [issues section on Github](https://github.com/pbmarcus/modelplotpy/issues).
Any other feedback or suggestions, please let us know
via [pb.marcus](mailto:pb.marcus%40hotmail.com)
or [jurriaan.nagelkerke](mailto:jurriaan.nagelkerke%40gmail.com).

Happy modelplotting!

****Total running time of the script:**** (0 minutes 8.205 seconds)

[![Launch binder](../../_images/binder_badge_logo6.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/decile/plot_modelplotpy_legacy_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo6.svg)](../../lite/lab/index.html?path=auto_examples/decile/plot_modelplotpy_legacy_script.ipynb)

[`Download Jupyter notebook: plot_modelplotpy_legacy_script.ipynb`](../../_downloads/8382eda9b62f1e9d7c880bc3067ac1d4/plot_modelplotpy_legacy_script.ipynb)

[`Download Python source code: plot_modelplotpy_legacy_script.py`](../../_downloads/3f0921a2475c07956bdab69e328572b4/plot_modelplotpy_legacy_script.py)

[`Download zipped: plot_modelplotpy_legacy_script.zip`](../../_downloads/14d07f07f3c7216735e413d22b3af1c4/plot_modelplotpy_legacy_script.zip)

Related examples

![](../../_images/sphx_glr_plot_modelplotpy_script_thumb.png)

[Introduction to modelplotpy](plot_modelplotpy_script.html)

Introduction to modelplotpy![](../../_images/sphx_glr_plot_dummy_code_encoder_thumb.png)

[Comparing DummyCode Encoder with Other Encoders](../preprocessing/plot_dummy_code_encoder.html)

Comparing DummyCode Encoder with Other Encoders![](../../_images/sphx_glr_plot_gaussian_mixture_models_thumb.png)

[Gaussian Mixture Models — AIC, AICc, and BIC Model Selection](../stats/plot_gaussian_mixture_models.html)

Gaussian Mixture Models — AIC, AICc, and BIC Model Selection![](../../_images/sphx_glr_plot_calibration_script_thumb.png)

[plot\_calibration with examples](../calibration/plot_calibration_script.html)

plot\_calibration with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)