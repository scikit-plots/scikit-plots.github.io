from sklearn.cluster import KMeans
from sklearn.datasets import load_iris as data_3_classes
import scikitplot as skplt
X, y = data_3_classes(return_X_y=True, as_frame=False)
kmeans = KMeans(n_clusters=3, random_state=0)
cluster_labels = kmeans.fit_predict(X)
skplt.metrics.plot_silhouette(
    X,
    cluster_labels,
);
