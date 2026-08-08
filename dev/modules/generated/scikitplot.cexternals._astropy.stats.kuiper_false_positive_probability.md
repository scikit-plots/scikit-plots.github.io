# kuiper\_false\_positive\_probability[#](#kuiper-false-positive-probability "Link to this heading")

scikitplot.cexternals.\_astropy.stats.kuiper\_false\_positive\_probability(**D**, **N**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/cexternals/_astropy/stats/funcs.py#L1331)[#](#scikitplot.cexternals._astropy.stats.kuiper_false_positive_probability "Link to this definition")
:   Compute the false positive probability for the Kuiper statistic.

    Uses the set of four formulas described in Paltani 2004; they report
    the resulting function never underestimates the false positive
    probability but can be a bit high in the N=40..50 range.
    (They quote a factor 1.5 at the 1e-7 level.)

    Parameters:
    :   ****D****float
        :   The Kuiper test score.

        ****N****float
        :   The effective sample size.

    Returns:
    :   ****fpp****float
        :   The probability of a score this large arising from the null hypothesis.

    Parameters:
    :   * ****D**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****N**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")

    Notes

    Eq 7 of Paltani 2004 appears to incorrectly quote the original formula
    (Stephens 1965). This function implements the original formula, as it
    produces a result closer to Monte Carlo simulations.

    References

    [1]

    Paltani, S., “Searching for periods in X-ray observations using
    Kuiper’s test. Application to the ROSAT PSPC archive”,
    Astronomy and Astrophysics, v.240, p.789-790, 2004.

    [2]

    Stephens, M. A., “The goodness-of-fit statistic VN: distribution
    and significance points”, Biometrika, v.52, p.309, 1965.