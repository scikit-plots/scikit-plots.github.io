from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import LinearSVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_predict
import numpy as np; np.random.seed(0)
import scikitplot as skplt
X, y = make_classification(
    n_samples=100000,
    n_features=20,
    n_informative=4,
    n_redundant=2,
    n_repeated=0,
    n_classes=3,
    n_clusters_per_class=2,
    random_state=0
)
X_train, y_train, X_val, y_val = X[:1000], y[:1000], X[1000:], y[1000:]
lr_probas = LogisticRegression().fit(X_train, y_train).predict_proba(X_val)
nb_probas = GaussianNB().fit(X_train, y_train).predict_proba(X_val)
svc_scores = LinearSVC().fit(X_train, y_train).decision_function(X_val)
rf_probas = RandomForestClassifier().fit(X_train, y_train).predict_proba(X_val)
probas_dict = {
    LogisticRegression(): lr_probas,
    GaussianNB(): nb_probas,
    LinearSVC(): svc_scores,
    RandomForestClassifier(): rf_probas,
}
ax = skplt.metrics.plot_calibration_curve(
    y_val,
    y_prob_list=list(probas_dict.values()),
    y_is_decision=list([False, False, True, False]),
    n_bins=10,
    clf_names=list(probas_dict.keys()),
    multi_class=None,
    class_index=2,
    classes_to_plot=[2],
);
