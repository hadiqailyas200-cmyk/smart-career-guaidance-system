
/* =========================================================
   RECOMMENDATION PAGE
   Career Match Data — AI Prediction
   ========================================================= */

const careerMatchesGrid =
    document.getElementById("careerMatchesGrid");

const heroRecommendedCareer =
    document.getElementById("heroRecommendedCareer");
if (careerMatchesGrid) {
    const heroMatchPercentage =
        document.getElementById("heroMatchPercentage");
    /* =========================================
       GET SAVED AI PREDICTION
    ========================================= */

    let savedPrediction = {};

    try {

        savedPrediction =
            JSON.parse(
                sessionStorage.getItem("predictionResult")
            ) || {};

    } catch (error) {

        console.error(
            "Career prediction data error:",
            error
        );

    }


    const recommendedCareer =
        savedPrediction.career ||
        "Software Developer";

    if (heroRecommendedCareer) {
        heroRecommendedCareer.textContent =
            recommendedCareer;
    }
    /* =========================================
       DYNAMIC AI RECOMMENDATIONS
    ========================================= */

    const recommendations =
        Array.isArray(savedPrediction.recommendations)
            ? savedPrediction.recommendations
            : [];


    console.log(
        "AI Recommendations:",
        recommendations
    );


    /* =========================================
       HERO MATCH PERCENTAGE
    ========================================= */

    const heroPercentage =
        recommendations.length > 0
            ? recommendations[0].percentage
            : 0;


    if (heroMatchPercentage) {

        heroMatchPercentage.textContent =
            heroPercentage + "%";

    }
    /* =========================================
       DYNAMIC HERO SCORE CIRCLE
    ========================================= */

    const heroScoreCircle =
        document.querySelector(
            ".recommendation-score-circle"
        );


    if (heroScoreCircle) {

        heroScoreCircle.style.setProperty(
            "--match-progress",
            heroPercentage + "%"
        );

    }


    console.log(
        "Hero Match Percentage:",
        heroPercentage + "%"
    );

    /* =========================================
   CREATE DYNAMIC CAREER MATCH DATA
========================================= */

    const careerIcons = [
        "⌘",
        "◈",
        "✦"
    ];


    const careerDescriptions = [
        "A strong career match based on your assessment results and career preferences.",

        "A suitable career path based on your assessment profile and interests.",

        "Another career option identified from your assessment results."
    ];


    const careerMatches =
        recommendations.map(
            (recommendation, index) => {

                return {

                    rank: index + 1,

                    career:
                        recommendation.career,

                    match:
                        recommendation.percentage,

                    icon:
                        careerIcons[index] || "✦",

                    description:
                        careerDescriptions[index] ||
                        careerDescriptions[2],

                    skills: []

                };

            }
        );
    /* =========================================
       CREATE CAREER CARDS
    ========================================= */

    careerMatchesGrid.innerHTML =
        careerMatches.map((career, index) => {

            const topMatch =
                index === 0
                    ? "top-match"
                    : "";


            const topLabel =
                index === 0
                    ? `<span class="career-top-label">
                           TOP MATCH
                       </span>`
                    : "";


            const skillsHTML =
                career.skills.map(skill => {

                    return `
                        <span class="career-match-skill">
                            ${skill}
                        </span>
                    `;

                }).join("");


            return `

                <article
                    class="career-match-card ${topMatch}"
                >

                    ${topLabel}


                    <!-- Card Top -->

                    <div class="career-match-top">

                        <div class="career-match-icon">
                            ${career.icon}
                        </div>


                        <div class="career-match-percentage">

                            <strong>
                                ${career.match}%
                            </strong>

                            <span>
                                Match
                            </span>

                        </div>

                    </div>


                    <!-- Career Content -->

                    <h3>
                        ${career.career}
                    </h3>


                    <p class="career-match-card-description">

                        ${career.description}

                    </p>


                    <!-- Skills -->

                    <div class="career-match-skills">

                        ${skillsHTML}

                    </div>


                    <!-- Button -->

                    <a
                        href="recommendation.html"
                        class="career-match-button"
                        data-career="${career.career}"
                    >

                        View Skill Gap

                        <span>
                            →
                        </span>

                    </a>

                </article>

            `;

        }).join("");


    /* =========================================
       SKILL GAP BUTTON
    ========================================= */

    const skillGapButtons =
        document.querySelectorAll(
            ".career-match-button"
        );


   skillGapButtons.forEach(button => {

    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const selectedCareer =
                this.dataset.career;


            console.log(
                "Selected Career:",
                selectedCareer
            );


            /* =========================================
               SAVE SELECTED CAREER
            ========================================= */

            sessionStorage.setItem(
                "selectedCareer",
                selectedCareer
            );


            /* =========================================
               SCROLL TO SKILL GAP
            ========================================= */

            const skillGapSection =
                document.querySelector(
                    ".skill-gap-section"
                );


            if (skillGapSection) {

                skillGapSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});
}

/* =====================================================
   SKILL GAP ANALYSIS — DYNAMIC DATA
===================================================== */

const skillGapMatchPercentage =
    document.getElementById("skillGapMatchPercentage");

const skillGapCareer =
    document.getElementById("skillGapCareer");

const currentSkillsCount =
    document.getElementById("currentSkillsCount");

const improveSkillsCount =
    document.getElementById("improveSkillsCount");

const requiredSkillsCount =
    document.getElementById("requiredSkillsCount");

const skillGapCareerRight =
    document.getElementById("skillGapCareerRight");

const currentSkillsList =
    document.getElementById("currentSkillsList");

const improveSkillsList =
    document.getElementById("improveSkillsList");

const skillGapNextFocus =
    document.getElementById("skillGapNextFocus");
async function loadSkillGapAnalysis()
 {

    try {

        /* =============================================
           1. GET ASSESSMENT DATA
        ============================================= */

        let assessmentData = {};

        try {

            assessmentData =
                JSON.parse(
                    sessionStorage.getItem(
                        "assessmentData"
                    )
                ) || {};

        } catch (error) {

            console.error(
                "Assessment data error:",
                error
            );

        }


        /* =============================================
           2. GET SELECTED CAREER
        ============================================= */

        let predictionResult = {};

        try {

            predictionResult =
                JSON.parse(
                    sessionStorage.getItem(
                        "predictionResult"
                    )
                ) || {};

        } catch (error) {

            console.error(
                "Prediction data error:",
                error
            );

        }


        const selectedCareer =
            sessionStorage.getItem(
                "selectedCareer"
            ) ||
            predictionResult.career ||
            assessmentData.predictedCareer ||
            assessmentData.prediction?.career;


        if (!selectedCareer) {

            console.error(
                "No selected career found."
            );

            return;

        }


        /* =============================================
           3. GET STUDENT SKILLS
        ============================================= */

        const studentSkills =
            assessmentData.skills || {};


        console.log(
            "===================================="
        );

        console.log(
            "SKILL GAP ANALYSIS STARTED"
        );

        console.log(
            "Selected Career:",
            selectedCareer
        );

        console.log(
            "Student Skills:",
            studentSkills
        );

        console.log(
            "===================================="
        );


        /* =============================================
           4. SEND DATA TO SKILL GAP API
        ============================================= */

        const response =
            await fetch(
                "http://127.0.0.1:5000/api/skill-gap",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        career:
                            selectedCareer,

                        skills:
                            studentSkills

                    })
                }
            );


        /* =============================================
           5. READ RESPONSE
        ============================================= */

        const result =
            await response.json();


        console.log(
            "Skill Gap API response:",
            result
        );


        /* =============================================
           6. CHECK SUCCESS
        ============================================= */

        if (
            !response.ok ||
            !result.success
        ) {

            throw new Error(
                result.message ||
                "Skill gap analysis failed."
            );

        }


        /* =============================================
           7. UPDATE SUMMARY
        ============================================= */

        if (skillGapMatchPercentage) {

            skillGapMatchPercentage.textContent =
                result.skillMatch + "%";

        }


        if (skillGapCareer) {

            skillGapCareer.textContent =
                result.career;

        }


        if (skillGapCareerRight) {

            skillGapCareerRight.textContent =
                result.career;

        }


        if (currentSkillsCount) {

            currentSkillsCount.textContent =
                result.currentSkillsCount;

        }


        if (improveSkillsCount) {

            improveSkillsCount.textContent =
                result.improveSkillsCount;

        }


        if (requiredSkillsCount) {

            requiredSkillsCount.textContent =
                result.requiredSkillsCount;

        }

