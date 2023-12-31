const html = document.querySelector("html");
const theme = (() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    return "light";
})();

if (theme === "light") {
    html.classList.remove("dark");
} else {
    html.classList.add("dark");
}
window.localStorage.setItem("theme", theme);
