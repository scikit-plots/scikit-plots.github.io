import scikitplot as skplt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=0)
clf = DecisionTreeClassifier(max_depth=1, random_state=0)
clf = clf.fit(X_train, y_train)
y_prob = clf.predict_proba(X_test)
skplt.deciles.plot_lift_decile_wise(y_test, y_prob[:, 1])
