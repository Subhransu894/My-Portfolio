const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light-theme");
    themeIcon.classList.replace("bi-sun-fill","bi-moon-stars-fill")
}
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme")

    if(isLight){
        themeIcon.classList.replace("bi-sun-fill","bi-moon-stars-fill");
        localStorage.setItem("theme","light")
    }else{
        themeIcon.classList.replace("bi-moon-stars-fill","bi-sun-fill");
        localStorage.setItem("theme","dark")
    }
});