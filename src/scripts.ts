import { logDate } from "./logDate";

logDate();

const pages: HTMLElement[] = Array.from(
  document.querySelectorAll<HTMLElement>("section"),
);

const buttons: HTMLButtonElement[] = Array.from(
  document.querySelectorAll<HTMLButtonElement>(".js-button"),
);

let currentPageIndex = 0;

const nextPage = () => {
  currentPageIndex += 1;
  if (currentPageIndex >= pages.length) {
    currentPageIndex = 0;
  }
  pages.forEach((e, index) => {
    if (index === currentPageIndex) {
      e.classList.remove("hidden");
    } else {
      e.classList.add("hidden");
    }
  });
};

buttons.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault(); // prevents default behaviour (refresh in this case)
    nextPage();
  });
});

// function toggleTheme() {
//   const htmlElement = document.documentElement;

//   // Toggle the 'data-theme' attribute to switch between themes
//   if (htmlElement.getAttribute("data-theme") === "light") {
//     htmlElement.setAttribute("data-theme", "dark");
//   } else {
//     htmlElement.setAttribute("data-theme", "light");
//   }
// }
const htmlElement = document.documentElement;
htmlElement.setAttribute("data-theme", "light");
