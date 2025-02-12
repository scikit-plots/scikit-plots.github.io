from sklearn.discriminant_analysis import (
    LinearDiscriminantAnalysis,
)
from sklearn.datasets import load_digits as data_10_classes
import scikitplot as skplt
X, y = data_10_classes(return_X_y=True, as_frame=False)
clf = LinearDiscriminantAnalysis().fit(X, y)
skplt.decomposition.plot_pca_component_variance(clf)