/* =============================================
   UPDATE NEXT FOCUS
============================================= */

if (skillGapNextFocus) {

    const focusSkills =
        Array.isArray(result.nextFocus)
            ? result.nextFocus
            : [];

    if (focusSkills.length > 0) {

        const focusNames =
            focusSkills.map(function (skill) {
                return skill.skill;
            });

        skillGapNextFocus.textContent =
            `Start with ${focusNames.join(" and ")} to strengthen your ${result.career} profile.`;

    } else {

        skillGapNextFocus.textContent =
            `Keep strengthening your skills to maintain a strong ${result.career} profile.`;

    }

}
        /* =============================================
           8. CURRENT SKILLS
        ============================================= */

        if (currentSkillsList) {

            currentSkillsList.innerHTML =
                result.currentSkills
                    .map(function (skill) {

                        return `

                            <div class="skill-row">

                                <div class="skill-row-info">

                                    <span>
                                        ${skill.skill}
                                    </span>

                                    <strong>
                                        ${skill.percentage}%
                                    </strong>

                                </div>

                                <div class="skill-progress">

                                    <span
                                        style="width:${skill.percentage}%;">
                                    </span>

                                </div>

                            </div>

                        `;

                    })
                    .join("");

        }


        /* =============================================
           9. SKILLS TO IMPROVE
        ============================================= */

        if (improveSkillsList) {

            improveSkillsList.innerHTML =
                result.skillsToImprove
                    .map(function (skill) {

                        return `

                            <div class="skill-row">

                                <div class="skill-row-info">

                                    <span>
                                        ${skill.skill}
                                    </span>

                                    <strong>
                                        ${skill.percentage}%
                                    </strong>

                                </div>

                                <div class="skill-progress skill-gap-progress">

                                    <span
                                        style="width:${skill.percentage}%;">
                                    </span>

                                </div>

                            </div>

                        `;

                    })
                    .join("");

        }


        console.log(
            "===================================="
        );

        console.log(
            "SKILL GAP ANALYSIS SUCCESSFUL"
        );

        console.log(
            "Skill Match:",
            result.skillMatch + "%"
        );

        console.log(
            "===================================="
        );


    } catch (error) {

        console.error(
            "===================================="
        );

        console.error(
            "SKILL GAP ERROR"
        );

        console.error(
            error
        );

        console.error(
            "===================================="
        );

    }

}


/* =====================================================
   START SKILL GAP ANALYSIS
===================================================== */

loadSkillGapAnalysis();
