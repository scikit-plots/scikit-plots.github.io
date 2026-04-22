# ModelPlotPy[#](#modelplotpy "Link to this heading")

class scikitplot.decile.modelplotpy.ModelPlotPy(**feature\_data=None**, **label\_data=None**, **dataset\_labels=None**, **models=None**, **model\_labels=None**, **ntiles=10**, **seed=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/decile/modelplotpy/_modelplotpy.py#L167)[#](#scikitplot.decile.modelplotpy.ModelPlotPy "Link to this definition")
:   ModelPlotPy decile analysis.

    Parameters:
    :   ****feature\_data****list of objects (n\_datasets, )
        :   Objects containing the X matrix for one or more different datasets.

        ****label\_data****list of objects (n\_datasets, )
        :   Objects of the y vector for one or more different datasets.

        ****dataset\_labels****list of str (n\_datasets, )
        :   Containing the names of the different `feature_data`
            and `label_data` combination pairs.

        ****models****list of objects (n\_models, )
        :   Containing the sk-learn model objects.

        ****model\_labels****list of str (n\_models, )
        :   Names of the (sk-learn) models.

        ****ntiles****int, default 10
        :   The number of splits range is (2, inf]:

            * 10 is called `deciles`
            * 100 is called `percentiles`
            * any other value is an `ntile`

        ****seed****int, default=0
        :   Making the splits reproducible.

            Changed in version 0.3.9: Default changed from 999 to 0.

    Raises:
    :   ValueError
        :   If there is no match with the complete list or the input list again

    aggregate\_over\_ntiles()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/decile/modelplotpy/_modelplotpy.py#L400)[#](#scikitplot.decile.modelplotpy.ModelPlotPy.aggregate_over_ntiles "Link to this definition")
    :   Create eval\_t\_tot.

        This function builds the pandas dataframe eval\_t\_tot and contains the aggregated output.
        The data is aggregated over datasets (feature and label-data pairs) and list of models.

        Parameters:
        :   ****feature\_data****list of objects (n\_datasets, )
            :   Objects containing the X matrix for one or more different datasets.

            ****label\_data****list of objects (n\_datasets, )
            :   Objects of the y vector for one or more different datasets.

            ****dataset\_labels****list of str (n\_datasets, )
            :   Containing the names of the different feature `feature_data`
                and label `label_data` data combination pairs.

            ****models****list of objects (n\_models, )
            :   Containing the sk-learn model objects.

            ****model\_labels****list of str (n\_models, )
            :   Names of the (sk-learn) models.

            ****ntiles****int, default 10
            :   The number of splits 10 is called deciles,
                100 is called percentiles and any other value is an ntile.
                Range is (2, inf].

            ****seed****int, default=0
            :   Making the splits reproducible.

                Changed in version 0.3.9: Default changed from 999 to 0.

        Returns:
        :   pandas.DataFrame
            :   Pandas dataframe with combination of all datasets, models, target values and ntiles.
                It already contains almost all necessary information for model plotting.

        Raises:
        :   ValueError
            :   If there is no match with the complete list or the input list again.

    get\_params()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/decile/modelplotpy/_modelplotpy.py#L243)[#](#scikitplot.decile.modelplotpy.ModelPlotPy.get_params "Link to this definition")
    :   Get parameters of the model plots object.

        Added in version 0.3.9.

    plotting\_scope(**scope='no\_comparison'**, **select\_model\_label=[]**, **select\_dataset\_label=[]**, **select\_targetclass=[]**, **select\_smallest\_targetclass=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/decile/modelplotpy/_modelplotpy.py#L551)[#](#scikitplot.decile.modelplotpy.ModelPlotPy.plotting_scope "Link to this definition")
    :   Create plot\_input.

        This function builds the pandas dataframe plot\_input which is a subset of scores\_and\_ntiles.
        The dataset is the subset of scores\_and\_ntiles that is dependent of
        1 of the 4 evaluation types that a user can request.

        Changed in version 0.3.9: Parameters has been reorganized.

        Parameters:
        :   ****scope****{‘no\_comparison’, ‘compare\_models’, ‘compare\_datasets’, ‘compare\_targetclasses’}, default=’no\_comparison’
            :   How is this function evaluated? There are 4 different perspectives to evaluate model plots.

                1. `scope='no_comparison'`
                   :   This perspective will show a single plot that contains the viewpoint from:

                       * 1 dataset
                       * 1 model
                       * 1 target class
                2. `scope='compare_models'`
                   :   This perspective will show plots that contains the viewpoint from:

                       * 2 or more different models
                       * 1 dataset
                       * 1 target class
                3. `scope='compare_datasets'`
                   :   This perspective will show plots that contains the viewpoint from:

                       * 2 or more different datasets
                       * 1 model
                       * 1 target class
                4. `scope='compare_targetclasses'`
                   :   This perspective will show plots that contains the viewpoint from:

                       * 2 or more different target classes
                       * 1 dataset
                       * 1 model

            ****select\_model\_label****list of str
            :   List of one or more elements from the model\_name parameter.

            ****select\_dataset\_label****list of str
            :   List of one or more elements from the description parameter.

            ****select\_targetclass****list of str
            :   List of one or more elements from the label data.

            ****select\_smallest\_targetclass****bool, default = True
            :   Should the plot only contain the results of the smallest targetclass.
                If True, the specific target is defined from the first dataset.

        Returns:
        :   pandas.DataFrame
            :   Pandas dataframe, a subset of scores\_and\_ntiles, for all dataset, model
                and target value combinations for all ntiles.
                It contains all necessary information for model plotting.

        Raises:
        :   ValueError
            :   If the wrong `scope` value is specified.

        Return type:
        :   [pandas.DataFrame](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas)")

    prepare\_scores\_and\_ntiles()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/decile/modelplotpy/_modelplotpy.py#L285)[#](#scikitplot.decile.modelplotpy.ModelPlotPy.prepare_scores_and_ntiles "Link to this definition")
    :   Create eval\_tot.

        This function builds the pandas dataframe eval\_tot that contains for each feature
        and label data pair given a description the actual and predicted value.
        It loops over the different models with the given model\_name.

        Parameters:
        :   ****feature\_data****list of objects (n\_datasets, )
            :   Objects containing the X matrix for one or more different datasets.

            ****label\_data****list of objects (n\_datasets, )
            :   Objects of the y vector for one or more different datasets.

            ****dataset\_labels****list of str (n\_datasets, )
            :   Containing the names of the different feature `feature_data`
                and label `label_data` data combination pairs.

            ****models****list of objects (n\_models, )
            :   Containing the sk-learn model objects.

            ****model\_labels****list of str (n\_models, )
            :   Names of the (sk-learn) models.

            ****ntiles****int, default 10
            :   The number of splits 10 is called deciles, 100 is called percentiles
                and any other value is an ntile.
                Range is (2, inf].

            ****seed****int, default=0
            :   Making the splits reproducible.

                Changed in version 0.3.9: Default changed from 999 to 0.

        Returns:
        :   ****scores\_and\_ntiles****pandas.DataFrame
            :   Pandas dataframe for all given information and for each target\_class it makes
                a prediction and ntile. For each ntile a small value (based on the seed) is added
                and normalized to make the results reproducible.

        Raises:
        :   ValueError
            :   If there is no match with the complete list or the input list again

    reset\_params()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/decile/modelplotpy/_modelplotpy.py#L271)[#](#scikitplot.decile.modelplotpy.ModelPlotPy.reset_params "Link to this definition")
    :   Reset all parameters to default values.

        Added in version 0.3.9.

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/decile/modelplotpy/_modelplotpy.py#L259)[#](#scikitplot.decile.modelplotpy.ModelPlotPy.set_params "Link to this definition")
    :   Set parameters of the model plots object.

        Added in version 0.3.9.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_modelplotpy_legacy_script_thumb.png)

[Introduction to modelplotpy (legacy)](../../auto_examples/decile/plot_modelplotpy_legacy_script.html)

Introduction to modelplotpy (legacy)