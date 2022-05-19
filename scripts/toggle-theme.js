
const orange = "#FF9209";
const white = "#fff";
const dark = "#222";



export const toggleTheme = (mode) => {
  const darkMode = document.querySelector(".darkmode");
  const text = darkMode.querySelectorAll("p");
  const svg = darkMode.querySelectorAll("svg");

  if (mode === "light") {
    darkMode.style.background = white;
    text.forEach((item, index) => {
      item.style.color = dark;
      if (index === 3) {
        item.style.color = orange;
        svg[0].style.fill = orange;
        svg[1].style.fill = dark;
      }
    });
  }
  if (mode === "dark") {
    darkMode.style.background = dark;
    text.forEach((item, index) => {
      item.style.color = white;
      if (index === 4) {
        item.style.color = orange;
        svg[1].style.fill = orange;
        svg[0].style.fill = white;
      }
    });
  }
};
