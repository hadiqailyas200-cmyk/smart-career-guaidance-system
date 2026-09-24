import os
import joblib


MODEL_DIR = os.path.join(
    os.path.dirname(__file__),
    "models"
)


model = joblib.load(
    os.path.join(
        MODEL_DIR,
        "extra_trees_model.pkl"
    )
)


preprocessor = joblib.load(
    os.path.join(
        MODEL_DIR,
        "preprocessor.pkl"
    )
)


model_info = joblib.load(
    os.path.join(
        MODEL_DIR,
        "model_info.pkl"
    )
)


print("====================================")
print("ML MODEL LOADED INTO FLASK")
print("====================================")
print("Model:", type(model).__name__)
print("Input features:", len(preprocessor.feature_names_in_))
print("Processed features:", model.n_features_in_)
print("Career classes:", len(model_info["classes"]))
print("====================================")