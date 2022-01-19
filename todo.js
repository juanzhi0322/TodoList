const inputArea = document.querySelector(".text-input");
const addButton = document.querySelector("#addButton");
const clearAllButton = document.querySelector("#clearButton");

const listContainer = document.querySelector(".list-container");

// modal
let DATA = [];

// view
function renderFront() {
  listContainer.innerHTML = "";
  DATA.forEach((each) => {
    const liContainer = document.createElement("li");
    listContainer.append(liContainer);

    const listCheckBox = document.createElement("input");
    listCheckBox.setAttribute("type", "checkbox");
    if (each.checkStatus === "checked") {
      listCheckBox.checked = true;
    }
    const listText = document.createElement("span");
    listText.innerHTML = each.inputText;
    listText.className = each.checkStatus;
    const listDeleteIcon = document.createElement("div");
    listDeleteIcon.className = "delete-icon";
    listDeleteIcon.innerHTML = "&#10005;";

    listCheckBox.addEventListener("click", () => {
      if (listCheckBox.checked) {
        listText.className = "checked";
        each.checkStatus = "checked";
      } else {
        listText.className = "";
        each.checkStatus = "";
      }
    });

    listDeleteIcon.addEventListener("click", () => {
      console.log("delete id: ", each.id);
      deleteElement(each.id);
      renderFront();
    });

    liContainer.append(listCheckBox);
    liContainer.append(listText);
    liContainer.append(listDeleteIcon);
  });
  inputArea.value = "";
}

// controller

function addElement(userInput) {
  const id = new Date().valueOf();
  const eachToDo = { id: id, inputText: userInput, checkStatus: "" };
  DATA.push(eachToDo);
}
function deleteElement(userId) {
  DATA = DATA.filter((each) => {
    console.log("function run", userId);
    return each.id != userId;
  });
}

addButton.addEventListener("click", () => {
  const inputText = inputArea.value;
  addElement(inputText);
  renderFront();
});

clearAllButton.addEventListener("click", () => {
  DATA = [];
  renderFront();
});
