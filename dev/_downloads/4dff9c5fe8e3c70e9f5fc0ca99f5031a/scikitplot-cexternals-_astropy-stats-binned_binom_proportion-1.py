# Suppose we wish to estimate the efficiency of a survey in
# detecting astronomical sources as a function of magnitude (i.e.,
# the probability of detecting a source given its magnitude). In a
# realistic case, we might prepare a large number of sources with
# randomly selected magnitudes, inject them into simulated images,
# and then record which were detected at the end of the reduction
# pipeline. As a toy example, we generate 100 data points with
# randomly selected magnitudes between 20 and 30 and "observe" them
# with a known detection function (here, the error function, with
# 50% detection probability at magnitude 25):
#
import numpy as np
import matplotlib.pyplot as plt
from scikitplot.stats import binned_binom_proportion
from scipy.special import erf
from scipy.stats.distributions import binom
def true_efficiency(x):
    return 0.5 - 0.5 * erf((x - 25.) / 2.)
mag = 20. + 10. * np.random.rand(100)
detected = binom.rvs(1, true_efficiency(mag))
bins, binshw, p, perr = binned_binom_proportion(mag, detected, bins=20)
plt.errorbar(bins, p, xerr=binshw, yerr=perr, ls='none', marker='o',
             label='estimate')
#
import numpy as np
from scipy.special import erf
from scipy.stats.distributions import binom
import matplotlib.pyplot as plt
from scikitplot.stats import binned_binom_proportion
def true_efficiency(x):
    return 0.5 - 0.5 * erf((x - 25.) / 2.)
np.random.seed(400)
mag = 20. + 10. * np.random.rand(100)
np.random.seed(600)
detected = binom.rvs(1, true_efficiency(mag))
bins, binshw, p, perr = binned_binom_proportion(mag, detected, bins=20)
plt.errorbar(bins, p, xerr=binshw, yerr=perr, ls='none', marker='o',
            label='estimate')
X = np.linspace(20., 30., 1000)
plt.plot(X, true_efficiency(X), label='true efficiency')
plt.ylim(0., 1.)
plt.title('Detection efficiency vs magnitude')
plt.xlabel('Magnitude')
plt.ylabel('Detection efficiency')
plt.legend()
plt.show()
#
# The above example uses the Wilson confidence interval to calculate
# the uncertainty ``perr`` in each bin (see the definition of various
# confidence intervals in `binom_conf_interval`). A commonly used
# alternative is the Wald interval. However, the Wald interval can
# give nonsensical uncertainties when the efficiency is near 0 or 1,
# and is therefore **not** recommended. As an illustration, the
# following example shows the same data as above but uses the Wald
# interval rather than the Wilson interval to calculate ``perr``:
#
import matplotlib.pyplot as plt
from scikitplot.stats import binned_binom_proportion
bins, binshw, p, perr = binned_binom_proportion(mag, detected, bins=20,
                                                interval='wald')
plt.errorbar(bins, p, xerr=binshw, yerr=perr, ls='none', marker='o',
             label='estimate')
#
import numpy as np
from scipy.special import erf
from scipy.stats.distributions import binom
import matplotlib.pyplot as plt
from scikitplot.stats import binned_binom_proportion
def true_efficiency(x):
    return 0.5 - 0.5 * erf((x - 25.) / 2.)
np.random.seed(400)
mag = 20. + 10. * np.random.rand(100)
np.random.seed(600)
detected = binom.rvs(1, true_efficiency(mag))
bins, binshw, p, perr = binned_binom_proportion(mag, detected, bins=20,
                                                interval='wald')
plt.errorbar(bins, p, xerr=binshw, yerr=perr, ls='none', marker='o',
            label='estimate')
X = np.linspace(20., 30., 1000)
plt.plot(X, true_efficiency(X), label='true efficiency')
plt.ylim(0., 1.)
plt.title('The Wald interval can give nonsensical uncertainties')
plt.xlabel('Magnitude')
plt.ylabel('Detection efficiency')
plt.legend()
plt.show()
