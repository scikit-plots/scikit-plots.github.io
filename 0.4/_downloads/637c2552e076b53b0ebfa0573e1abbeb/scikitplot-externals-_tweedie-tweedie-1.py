# Compute the pdf and cdf at a given point:
#
# .. jupyter-execute::
#
import numpy as np
from scikitplot.stats import tweedie
x = 2.0
pdf_val = tweedie.pdf(x, p=1.5, mu=1, phi=1)
cdf_val = tweedie.cdf(x, p=1.5, mu=1, phi=1)
pdf_val, cdf_val
#
# Generate random variates:
#
# .. jupyter-execute::
#
import numpy as np
from scikitplot.stats import tweedie
rvs = tweedie.rvs(p=1.5, mu=1, phi=1, size=16)
rvs
#
# Plot the pdf over a range:
#
# .. jupyter-execute::
#
import numpy as np
from scikitplot.stats import tweedie
import matplotlib.pyplot as plt
x = np.linspace(0, 5, 100)
y = tweedie.pdf(x, p=1.5, mu=1, phi=1)
plt.plot(x, y, label='Tweedie pdf (p=1.5, mu=1, phi=1)')
plt.xlabel("x")
plt.ylabel("Density")
plt.legend()
plt.show()
