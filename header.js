/* محل قرارگیری هدر */
const headerContainer = document.getElementById("header");

/* لود هدر */
fetch("header.html")
    .then(res => res.text())
    .then(html => {
        headerContainer.innerHTML = html;
        initHeader();
    });

function initHeader() {

    const themeKey = "konkur_theme";

    /* دکمه ها */
    const themeBtn  = document.getElementById("headerTheme");
    const profileBtn = document.getElementById("headerProfile");

    /* ---------- تم ---------- */
    function applyTheme(mode){
        document.body.setAttribute("data-theme", mode);
        themeBtn.textContent = mode === "dark" ? "☀️" : "🌙";
    }

    applyTheme(localStorage.getItem(themeKey) || "dark");

    themeBtn.onclick = ()=>{
        const now = document.body.getAttribute("data-theme");
        const next = now === "dark" ? "light" : "dark";
        localStorage.setItem(themeKey, next);
        applyTheme(next);
    };

    /* ---------- پروفایل ---------- */
    profileBtn.onclick = ()=>{
        window.location.href = "profile.html";
    };

    /* ---------- عنوان داینامیک ---------- */
    const titleMap = {
        "intro.html": "آغاز مسیر",
        "login.html": "ورود",
        "dashboard.html": "داشبورد",
        "field.html": "انتخاب رشته",
        "subjects.html": "انتخاب درس",
        "exam-type.html": "نوع کنکور",
        "questions-count.html": "تعداد سوال",
        "quiz.html": "آزمون",
        "result.html": "نتیجه آزمون",
        "profile.html": "پروفایل"
    };

    const file = window.location.pathname.split("/").pop();
    document.getElementById("headerTitle").textContent = titleMap[file] || "";

    /* ---------- کوچک شدن هنگام اسکرول ---------- */
    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 20) header.classList.add("shrink");
        else header.classList.remove("shrink");
    });
}
