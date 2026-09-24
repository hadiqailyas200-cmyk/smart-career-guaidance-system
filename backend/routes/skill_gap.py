from flask import Blueprint, request, jsonify


skill_gap_bp = Blueprint("skill_gap", __name__)


# =====================================================
# CAREER → REQUIRED SKILLS
# =====================================================

CAREER_REQUIRED_SKILLS = {

    # ================= COMPUTER / IT =================

    "AI Engineer": [
        "Programming",
        "Problem Solving",
        "Logical Thinking",
        "Web Development",
        "Database Management",
        "Software Development",
        "Data Analysis",
        "Computer Skills"
    ],

    "Cybersecurity Analyst": [
        "Programming",
        "Problem Solving",
        "Logical Thinking",
        "Web Development",
        "Database Management",
        "Software Development",
        "Data Analysis",
        "Computer Skills"
    ],

    "Data Scientist": [
        "Programming",
        "Problem Solving",
        "Logical Thinking",
        "Web Development",
        "Database Management",
        "Software Development",
        "Data Analysis",
        "Computer Skills"
    ],

    "Software Developer": [
        "Programming",
        "Problem Solving",
        "Logical Thinking",
        "Web Development",
        "Database Management",
        "Software Development",
        "Data Analysis",
        "Computer Skills"
    ],

    "Web Developer": [
        "Programming",
        "Problem Solving",
        "Logical Thinking",
        "Web Development",
        "Database Management",
        "Software Development",
        "Data Analysis",
        "Computer Skills"
    ],


    # ================= CLOUD / IT =================

    "Cloud Engineer": [
        "Database Management",
        "Computer Skills",
        "Computer Networking",
        "Cloud Computing",
        "IT Support",
        "System Administration",
        "Cybersecurity",
        "Troubleshooting"
    ],

    "IT Manager": [
        "Database Management",
        "Computer Skills",
        "Computer Networking",
        "Cloud Computing",
        "IT Support",
        "System Administration",
        "Cybersecurity",
        "Troubleshooting"
    ],

    "IT Support Specialist": [
        "Database Management",
        "Computer Skills",
        "Computer Networking",
        "Cloud Computing",
        "IT Support",
        "System Administration",
        "Cybersecurity",
        "Troubleshooting"
    ],

    "Network Administrator": [
        "Database Management",
        "Computer Skills",
        "Computer Networking",
        "Cloud Computing",
        "IT Support",
        "System Administration",
        "Cybersecurity",
        "Troubleshooting"
    ],

    "Systems Administrator": [
        "Database Management",
        "Computer Skills",
        "Computer Networking",
        "Cloud Computing",
        "IT Support",
        "System Administration",
        "Cybersecurity",
        "Troubleshooting"
    ],


    # ================= BUSINESS =================

    "Business Manager": [
        "Problem Solving",
        "Communication",
        "Leadership",
        "Marketing",
        "Financial Skills",
        "Business Planning",
        "Team Management",
        "Decision Making"
    ],

    "Economist": [
        "Problem Solving",
        "Communication",
        "Leadership",
        "Marketing",
        "Financial Skills",
        "Business Planning",
        "Team Management",
        "Decision Making"
    ],

    "Financial Analyst": [
        "Problem Solving",
        "Communication",
        "Leadership",
        "Marketing",
        "Financial Skills",
        "Business Planning",
        "Team Management",
        "Decision Making"
    ],

    "HR Manager": [
        "Problem Solving",
        "Communication",
        "Leadership",
        "Marketing",
        "Financial Skills",
        "Business Planning",
        "Team Management",
        "Decision Making"
    ],

    "Marketing Specialist": [
        "Problem Solving",
        "Communication",
        "Leadership",
        "Marketing",
        "Financial Skills",
        "Business Planning",
        "Team Management",
        "Decision Making"
    ],


    # ================= ENGINEERING =================

    "Chemical Engineer": [
        "Problem Solving",
        "Logical Thinking",
        "Mathematics",
        "Technical Design",
        "Analytical Thinking",
        "Engineering Software",
        "Technical Knowledge",
        "Project Management"
    ],

    "Civil Engineer": [
        "Problem Solving",
        "Logical Thinking",
        "Mathematics",
        "Technical Design",
        "Analytical Thinking",
        "Engineering Software",
        "Technical Knowledge",
        "Project Management"
    ],

    "Computer Engineer": [
        "Problem Solving",
        "Logical Thinking",
        "Mathematics",
        "Technical Design",
        "Analytical Thinking",
        "Engineering Software",
        "Technical Knowledge",
        "Project Management"
    ],

    "Electrical Engineer": [
        "Problem Solving",
        "Logical Thinking",
        "Mathematics",
        "Technical Design",
        "Analytical Thinking",
        "Engineering Software",
        "Technical Knowledge",
        "Project Management"
    ],

    "Mechanical Engineer": [
        "Problem Solving",
        "Logical Thinking",
        "Mathematics",
        "Technical Design",
        "Analytical Thinking",
        "Engineering Software",
        "Technical Knowledge",
        "Project Management"
    ],


    # ================= SCIENCE =================

    "Biologist": [
        "Problem Solving",
        "Data Analysis",
        "Mathematics",
        "Analytical Thinking",
        "Laboratory Skills",
        "Critical Thinking",
        "Scientific Research",
        "Scientific Writing"
    ],

    "Biotechnologist": [
        "Problem Solving",
        "Data Analysis",
        "Mathematics",
        "Analytical Thinking",
        "Laboratory Skills",
        "Critical Thinking",
        "Scientific Research",
        "Scientific Writing"
    ],

    "Chemist": [
        "Problem Solving",
        "Data Analysis",
        "Mathematics",
        "Analytical Thinking",
        "Laboratory Skills",
        "Critical Thinking",
        "Scientific Research",
        "Scientific Writing"
    ],

    "Mathematician": [
        "Problem Solving",
        "Data Analysis",
        "Mathematics",
        "Analytical Thinking",
        "Laboratory Skills",
        "Critical Thinking",
        "Scientific Research",
        "Scientific Writing"
    ],

    "Physicist": [
        "Problem Solving",
        "Data Analysis",
        "Mathematics",
        "Analytical Thinking",
        "Laboratory Skills",
        "Critical Thinking",
        "Scientific Research",
        "Scientific Writing"
    ],


    # ================= AGRICULTURE / ENVIRONMENT =================

    "Agricultural Scientist": [
        "Problem Solving",
        "Data Analysis",
        "Research",
        "Agriculture Knowledge",
        "Environmental Knowledge",
        "Sustainability",
        "Scientific Thinking",
        "Field Work"
    ],

    "Agronomist": [
        "Problem Solving",
        "Data Analysis",
        "Research",
        "Agriculture Knowledge",
        "Environmental Knowledge",
        "Sustainability",
        "Scientific Thinking",
        "Field Work"
    ],

    "Environmental Scientist": [
        "Problem Solving",
        "Data Analysis",
        "Research",
        "Agriculture Knowledge",
        "Environmental Knowledge",
        "Sustainability",
        "Scientific Thinking",
        "Field Work"
    ],

    "Forester": [
        "Problem Solving",
        "Data Analysis",
        "Research",
        "Agriculture Knowledge",
        "Environmental Knowledge",
        "Sustainability",
        "Scientific Thinking",
        "Field Work"
    ],

    "Horticulturist": [
        "Problem Solving",
        "Data Analysis",
        "Research",
        "Agriculture Knowledge",
        "Environmental Knowledge",
        "Sustainability",
        "Scientific Thinking",
        "Field Work"
    ],


    # ================= MEDICAL =================

    "Dentist": [
        "Problem Solving",
        "Biology",
        "Medical Knowledge",
        "Patient Care",
        "Communication",
        "Research",
        "Laboratory Skills",
        "Critical Thinking"
    ],

    "Medical Doctor": [
        "Problem Solving",
        "Biology",
        "Medical Knowledge",
        "Patient Care",
        "Communication",
        "Research",
        "Laboratory Skills",
        "Critical Thinking"
    ],

    "Nurse": [
        "Problem Solving",
        "Biology",
        "Medical Knowledge",
        "Patient Care",
        "Communication",
        "Research",
        "Laboratory Skills",
        "Critical Thinking"
    ],

    "Pharmacist": [
        "Problem Solving",
        "Biology",
        "Medical Knowledge",
        "Patient Care",
        "Communication",
        "Research",
        "Laboratory Skills",
        "Critical Thinking"
    ],

    "Physical Therapist": [
        "Problem Solving",
        "Biology",
        "Medical Knowledge",
        "Patient Care",
        "Communication",
        "Research",
        "Laboratory Skills",
        "Critical Thinking"
    ],


    # ================= EDUCATION =================

    "Early Childhood Educator": [
        "Problem Solving",
        "Communication",
        "Research",
        "Leadership",
        "Teaching",
        "Public Speaking",
        "Lesson Planning",
        "Classroom Management"
    ],

    "English Teacher": [
        "Problem Solving",
        "Communication",
        "Research",
        "Leadership",
        "Teaching",
        "Public Speaking",
        "Lesson Planning",
        "Classroom Management"
    ],

    "Mathematics Teacher": [
        "Problem Solving",
        "Communication",
        "Research",
        "Leadership",
        "Teaching",
        "Public Speaking",
        "Lesson Planning",
        "Classroom Management"
    ],

    "Science Teacher": [
        "Problem Solving",
        "Communication",
        "Research",
        "Leadership",
        "Teaching",
        "Public Speaking",
        "Lesson Planning",
        "Classroom Management"
    ],

    "Teacher": [
        "Problem Solving",
        "Communication",
        "Research",
        "Leadership",
        "Teaching",
        "Public Speaking",
        "Lesson Planning",
        "Classroom Management"
    ],


    # ================= CREATIVE =================

    "Fashion Designer": [
        "Communication",
        "Creativity",
        "Graphic Design",
        "Visual Communication",
        "Drawing",
        "Design Thinking",
        "Photography",
        "Creative Problem Solving"
    ],

    "Fine Artist": [
        "Communication",
        "Creativity",
        "Graphic Design",
        "Visual Communication",
        "Drawing",
        "Design Thinking",
        "Photography",
        "Creative Problem Solving"
    ],

    "Graphic Designer": [
        "Communication",
        "Creativity",
        "Graphic Design",
        "Visual Communication",
        "Drawing",
        "Design Thinking",
        "Photography",
        "Creative Problem Solving"
    ],

    "Interior Designer": [
        "Communication",
        "Creativity",
        "Graphic Design",
        "Visual Communication",
        "Drawing",
        "Design Thinking",
        "Photography",
        "Creative Problem Solving"
    ],

    "Media & Communication Specialist": [
        "Communication",
        "Creativity",
        "Graphic Design",
        "Visual Communication",
        "Drawing",
        "Design Thinking",
        "Photography",
        "Creative Problem Solving"
    ],


    # ================= LAW =================

    "Corporate Lawyer": [
        "Problem Solving",
        "Communication",
        "Critical Thinking",
        "Legal Research",
        "Argumentation",
        "Case Analysis",
        "Reading",
        "Writing"
    ],

    "Lawyer": [
        "Problem Solving",
        "Communication",
        "Critical Thinking",
        "Legal Research",
        "Argumentation",
        "Case Analysis",
        "Reading",
        "Writing"
    ],

    "Legal Consultant": [
        "Problem Solving",
        "Communication",
        "Critical Thinking",
        "Legal Research",
        "Argumentation",
        "Case Analysis",
        "Reading",
        "Writing"
    ],

    "Legal Researcher": [
        "Problem Solving",
        "Communication",
        "Critical Thinking",
        "Legal Research",
        "Argumentation",
        "Case Analysis",
        "Reading",
        "Writing"
    ],

    "Shariah Lawyer": [
        "Problem Solving",
        "Communication",
        "Critical Thinking",
        "Legal Research",
        "Argumentation",
        "Case Analysis",
        "Reading",
        "Writing"
    ]
}


