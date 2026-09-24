/* ========================================================= 
   SMART CAREER GUIDANCE SYSTEM 
   ASSESSMENT.JS 
   STEP 01 → STEP 06 
   SINGLE-STEP DISPLAY VERSION 
 
   IMPORTANT: 
   Only ONE assessment step is visible at a time. 
   No automatic scrolling between steps. 
========================================================= */ 
 
document.addEventListener("DOMContentLoaded", function () { 
 
    /* ===================================================== 
       STEP ELEMENTS 
    ===================================================== */ 
 
    const fieldSection = 
        document.querySelector(".assessment-field-section"); 
 
    const personalSection = 
        document.getElementById("personal-information"); 
 
    const interestSection = 
        document.getElementById("interest-section"); 
 
    const skillsSection = 
        document.getElementById("skills-section"); 
 
    const preferencesSection = 
        document.getElementById("career-preferences-section"); 
 
    const directionSection = 
        document.getElementById("career-direction-section"); 
 
 
    /* ===================================================== 
       ALL ASSESSMENT STEPS 
    ===================================================== */ 
 
    const assessmentSteps = [ 
        fieldSection, 
        personalSection, 
        interestSection, 
        skillsSection, 
        preferencesSection, 
        directionSection 
    ]; 
 
 
    /* ===================================================== 
       STEP 01 ELEMENTS 
    ===================================================== */ 
 
    const fieldOptions = 
        document.querySelectorAll(".field-option"); 
 
    const fieldContinueBtn = 
        document.getElementById("fieldContinueBtn"); 
 
    const selectedFieldMessage = 
        document.getElementById("selectedFieldMessage"); 
 
 
    /* ===================================================== 
       STEP 02 ELEMENTS 
    ===================================================== */ 
 
    const educationLevel = 
        document.getElementById("educationLevel"); 
 
    const studyProgram = 
        document.getElementById("studyProgram"); 
 
    const academicPerformance = 
        document.getElementById("academicPerformance"); 
 
    const currentStatus = 
        document.getElementById("currentStatus"); 
 
    const personalContinueBtn = 
        document.getElementById("personalContinueBtn"); 
 
    const personalBackBtn = 
        document.getElementById("personalBackBtn"); 
 
 
    /* ===================================================== 
       STEP 03 ELEMENTS 
    ===================================================== */ 
 
    const interestOptions = 
        document.getElementById("interestOptions"); 
 
    const interestCount = 
        document.getElementById("interestCount"); 
 
    const interestSelectionHint = 
        document.getElementById("interestSelectionHint"); 
 
    const interestContinueBtn = 
        document.getElementById("interestContinueBtn"); 
 
    const interestBackBtn = 
        document.getElementById("interestBackBtn"); 
 
    const selectedInterestField = 
        document.getElementById("selectedInterestField"); 
 
    const interestEmptyMessage = 
        document.getElementById("interestEmptyMessage"); 
 
 
    /* ===================================================== 
       STEP 04 ELEMENTS 
    ===================================================== */ 
 
    const skillsOptions = 
        document.getElementById("skillsOptions"); 
 
    const skillsFieldDisplay = 
        document.getElementById("skillsFieldDisplay"); 
 
    const skillsFieldText = 
        document.getElementById("skillsFieldText"); 
 
    const skillsEmptyMessage = 
        document.getElementById("skillsEmptyMessage"); 
 
    const skillsRatedCount = 
        document.getElementById("skillsRatedCount"); 
 
    const skillsStatusHint = 
        document.getElementById("skillsStatusHint"); 
 
    const skillsContinueBtn = 
        document.getElementById("skillsContinueBtn"); 
 
    const skillsBackBtn = 
        document.getElementById("skillsBackBtn"); 
 
 
    /* ===================================================== 
       STEP 05 ELEMENTS 
    ===================================================== */ 
 
    const preferenceOptionGroups = 
        document.querySelectorAll(".preference-options"); 
 
    const preferencesStatusText = 
        document.getElementById("preferencesStatusText"); 
 
    const preferencesStatusHint = 
        document.getElementById("preferencesStatusHint"); 
 
    const preferencesContinueBtn = 
        document.getElementById("preferencesContinueBtn"); 
 
    const preferencesBackBtn = 
        document.getElementById("preferencesBackBtn"); 
 
 
    /* ===================================================== 
       STEP 06 ELEMENTS 
    ===================================================== */ 
 
    const directionOptionGroups = 
        document.querySelectorAll(".direction-options"); 
 
    const directionStatusText = 
        document.getElementById("directionStatusText"); 
 
    const directionStatusHint = 
        document.getElementById("directionStatusHint"); 
 
    const directionContinueBtn = 
        document.getElementById("directionContinueBtn"); 
 
    const directionBackBtn = 
        document.getElementById("directionBackBtn"); 
 
 
    /* ===================================================== 
       FIELD NAMES 
    ===================================================== */ 
 
    const fieldNames = { 
 
        "computer-science": 
            "Computer Science", 
 
        "information-technology": 
            "Information Technology", 
 
        "engineering": 
            "Engineering", 
 
        "medical": 
            "Medical & Health Sciences", 
 
        "business-management": 
            "Business & Management", 
 
        "arts-design": 
            "Arts & Design", 
 
        "education": 
            "Education", 
 
        "law": 
            "Law", 
 
        "science-research": 
            "Science & Research", 
 
        "agriculture-environment": 
            "Agriculture & Environment" 
 
    }; 
 
 
    /* ===================================================== 
       FIELD-WISE PROGRAMS 
    ===================================================== */ 
 
    const programsByField = { 
 
        "computer-science": [ 
 
            { 
                value: "bs-computer-science", 
                text: "BS Computer Science" 
            }, 
 
            { 
                value: "bs-software-engineering", 
                text: "BS Software Engineering" 
            }, 
 
            { 
                value: "bs-artificial-intelligence", 
                text: "BS Artificial Intelligence" 
            }, 
 
            { 
                value: "bs-data-science", 
                text: "BS Data Science" 
            }, 
 
            { 
                value: "bs-cyber-security", 
                text: "BS Cyber Security" 
            } 
 
        ], 
 
        "information-technology": [ 
 
            { 
                value: "bs-information-technology", 
                text: "BS Information Technology" 
            }, 
 
            { 
                value: "bs-information-systems", 
                text: "BS Information Systems" 
            }, 
 
            { 
                value: "bs-networking", 
                text: "BS Networking" 
            }, 
 
            { 
                value: "bs-cloud-computing", 
                text: "BS Cloud Computing" 
            }, 
 
            { 
                value: "bs-it-management", 
                text: "BS IT Management" 
            } 
 
        ], 
 
        "engineering": [ 
 
            { 
                value: "civil-engineering", 
                text: "Civil Engineering" 
            }, 
 
            { 
                value: "mechanical-engineering", 
                text: "Mechanical Engineering" 
            }, 
 
            { 
                value: "electrical-engineering", 
                text: "Electrical Engineering" 
            }, 
 
            { 
                value: "computer-engineering", 
                text: "Computer Engineering" 
            }, 
 
            { 
                value: "chemical-engineering", 
                text: "Chemical Engineering" 
            } 
 
        ], 
 
        "medical": [ 
 
            { 
                value: "mbbs", 
                text: "MBBS" 
            }, 
 
            { 
                value: "bds", 
                text: "BDS" 
            }, 
 
            { 
                value: "pharm-d", 
                text: "Pharm-D" 
            }, 
 
            { 
                value: "dpt", 
                text: "Doctor of Physical Therapy" 
            }, 
 
            { 
                value: "bs-nursing", 
                text: "BS Nursing" 
            } 
 
        ], 
 
        "business-management": [ 
 
            { 
                value: "bba", 
                text: "BBA" 
            }, 
 
            { 
                value: "accounting-finance", 
                text: "BS Accounting & Finance" 
            }, 
 
            { 
                value: "economics", 
                text: "BS Economics" 
            }, 
 
            { 
                value: "marketing", 
                text: "BS Marketing" 
            }, 
 
            { 
                value: "human-resource-management", 
                text: "BS Human Resource Management" 
            } 
 
        ], 
 
        "arts-design": [ 
 
            { 
                value: "graphic-design", 
                text: "Graphic Design" 
            }, 
 
            { 
                value: "fine-arts", 
                text: "Fine Arts" 
            }, 
 
            { 
                value: "fashion-design", 
                text: "Fashion Design" 
            }, 
 
            { 
                value: "interior-design", 
                text: "Interior Design" 
            }, 
 
            { 
                value: "media-communication", 
                text: "Media & Communication" 
            } 
 
        ], 
 
        "education": [ 
 
            { 
                value: "bs-education", 
                text: "BS Education" 
            }, 
 
            { 
                value: "early-childhood-education", 
                text: "Early Childhood Education" 
            }, 
 
            { 
                value: "english-education", 
                text: "English Education" 
            }, 
 
            { 
                value: "science-education", 
                text: "Science Education" 
            }, 
 
            { 
                value: "mathematics-education", 
                text: "Mathematics Education" 
            } 
 
        ], 
 
        "law": [ 
 
            { 
                value: "llb", 
                text: "LLB" 
            }, 
 
            { 
                value: "llm", 
                text: "LLM" 
            }, 
 
            { 
                value: "legal-studies", 
                text: "Legal Studies" 
            }, 
 
            { 
                value: "shariah-law", 
                text: "Shariah & Law" 
            }, 
 
            { 
                value: "corporate-law", 
                text: "Corporate Law" 
            } 
 
        ], 
 
        "science-research": [ 
 
            { 
                value: "biology", 
                text: "BS Biology" 
            }, 
 
            { 
                value: "chemistry", 
                text: "BS Chemistry" 
            }, 
 
            { 
                value: "physics", 
                text: "BS Physics" 
            }, 
 
            { 
                value: "mathematics", 
                text: "BS Mathematics" 
            }, 
 
            { 
                value: "biotechnology", 
                text: "BS Biotechnology" 
            } 
 
        ], 
 
        "agriculture-environment": [ 
 
            { 
                value: "agriculture", 
                text: "BS Agriculture" 
            }, 
 
            { 
                value: "agronomy", 
                text: "BS Agronomy" 
            }, 
 
            { 
                value: "horticulture", 
                text: "BS Horticulture" 
            }, 
 
            { 
                value: "forestry", 
                text: "BS Forestry" 
            }, 
 
            { 
                value: "environmental-science", 
                text: "Environmental Science" 
            } 
 
        ] 
 
    }; 
 
 
    /* ===================================================== 
       STEP 03 — INTERESTS 
    ===================================================== */ 
 
    const interestsByField = { 
 
        "computer-science": [ 
            "Programming", 
            "Web Development", 
            "Software Development", 
            "Artificial Intelligence", 
            "Data Analysis", 
            "Cybersecurity", 
            "Problem Solving", 
            "Logical Thinking" 
        ], 
 
        "information-technology": [ 
            "Computer Networks", 
            "Cloud Computing", 
            "IT Support", 
            "Cybersecurity", 
            "Database Management", 
            "System Administration", 
            "Technology Management", 
            "Troubleshooting" 
        ], 
 
        "engineering": [ 
            "Technical Design", 
            "Engineering Projects", 
            "Mathematics", 
            "Machines & Technology", 
            "Construction", 
            "Problem Solving", 
            "Innovation", 
            "Logical Thinking" 
        ], 
 
        "medical": [ 
            "Healthcare", 
            "Human Anatomy", 
            "Biology", 
            "Patient Care", 
            "Medical Research", 
            "Laboratory Work", 
            "Helping People", 
            "Problem Solving" 
        ], 
 
        "business-management": [ 
            "Business Planning", 
            "Leadership", 
            "Marketing", 
            "Finance", 
            "Entrepreneurship", 
            "Communication", 
            "Team Management", 
            "Problem Solving" 
        ], 
 
        "arts-design": [ 
            "Graphic Design", 
            "Drawing & Illustration", 
            "Photography", 
            "Fashion", 
            "Creative Writing", 
            "Media & Communication", 
            "Visual Creativity", 
            "Creative Problem Solving" 
        ], 
 
        "education": [ 
            "Teaching", 
            "Helping Students", 
            "Public Speaking", 
            "Research", 
            "Communication", 
            "Lesson Planning", 
            "Child Development", 
            "Leadership" 
        ], 
 
        "law": [ 
            "Legal Research", 
            "Debate & Argumentation", 
            "Public Speaking", 
            "Justice & Human Rights", 
            "Case Analysis", 
            "Critical Thinking", 
            "Reading & Writing", 
            "Problem Solving" 
        ], 
 
        "science-research": [ 
            "Scientific Research", 
            "Experiments", 
            "Biology", 
            "Chemistry", 
            "Physics", 
            "Mathematics", 
            "Data Analysis", 
            "Scientific Problem Solving" 
        ], 
 
        "agriculture-environment": [ 
            "Agriculture", 
            "Plants & Crops", 
            "Environmental Protection", 
            "Sustainability", 
            "Animal Sciences", 
            "Climate & Environment", 
            "Research", 
            "Problem Solving" 
        ] 
 
    }; 
 
 
    /* ===================================================== 
       STEP 04 — SKILLS 
    ===================================================== */ 
 
    const skillsByField = { 
 
        "computer-science": [ 
            "Programming", 
            "Problem Solving", 
            "Logical Thinking", 
            "Web Development", 
            "Database Management", 
            "Software Development", 
            "Data Analysis", 
            "Computer Skills" 
        ], 
 
        "information-technology": [ 
            "Computer Networking", 
            "Database Management", 
            "Cloud Computing", 
            "IT Support", 
            "System Administration", 
            "Cybersecurity", 
            "Troubleshooting", 
            "Computer Skills" 
        ], 
 
        "engineering": [ 
            "Mathematics", 
            "Problem Solving", 
            "Technical Design", 
            "Analytical Thinking", 
            "Engineering Software", 
            "Technical Knowledge", 
            "Project Management", 
            "Logical Thinking" 
        ], 
 
        "medical": [ 
            "Biology", 
            "Medical Knowledge", 
            "Patient Care", 
            "Communication", 
            "Problem Solving", 
            "Research", 
            "Laboratory Skills", 
            "Critical Thinking" 
        ], 
 
        "business-management": [ 
            "Communication", 
            "Leadership", 
            "Marketing", 
            "Financial Skills", 
            "Business Planning", 
            "Team Management", 
            "Problem Solving", 
            "Decision Making" 
        ], 
 
        "arts-design": [ 
            "Creativity", 
            "Graphic Design", 
            "Visual Communication", 
            "Drawing", 
            "Design Thinking", 
            "Photography", 
            "Creative Problem Solving", 
            "Communication" 
        ], 
 
        "education": [ 
            "Communication", 
            "Teaching", 
            "Public Speaking", 
            "Lesson Planning", 
            "Research", 
            "Leadership", 
            "Classroom Management", 
            "Problem Solving" 
        ], 
 
        "law": [ 
            "Legal Research", 
            "Communication", 
            "Critical Thinking", 
            "Argumentation", 
            "Case Analysis", 
            "Reading", 
            "Writing", 
            "Problem Solving" 
        ], 
 
        "science-research": [ 
            "Scientific Research", 
            "Mathematics", 
            "Data Analysis", 
            "Laboratory Skills", 
            "Critical Thinking", 
            "Scientific Writing", 
            "Problem Solving", 
            "Analytical Thinking" 
        ], 
 
        "agriculture-environment": [ 
            "Agriculture Knowledge", 
            "Environmental Knowledge", 
            "Research", 
            "Problem Solving", 
            "Data Analysis", 
            "Sustainability", 
            "Scientific Thinking", 
            "Field Work" 
        ] 
 
    }; 
 
 
    /* ===================================================== 
       GLOBAL DATA 
    ===================================================== */ 
 
    let selectedField = null; 
 
 
    /* ===================================================== 
       SESSION STORAGE — GET 
    ===================================================== */ 
 
    function getAssessmentData() { 
 
        const saved = 
            sessionStorage.getItem("assessmentData"); 
 
        if (!saved) { 
            return {}; 
        } 
 
        try { 
 
            return JSON.parse(saved); 
 
        } catch (error) { 
 
            console.error( 
                "Assessment data error:", 
                error 
            ); 
 
            return {}; 
 
        } 
 
    } 
 
 
    /* ===================================================== 
       SESSION STORAGE — SAVE 
    ===================================================== */ 
 
    function saveAssessmentData(data) { 
 
        sessionStorage.setItem( 
            "assessmentData", 
            JSON.stringify(data) 
        ); 
 
    } 
 
 
    /* ===================================================== 
       NEW STEP NAVIGATION SYSTEM 
        
       Only ONE step is visible at a time. 
       No scrolling. 
    ===================================================== */ 
 
    function showStep(stepIndex) { 
 
        if ( 
            stepIndex < 0 || 
            stepIndex >= assessmentSteps.length 
        ) { 
            return; 
        } 
 
 
        assessmentSteps.forEach( 
            function (section, index) { 
 
                if (!section) { 
                    return; 
                } 
 
 
                if (index === stepIndex) { 
 
                    section.style.display = ""; 
 
                    section.classList.add( 
                        "active-assessment-step" 
                    ); 
 
                } else { 
 
                    section.style.display = "none"; 
 
                    section.classList.remove( 
                        "active-assessment-step" 
                    ); 
 
                } 
 
            } 
        ); 
 
 
        /* Load field-dependent content when needed */ 
 
        if ( 
            stepIndex === 2 && 
            selectedField 
        ) { 
 
            loadInterests( 
                selectedField 
            ); 
 
        } 
 
 
        if ( 
            stepIndex === 3 && 
            selectedField 
        ) { 
 
            loadSkills( 
                selectedField 
            ); 
 
        } 
 
 
        if (stepIndex === 4) { 
 
            restoreStep05Data(); 
 
        } 
 
 
        if (stepIndex === 5) { 
 
            restoreStep06Data(); 
 
        } 
 
    } 
 
 
    /* ===================================================== 
       STEP 01 — FIELD SELECTION 
    ===================================================== */ 
 
    fieldOptions.forEach( 
        function (option) { 
 
            option.addEventListener( 
                "click", 
                function () { 
 
                    fieldOptions.forEach( 
                        function (item) { 
 
                            item.classList.remove( 
                                "selected" 
                            ); 
 
                        } 
                    ); 
 
 
                    option.classList.add( 
                        "selected" 
                    ); 
 
 
                    selectedField = 
                        option.dataset.field; 
 
 
                    const data = 
                        getAssessmentData(); 
 
 
                    data.field = 
                        selectedField; 
 
                    data.fieldName = 
                        fieldNames[selectedField]; 
 
 
                    saveAssessmentData(data); 
 
 
                    if (fieldContinueBtn) { 
 
                        fieldContinueBtn.disabled = 
                            false; 
 
                    } 
 
 
                    if (selectedFieldMessage) { 
 
                        selectedFieldMessage.classList.add( 
                            "active" 
                        ); 
 
                        selectedFieldMessage.innerHTML = ` 
 
                            <span class="selected-field-icon"> 
                                ✓ 
                            </span> 
 
                            <span> 
                                ${fieldNames[selectedField]} selected 
                            </span> 
 
                        `; 
 
                    } 
 
 
                    loadPrograms( 
                        selectedField 
                    ); 
 
                } 
            ); 
 
        } 
    ); 
 
 
    /* ===================================================== 
       STEP 01 — LOAD PROGRAMS 
    ===================================================== */ 
 
    function loadPrograms(field) { 
 
        if (!studyProgram) { 
            return; 
        } 
 
 
        studyProgram.innerHTML = 
            ""; 
 
 
        const defaultOption = 
            document.createElement("option"); 
 
 
        defaultOption.value = 
            ""; 
 
        defaultOption.textContent = 
            "Select your program"; 
 
        defaultOption.disabled = 
            true; 
 
        defaultOption.selected = 
            true; 
 
 
        studyProgram.appendChild( 
            defaultOption 
        ); 
 
 
        const programs = 
            programsByField[field] || []; 
 
 
        programs.forEach( 
            function (program) { 
 
                const option = 
                    document.createElement( 
                        "option" 
                    ); 
 
 
                option.value = 
                    program.value; 
 
                option.textContent = 
                    program.text; 
 
 
                studyProgram.appendChild( 
                    option 
                ); 
 
            } 
        ); 
 
 
        studyProgram.disabled = 
            false; 
 
    } 
 
 
    /* ===================================================== 
       STEP 01 — CONTINUE → STEP 02 
    ===================================================== */ 
 
    if (fieldContinueBtn) { 
 
        fieldContinueBtn.addEventListener( 
            "click", 
            function () { 
 
                if (!selectedField) { 
 
                    alert( 
                        "Please select a field first." 
                    ); 
 
                    return; 
 
                } 
 
 
                showStep(1); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 02 — VALIDATION 
    ===================================================== */ 
 
    function validateStep02() { 
 
        if ( 
            !educationLevel || 
            !studyProgram || 
            !academicPerformance || 
            !currentStatus 
        ) { 
 
            return false; 
 
        } 
 
 
        return ( 
 
            educationLevel.value !== "" && 
 
            studyProgram.value !== "" && 
 
            academicPerformance.value !== "" && 
 
            currentStatus.value !== "" 
 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 02 — UPDATE BUTTON 
    ===================================================== */ 
 
    function updateStep02Button() { 
 
        if (!personalContinueBtn) { 
            return; 
        } 
 
 
        personalContinueBtn.disabled = 
            !validateStep02(); 
 
    } 
 
 
    /* ===================================================== 
       STEP 02 — CHANGE EVENTS 
    ===================================================== */ 
 
    if (educationLevel) { 
 
        educationLevel.addEventListener( 
            "change", 
            updateStep02Button 
        ); 
 
    } 
 
 
    if (studyProgram) { 
 
        studyProgram.addEventListener( 
            "change", 
            updateStep02Button 
        ); 
 
    } 
 
 
    if (academicPerformance) { 
 
        academicPerformance.addEventListener( 
            "change", 
            updateStep02Button 
        ); 
 
    } 
 
 
    if (currentStatus) { 
 
        currentStatus.addEventListener( 
            "change", 
            updateStep02Button 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 02 — CONTINUE → STEP 03 
    ===================================================== */ 
 
    if (personalContinueBtn) { 
 
        personalContinueBtn.addEventListener( 
            "click", 
            function () { 
 
                if (!validateStep02()) { 
 
                    alert( 
                        "Please complete all required information." 
                    ); 
 
                    return; 
 
                } 
 
 
                const data = 
                    getAssessmentData(); 
 
 
                data.educationLevel = 
                    educationLevel.value; 
 
                data.studyProgram = 
                    studyProgram.value; 
 
                data.studyProgramName = 
                    studyProgram.options[ 
                        studyProgram.selectedIndex 
                    ].text; 
 
                data.academicPerformance = 
                    academicPerformance.value; 
 
                data.currentStatus = 
                    currentStatus.value; 
 
 
                saveAssessmentData(data); 
 
 
                showStep(2); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 02 — PREVIOUS → STEP 01 
    ===================================================== */ 
 
    if (personalBackBtn) { 
 
        personalBackBtn.addEventListener( 
            "click", 
            function () { 
 
                showStep(0); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 03 — LOAD INTERESTS 
    ===================================================== */ 
 
    function loadInterests(field) { 
 
        if (!interestOptions) { 
            return; 
        } 
 
 
        if (!field) { 
 
            const data = 
                getAssessmentData(); 
 
            field = 
                data.field || null; 
 
        } 
 
 
        if ( 
            !field || 
            !interestsByField[field] 
        ) { 
 
            interestOptions.innerHTML = 
                ""; 
 
 
            if (selectedInterestField) { 
 
                selectedInterestField.innerHTML = ` 
 
                    <span class="selected-field-dot"></span> 
 
                    <span> 
                        Select a field in Step 01 first. 
                    </span> 
 
                `; 
 
            } 
 
 
            if (interestEmptyMessage) { 
 
                interestEmptyMessage.style.display = 
                    "flex"; 
 
            } 
 
            return; 
 
        } 
 
 
        if (interestEmptyMessage) { 
 
            interestEmptyMessage.style.display = 
                "none"; 
 
        } 
 
 
        if (selectedInterestField) { 
 
            selectedInterestField.style.display = 
                "flex"; 
 
 
            selectedInterestField.innerHTML = ` 
 
                <span class="selected-field-dot"></span> 
 
                <span> 
                    Interests based on your selected field: 
                    <strong> 
                        ${fieldNames[field]} 
                    </strong> 
                </span> 
 
            `; 
 
        } 
 
 
        interestOptions.innerHTML = 
            ""; 
 
 
        const interests = 
            interestsByField[field]; 
 
 
        interests.forEach( 
            function (interest) { 
 
                const button = 
                    document.createElement( 
                        "button" 
                    ); 
 
 
                button.type = 
                    "button"; 
 
                button.className = 
                    "interest-option"; 
 
                button.dataset.interest = 
                    interest; 
 
 
                button.innerHTML = ` 
 
                    <span class="interest-option-check"> 
                        ✓ 
                    </span> 
 
                    <span class="interest-option-text"> 
                        ${interest} 
                    </span> 
 
                `; 
 
 
                button.addEventListener( 
                    "click", 
                    function () { 
 
                        button.classList.toggle( 
                            "selected" 
                        ); 
 
 
                        updateInterestStatus(); 
 
                    } 
                ); 
 
 
                interestOptions.appendChild( 
                    button 
                ); 
 
            } 
        ); 
 
 
        /* Restore saved interests */ 
 
        const data = 
            getAssessmentData(); 
 
 
        if (Array.isArray(data.interests)) { 
 
            const buttons = 
                interestOptions.querySelectorAll( 
                    ".interest-option" 
                ); 
 
 
            buttons.forEach( 
                function (button) { 
 
                    if ( 
                        data.interests.includes( 
                            button.dataset.interest 
                        ) 
                    ) { 
 
                        button.classList.add( 
                            "selected" 
                        ); 
 
                    } 
 
                } 
            ); 
 
        } 
 
 
        updateInterestStatus(); 
 
    } 
 
 
    /* ===================================================== 
       STEP 03 — UPDATE STATUS 
    ===================================================== */ 
 
    function updateInterestStatus() { 
 
        if (!interestOptions) { 
            return; 
        } 
 
 
        const selected = 
            interestOptions.querySelectorAll( 
                ".interest-option.selected" 
            ); 
 
 
        const count = 
            selected.length; 
 
 
        if (interestCount) { 
 
            interestCount.textContent = 
                count === 1 
                    ? "1 interest selected" 
                    : `${count} interests selected`; 
 
        } 
 
 
        if (interestSelectionHint) { 
 
            if (count < 2) { 
 
                interestSelectionHint.textContent = 
                    `Select ${2 - count} more`; 
 
                interestSelectionHint.classList.remove( 
                    "ready" 
                ); 
 
            } else { 
 
                interestSelectionHint.textContent = 
                    "Ready to continue ✓"; 
 
                interestSelectionHint.classList.add( 
                    "ready" 
                ); 
 
            } 
 
        } 
 
 
        if (interestContinueBtn) { 
 
            interestContinueBtn.disabled = 
                count < 2; 
 
        } 
 
    } 
 
 
    /* ===================================================== 
       STEP 03 — GET SELECTED INTERESTS 
    ===================================================== */ 
 
    function getSelectedInterests() { 
 
        if (!interestOptions) { 
            return []; 
        } 
 
 
        const selected = 
            interestOptions.querySelectorAll( 
                ".interest-option.selected" 
            ); 
 
 
        return Array.from(selected).map( 
            function (button) { 
 
                return button.dataset.interest; 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 03 — CONTINUE → STEP 04 
    ===================================================== */ 
 
    if (interestContinueBtn) { 
 
        interestContinueBtn.addEventListener( 
            "click", 
            function () { 
 
                const interests = 
                    getSelectedInterests(); 
 
 
                if (interests.length < 2) { 
 
                    alert( 
                        "Please select at least 2 interests." 
                    ); 
 
                    return; 
 
                } 
 
 
                const data = 
                    getAssessmentData(); 
 
 
                data.interests = 
                    interests; 
 
                data.interestCount = 
                    interests.length; 
 
 
                saveAssessmentData(data); 
 
 
                showStep(3); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 03 — PREVIOUS → STEP 02 
    ===================================================== */ 
 
    if (interestBackBtn) { 
 
        interestBackBtn.addEventListener( 
            "click", 
            function () { 
 
                showStep(1); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 04 — LOAD SKILLS 
    ===================================================== */ 
 
    function loadSkills(field) { 
 
        if (!skillsOptions) { 
            return; 
        } 
 
 
        if (!field) { 
 
            const data = 
                getAssessmentData(); 
 
            field = 
                data.field || null; 
 
        } 
 
 
        if ( 
            !field || 
            !skillsByField[field] 
        ) { 
 
            skillsOptions.innerHTML = 
                ""; 
 
 
            if (skillsFieldDisplay) { 
 
                skillsFieldDisplay.style.display = 
                    "none"; 
 
            } 
 
 
            if (skillsEmptyMessage) { 
 
                skillsEmptyMessage.style.display = 
                    "flex"; 
 
            } 
 
 
            if (skillsContinueBtn) { 
 
                skillsContinueBtn.disabled = 
                    true; 
 
            } 
 
 
            return; 
 
        } 
 
 
        if (skillsEmptyMessage) { 
 
            skillsEmptyMessage.style.display = 
                "none"; 
 
        } 
 
 
        if (skillsFieldDisplay) { 
 
            skillsFieldDisplay.style.display = 
                "flex"; 
 
        } 
 
 
        if (skillsFieldText) { 
 
            skillsFieldText.innerHTML = 
                `Skills based on your selected field: 
                <strong> 
                    ${fieldNames[field]} 
                </strong>`; 
 
        } 
 
 
        skillsOptions.innerHTML = 
            ""; 
 
 
        const skills = 
            skillsByField[field]; 
 
 
        const data = 
            getAssessmentData(); 
 
 
        const savedSkills = 
            data.skills || {}; 
 
 
        skills.forEach( 
            function (skill) { 
 
                const skillCard = 
                    document.createElement( 
                        "div" 
                    ); 
 
 
                skillCard.className = 
                    "skill-option"; 
 
                skillCard.dataset.skill = 
                    skill; 
 
 
                const skillName = 
                    document.createElement( 
                        "div" 
                    ); 
 
 
                skillName.className = 
                    "skill-name"; 
 
                skillName.textContent = 
                    skill; 
 
 
                const ratingContainer = 
                    document.createElement( 
                        "div" 
                    ); 
 
 
                ratingContainer.className = 
                    "skill-rating-options"; 
 
 
                for ( 
                    let rating = 1; 
                    rating <= 5; 
                    rating++ 
                ) { 
 
                    const ratingButton = 
                        document.createElement( 
                            "button" 
                        ); 
 
 
                    ratingButton.type = 
                        "button"; 
 
                    ratingButton.className = 
                        "skill-rating-btn"; 
 
                    ratingButton.dataset.rating = 
                        rating; 
 
                    ratingButton.textContent = 
                        rating; 
 
 
                    if ( 
                        Number( 
                            savedSkills[skill] 
                        ) === rating 
                    ) { 
 
                        ratingButton.classList.add( 
                            "selected" 
                        ); 
 
                    } 
 
 
                    ratingButton.addEventListener( 
                        "click", 
                        function () { 
 
                            const buttons = 
                                ratingContainer.querySelectorAll( 
                                    ".skill-rating-btn" 
                                ); 
 
 
                            buttons.forEach( 
                                function (btn) { 
 
                                    btn.classList.remove( 
                                        "selected" 
                                    ); 
 
                                } 
                            ); 
 
 
                            ratingButton.classList.add( 
                                "selected" 
                            ); 
 
 
                            updateSkillsStatus(); 
 
                        } 
                    ); 
 
 
                    ratingContainer.appendChild( 
                        ratingButton 
                    ); 
 
                } 
 
 
                skillCard.appendChild( 
                    skillName 
                ); 
 
                skillCard.appendChild( 
                    ratingContainer 
                ); 
 
 
                skillsOptions.appendChild( 
                    skillCard 
                ); 
 
            } 
        ); 
 
 
        updateSkillsStatus(); 
 
    } 
 
 
    /* ===================================================== 
       STEP 04 — GET RATINGS 
    ===================================================== */ 
 
    function getSkillRatings() { 
 
        const ratings = {}; 
 
 
        if (!skillsOptions) { 
            return ratings; 
        } 
 
 
        const skillCards = 
            skillsOptions.querySelectorAll( 
                ".skill-option" 
            ); 
 
 
        skillCards.forEach( 
            function (card) { 
 
                const skill = 
                    card.dataset.skill; 
 
 
                const selectedButton = 
                    card.querySelector( 
                        ".skill-rating-btn.selected" 
                    ); 
 
 
                if (selectedButton) { 
 
                    ratings[skill] = 
                        Number( 
                            selectedButton.dataset.rating 
                        ); 
 
                } 
 
            } 
        ); 
 
 
        return ratings; 
 
    } 
 
 
    /* ===================================================== 
       STEP 04 — UPDATE STATUS 
    ===================================================== */ 
 
    function updateSkillsStatus() { 
 
        if (!skillsOptions) { 
            return; 
        } 
 
 
        const skillCards = 
            skillsOptions.querySelectorAll( 
                ".skill-option" 
            ); 
 
 
        const totalSkills = 
            skillCards.length; 
 
 
        const ratings = 
            getSkillRatings(); 
 
 
        const ratedCount = 
            Object.keys(ratings).length; 
 
 
        if (skillsRatedCount) { 
 
            skillsRatedCount.textContent = 
                `${ratedCount} of ${totalSkills} skills rated`; 
 
        } 
 
 
        if (skillsStatusHint) { 
 
            if (ratedCount < totalSkills) { 
 
                skillsStatusHint.textContent = 
                    `Rate ${totalSkills - ratedCount} more`; 
 
                skillsStatusHint.classList.remove( 
                    "ready" 
                ); 
 
            } else { 
 
                skillsStatusHint.textContent = 
                    "All skills rated ✓"; 
 
                skillsStatusHint.classList.add( 
                    "ready" 
                ); 
 
            } 
 
        } 
 
 
        if (skillsContinueBtn) { 
 
            skillsContinueBtn.disabled = 
                totalSkills === 0 || 
                ratedCount < totalSkills; 
 
        } 
 
    } 
 
 
    /* ===================================================== 
       STEP 04 — CONTINUE → STEP 05 
    ===================================================== */ 
 
    if (skillsContinueBtn) { 
 
        skillsContinueBtn.addEventListener( 
            "click", 
            function () { 
 
                const ratings = 
                    getSkillRatings(); 
 
 
                const totalSkills = 
                    skillsOptions 
                        ? skillsOptions.querySelectorAll( 
                            ".skill-option" 
                        ).length 
                        : 0; 
 
 
                if ( 
                    Object.keys(ratings).length < 
                    totalSkills 
                ) { 
 
                    alert( 
                        "Please rate all skills before continuing." 
                    ); 
 
                    return; 
 
                } 
 
 
                const data = 
                    getAssessmentData(); 
 
 
                data.skills = 
                    ratings; 
 
                data.skillsRated = 
                    Object.keys(ratings).length; 
 
 
                const ratingValues = 
                    Object.values(ratings); 
 
 
                const totalRating = 
                    ratingValues.reduce( 
                        function ( 
                            total, 
                            value 
                        ) { 
 
                            return total + value; 
 
                        }, 
                        0 
                    ); 
 
 
                if (ratingValues.length > 0) { 
 
                    data.averageSkillRating = 
                        Number( 
                            ( 
                                totalRating / 
                                ratingValues.length 
                            ).toFixed(2) 
                        ); 
 
                } 
 
 
                saveAssessmentData(data); 
 
 
                showStep(4); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 04 — PREVIOUS → STEP 03 
    ===================================================== */ 
 
    if (skillsBackBtn) { 
 
        skillsBackBtn.addEventListener( 
            "click", 
            function () { 
 
                showStep(2); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 05 — CAREER PREFERENCES DATA 
    ===================================================== */ 
 
    const careerPreferences = { 
 
        workType: null, 
 
        workStyle: null, 
 
        workEnvironment: null, 
 
        careerPriority: null, 
 
        challengeLevel: null 
 
    }; 
 
 
    /* ===================================================== 
       STEP 05 — SAVE 
    ===================================================== */ 
 
    function saveStep05AssessmentData( 
        preferences 
    ) { 
 
        const data = 
            getAssessmentData(); 
 
 
        data.careerPreferences = 
            preferences; 
 
 
        saveAssessmentData(data); 
 
    } 
 
 
    /* ===================================================== 
       STEP 05 — UPDATE STATUS 
    ===================================================== */ 
 
    function updateStep05Status() { 
 
        let answeredCount = 0; 
 
 
        Object.keys( 
            careerPreferences 
        ).forEach( 
            function (key) { 
 
                if ( 
                    careerPreferences[key] !== null 
                ) { 
 
                    answeredCount++; 
 
                } 
 
            } 
        ); 
 
 
        if (preferencesStatusText) { 
 
            preferencesStatusText.textContent = 
                `${answeredCount} of 5 questions answered`; 
 
        } 
 
 
        if (preferencesStatusHint) { 
 
            if (answeredCount < 5) { 
 
                preferencesStatusHint.textContent = 
                    `Complete ${ 
                        5 - answeredCount 
                    } more`; 
 
                preferencesStatusHint.classList.remove( 
                    "ready" 
                ); 
 
            } else { 
 
                preferencesStatusHint.textContent = 
                    "All questions answered ✓"; 
 
                preferencesStatusHint.classList.add( 
                    "ready" 
                ); 
 
            } 
 
        } 
 
 
        if (preferencesContinueBtn) { 
 
            preferencesContinueBtn.disabled = 
                answeredCount !== 5; 
 
        } 
 
    } 
 
 
    /* ===================================================== 
       STEP 05 — OPTION CLICK 
    ===================================================== */ 
 
    preferenceOptionGroups.forEach( 
        function (group) { 
 
            const preferenceName = 
                group.dataset.preference; 
 
 
            const options = 
                group.querySelectorAll( 
                    ".preference-option" 
                ); 
 
 
            options.forEach( 
                function (option) { 
 
                    option.addEventListener( 
                        "click", 
                        function () { 
 
                            options.forEach( 
                                function (item) { 
 
                                    item.classList.remove( 
                                        "selected" 
                                    ); 
 
                                } 
                            ); 
 
 
                            option.classList.add( 
                                "selected" 
                            ); 
 
 
                            careerPreferences[ 
                                preferenceName 
                            ] = 
                                option.dataset.value; 
 
 
                            updateStep05Status(); 
 
                        } 
                    ); 
 
                } 
            ); 
 
        } 
    ); 
 
 
    /* ===================================================== 
       STEP 05 — RESTORE DATA 
    ===================================================== */ 
 
    function restoreStep05Data() { 
 
        const data = 
            getAssessmentData(); 
 
 
        if ( 
            !data.careerPreferences 
        ) { 
 
            updateStep05Status(); 
 
            return; 
 
        } 
 
 
        const savedPreferences = 
            data.careerPreferences; 
 
 
        Object.keys( 
            savedPreferences 
        ).forEach( 
            function (preferenceName) { 
 
                const savedValue = 
                    savedPreferences[ 
                        preferenceName 
                    ]; 
 
 
                if (!savedValue) { 
                    return; 
                } 
 
 
                careerPreferences[ 
                    preferenceName 
                ] = 
                    savedValue; 
 
 
                const group = 
                    document.querySelector( 
                        `.preference-options[data-preference="${preferenceName}"]` 
                    ); 
 
 
                if (!group) { 
                    return; 
                } 
 
 
                const option = 
                    group.querySelector( 
                        `.preference-option[data-value="${savedValue}"]` 
                    ); 
 
 
                if (option) { 
 
                    option.classList.add( 
                        "selected" 
                    ); 
 
                } 
 
            } 
        ); 
 
 
        updateStep05Status(); 
 
    } 
 
 
    /* ===================================================== 
       STEP 05 — CONTINUE → STEP 06 
    ===================================================== */ 
 
    if (preferencesContinueBtn) { 
 
        preferencesContinueBtn.addEventListener( 
            "click", 
            function () { 
 
                let answeredCount = 0; 
 
 
                Object.keys( 
                    careerPreferences 
                ).forEach( 
                    function (key) { 
 
                        if ( 
                            careerPreferences[key] !== null 
                        ) { 
 
                            answeredCount++; 
 
                        } 
 
                    } 
                ); 
 
 
                if (answeredCount !== 5) { 
 
                    alert( 
                        "Please answer all 5 questions before continuing." 
                    ); 
 
                    return; 
 
                } 
 
 
                saveStep05AssessmentData( 
                    careerPreferences 
                ); 
 
 
                showStep(5); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 05 — PREVIOUS → STEP 04 
    ===================================================== */ 
 
    if (preferencesBackBtn) { 
 
        preferencesBackBtn.addEventListener( 
            "click", 
            function () { 
 
                showStep(3); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 06 — CAREER DIRECTION DATA 
    ===================================================== */ 
 
    const careerDirection = { 
 
        careerArea: null, 
 
        careerImpact: null, 
 
        growthImportance: null, 
 
        learningMindset: null, 
 
        careerConfidence: null 
 
    }; 
 
 
    /* ===================================================== 
       STEP 06 — SAVE DATA 
    ===================================================== */ 
 
    function saveStep06AssessmentData( 
        direction 
    ) { 
 
        const data = 
            getAssessmentData(); 
 
 
        data.careerDirection = 
            direction; 
 
 
        saveAssessmentData(data); 
 
 
        console.log( 
            "Step 06 saved:", 
            data 
        ); 
 
    } 
 
 
    /* ===================================================== 
       STEP 06 — UPDATE STATUS 
    ===================================================== */ 
 
    function updateStep06Status() { 
 
        let answeredCount = 0; 
 
 
        Object.keys( 
            careerDirection 
        ).forEach( 
            function (key) { 
 
                if ( 
                    careerDirection[key] !== null 
                ) { 
 
                    answeredCount++; 
 
                } 
 
            } 
        ); 
 
 
        if (directionStatusText) { 
 
            directionStatusText.textContent = 
                `${answeredCount} of 5 questions answered`; 
 
        } 
 
 
        if (directionStatusHint) { 
 
            if (answeredCount < 5) { 
 
                directionStatusHint.textContent = 
                    `Complete ${ 
                        5 - answeredCount 
                    } more`; 
 
                directionStatusHint.classList.remove( 
                    "ready" 
                ); 
 
            } else { 
 
                directionStatusHint.textContent = 
                    "All questions answered ✓"; 
 
                directionStatusHint.classList.add( 
                    "ready" 
                ); 
 
            } 
 
        } 
 
 
        if (directionContinueBtn) { 
 
            directionContinueBtn.disabled = 
                answeredCount !== 5; 
 
        } 
 
    } 
 
 
    /* ===================================================== 
       STEP 06 — OPTION CLICK 
    ===================================================== */ 
 
    directionOptionGroups.forEach( 
        function (group) { 
 
            const directionName = 
                group.dataset.direction; 
 
 
            const options = 
                group.querySelectorAll( 
                    ".direction-option" 
                ); 
 
 
            options.forEach( 
                function (option) { 
 
                    option.addEventListener( 
                        "click", 
                        function () { 
 
                            options.forEach( 
                                function (item) { 
 
                                    item.classList.remove( 
                                        "selected" 
                                    ); 
 
                                } 
                            ); 
 
 
                            option.classList.add( 
                                "selected" 
                            ); 
 
 
                            careerDirection[ 
                                directionName 
                            ] = 
                                option.dataset.value; 
 
 
                            updateStep06Status(); 
 
                        } 
                    ); 
 
                } 
            ); 
 
        } 
    ); 
 
 
    /* ===================================================== 
       STEP 06 — RESTORE DATA 
    ===================================================== */ 
 
    function restoreStep06Data() { 
 
        const data = 
            getAssessmentData(); 
 
 
        if ( 
            !data.careerDirection 
        ) { 
 
            updateStep06Status(); 
 
            return; 
 
        } 
 
 
        const savedDirection = 
            data.careerDirection; 
 
 
        Object.keys( 
            savedDirection 
        ).forEach( 
            function (directionName) { 
 
                const savedValue = 
                    savedDirection[ 
                        directionName 
                    ]; 
 
 
                if (!savedValue) { 
                    return; 
                } 
 
 
                careerDirection[ 
                    directionName 
                ] = 
                    savedValue; 
 
 
                const group = 
                    document.querySelector( 
                        `.direction-options[data-direction="${directionName}"]` 
                    ); 
 
 
                if (!group) { 
                    return; 
                } 
 
 
                const option = 
                    group.querySelector( 
                        `.direction-option[data-value="${savedValue}"]` 
                    ); 
 
 
                if (option) { 
 
                    option.classList.add( 
                        "selected" 
                    ); 
 
                } 
 
            } 
        ); 
 
 
        updateStep06Status(); 
 
    } 
 
 
    /* =====================================================
   STEP 06 — CONTINUE → PREDICTION → RECOMMENDATION
===================================================== */

if (directionContinueBtn) {

    directionContinueBtn.addEventListener(
        "click",
        async function () {

            let answeredCount = 0;

            Object.keys(
                careerDirection
            ).forEach(
                function (key) {

                    if (
                        careerDirection[key] !== null
                    ) {

                        answeredCount++;

                    }

                }
            );


            if (answeredCount !== 5) {

                alert(
                    "Please answer all 5 questions before continuing."
                );

                return;

            }


            /* =================================================
               1. GET COMPLETE ASSESSMENT DATA
            ================================================= */

            const data =
                getAssessmentData();


            /* =================================================
               2. SAVE STEP 06
            ================================================= */

            data.careerDirection =
                careerDirection;

            data.assessmentCompleted =
                true;


            saveAssessmentData(data);


            console.log(
                "===================================="
            );

            console.log(
                "ASSESSMENT COMPLETED"
            );

            console.log(
                "Assessment Data:",
                data
            );

            console.log(
                "===================================="
            );


            /* =================================================
               3. DISABLE BUTTON WHILE PREDICTION IS RUNNING
            ================================================= */

            directionContinueBtn.disabled =
                true;


            const originalButtonText =
                directionContinueBtn.textContent;


            directionContinueBtn.textContent =
                "Generating Recommendation...";


            try {

                /* =============================================
                   4. SEND ASSESSMENT DATA TO FLASK API
                ============================================= */

                console.log(
                    "Sending assessment data to prediction API..."
                );


                const response =
                    await fetch(
                        "http://127.0.0.1:5000/api/predict",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(data)
                        }
                    );


                /* =============================================
                   5. READ API RESPONSE
                ============================================= */

                const result =
                    await response.json();


                console.log(
                    "Prediction API response:",
                    result
                );


                /* =============================================
                   6. CHECK PREDICTION SUCCESS
                ============================================= */

                if (
                    !response.ok ||
                    !result.success
                ) {

                    throw new Error(
                        result.message ||
                        "Career prediction failed."
                    );

                }


                /* =============================================
                   7. SAVE PREDICTION RESULT
                ============================================= */

                data.prediction =
                    result;

                data.predictedCareer =
                    result.career;


                saveAssessmentData(data);


                sessionStorage.setItem(
                    "predictionResult",
                    JSON.stringify(result)
                );


                console.log(
                    "===================================="
                );

                console.log(
                    "PREDICTION SUCCESSFUL"
                );

                console.log(
                    "Predicted Career:",
                    result.career
                );

                console.log(
                    "===================================="
                );


                /* =============================================
                   8. GO TO NEXT PAGE
                ============================================= */

                if (
                    sessionStorage.getItem(
                        "isLoggedIn"
                    ) === "true"
                ) {

                    window.location.href =
                        "recommendation.html";

                } else {

                    sessionStorage.setItem(
                        "pendingRecommendation",
                        "true"
                    );

                    window.location.href =
                        "login.html";

                }


            } catch (error) {

                console.error(
                    "===================================="
                );

                console.error(
                    "PREDICTION ERROR"
                );

                console.error(
                    error
                );

                console.error(
                    "===================================="
                );


                alert(
                    "Unable to generate your career recommendation. Please make sure the Flask server is running and try again."
                );


                /* =============================================
                   9. RESTORE BUTTON
                ============================================= */

                directionContinueBtn.disabled =
                    false;

                directionContinueBtn.textContent =
                    originalButtonText;

            }

        }
    );

}
    /* ===================================================== 
       STEP 06 — PREVIOUS → STEP 05 
    ===================================================== */ 
 
    if (directionBackBtn) { 
 
        directionBackBtn.addEventListener( 
            "click", 
            function () { 
 
                showStep(4); 
 
            } 
        ); 
 
    } 
 
 
    /* ===================================================== 
       RESTORE SAVED DATA 
    ===================================================== */ 
 
    const savedData = 
        getAssessmentData(); 
 
 
    /* ===================================================== 
       RESTORE STEP 01 
    ===================================================== */ 
 
    if (savedData.field) { 
 
        selectedField = 
            savedData.field; 
 
 
        fieldOptions.forEach( 
            function (option) { 
 
                if ( 
                    option.dataset.field === 
                    savedData.field 
                ) { 
 
                    option.classList.add( 
                        "selected" 
                    ); 
 
                } 
 
            } 
        ); 
 
 
        if (fieldContinueBtn) { 
 
            fieldContinueBtn.disabled = 
                false; 
 
        } 
 
 
        if (selectedFieldMessage) { 
 
            selectedFieldMessage.classList.add( 
                "active" 
            ); 
 
 
            selectedFieldMessage.innerHTML = ` 
 
                <span class="selected-field-icon"> 
                    ✓ 
                </span> 
 
                <span> 
                    ${fieldNames[savedData.field]} selected 
                </span> 
 
            `; 
 
        } 
 
 
        loadPrograms( 
            savedData.field 
        ); 
 
    } 
 
 
    /* ===================================================== 
       RESTORE STEP 02 
    ===================================================== */ 
 
    if ( 
        savedData.educationLevel && 
        educationLevel 
    ) { 
 
        educationLevel.value = 
            savedData.educationLevel; 
 
    } 
 
 
    if ( 
        savedData.studyProgram && 
        studyProgram 
    ) { 
 
        studyProgram.value = 
            savedData.studyProgram; 
 
    } 
 
 
    if ( 
        savedData.academicPerformance && 
        academicPerformance 
    ) { 
 
        academicPerformance.value = 
            savedData.academicPerformance; 
 
    } 
 
 
    if ( 
        savedData.currentStatus && 
        currentStatus 
    ) { 
 
        currentStatus.value = 
            savedData.currentStatus; 
 
    } 
 
 
    /* ===================================================== 
       STEP 02 INITIAL STATE 
    ===================================================== */ 
 
    if ( 
        studyProgram && 
        !selectedField 
    ) { 
 
        studyProgram.disabled = 
            true; 
 
    } 
 
 
    updateStep02Button(); 
 
 
    /* ===================================================== 
       INITIALIZE STEP 03 
    ===================================================== */ 
 
    if (selectedField) { 
 
        loadInterests( 
            selectedField 
        ); 
 
    } 
 
 
    /* ===================================================== 
       INITIALIZE STEP 04 
    ===================================================== */ 
 
    if (selectedField) { 
 
        loadSkills( 
            selectedField 
        ); 
 
    } 
 
 
    /* ===================================================== 
       INITIALIZE STEP 05 
    ===================================================== */ 
 
    restoreStep05Data(); 
 
 
    /* ===================================================== 
       INITIALIZE STEP 06 
    ===================================================== */ 
 
    restoreStep06Data(); 
 
 
    /* ===================================================== 
       IMPORTANT: 
       SHOW ONLY STEP 01 AT FIRST 
    ===================================================== */ 
 
    showStep(0); 
 
 
    /* ===================================================== 
       FINAL MESSAGE 
    ===================================================== */ 
 
    console.log( 
        "Assessment JS loaded successfully — Single Step Mode." 
    ); 
 
}); 