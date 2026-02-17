from sklearn.datasets import load_iris as data_3_classes
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
X, y = data_3_classes(return_X_y=True, as_frame=False)
X_train, X_val, y_train, y_val = train_test_split(
    X, y, test_size=0.5, random_state=0
)
model = LogisticRegression(max_iter=int(1e5), random_state=0).fit(
    X_train, y_train
)
y_score = model.predict_proba(X_val)
import scikitplot.decile.kds as kds
kds.plot_cumulative_gain(
    y_val, y_score, class_index=1,
);
