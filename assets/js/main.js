
// Theme toggle (persist to localStorage)
const key = "theme";
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
function applyTheme(t){
  if (t === "light"){ root.classList.add("light"); document.body.classList.add("light"); }
  else { root.classList.remove("light"); document.body.classList.remove("light"); }
}
applyTheme(localStorage.getItem(key) || "dark");
themeToggle?.addEventListener("click", ()=>{
  const next = root.classList.contains("light") ? "dark" : "light";
  localStorage.setItem(key, next);
  applyTheme(next);
});
