const addNote = document.querySelector(".action button.addNote");
const taskModal = document.getElementById("taskModal");
const taskTitle = document.getElementById("taskTitle");
const description = document.getElementById("taskDescription");
const dateInput = document.getElementById("taskDate");
const timeInput = document.getElementById("taskTime");
const closeBtn = document.getElementById("closeModal");
const submitBtn = document.getElementById("submitBtn");

addNote.addEventListener("click", () => {
  taskModal.classList.add("active");
  taskTitle.focus();
});

closeBtn.addEventListener("click", () => {
  taskModal.classList.remove("active");
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents page reload if this is in a form

  if (taskTitle.value.trim() !== "") {
    const noteCard = document.querySelector(".noteCard");
    const messageInfo = document.createElement("div");
    messageInfo.classList.add("messageInfo");

    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    const spanContainer = document.createElement("span");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");

    checkBox.addEventListener("change", () => {
      messageInfo.classList.toggle("completed", checkBox.checked);
    });

    const taskName = document.createElement("h1");
    taskName.classList.add("taskName");
    taskName.textContent = taskTitle.value.trim();

    const message = document.createElement("p");
    message.classList.add("message");
    message.textContent = description.value.trim();

    const timeElement = document.createElement("p");
    timeElement.classList.add("time");
    timeElement.textContent = timeInput.value;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";

    textContainer.append(taskName, message);
    spanContainer.append(checkBox, textContainer);
    messageInfo.append(spanContainer, timeElement, editBtn);
    noteCard.append(messageInfo);

    taskModal.classList.remove("active");
    taskTitle.value = "";
    description.value = "";

    const projectCards = document.querySelector(".projectCards");

    const projectRow = document.createElement("p");

    const title = taskTitle.value.trim();
    const sideTitle = document.createElement('p')
    sideTitle.textContent = title;

    const hash = document.createElement("span");
    hash.classList.add("hash");
    hash.textContent = "#";

    projectRow.append(hash, sideTitle);
    projectCards.append(projectRow);
  }
});
