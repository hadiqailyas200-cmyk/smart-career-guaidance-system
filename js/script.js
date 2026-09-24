
/* =========================================================
   SMART CAREER GUIDANCE SYSTEM
   SCRIPT.JS
   LOGIN → DASHBOARD / RECOMMENDATION
   HOME PAGE JAVASCRIPT
========================================================= */

/* =========================================================
   01 — LOGIN → DATABASE → DASHBOARD / RECOMMENDATION
========================================================= */

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            console.log("LOGIN FORM SUBMITTED");


            /* -----------------------------------------
               GET LOGIN DATA
            ----------------------------------------- */

            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            if (!email || !password) {

                alert(
                    "Please enter your email and password."
                );

                return;

            }


            try {

                /* -----------------------------------------
                   SEND LOGIN DATA TO BACKEND
                ----------------------------------------- */

                const response =
                    await fetch(
                        "http://127.0.0.1:5000/api/login",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({
                                email: email,
                                password: password
                            })
                        }
                    );


                const result =
                    await response.json();


                console.log(
                    "LOGIN RESPONSE:",
                    result
                );


                /* -----------------------------------------
                   LOGIN FAILED
                ----------------------------------------- */

                if (!response.ok) {

                    alert(
                        result.message ||
                        "Invalid email or password."
                    );

                    return;

                }


                /* -----------------------------------------
                   LOGIN SUCCESS
                ----------------------------------------- */

                if (
                    result.success &&
                    result.user
                ) {

                    const user =
                        result.user;


                    /* -----------------------------------------
                       SAVE USER LOGIN INFORMATION
                    ----------------------------------------- */

                    sessionStorage.setItem(
                        "isLoggedIn",
                        "true"
                    );


                    sessionStorage.setItem(
                        "userId",
                        user.id
                    );


                    sessionStorage.setItem(
                        "userName",
                        user.name
                    );


                    sessionStorage.setItem(
                        "userEmail",
                        user.email
                    );


                    console.log(
                        "Logged-in User:",
                        user
                    );


                    console.log(
                        "User ID:",
                        sessionStorage.getItem(
                            "userId"
                        )
                    );


                    console.log(
                        "User Name:",
                        sessionStorage.getItem(
                            "userName"
                        )
                    );


                    /* -----------------------------------------
                       CHECK PENDING RECOMMENDATION
                    ----------------------------------------- */

                    const pendingRecommendation =
                        sessionStorage.getItem(
                            "pendingRecommendation"
                        );


                    const careerPrediction =
                        sessionStorage.getItem(
                            "careerPrediction"
                        );


                    console.log(
                        "pendingRecommendation:",
                        pendingRecommendation
                    );


                    console.log(
                        "careerPrediction:",
                        careerPrediction
                    );


                    /* -----------------------------------------
                       ASSESSMENT COMPLETED BEFORE LOGIN
                    ----------------------------------------- */

                    if (
                        pendingRecommendation ===
                        "true"
                    ) {

                        sessionStorage.removeItem(
                            "pendingRecommendation"
                        );


                        console.log(
                            "Pending recommendation found."
                        );


                        console.log(
                            "Redirecting to recommendation.html"
                        );


                        window.location.href =
                            "recommendation.html";

                        return;

                    }


                    /* -----------------------------------------
                       NORMAL LOGIN
                    ----------------------------------------- */

                    console.log(
                        "Normal login → dashboard"
                    );


                    window.location.href =
                        "dashboard.html";

                }

            }

            catch (error) {

                console.error(
                    "LOGIN ERROR:",
                    error
                );


                alert(
                    "Unable to connect to server."
                );

            }

        }
    );

}

/* =========================================================
   02 — SIGNUP → DATABASE → LOGIN
========================================================= */

