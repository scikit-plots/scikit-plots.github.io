# RipleysKEstimator[#](#ripleyskestimator "Link to this heading")

class scikitplot.cexternals.\_astropy.stats.RipleysKEstimator(**area**, **x\_max=None**, **y\_max=None**, **x\_min=None**, **y\_min=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/spatial.py#L18)[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator "Link to this definition")
:   Estimators for Ripley’s K function for two-dimensional spatial data.
    See [[1]](#rc5e9dbe789b2-1), [[2]](#rc5e9dbe789b2-2), [[3]](#rc5e9dbe789b2-3), [[4]](#rc5e9dbe789b2-4), [[5]](#rc5e9dbe789b2-5) for detailed mathematical and
    practical aspects of those estimators.

    Parameters:
    :   ****area****float
        :   Area of study from which the points where observed.

        ****x\_max, y\_max****float, float, optional
        :   Maximum rectangular coordinates of the area of study.
            Required if `mode == 'translation'` or `mode == ohser`.

        ****x\_min, y\_min****float, float, optional
        :   Minimum rectangular coordinates of the area of study.
            Required if `mode == 'variable-width'` or `mode == ohser`.

    Parameters:
    :   * ****area**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****x\_max**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****y\_max**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****x\_min**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****y\_min**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    References

    [[1](#id1)]

    Peebles, P.J.E. **The large scale structure of the universe**.
    <[https://ui.adsabs.harvard.edu/abs/1980lssu.book…..P](https://ui.adsabs.harvard.edu/abs/1980lssu.book.....P)>

    [[2](#id2)]

    Spatial descriptive statistics.
    <<https://en.wikipedia.org/wiki/Spatial_descriptive_statistics>>

    [[3](#id3)]

    Package spatstat.
    <<https://cran.r-project.org/web/packages/spatstat/spatstat.pdf>>

    [[4](#id4)]

    Cressie, N.A.C. (1991). Statistics for Spatial Data,
    Wiley, New York.

    [[5](#id5)]

    Stoyan, D., Stoyan, H. (1992). Fractals, Random Shapes and
    Point Fields, Akademie Verlag GmbH, Chichester.

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from matplotlib import pyplot as plt
    >>> from astropy.stats import RipleysKEstimator
    >>> z = np.random.uniform(low=5, high=10, size=(100, 2))
    >>> Kest = RipleysKEstimator(area=25, x_max=10, y_max=10,
    ... x_min=5, y_min=5)
    >>> r = np.linspace(0, 2.5, 100)
    >>> plt.plot(r, Kest.poisson(r))
    >>> plt.plot(r, Kest(data=z, radii=r, mode='none'))
    >>> plt.plot(r, Kest(data=z, radii=r, mode='translation'))
    >>> plt.plot(r, Kest(data=z, radii=r, mode='ohser'))
    >>> plt.plot(r, Kest(data=z, radii=r, mode='var-width'))
    >>> plt.plot(r, Kest(data=z, radii=r, mode='ripley'))

    ```

    ([`Source code`](../../_downloads/380a5c052bd69ef6e2d8401578e0e8a8/scikitplot-cexternals-_astropy-stats-RipleysKEstimator-1.py))

    Go BackOpen In Tab

    Hfunction(**data**, **radii**, **mode='none'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/spatial.py#L186)[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.Hfunction "Link to this definition")
    :   Evaluates the H function at `radii`. For parameter description
        see `evaluate` method.

        Parameters:
        :   * ****data**** (**NDArray****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****radii**** (**NDArray****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****mode**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'none'****,** **'translation'****,** **'ohser'****,** **'var-width'****,** **'ripley'****]**)

        Return type:
        :   **NDArray**[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]

    Lfunction(**data**, **radii**, **mode='none'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/spatial.py#L174)[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.Lfunction "Link to this definition")
    :   Evaluates the L function at `radii`. For parameter description
        see `evaluate` method.

        Parameters:
        :   * ****data**** (**NDArray****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****radii**** (**NDArray****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****mode**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'none'****,** **'translation'****,** **'ohser'****,** **'var-width'****,** **'ripley'****]**)

        Return type:
        :   **NDArray**[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]

    \_\_call\_\_(**data**, **radii**, **mode='none'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/spatial.py#L138)[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.__call__ "Link to this definition")
    :   Call self as a function.

        Parameters:
        :   * ****data**** (**NDArray****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****radii**** (**NDArray****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****mode**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'none'****,** **'translation'****,** **'ohser'****,** **'var-width'****,** **'ripley'****]**)

        Return type:
        :   **NDArray**[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]

    property area: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.area "Link to this definition")
    :   !! processed by numpydoc !!

    evaluate(**data**, **radii**, **mode='none'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/spatial.py#L198)[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.evaluate "Link to this definition")
    :   Evaluates the Ripley K estimator for a given set of values `radii`.

        Parameters:
        :   ****data****2D array
            :   Set of observed points in as a n by 2 array which will be used to
                estimate Ripley’s K function.

            ****radii****1D array
            :   Set of distances in which Ripley’s K estimator will be evaluated.
                Usually, it’s common to consider max(radii) < (area/2)\*\*0.5.

            ****mode****str
            :   Keyword which indicates the method for edge effects correction.
                Available methods are ‘none’, ‘translation’, ‘ohser’, ‘var-width’,
                and ‘ripley’.

                * ‘none’
                  :   this method does not take into account any edge effects
                      whatsoever.
                * ‘translation’
                  :   computes the intersection of rectangular areas centered at
                      the given points provided the upper bounds of the
                      dimensions of the rectangular area of study. It assumes that
                      all the points lie in a bounded rectangular region satisfying
                      x\_min < x\_i < x\_max; y\_min < y\_i < y\_max. A detailed
                      description of this method can be found on ref [4].
                * ‘ohser’
                  :   this method uses the isotropized set covariance function of
                      the window of study as a weight to correct for
                      edge-effects. A detailed description of this method can be
                      found on ref [4].
                * ‘var-width’
                  :   this method considers the distance of each observed point to
                      the nearest boundary of the study window as a factor to
                      account for edge-effects. See [3] for a brief description of
                      this method.
                * ‘ripley’
                  :   this method is known as Ripley’s edge-corrected estimator.
                      The weight for edge-correction is a function of the
                      proportions of circumferences centered at each data point
                      which crosses another data point of interest. See [3] for
                      a detailed description of this method.

        Returns:
        :   ****ripley****1D array
            :   Ripley’s K function estimator evaluated at `radii`.

        Parameters:
        :   * ****data**** (**NDArray****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****radii**** (**NDArray****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****mode**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'none'****,** **'translation'****,** **'ohser'****,** **'var-width'****,** **'ripley'****]**)

        Return type:
        :   **NDArray**[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]

    poisson(**radii**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/spatial.py#L157)[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.poisson "Link to this definition")
    :   Evaluates the Ripley K function for the homogeneous Poisson process,
        also known as Complete State of Randomness (CSR).

        Parameters:
        :   ****radii****1D array
            :   Set of distances in which Ripley’s K function will be evaluated.

        Returns:
        :   ****output****1D array
            :   Ripley’s K function evaluated at `radii`.

        Parameters:
        :   ****radii**** (**NDArray****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)

        Return type:
        :   **NDArray**[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]

    property x\_max: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.x_max "Link to this definition")
    :   !! processed by numpydoc !!

    property x\_min: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.x_min "Link to this definition")
    :   !! processed by numpydoc !!

    property y\_max: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.y_max "Link to this definition")
    :   !! processed by numpydoc !!

    property y\_min: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cexternals._astropy.stats.RipleysKEstimator.y_min "Link to this definition")
    :   !! processed by numpydoc !!