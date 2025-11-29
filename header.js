// محل قرارگیری هدر
const headerContainer = document.getElementById("header");

// هدر را لود می‌کنیم
fetch("header.html")
  .then(res => res.text())
  .then(html => {
      headerContainer.innerHTML = html;
      loadHeaderLogic();
  });

function loadHeaderLogic() {

    const themeKey = "konkur_theme";
    const htmlTag = document.body;
    const profileBtn = document.getElementById("headerProfile");
    const themeBtn = document.getElementById("headerTheme");

    /* ------------- تم ------------ */
    function applyTheme(t){
        document.body.setAttribute("data-theme",t);
        themeBtn.textContent = t === "light" ? "🌙" : "☀️";
    }

    applyTheme(localStorage.getItem(themeKey) || "dark");

    themeBtn.onclick = () => {
        const now = document.body.getAttribute("data-theme");
        const next = now === "dark" ? "light" : "dark";
        localStorage.setItem(themeKey, next);
        applyTheme(next);
    };

    /* ------------- پروفایل ------------ */
    profileBtn.onclick = () => {
        window.location.href = "profile.html";
    };

    /* ------------- عنوان داینامیک ------------ */
    const titles = {
        "intro.html": "آغاز مسیر پیشرفت",
        "login.html": "ورود",
        "dashboard.html": "داشبورد",
        "field.html": "انتخاب رشته",
        "exam-type.html": "نوع کنکور",
        "subjects.html": "انتخاب درس",
        "questions-count.html": "تعداد سؤالات",
        "quiz.html": "آزمون",
        "result.html": "نتیجه آزمون",
        "profile.html": "پروفایل"
    };

    let file = window.location.pathname.split("/").pop();
    document.getElementById("headerTitle").textContent =
        titles[file] || "";

    /* ------------- Shrink هنگام اسکرول ------------ */
    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });
}
