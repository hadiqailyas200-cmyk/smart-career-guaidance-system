import os
import joblib


# ==============================
# MODEL DIRECTORY
# ==============================

MODEL_DIR = os.path.join(
    os.path.dirname(__file__),
    "models"
)


# ==============================
# LOAD MODEL
# ==============================

model = joblib.load(
    os.path.join(
        MODEL_DIR,
        "extra_trees_model.pkl"
    )
)


# ==============================
# LOAD PREPROCESSOR
# ==============================

preprocessor = joblib.load(
    os.path.join(
        MODEL_DIR,
        "preprocessor.pkl"
    )
)


# ==============================
# LOAD MODEL INFORMATION
# ==============================

model_info = joblib.load(
    os.path.join(
        MODEL_DIR,
        "model_info.pkl"
    )
)


# ==============================
# CHECK
# ==============================

print("====================================")
print("ML MODEL LOADED SUCCESSFULLY")
print("====================================")

print("Model:", type(model).__name__)

print(
    "Number of input features:",
    len(preprocessor.feature_names_in_)
)

print(
    "Number of output features:",
    model.n_features_in_
)

print(
    "Number of career classes:",
    len(model_info["classes"])
)

print("====================================")
# ==============================
# TEST PREDICTION
# ==============================

import pandas as pd


# Create one test record
test_data = {}

# Get all 139 expected input columns
for column in preprocessor.feature_names_in_:
    test_data[column] = 0


# Basic categorical information
test_data["field"] = "computer-science"
test_data["fieldName"] = "Computer Science"
test_data["educationLevel"] = "Undergraduate"
test_data["academicPerformance"] = "Good"
test_data["currentStatus"] = "Student"

# Career preferences
test_data["workType"] = "Technical"
test_data["workStyle"] = "Independent"
test_data["workEnvironment"] = "Office"
test_data["careerPriority"] = "Growth"
test_data["challengeLevel"] = "High"

# Career direction
test_data["careerArea"] = "Technology"
test_data["careerImpact"] = "Innovation"
test_data["growthImportance"] = "Very Important"
test_data["learningMindset"] = "High"
test_data["careerConfidence"] = "High"

# Interest count
test_data["interestCount"] = 4


# Some sample skill ratings
test_data["Programming"] = 5
test_data["Problem Solving"] = 5
test_data["Logical Thinking"] = 4
test_data["Web Development"] = 4
test_data["Software Development"] = 5
test_data["Data Analysis"] = 3
test_data["Computer Skills"] = 5


# Sample interests
test_data["interest_programming"] = 1
test_data["interest_web_development"] = 1
test_data["interest_software_development"] = 1
test_data["interest_artificial_intelligence"] = 1


# Convert to DataFrame
test_df = pd.DataFrame(
    [test_data],
    columns=preprocessor.feature_names_in_
)


print("\n====================================")
print("TEST INPUT CREATED")
print("====================================")

print("Input shape:", test_df.shape)


# Preprocess
processed_data = preprocessor.transform(test_df)


print("\nProcessed shape:", processed_data.shape)


# Predict
prediction = model.predict(processed_data)


print("\n====================================")
print("PREDICTION RESULT")
print("====================================")

print("Predicted class:", prediction[0])


# Find career name from model classes
predicted_index = prediction[0]

print("Career:", predicted_index)

print("====================================")