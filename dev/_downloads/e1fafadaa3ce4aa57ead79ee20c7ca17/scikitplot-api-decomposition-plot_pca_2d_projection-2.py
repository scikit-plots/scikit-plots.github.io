from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.datasets import load_iris as data_3_classes
import scikitplot as skplt
X, y = data_3_classes(return_X_y=True, as_frame=True)
clf = LinearDiscriminantAnalysis().fit(X, y)
skplt.decomposition.plot_pca_2d_projection(clf, X, y, biplot=True, feature_labels=X.columns.tolist());
