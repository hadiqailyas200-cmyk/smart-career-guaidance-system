from flask import Blueprint, request, jsonify
import pandas as pd
import numpy as np

from ml_model import model, preprocessor


prediction_bp = Blueprint("prediction", __name__)


@prediction_bp.route("/api/predict", methods=["POST"])
def predict_career():

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "No prediction data received."
        }), 400

    try:

        print("====================================")
        print("PREDICTION REQUEST RECEIVED")
        print("====================================")

        # =====================================================
        # 1. GET EXACT FEATURES FROM TRAINED PREPROCESSOR
        # =====================================================

        expected_columns = list(
            preprocessor.feature_names_in_
        )

        print("Expected features:", len(expected_columns))


        # =====================================================
        # 2. GET NUMERIC AND CATEGORICAL COLUMNS
        # =====================================================

        numeric_columns = []
        categorical_columns = []

        for transformer_name, transformer, columns in (
            preprocessor.transformers_
        ):

            if columns is None:
                continue

            columns = list(columns)

            if transformer_name == "numeric":

                numeric_columns = columns

            elif transformer_name == "categorical":

                categorical_columns = columns


        print(
            "Numeric columns:",
            len(numeric_columns)
        )

        print(
            "Categorical columns:",
            len(categorical_columns)
        )


        # =====================================================
        # 3. CREATE EMPTY INPUT WITH EXACT MODEL FEATURES
        # =====================================================

        test_data = {
            column: 0
            for column in expected_columns
        }


        # =====================================================
        # 4. CATEGORICAL DATA
        # =====================================================

        for column in categorical_columns:

            if column in data:

                value = data[column]

                if value is None:
                    value = ""

                test_data[column] = str(value)

            else:

                test_data[column] = ""


        # =====================================================
        # 5. INTERESTS
        # =====================================================

        interests = data.get(
            "interests",
            []
        )

        if not isinstance(interests, list):

            interests = []


        for interest in interests:

            interest = str(
                interest
            ).strip()

            feature_name = (
                "interest_"
                + interest.lower()
                .replace(" ", "_")
            )

            if feature_name in test_data:

                test_data[feature_name] = 1


        # =====================================================
        # 6. INTEREST COUNT
        # =====================================================

        if "interestCount" in test_data:

            test_data["interestCount"] = float(
                len(interests)
            )


        # =====================================================
        # 7. SKILLS
        # =====================================================

        skills = data.get(
            "skills",
            {}
        )

        if not isinstance(skills, dict):

            skills = {}


        for skill, rating in skills.items():

            skill_name = str(
                skill
            ).strip()

            if skill_name in test_data:

                try:

                    test_data[skill_name] = float(
                        rating
                    )

                except (
                    ValueError,
                    TypeError
                ):

                    test_data[skill_name] = 0.0


        # =====================================================
        # 8. OTHER NUMERIC DATA
        # =====================================================

        numeric_data_fields = [
            "skillsRated",
            "averageSkillRating",
            "interestCount"
        ]


        for field in numeric_data_fields:

            if (
                field in data
                and field in test_data
            ):

                try:

                    test_data[field] = float(
                        data[field]
                    )

                except (
                    ValueError,
                    TypeError
                ):

                    test_data[field] = 0.0


        # =====================================================
        # 9. FORCE ALL NUMERIC MODEL FEATURES TO FLOAT
        # =====================================================

        for column in numeric_columns:

            try:

                value = test_data.get(
                    column,
                    0
                )

                if value is None:
                    value = 0

                test_data[column] = float(
                    value
                )

            except (
                ValueError,
                TypeError
            ):

                test_data[column] = 0.0


        # =====================================================
        # 10. CREATE DATAFRAME
        # =====================================================

        input_df = pd.DataFrame(
            [test_data],
            columns=expected_columns
        )


        # =====================================================
        # 11. FORCE NUMERIC COLUMNS TO REAL FLOAT64
        # =====================================================

        for column in numeric_columns:

            input_df[column] = pd.to_numeric(
                input_df[column],
                errors="coerce"
            ).astype(
                np.float64
            )


        # =====================================================
        # 12. REMOVE NaN / INF FROM NUMERIC DATA
        # =====================================================

        if numeric_columns:

            numeric_array = (
                input_df[numeric_columns]
                .to_numpy(
                    dtype=np.float64
                )
            )

            numeric_array = np.nan_to_num(
                numeric_array,
                nan=0.0,
                posinf=0.0,
                neginf=0.0
            )

            input_df[numeric_columns] = (
                numeric_array
            )


        # =====================================================
        # 13. FORCE CATEGORICAL DATA TO STRING
        # =====================================================

        for column in categorical_columns:

            input_df[column] = (
                input_df[column]
                .fillna("")
                .astype(str)
            )


        # =====================================================
        # 14. DEBUG DATA TYPES
        # =====================================================

        print("====================================")
        print("NUMERIC DATA TYPES")
        print("====================================")

        print(
            input_df[
                numeric_columns
            ].dtypes
        )


        print("====================================")
        print("CATEGORICAL DATA TYPES")
        print("====================================")

        print(
            input_df[
                categorical_columns
            ].dtypes
        )


        # =====================================================
        # 15. PREPROCESS DATA
        # =====================================================

        print("====================================")
        print("STARTING PREPROCESSOR")
        print("====================================")

        processed_data = (
            preprocessor.transform(
                input_df
            )
        )


        print(
            "Processed shape:",
            processed_data.shape
        )


               # =====================================================
        # 16. MODEL PREDICTION
        # =====================================================

        print("====================================")
        print("STARTING MODEL PREDICTION")
        print("====================================")

        # Get prediction probabilities for all careers
        probabilities = model.predict_proba(
            processed_data
        )[0]

        # Get career names from trained model
        career_classes = model.classes_

        # Get indexes of Top 3 highest probabilities
        top_indices = np.argsort(
            probabilities
        )[::-1][:3]

        recommendations = []

        for index in top_indices:

            career_name = str(
                career_classes[index]
            )

            match_percentage = round(
                float(probabilities[index]) * 100,
                2
            )

            recommendations.append({

                "career": career_name,

                "percentage":
                    match_percentage

            })


        # First recommendation
        predicted_career = (
            recommendations[0]["career"]
        )


        print("====================================")
        print("TOP 3 CAREER RECOMMENDATIONS")
        print("====================================")

        for recommendation in recommendations:

            print(
                recommendation["career"],
                "→",
                recommendation["percentage"],
                "%"
            )


        # =====================================================
        # 17. SUCCESS
        # =====================================================

        return jsonify({

            "success": True,

            "career":
                predicted_career,

            "recommendations":
                recommendations

        }), 200


        # =====================================================
        # 17. SUCCESS
        # =====================================================

        print("====================================")
        print(
            "PREDICTED CAREER:",
            predicted_career
        )
        print("====================================")


        return jsonify({

            "success": True,

            "career":
                predicted_career

        }), 200


    except Exception as e:

        print("====================================")
        print("PREDICTION ERROR")
        print("====================================")

        print(
            "ERROR TYPE:",
            type(e).__name__
        )

        print(
            "ERROR:",
            str(e)
        )

        print("====================================")

        return jsonify({

            "success": False,

            "message":
                str(e)

        }), 500