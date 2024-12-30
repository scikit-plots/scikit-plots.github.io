from sklearn.datasets import load_digits as data_10_classes
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
import scikitplot as skplt
X, y = data_10_classes(return_X_y=True, as_frame=False)
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.5, random_state=0)
model = GaussianNB()
model.fit(X_train, y_train)
y_val_pred = model.predict(X_val)
skplt.metrics.plot_confusion_matrix(
    y_val, y_val_pred,
);
