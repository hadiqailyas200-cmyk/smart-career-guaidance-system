import joblib
import os

MODEL_DIR = os.path.join(
    os.path.dirname(__file__),
    "models"
)

preprocessor = joblib.load(
    os.path.join(
        MODEL_DIR,
        "preprocessor.pkl"
    )
)

print("====================================")
print("PREPROCESSOR CHECK")
print("====================================")

print("Preprocessor type:")
print(type(preprocessor).__name__)

print("\nExpected features:")
print(len(preprocessor.feature_names_in_))

print("\nFeature names:")
print(list(preprocessor.feature_names_in_))

print("\nTransformers:")
for name, transformer, columns in preprocessor.transformers_:

    print("\n------------------------------------")
    print("NAME:", name)
    print("TRANSFORMER:", type(transformer).__name__)
    print("COLUMNS:", columns)

print("\n====================================")