import numpy as np; np.random.seed(0)
from sklearn.datasets import load_diabetes as data_regression
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Ridge
import scikitplot as skplt
X, y = data_regression(return_X_y=True, as_frame=False)
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.5, random_state=0)
model = Ridge(alpha=1.0).fit(X_train, y_train)
y_val_pred = model.predict(X_val)
skplt.metrics.plot_residuals_distribution(
    y_val, y_val_pred, dist_type='tweedie',
);
