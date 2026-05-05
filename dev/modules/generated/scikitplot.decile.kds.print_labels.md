# print\_labels[#](#print-labels "Link to this heading")

scikitplot.decile.kds.print\_labels(**\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/decile/kds/_kds.py#L59)[#](#scikitplot.decile.kds.print_labels "Link to this definition")
:   Display a legend for the abbreviations of decile table column names.

    Added in version 0.3.9.

    > **See also**
    > [`print_labels`](#scikitplot.decile.kds.print_labels "scikitplot.decile.kds.print_labels")
    :   A legend for the abbreviations of decile table column names.

    [`decile_table`](scikitplot.decile.kds.decile_table.html#scikitplot.decile.kds.decile_table "scikitplot.decile.kds.decile_table")
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
    >>> import scikitplot.decile.kds as kds
    >>> kds.print_labels()

    ```
    ```
    LABELS INFO:

     prob_min         : Minimum probability in a particular decile
     prob_max         : Minimum probability in a particular decile
     prob_avg         : Average probability in a particular decile
     cnt_events       : Count of events in a particular decile
     cnt_resp         : Count of responders in a particular decile
     cnt_non_resp     : Count of non-responders in a particular decile
     cnt_resp_rndm    : Count of responders if events assigned randomly in a particular decile
     cnt_resp_wiz     : Count of best possible responders in a particular decile
     resp_rate        : Response Rate in a particular decile [(cnt_resp/cnt_cust)*100]
     cum_events       : Cumulative sum of events decile-wise 
     cum_resp         : Cumulative sum of responders decile-wise 
     cum_resp_wiz     : Cumulative sum of best possible responders decile-wise 
     cum_non_resp     : Cumulative sum of non-responders decile-wise 
     cum_events_pct   : Cumulative sum of percentages of events decile-wise 
     cum_resp_pct     : Cumulative sum of percentages of responders decile-wise 
     cum_resp_pct_wiz : Cumulative sum of percentages of best possible responders decile-wise 
     cum_non_resp_pct : Cumulative sum of percentages of non-responders decile-wise 
     KS               : KS Statistic decile-wise 
     lift             : Cumuative Lift Value decile-wise

    ```
    Go BackOpen In Tab

Make live