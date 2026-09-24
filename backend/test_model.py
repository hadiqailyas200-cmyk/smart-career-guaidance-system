import os
import pickle

MODEL_DIR = os.path.join(
    os.path.dirname(__file__),
    "models"
)

# -----------------------------
# Load model
# -----------------------------
with open(
    os.path.join(MODEL_DIR, "extra_trees_model.pkl"),
    "rb"
) as file:
    model = pickle.load(file)

print("MODEL LOADED")
print("Type:", type(model))
print("Shape:", getattr(model, "shape", "No shape"))

print("=" * 50)


# -----------------------------
# Load preprocessor
# -----------------------------
with open(
    os.path.join(MODEL_DIR, "preprocessor.pkl"),
    "rb"
) as file:
    preprocessor = pickle.load(file)

print("PREPROCESSOR LOADED")
print("Type:", type(preprocessor))
print("Shape:", getattr(preprocessor, "shape", "No shape"))

print("=" * 50)


# -----------------------------
# Load model information
# -----------------------------
with open(
    os.path.join(MODEL_DIR, "model_info.pkl"),
    "rb"
) as file:
    model_info = pickle.load(file)

print("MODEL INFO LOADED")
print("Type:", type(model_info))

print("\nMODEL INFO CONTENT:")
print(model_info)

print("=" * 50)

print("ALL MODEL INFORMATION DISPLAYED")
print("\nMODEL ARRAY CONTENT TYPE:")
print(type(model[0]))

print("\nPREPROCESSOR ARRAY CONTENT TYPE:")
print(type(preprocessor[0]))

print("\nFIRST MODEL OBJECT:")
print(model[0])

print("\nFIRST PREPROCESSOR OBJECT:")
print(preprocessor[0])