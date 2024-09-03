from sklearn.cluster import KMeans
from sklearn.datasets import load_iris as data_3_classes
import scikitplot as skplt
X, y = data_3_classes(return_X_y=True, as_frame=False)
kmeans = KMeans(random_state=0)
skplt.cluster.plot_elbow(
    kmeans,
    X,
    cluster_ranges=range(1, 10),
);
