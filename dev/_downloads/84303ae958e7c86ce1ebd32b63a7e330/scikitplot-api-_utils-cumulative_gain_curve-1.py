from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
X, y = make_classification(n_samples=1000, n_classes=2, n_informative=3, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
model = LogisticRegression()
model.fit(X_train, y_train)
y_scores = model.predict_proba(X_test)[:, 1]
import scikitplot as sp
percentages, gains = sp.api._utils.cumulative_gain_curve(y_test, y_scores)
plt.plot(percentages, gains, marker='o')
plt.xlabel('Percentage of Samples')
plt.ylabel('Gain')
plt.title('Cumulative Gain Curve')
plt.grid()
plt.show()
