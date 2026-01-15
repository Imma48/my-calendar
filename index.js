const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");
const btnEL = document.getElementById("button");

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
monthEl.innerText = now.toLocaleString("en", {month: "long"});
const date = now.getDate();

yearEl.innerText = year;
dayEl.innerText = now.toLocaleString("en", {
  weekday: "long",
});
dateEl.innerText = date;

//Enable dark mode
btnEL.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    btnEL.innerText = "Light Mode";
    btnEL.classList.remove("btn-primary");
    btnEL.classList.add("btn-light");
  } else {
    btnEL.innerText = "Dark Mode";
    btnEL.classList.remove("btn-light");
    btnEL.classList.add("btn-primary");
    accordionBody.computedStyleMap.color = "white";
  }
});
