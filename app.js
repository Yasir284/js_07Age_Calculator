const container = document.querySelector(".container");
const error = document.querySelector(".error");
error.style.fontSize = "5rem";
error.style.marginTop = "2rem";

container.appendChild(document.createElement("p"));
container.lastElementChild.setAttribute("class", "p");
let p = document.querySelector(".p");
p.classList.add("error");
p.textContent =
  "Happy birthday! Hope all your birthday wishes and dreams come true.";
p.style.fontSize = "3rem";
p.style.marginTop = "2rem";

function getAge() {
  let dob = container.querySelector("#dob").value;
  dob = new Date(dob);
  let now = new Date();

  let diff = now - dob; //miliseconds
  let totalDays = diff / (1000 * 60 * 60 * 24);
  let years = totalDays / 365.25;
  let months = ((years - Math.floor(years)) * 365.25) / 30.437;
  let days = (months - Math.floor(months)) * 30.437;
  return [Math.floor(years), Math.floor(months), Math.floor(days)];
}

function displayAge() {
  error.classList.add("error");
  p.classList.add("error");
  let [years, months, days] = getAge();

  container.querySelector(".desc").innerText = `Your age is: ${years}`;
  container.querySelector(".age #years").textContent = years;
  container.querySelector(".age #months").textContent = months;
  container.querySelector(".age #days").textContent = days;

  if (years < 0) {
    return error.classList.remove("error");
  } else if (months == 0 && days == 0) {
    return p.classList.remove("error");
  }
}

document.querySelector("#dob").setAttribute("onchange", "displayAge()");
