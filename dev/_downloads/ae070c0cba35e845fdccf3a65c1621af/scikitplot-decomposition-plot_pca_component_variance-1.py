from sklearn.decomposition import PCA
from sklearn.datasets import load_iris as data_3_classes
import scikitplot as skplt
X, y = data_3_classes(return_X_y=True, as_frame=False)
pca = PCA(random_state=0).fit(X)
skplt.decomposition.plot_pca_component_variance(pca);
