# \_tweedie[#](#tweedie "Link to this heading")

Tweedie Distribution Module.

This module implements the Tweedie distribution,
a member of the exponential dispersion model (EDM) family,
using SciPy’s `rv_continuous` class.

It is especially useful for modeling claim amounts in the insurance industry,
where data often exhibit a mixture of zeroes and positive continuous values.

The primary focus of this package is the compound-Poisson behavior
of the Tweedie distribution, particularly in the range `1 < p < 2`.
However, it supports calculations for all valid values of the shape parameter `p`.