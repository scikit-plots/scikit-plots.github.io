from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from scikitplot.utils.helpers import binary_ks_curve
X, y = make_classification(n_samples=1000, n_classes=2, n_informative=3, random_state=0)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=0)
model = LogisticRegression()
model.fit(X_train, y_train)
y_probas = model.predict_proba(X_test)[:, 1]
thresholds, pct1, pct2, ks_statistic, max_distance_at, classes = binary_ks_curve(y_test, y_probas)
plt.plot(thresholds, pct1 - pct2, marker='o')
plt.xlabel('Threshold')
plt.ylabel('KS Statistic')
plt.title('KS Statistic Curve')
plt.grid()
plt.show()
