// document.ready Jquery
document.addEventListener("DOMContentLoaded", function () {
    ButonDarMode(!window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.getElementById("DarkMode").onclick = function () {
        ButonDarMode(document.documentElement.classList.contains("dark"));
    };
});

function ButonDarMode(ValDarkMode) {
    let iconsun = document.getElementById("iconsun");
    let iconMood = document.getElementById("iconMoon");
    if (ValDarkMode) {
        document.documentElement.classList.remove("dark");
        iconsun.classList.remove("hidden")
        iconMood.classList.add("hidden")
    } else {
        document.documentElement.classList.add("dark");
        iconsun.classList.add("hidden")
        iconMood.classList.remove("hidden")
    }
}