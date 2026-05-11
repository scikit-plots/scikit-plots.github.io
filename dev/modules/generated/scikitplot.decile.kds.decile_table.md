# decile\_table[#](#decile-table "Link to this heading")

scikitplot.decile.kds.decile\_table(**y\_true**, **y\_score**, **\***, **labels=None**, **class\_index=1**, **pos\_label=None**, **change\_deciles=10**, **digits=6**, **feature\_infos=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/decile/kds/_kds.py#L116)[#](#scikitplot.decile.kds.decile_table "Link to this definition")
:   Generate the Decile Table from labels and probabilities.

    The Decile Table is creared by first sorting the customers by their predicted
    probabilities, in decreasing order from highest (closest to one) to
    lowest (closest to zero). Splitting the customers into equally sized segments,
    we create groups containing the same numbers of customers, for example, 10 decile
    groups each containing 10% of the customer base.

    Parameters:
    :   ****y\_true****array-like of shape (n\_samples,)
        :   True binary labels. If labels are not either {-1, 1} or {0, 1},
            then pos\_label should be explicitly given.

        ****y\_score****array-like of shape (n\_samples,)
        :   Target scores, can either be probability estimates of the positive class,
            confidence values, or non-thresholded measure of decisions
            (as returned by “decision\_function” on some classifiers).
            For decision\_function scores, values greater than or equal to zero
            should indicate the positive class.

        ****pos\_label****int, float, bool or str, default=None
        :   The label of the positive class. When pos\_label=None,
            if y\_true is in {-1, 1} or {0, 1}, pos\_label is set to 1,
            otherwise an error will be raised.

        ****class\_index****int, optional
        :   Index of the class for which to extract probabilities in multi-class case.
            If None, returns all class probabilities in the 2D case. Ignored if y\_score is 1D.

            Added in version 0.3.9.

        ****labels****array-like of shape (n\_classes,), default=None
        :   List of labels to index the matrix.
            This may be used to reorder or select a subset of labels.
            If None is given, those that appear at least once in y\_true or
            y\_pred are used in sorted order.

        ****sample\_weightarray-like of shape (n\_samples,), default=None****
        :   Sample weights.

        ****change\_deciles****int, optional, default=10
        :   The number of partitions for creating the table. Defaults to 10 for deciles.

        ****digits****int, optional, default=6
        :   The decimal precision for the result.

            Added in version 0.3.9.

        ****feature\_infos****bool, optional, default=None
        :   If True, prints a legend for the abbreviations of decile table column names.

        ****\*\*kwargs****dict, optional
        :   Added in version 0.3.9.

    Returns:
    :   pandas.DataFrame
        :   The dataframe `dt` (decile-table) with the deciles and related information.

    > **See also**
    > [`print_labels`](scikitplot.decile.kds.print_labels.html#scikitplot.decile.kds.print_labels "scikitplot.decile.kds.print_labels")
    :   A legend for the abbreviations of decile table column names.

    [`decile_table`](#scikitplot.decile.kds.decile_table "scikitplot.decile.kds.decile_table")
    :   Generates the Decile Table from labels and probabilities.

    [`plot_lift`](scikitplot.decile.kds.plot_lift.html#scikitplot.decile.kds.plot_lift "scikitplot.decile.kds.plot_lift")
    :   Generates the Decile based cumulative Lift Plot from labels and probabilities.

    [`plot_lift_decile_wise`](scikitplot.decile.kds.plot_lift_decile_wise.html#scikitplot.decile.kds.plot_lift_decile_wise "scikitplot.decile.kds.plot_lift_decile_wise")
    :   Generates the Decile-wise Lift Plot from labels and probabilities.

    [`plot_cumulative_gain`](scikitplot.decile.kds.plot_cumulative_gain.html#scikitplot.decile.kds.plot_cumulative_gain "scikitplot.decile.kds.plot_cumulative_gain")
    :   Generates the cumulative Gain Plot from labels and probabilities.

    [`plot_ks_statistic`](scikitplot.decile.kds.plot_ks_statistic.html#scikitplot.decile.kds.plot_ks_statistic "scikitplot.decile.kds.plot_ks_statistic")
    :   Generates the Kolmogorov-Smirnov (KS) Statistic Plot from labels and probabilities.

    References

    [1] [tensorbored/kds](https://github.com/tensorbored/kds/blob/master/kds/metrics.py#L382)

    Examples

    Try it in your browser!
    ```
    >>> from sklearn.datasets import (
    ...     load_breast_cancer as data_2_classes,
    ... )
    >>> from sklearn.model_selection import train_test_split
    >>> from sklearn.tree import DecisionTreeClassifier
    ...
    >>> X, y = data_2_classes(return_X_y=True, as_frame=True)
    >>> X_train, X_test, y_train, y_test = train_test_split(
    ...     X, y, test_size=0.5, random_state=0
    ... )
    >>> clf = DecisionTreeClassifier(max_depth=1, random_state=0).fit(
    ...     X_train, y_train
    ... )
    >>> y_prob = clf.predict_proba(X_test)
    ...
    >>> import scikitplot.decile.kds as kds
    >>> kds.decile_table(
    >>>     y_test, y_prob, class_index=1
    >>> )

    ```

    |  | decile | prob\_min | prob\_max | prob\_avg | cnt\_cust | cnt\_resp | cnt\_non\_resp | cnt\_resp\_rndm | cnt\_resp\_wiz | resp\_rate | cum\_cust | cum\_resp | cum\_resp\_wiz | cum\_non\_resp | cum\_cust\_pct | cum\_resp\_pct | cum\_resp\_pct\_wiz | cum\_non\_resp\_pct | KS | lift |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | 0 | 1 | 0.923077 | 0.923077 | 0.923077 | 29.0 | 29.0 | 0.0 | 18.4 | 29 | 100.000000 | 29.0 | 29.0 | 29 | 0.0 | 10.175439 | 15.760870 | 15.760870 | 0.000000 | 15.760870 | 1.548913 |
    | 1 | 2 | 0.923077 | 0.923077 | 0.923077 | 28.0 | 25.0 | 3.0 | 18.4 | 28 | 89.285714 | 57.0 | 54.0 | 57 | 3.0 | 20.000000 | 29.347826 | 30.978261 | 2.970297 | 26.377529 | 1.467391 |
    | 2 | 3 | 0.923077 | 0.923077 | 0.923077 | 29.0 | 26.0 | 3.0 | 18.4 | 29 | 89.655172 | 86.0 | 80.0 | 86 | 6.0 | 30.175439 | 43.478261 | 46.739130 | 5.940594 | 37.537667 | 1.440849 |
    | 3 | 4 | 0.923077 | 0.923077 | 0.923077 | 28.0 | 24.0 | 4.0 | 18.4 | 28 | 85.714286 | 114.0 | 104.0 | 114 | 10.0 | 40.000000 | 56.521739 | 61.956522 | 9.900990 | 46.620749 | 1.413043 |
    | 4 | 5 | 0.923077 | 0.923077 | 0.923077 | 29.0 | 28.0 | 1.0 | 18.4 | 29 | 96.551724 | 143.0 | 132.0 | 143 | 11.0 | 50.175439 | 71.739130 | 77.717391 | 10.891089 | 60.848041 | 1.429766 |
    | 5 | 6 | 0.923077 | 0.923077 | 0.923077 | 28.0 | 26.0 | 2.0 | 18.4 | 28 | 92.857143 | 171.0 | 158.0 | 171 | 13.0 | 60.000000 | 85.869565 | 92.934783 | 12.871287 | 72.998278 | 1.431159 |
    | 6 | 7 | 0.049020 | 0.923077 | 0.832657 | 29.0 | 19.0 | 10.0 | 18.4 | 13 | 65.517241 | 200.0 | 177.0 | 184 | 23.0 | 70.175439 | 96.195652 | 100.000000 | 22.772277 | 73.423375 | 1.370788 |
    | 7 | 8 | 0.049020 | 0.049020 | 0.049020 | 28.0 | 6.0 | 22.0 | 18.4 | 0 | 21.428571 | 228.0 | 183.0 | 184 | 45.0 | 80.000000 | 99.456522 | 100.000000 | 44.554455 | 54.902067 | 1.243207 |
    | 8 | 9 | 0.049020 | 0.049020 | 0.049020 | 29.0 | 1.0 | 28.0 | 18.4 | 0 | 3.448276 | 257.0 | 184.0 | 184 | 73.0 | 90.175439 | 100.000000 | 100.000000 | 72.277228 | 27.722772 | 1.108949 |
    | 9 | 10 | 0.049020 | 0.049020 | 0.049020 | 28.0 | 0.0 | 28.0 | 18.4 | 0 | 0.000000 | 285.0 | 184.0 | 184 | 101.0 | 100.000000 | 100.000000 | 100.000000 | 100.000000 | 0.000000 | 1.000000 |

    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_report_script_thumb.png)

[plot\_report with examples](../../auto_examples/decile/plot_report_script.html)

plot\_report with examples

Make live