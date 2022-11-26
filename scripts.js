"use strict";

function deleteItem(item) {
  item.addEventListener("dblclick", (e) => {
    e.target.innerText = "";
  });
}

//for to do's
const toDoEl = document.querySelector(".todo ul");
const toDoBtn = document.querySelector(".add-todo button");
const toDoInput = document.querySelector(".add-todo input");
let toDo = document.querySelector(".todo ul");

//adding a to-do
toDoBtn.addEventListener("click", () => {
  toDoEl.innerHTML += `<li>${toDoInput.value}</li>`;
  toDoInput.value = "";
});

//striking a to-do
toDo.addEventListener("click", (e) => {
  e.target.innerHTML = `<s>${e.target.innerText}</s>`;
});

//deleting a to-do
deleteItem(toDo);

// for events
const comingUpEl = document.querySelector(".events");
const comingUpBtn = document.querySelector(".coming-up button");
const comingUpInput = document.querySelector(".coming-up input");

comingUpBtn.addEventListener("click", () => {
  if (comingUpBtn.innerText === "Add Date") {
    let date = comingUpInput.value;
    comingUpEl.innerHTML += `<span class="event-date">${date}</span> `;
    console.log(comingUpEl);
    comingUpInput.value = "";
    comingUpBtn.innerText = "Add Event";
  } else if (comingUpBtn.innerText === "Add Event") {
    let event = comingUpInput.value;
    comingUpEl.innerHTML += `<span class="event-item">${event}</span><p>`;
    console.log(comingUpEl);
    comingUpInput.value = "";
    comingUpBtn.innerText = "Add Date";
  }
});

deleteItem(comingUpEl);

//for thoughts
const meditateOnEl = document.querySelector(".meditate ul");
const meditateBtn = document.querySelector(".add-thought button");
const meditateInput = document.querySelector(".add-thought input");

meditateBtn.addEventListener("click", () => {
  meditateOnEl.innerHTML += `<li>${meditateInput.value}</li>`;
  meditateInput.value = "";
});

deleteItem(meditateOnEl); //FIX ME

//for D/E info
const deHeader = document.querySelector(".de");
const deModal = document.querySelector(".de-modal");

deHeader.addEventListener("click", () => {
  deModal.classList.remove("hidden");
});

function closeModal(modalName) {
  modalName.classList.add("hidden");
}
//escape modal using esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !deModal.classList.contains("hidden")) {
    closeModal(deModal);
  }
});

//escape modal with outside click
document.addEventListener("click", (e) => {
  if (!deModal.classList.contains("hidden") && e.target.closest(".de-modal")) {
    closeModal(deModal);
  }
});

//for D/E scores
const scoreBtn = document.querySelectorAll(".score");

scoreBtn.forEach((button) => {
  let score = 0;
  button.addEventListener("click", () => {
    if (score === 10) {
      score = 0;
      button.classList.remove("score-clicked");
    } else {
      score++;
      button.classList.add("score-clicked");
    }

    handleScore(button, score);
  });
});

function handleScore(button, score) {
  button.innerText = score;
}