# =====================================================
# SKILL RATING → PERCENTAGE
# =====================================================

def rating_to_percentage(rating):

    try:
        rating = float(rating)
    except (TypeError, ValueError):
        return 0

    if rating < 1:
        rating = 1

    if rating > 5:
        rating = 5

    return round((rating / 5) * 100)


# =====================================================
# SKILL GAP API
# =====================================================

@skill_gap_bp.route("/api/skill-gap", methods=["POST"])
def skill_gap():

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "No skill gap data received."
        }), 400

    try:

        selected_career = data.get("career", "")
        student_skills = data.get("skills", {})

        if not selected_career:

            return jsonify({
                "success": False,
                "message": "Career is required."
            }), 400

        if not isinstance(student_skills, dict):

            student_skills = {}


        # -------------------------------------------------
        # GET REQUIRED SKILLS
        # -------------------------------------------------

        required_skills = \
            CAREER_REQUIRED_SKILLS.get(
                selected_career,
                []
            )


        if not required_skills:

            return jsonify({
                "success": False,
                "message":
                    f"No required skills found for {selected_career}."
            }), 404


        current_skills = []
        skills_to_improve = []
        skill_results = []


        # -------------------------------------------------
        # COMPARE STUDENT SKILLS
        # -------------------------------------------------

        for skill in required_skills:

            rating = student_skills.get(
                skill,
                0
            )

            percentage = rating_to_percentage(
                rating
            )


            skill_data = {
                "skill": skill,
                "rating": rating,
                "percentage": percentage
            }


            skill_results.append(
                skill_data
            )


            if percentage >= 80:

                current_skills.append(
                    skill_data
                )

            else:

                skills_to_improve.append(
                    skill_data
                )


        # -------------------------------------------------
        # OVERALL SKILL MATCH
        # -------------------------------------------------

        if skill_results:

            skill_match = round(
                sum(
                    item["percentage"]
                    for item in skill_results
                ) / len(skill_results)
            )

        else:

            skill_match = 0


        # -------------------------------------------------
        # NEXT FOCUS
        # -------------------------------------------------

        sorted_gaps = sorted(
            skills_to_improve,
            key=lambda item: item["percentage"]
        )


        next_focus = sorted_gaps[:2]


        # -------------------------------------------------
        # RESPONSE
        # -------------------------------------------------

        print("====================================")
        print("SKILL GAP ANALYSIS")
        print("====================================")
        print("Career:", selected_career)
        print("Skill Match:", skill_match)
        print("Current Skills:", len(current_skills))
        print("Skills to Improve:", len(skills_to_improve))
        print("Required Skills:", len(required_skills))
        print("====================================")


        return jsonify({

            "success": True,

            "career": selected_career,

            "skillMatch": skill_match,

            "currentSkillsCount":
                len(current_skills),

            "improveSkillsCount":
                len(skills_to_improve),

            "requiredSkillsCount":
                len(required_skills),

            "currentSkills":
                current_skills,

            "skillsToImprove":
                skills_to_improve,

            "requiredSkills":
                required_skills,

            "nextFocus":
                next_focus,

            "skills":
                skill_results

        }), 200


    except Exception as e:

        print("====================================")
        print("SKILL GAP ERROR")
        print("====================================")
        print("ERROR:", str(e))
        print("====================================")


        return jsonify({

            "success": False,

            "message": str(e)

        }), 500