const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            console.log(
                "SIGNUP FORM SUBMITTED"
            );


            const name =
                document.getElementById(
                    "signupName"
                ).value.trim();


            const email =
                document.getElementById(
                    "signupEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "signupPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            /* -----------------------------------------
               PASSWORD CHECK
            ----------------------------------------- */

            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            try {

                const response =
                    await fetch(
                        "http://127.0.0.1:5000/api/signup",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({
                                name: name,
                                email: email,
                                password: password
                            })
                        }
                    );


                const result =
                    await response.json();


                console.log(
                    "SIGNUP RESPONSE:",
                    result
                );


                if (!response.ok) {

                    alert(
                        result.message ||
                        "Signup failed."
                    );

                    return;

                }


                alert(
                    "Account created successfully!"
                );


                window.location.href =
                    "login.html";

            }

            catch (error) {

                console.error(
                    "SIGNUP ERROR:",
                    error
                );


                alert(
                    "Unable to connect to server."
                );

            }

        }
    );

}
/* =========================================================
   03 — HOME PAGE JAVASCRIPT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {
// =========================================
// DASHBOARD USER INFORMATION
// =========================================

const dashboardUserName = document.getElementById("dashboardUserName");
const dashboardUserEmail = document.getElementById("dashboardUserEmail");
const welcomeUserName = document.getElementById("welcomeUserName");

const userName = sessionStorage.getItem("userName");
const userEmail = sessionStorage.getItem("userEmail");

if (dashboardUserName && userName) {
    dashboardUserName.textContent = userName;
}

if (dashboardUserEmail && userEmail) {
    dashboardUserEmail.textContent = userEmail;
}

if (welcomeUserName && userName) {
    welcomeUserName.textContent = userName;
}
// =========================================
// PROFILE SETTINGS USER INFORMATION
// =========================================

const profileUserName =
    document.getElementById("profileUserName");

const profileUserEmail =
    document.getElementById("profileUserEmail");

const profileName =
    document.getElementById("profileName");

const profileEmail =
    document.getElementById("profileEmail");

const savedUserName =
    sessionStorage.getItem("userName");

const savedUserEmail =
    sessionStorage.getItem("userEmail");


if (profileUserName && savedUserName) {
    profileUserName.textContent = savedUserName;
}

if (profileUserEmail && savedUserEmail) {
    profileUserEmail.textContent = savedUserEmail;
}

if (profileName && savedUserName) {
    profileName.value = savedUserName;
}

if (profileEmail && savedUserEmail) {
    profileEmail.value = savedUserEmail;
}
// =========================================
// SAVE PROFILE CHANGES
// =========================================

const saveProfileBtn =
    document.getElementById("saveProfileBtn");

const profileMessage =
    document.getElementById("profileMessage");


if (saveProfileBtn) {

    saveProfileBtn.addEventListener("click", async function () {

        const updatedName =
            profileName.value.trim();

        const userId =
            sessionStorage.getItem("userId");

        if (!updatedName) {

            profileMessage.textContent =
                "Please enter your name.";

            return;
        }

        try {

            const response = await fetch(
                "http://127.0.0.1:5000/api/profile",
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        userId: userId,
                        name: updatedName
                    })
                }
            );

            const result =
                await response.json();

            if (result.success) {

                sessionStorage.setItem(
                    "userName",
                    updatedName
                );

                profileUserName.textContent =
                    updatedName;

                profileMessage.textContent =
                    "Profile updated successfully.";

            } else {

                profileMessage.textContent =
                    result.message;
            }

        } catch (error) {

            console.error(
                "Profile update error:",
                error
            );

            profileMessage.textContent =
                "Unable to update profile.";
        }

    });

}
// =========================================
// DASHBOARD SKILL MATCH
// =========================================

const dashboardSkillMatch =
    document.getElementById("dashboardSkillMatch");

const dashboardOverallMatch =
    document.getElementById("dashboardOverallMatch");

const dashboardProgressValue =
    document.getElementById("dashboardProgressValue");

const predictionResult =
    sessionStorage.getItem("predictionResult");

if (predictionResult) {

    const prediction =
        JSON.parse(predictionResult);

    if (
        prediction.recommendations &&
        prediction.recommendations.length > 0
    ) {

        const matchPercentage =
            prediction.recommendations[0].percentage;

        if (dashboardSkillMatch) {
            dashboardSkillMatch.textContent =
                `${matchPercentage}%`;
        }

        if (dashboardOverallMatch) {
            dashboardOverallMatch.textContent =
                `${matchPercentage}%`;
        }

        if (dashboardProgressValue) {
            dashboardProgressValue.style.width =
                `${matchPercentage}%`;
        }

    }
}
// =========================================
// DASHBOARD SKILL COUNT
// =========================================

const dashboardCurrentSkills =
    document.getElementById("dashboardCurrentSkills");

const assessmentData =
    sessionStorage.getItem("assessmentData");

if (assessmentData) {

    const data = JSON.parse(assessmentData);

    if (data.skills && typeof data.skills === "object") {

        const totalSkills =
            Object.keys(data.skills).length;

        const skillRatings =
            Object.values(data.skills);

        const skillsToImprove =
            skillRatings.filter(function (rating) {
                return Number(rating) <= 3;
            }).length;

        const currentSkills =
            totalSkills - skillsToImprove;

        if (dashboardCurrentSkills) {
            dashboardCurrentSkills.textContent =
                currentSkills;
        }
    }
}
// =========================================
// DASHBOARD SKILLS TO IMPROVE
// =========================================

const dashboardSkillsToImprove =
    document.getElementById("dashboardSkillsToImprove");

if (assessmentData) {

    const data = JSON.parse(assessmentData);

    if (data.skills && typeof data.skills === "object") {

        const skillRatings =
            Object.values(data.skills);

        const skillsToImprove =
            skillRatings.filter(
                function (rating) {
                    return Number(rating) <= 3;
                }
            ).length;

        if (dashboardSkillsToImprove) {
            dashboardSkillsToImprove.textContent =
                skillsToImprove;
        }
    }
}
        /* =========================================
           MOBILE NAVIGATION
        ========================================== */

        const menuToggle =
            document.getElementById("menuToggle");

        const navMenu =
            document.getElementById("navMenu");


        if (menuToggle && navMenu) {

            menuToggle.addEventListener(
                "click",
                function () {

                    const isOpen =
                        navMenu.classList.toggle(
                            "active"
                        );


                    menuToggle.classList.toggle(
                        "active",
                        isOpen
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        isOpen
                            ? "true"
                            : "false"
                    );

                }
            );


            /* -----------------------------------------
               Close mobile menu when link is clicked
            ----------------------------------------- */

            const navLinks =
                navMenu.querySelectorAll(
                    ".nav-link"
                );


            navLinks.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            navMenu.classList.remove(
                                "active"
                            );


                            menuToggle.classList.remove(
                                "active"
                            );


                            menuToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }
                    );

                }
            );

        }


        /* =========================================
           ACTIVE NAVIGATION LINK
        ========================================== */

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        const allNavLinks =
            document.querySelectorAll(
                ".nav-menu .nav-link"
            );


        allNavLinks.forEach(
            function (link) {

                const href =
                    link.getAttribute("href");


                if (!href) {
                    return;
                }


                const linkPage =
                    href
                        .split("/")
                        .pop()
                        .toLowerCase();


                if (
                    currentPage === linkPage ||
                    (
                        currentPage === "" &&
                        linkPage === "index.html"
                    )
                ) {

                    allNavLinks.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    link.classList.add(
                        "active"
                    );

                }

            }
        );


        /* =========================================
           NAVBAR SCROLL EFFECT
        ========================================== */

        const navbar =
            document.querySelector(
                ".navbar"
            );


        function handleNavbarScroll() {

            if (!navbar) {
                return;
            }


            if (window.scrollY > 30) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }


        window.addEventListener(
            "scroll",
            handleNavbarScroll,
            {
                passive: true
            }
        );


        handleNavbarScroll();


        /* =========================================
           SMOOTH SCROLL
           For internal # links
        ========================================== */

        const internalLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        internalLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const targetID =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !targetID ||
                            targetID === "#"
                        ) {
                            return;
                        }


                        const targetElement =
                            document.querySelector(
                                targetID
                            );


                        if (!targetElement) {
                            return;
                        }


                        event.preventDefault();


                        const navbarHeight =
                            navbar
                                ? navbar.offsetHeight
                                : 0;


                        const targetPosition =
                            targetElement
                                .getBoundingClientRect()
                                .top +
                            window.scrollY -
                            navbarHeight;


                        window.scrollTo({

                            top:
                                targetPosition,

                            behavior:
                                "smooth"

                        });

                    }
                );

            }
        );


        /* =========================================
           CLOSE MOBILE MENU
           When clicking outside navbar
        ========================================== */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !menuToggle ||
                    !navMenu
                ) {
                    return;
                }


                const clickedInsideNavbar =
                    event.target.closest(
                        ".navbar"
                    );


                if (!clickedInsideNavbar) {

                    navMenu.classList.remove(
                        "active"
                    );


                    menuToggle.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );


        /* =========================================
           ESCAPE KEY
           Close mobile menu
        ========================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key !== "Escape"
                ) {
                    return;
                }


                if (
                    !menuToggle ||
                    !navMenu
                ) {
                    return;
                }


                navMenu.classList.remove(
                    "active"
                );


                menuToggle.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );


        /* =========================================
           SCROLL REVEAL ANIMATION
        ========================================== */

        const revealElements =
            document.querySelectorAll(
                ".feature-card, " +
                ".process-step, " +
                ".how-bottom-note, " +
                ".cta-content, " +
                ".cta-visual"
            );


        if (
            revealElements.length > 0 &&
            "IntersectionObserver" in window
        ) {

            revealElements.forEach(
                function (element) {

                    element.classList.add(
                        "reveal-element"
                    );

                }
            );


            const revealObserver =
                new IntersectionObserver(
                    function (
                        entries,
                        observer
                    ) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "reveal-visible"
                                    );


                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12
                    }
                );


            revealElements.forEach(
                function (element) {

                    revealObserver.observe(
                        element
                    );

                }
            );

        }


        /* =========================================
           HERO CONTENT ENTRY
        ========================================== */

        const heroContent =
            document.querySelector(
                ".hero-content"
            );


        const heroVisual =
            document.querySelector(
                ".hero-visual"
            );


        if (heroContent) {

            setTimeout(
                function () {

                    heroContent.classList.add(
                        "hero-content-visible"
                    );

                },
                100
            );

        }


        if (heroVisual) {

            setTimeout(
                function () {

                    heroVisual.classList.add(
                        "hero-visual-visible"
                    );

                },
                250
            );

        }


        /* =========================================
           FEATURE CARD HOVER ACCESSIBILITY
        ========================================== */

        const featureCards =
            document.querySelectorAll(
                ".feature-card"
            );


        featureCards.forEach(
            function (card) {

                card.addEventListener(
                    "mouseenter",
                    function () {

                        card.classList.add(
                            "is-hovered"
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        card.classList.remove(
                            "is-hovered"
                        );

                    }
                );

            }
        );


        /* =========================================
           PROCESS CARD HOVER
        ========================================== */

        const processCards =
            document.querySelectorAll(
                ".process-card"
            );


        processCards.forEach(
            function (card) {

                card.addEventListener(
                    "mouseenter",
                    function () {

                        card.classList.add(
                            "is-hovered"
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        card.classList.remove(
                            "is-hovered"
                        );

                    }
                );

            }
        );


        /* =========================================
           PREVENT BROKEN # LINKS
        ========================================== */

        const emptyHashLinks =
            document.querySelectorAll(
                'a[href="#"]'
            );


        emptyHashLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                    }
                );

            }
        );


        /* =========================================
           WINDOW RESIZE
           Keep mobile menu stable
        ========================================== */

        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth > 768 &&
                    navMenu &&
                    menuToggle
                ) {

                    navMenu.classList.remove(
                        "active"
                    );


                    menuToggle.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );


        /* =========================================
           HOME PAGE READY
        ========================================== */

        console.log(
            "Smart Career Guidance System — Home Page JS Loaded Successfully."
        );

    }
);

