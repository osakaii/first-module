
const orange = "#FF9209";
const white = "#fff";
const dark = "#222";

export const toggleTheme = ( mode ) => {
    
  const darkMode = document.querySelector(".darkmode");
  const text = darkMode.querySelectorAll("p");

  const lightSvg = darkMode.querySelectorAll("svg")[0];
  const darkSvg = darkMode.querySelectorAll("svg")[1];

  const changeTextColor = (color, btnIndex) =>{
    text.forEach((item, index) => {
        item.style.color = color;
        if (index === btnIndex) {
          item.style.color = orange;
        }
      });
  }

  if (mode === "light") {
    darkMode.style.background = white;
    lightSvg.style.fill = orange;
    darkSvg.style.fill = dark;

    const lightBtnIndex = 3

    changeTextColor(dark, lightBtnIndex)
  }
  if (mode === "dark") {
    darkMode.style.background = dark;
    darkSvg.style.fill = orange;
    lightSvg.style.fill = white;

    const darkBtnIndex = 4

    changeTextColor(white, darkBtnIndex)
  }
};
