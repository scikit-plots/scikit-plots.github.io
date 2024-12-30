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
