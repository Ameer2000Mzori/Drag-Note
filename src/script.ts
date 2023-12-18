// selecting our elements
const addNewBtns = document.querySelectorAll("#add-New-Btn-Id");

// our data objects for our each card
let createNewTextObj = [
  {
    text: "backlog?",
  },
  {
    text: "progressing?",
  },
  {
    text: "compeleted?",
  },
  {
    text: "on hold?",
  },
];

// global varibales

// functions

// this for adding new element
const addNewNote = (addNewBtn, indx) => {
  let ourListUl = addNewBtn.parentElement.parentElement.children[1].children[0];
  console.log(ourListUl, indx);

  // creating elements dynamcily :
  const newLi = document.createElement("li");

  const noteText = document.createElement("p");
  noteText.classList.add("note-Text");
  noteText.textContent = `${createNewTextObj[indx].text}`;

  const buttonsWrap = document.createElement("div");
  buttonsWrap.classList.add("buttons-Wrap");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("dele-Btn");
  const iconDeleBtn = document.createElement("i");
  iconDeleBtn.classList.add("fa-solid", "fa-trash");
  deleteBtn.appendChild(iconDeleBtn);
  buttonsWrap.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-Btn");
  const iconEditBtn = document.createElement("i");
  iconEditBtn.classList.add("fa-regular", "fa-pen-to-square");
  editBtn.appendChild(iconEditBtn);
  buttonsWrap.appendChild(editBtn);

  newLi.appendChild(noteText);
  newLi.appendChild(buttonsWrap);
  ourListUl.appendChild(newLi);

  // our eventlinsters:

  // edit btn
  editBtn.addEventListener("click", () => {
    let editTextNew: any = editBtn.parentElement.parentElement?.firstChild;
    let ourEditBtnIcon: any = editBtn.firstChild;
    console.log(ourEditBtnIcon);
    editText(editTextNew, ourEditBtnIcon, indx);
  });

  // delete btn
  deleteBtn.addEventListener("click", () => {
    if (newLi) {
      newLi.remove();
      console.log(ourListUl);
    }
  });
};

// our edit text function
let editCount = 0;
const editText = (editTextNew, ourEditBtnIcon, indx) => {
  if (editCount === 0) {
    ourEditBtnIcon.classList.add("fa-solid", "fa-check");
    editCount++;
    editTextNew.setAttribute("contenteditable", "true");
    editTextNew.focus();
  } else {
    ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
    ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
    editCount = 0;
    editTextNew.removeAttribute("contenteditable");
    editTextNew.blur();
    let ourNewText = editTextNew.textContent;
    console.log(ourNewText);
    if (indx === 0) {
      console.log("Black Log");
    } else if (indx === 1) {
      console.log("in Progress");
    } else if (indx === 2) {
      console.log("Complete");
    } else if (indx === 3) {
      console.log("On Hold");
    }
  }
};

// eventlinsters
addNewBtns.forEach((addNewBtn, indx) => {
  addNewBtn.addEventListener("click", (e) => {
    addNewNote(addNewBtn, indx);
  });
});
