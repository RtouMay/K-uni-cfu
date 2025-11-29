document.addEventListener("DOMContentLoaded", () => {

    const themeKey   = "konkur_theme";
    const themeBtn   = document.getElementById("headerTheme");
    const profileBtn = document.getElementById("headerProfile");
    const titleEl    = document.getElementById("headerTitle");
    const header     = document.querySelector(".main-header");

    if (!header) return; // اگر صفحه هدر نداشت، هیچی انجام نده

    /* --- تم --- */
    function applyTheme(mode){
        document.body.setAttribute("data-theme", mode);
        if (themeBtn) themeBtn.textContent = (mode === "dark" ? "☀️" : "🌙");
    }

    applyTheme(localStorage.getItem(themeKey) || "dark");

    if (themeBtn){
        themeBtn.onclick = () => {
            const now  = document.body.getAttribute("data-theme");
            const next = now === "dark" ? "light" : "dark";
            localStorage.setItem(themeKey, next);
            applyTheme(next);
        };
    }

    /* --- پروفایل --- */
    if (profileBtn){
        profileBtn.onclick = () => {
            window.location.href = "profile.html";
        };
    }

    /* --- عنوان داینامیک --- */
    if (titleEl){
        const titles = {
            "index.html": "خانه",
            "intro.html": "آغاز مسیر",
            "login.html": "ورود",
            "dashboard.html": "داشبورد",
            "field.html": "انتخاب رشته",
            "exam-type.html": "نوع کنکور",
            "subjects.html": "انتخاب درس",
            "questions-count.html": "تعداد سوال",
            "quiz.html": "آزمون",
            "result.html": "نتیجه آزمون",
            "profile.html": "پروفایل"
        };

        let file = window.location.pathname.split("/").pop();
        if (file === "" ) file = "index.html";

        titleEl.textContent = titles[file] || "";
    }

    /* --- کوچک شدن موقع اسکرول --- */
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) header.classList.add("shrink");
        else header.classList.remove("shrink");
    });
});
