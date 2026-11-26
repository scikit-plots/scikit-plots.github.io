# biweight\_midcovariance[#](#biweight-midcovariance "Link to this heading")

scikitplot.cexternals.\_astropy.stats.biweight\_midcovariance(**data**, **c=9.0**, **M=None**, **modify\_sample\_size=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cexternals/_astropy/stats/biweight.py#L492)[#](#scikitplot.cexternals._astropy.stats.biweight_midcovariance "Link to this definition")
:   Compute the biweight midcovariance between pairs of multiple
    variables.

    The biweight midcovariance is a robust and resistant estimator of
    the covariance between two variables.

    This function computes the biweight midcovariance between all pairs
    of the input variables (rows) in the input data. The output array
    will have a shape of (N\_variables, N\_variables). The diagonal
    elements will be the biweight midvariances of each input variable
    (see [`biweight_midvariance`](scikitplot.cexternals._astropy.stats.biweight_midvariance.html#scikitplot.cexternals._astropy.stats.biweight_midvariance "scikitplot.cexternals._astropy.stats.biweight_midvariance")). The off-diagonal elements will
    be the biweight midcovariances between each pair of input variables.

    For example, if the input array `data` contains three variables
    (rows) `x`, `y`, and `z`, the output `~numpy.ndarray`
    midcovariance matrix will be:

    \[\begin{split}\begin{pmatrix}
    \zeta\_{xx} & \zeta\_{xy} & \zeta\_{xz} \\
    \zeta\_{yx} & \zeta\_{yy} & \zeta\_{yz} \\
    \zeta\_{zx} & \zeta\_{zy} & \zeta\_{zz}
    \end{pmatrix}\end{split}\]

    where \(\zeta\_{xx}\), \(\zeta\_{yy}\), and \(\zeta\_{zz}\)
    are the biweight midvariances of each variable. The biweight
    midcovariance between \(x\) and \(y\) is \(\zeta\_{xy}\)
    (\(= \zeta\_{yx}\)). The biweight midcovariance between
    \(x\) and \(z\) is \(\zeta\_{xz}\) (\(=
    \zeta\_{zx}\)). The biweight midcovariance between \(y\) and
    \(z\) is \(\zeta\_{yz}\) (\(= \zeta\_{zy}\)).

    The biweight midcovariance between two variables \(x\) and
    \(y\) is given by:

    \[\zeta\_{xy} = n\_{xy} \ \frac{\sum\_{|u\_i| < 1, \ |v\_i| < 1} \
    (x\_i - M\_x) (1 - u\_i^2)^2 (y\_i - M\_y) (1 - v\_i^2)^2}
    {(\sum\_{|u\_i| < 1} \ (1 - u\_i^2) (1 - 5u\_i^2))
    (\sum\_{|v\_i| < 1} \ (1 - v\_i^2) (1 - 5v\_i^2))}\]

    where \(M\_x\) and \(M\_y\) are the medians (or the input
    locations) of the two variables and \(u\_i\) and \(v\_i\) are
    given by:

    \[ \begin{align}\begin{aligned}u\_{i} = \frac{(x\_i - M\_x)}{c \* MAD\_x}\\v\_{i} = \frac{(y\_i - M\_y)}{c \* MAD\_y}\end{aligned}\end{align} \]

    where \(c\) is the biweight tuning constant and \(MAD\_x\)
    and \(MAD\_y\) are the [median absolute deviation](https://en.wikipedia.org/wiki/Median_absolute_deviation) of the
    \(x\) and \(y\) variables. The biweight midvariance tuning
    constant `c` is typically 9.0 (the default).

    If \(MAD\_x\) or \(MAD\_y\) are zero, then zero will be
    returned for that element.

    For the standard definition of biweight midcovariance,
    \(n\_{xy}\) is the total number of observations of each variable.
    That definition is used if `modify_sample_size` is `False`, which
    is the default.

    However, if `modify_sample_size = True`, then \(n\_{xy}\) is the
    number of observations for which \(|u\_i| < 1\) and/or \(|v\_i|
    < 1\), i.e.

    \[n\_{xx} = \sum\_{|u\_i| < 1} \ 1\]\[n\_{xy} = n\_{yx} = \sum\_{|u\_i| < 1, \ |v\_i| < 1} \ 1\]\[n\_{yy} = \sum\_{|v\_i| < 1} \ 1\]

    which results in a value closer to the true variance for small
    sample sizes or for a large number of rejected values.

    Parameters:
    :   ****data****2D or 1D array-like
        :   Input data either as a 2D or 1D array. For a 2D array, it
            should have a shape (N\_variables, N\_observations). A 1D array
            may be input for observations of a single variable, in which
            case the biweight midvariance will be calculated (no
            covariance). Each row of `data` represents a variable, and
            each column a single observation of all those variables (same as
            the `numpy.cov` convention).

        ****c****float, optional
        :   Tuning constant for the biweight estimator (default = 9.0).

        ****M****float or 1D array-like, optional
        :   The location estimate of each variable, either as a scalar or
            array. If `M` is an array, then its must be a 1D array
            containing the location estimate of each row (i.e. `a.ndim`
            elements). If `M` is a scalar value, then its value will be
            used for each variable (row). If `None` (default), then the
            median of each variable (row) will be used.

        ****modify\_sample\_size****bool, optional
        :   If `False` (default), then the sample size used is the total
            number of observations of each variable, which follows the
            standard definition of biweight midcovariance. If `True`, then
            the sample size is reduced to correct for any rejected values
            (see formula above), which results in a value closer to the true
            covariance for small sample sizes or for a large number of
            rejected values.

    Returns:
    :   ****biweight\_midcovariance****ndarray
        :   A 2D array representing the biweight midcovariances between each
            pair of the variables (rows) in the input array. The output
            array will have a shape of (N\_variables, N\_variables). The
            diagonal elements will be the biweight midvariances of each
            input variable. The off-diagonal elements will be the biweight
            midcovariances between each pair of input variables.

    Parameters:
    :   * ****data**** (**ArrayLike**)
        * ****c**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****M**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **ArrayLike** **|** **None**)
        * ****modify\_sample\_size**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

    Return type:
    :   **NDArray**[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]

    > **See also**
    > [`biweight_midvariance`](scikitplot.cexternals._astropy.stats.biweight_midvariance.html#scikitplot.cexternals._astropy.stats.biweight_midvariance "scikitplot.cexternals._astropy.stats.biweight_midvariance"), [`biweight_midcorrelation`](scikitplot.cexternals._astropy.stats.biweight_midcorrelation.html#scikitplot.cexternals._astropy.stats.biweight_midcorrelation "scikitplot.cexternals._astropy.stats.biweight_midcorrelation"), [`biweight_scale`](scikitplot.cexternals._astropy.stats.biweight_scale.html#scikitplot.cexternals._astropy.stats.biweight_scale "scikitplot.cexternals._astropy.stats.biweight_scale"), [`biweight_location`](scikitplot.cexternals._astropy.stats.biweight_location.html#scikitplot.cexternals._astropy.stats.biweight_location "scikitplot.cexternals._astropy.stats.biweight_location")

    References

    [1]

    <https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/biwmidc.htm>

    Examples

    Try it in your browser!

    Compute the biweight midcovariance between two random variables:

    ```
    >>> import numpy as np
    >>> from astropy.stats import biweight_midcovariance
    >>> # Generate two random variables x and y
    >>> rng = np.random.default_rng(1)
    >>> x = rng.normal(0, 1, 200)
    >>> y = rng.normal(0, 3, 200)
    >>> # Introduce an obvious outlier
    >>> x[0] = 30.0
    >>> # Calculate the biweight midcovariances between x and y
    >>> bicov = biweight_midcovariance([x, y])
    >>> print(bicov)
    [[0.83435568 0.02379316]
     [0.02379316 7.15665769]]
    >>> # Print standard deviation estimates
    >>> print(np.sqrt(bicov.diagonal()))
    [0.91343072 2.67519302]

    ```
    Go BackOpen In Tab