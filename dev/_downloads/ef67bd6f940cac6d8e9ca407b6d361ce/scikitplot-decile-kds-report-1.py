from sklearn.datasets import (
    load_breast_cancer as data_2_classes,
)
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
X, y = data_2_classes(return_X_y=True, as_frame=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.5, random_state=0
)
clf = DecisionTreeClassifier(max_depth=1, random_state=0).fit(
    X_train, y_train
)
y_prob = clf.predict_proba(X_test)
import scikitplot.decile.kds as kds
dt = kds.report(
    y_test, y_prob, class_index=1
)
dt
