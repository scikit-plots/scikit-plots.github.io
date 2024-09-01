from sklearn.datasets import load_digits
X, y = load_digits(return_X_y=True)

from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier(n_estimators=5, max_depth=5, random_state=1)

from sklearn.model_selection import cross_val_predict
y_pred = cross_val_predict(clf, X, y)

import scikitplot as skplt
fig1 = skplt.metrics.plot_classifier_eval(
    y, y_pred,
    labels=np.unique(y),
    figsize=(8, 3.2),
    title='Confusion Matrix'
);