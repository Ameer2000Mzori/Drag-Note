// selecting our elements
const addNewBtns = document.querySelectorAll("#add-New-Btn-Id");
const UlElementId = document.querySelectorAll(".ul-Element-Id");
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

// our saved data objects :

// get our data from local storage if there is :
let getBackLog = localStorage.getItem("backLog");
let backLog = getBackLog ? JSON.parse(getBackLog) : [];

let getProgress = localStorage.getItem("progress");
let progress = getProgress ? JSON.parse(getProgress) : [];

let getComplete = localStorage.getItem("complete");
let complete = getComplete ? JSON.parse(getComplete) : [];

let getOnHold = localStorage.getItem("onHold");
let onHold = getOnHold ? JSON.parse(getOnHold) : [];

// global varibales
let newEditCount = 0;
let editCount = 0;

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
    // console.log(ourEditBtnIcon);

    if (newEditCount === 0) {
      ourEditBtnIcon.classList.add("fa-solid", "fa-check");
      newEditCount++;
      editTextNew.setAttribute("contenteditable", "true");
      editTextNew.focus();
    } else {
      ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
      ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
      newEditCount = 0;
      editTextNew.removeAttribute("contenteditable");
      editTextNew.blur();
      let ourNewText = editTextNew.textContent;
      console.log(ourNewText);
      if (indx === 0) {
        let newOBj: any = { text: ourNewText };
        backLog.push(newOBj);
        localStorage.setItem("backLog", JSON.stringify(backLog));
      } else if (indx === 1) {
        let newOBj: any = { text: ourNewText };
        progress.push(newOBj);
        console.log(progress);
        localStorage.setItem("progress", JSON.stringify(progress));
      } else if (indx === 2) {
        let newOBj: any = { text: ourNewText };
        complete.push(newOBj);
        console.log(complete);
        localStorage.setItem("complete", JSON.stringify(complete));
      } else if (indx === 3) {
        let newOBj: any = { text: ourNewText };
        onHold.push(newOBj);
        console.log(onHold);
        localStorage.setItem("onHold", JSON.stringify(onHold));
      }
    }
  });

  // delete btn
  deleteBtn.addEventListener("click", () => {
    if (newLi) {
      newLi.remove();
      console.log(ourListUl);
    }
  });
};

// when loaded our data should apear on the screen :
const listOurData = () => {
  backLog.forEach((backLogText, index) => {
    const newLi = document.createElement("li");

    const noteText = document.createElement("p");
    noteText.classList.add("note-Text");
    noteText.textContent = `${backLogText.text}`;

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

    UlElementId[0].appendChild(newLi);

    console.log(backLogText.text);

    // our eventlisnters

    // edit button

    editBtn.addEventListener("click", () => {
      let editTextNew: any = editBtn.parentElement.parentElement?.firstChild;
      let ourEditBtnIcon: any = editBtn.firstChild;

      if (editCount === 0) {
        ourEditBtnIcon.classList.add("fa-solid", "fa-check");
        editTextNew.setAttribute("contenteditable", "true");
        editTextNew.focus();
        editCount++;
      } else {
        editCount = 0;
        ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
        ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
        editTextNew.removeAttribute("contenteditable");
        editTextNew.blur();
        let ourNewText = editTextNew.textContent;
        console.log(ourNewText);
        let newOBj: any = { text: ourNewText };
        backLog.splice(index, 1);
        backLog.push(newOBj);
        localStorage.setItem("backLog", JSON.stringify(backLog));
        backLog.splice(index, 1);
        getBackLog;
      }
    });

    // our delete button function :
    deleteBtn.addEventListener("click", () => {
      let deleteTextNote =
        editBtn.parentElement.parentElement?.firstChild?.textContent;
    });
  });

  progress.forEach((progressText, index) => {
    const newLi = document.createElement("li");

    const noteText = document.createElement("p");
    noteText.classList.add("note-Text");
    noteText.textContent = `${progressText.text}`;

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

    UlElementId[1].appendChild(newLi);

    console.log(progressText.text);

    // our eventlisnters

    // edit button

    editBtn.addEventListener("click", () => {
      let editTextNew: any = editBtn.parentElement.parentElement?.firstChild;
      let ourEditBtnIcon: any = editBtn.firstChild;
      if (editCount === 0) {
        ourEditBtnIcon.classList.add("fa-solid", "fa-check");
        editTextNew.setAttribute("contenteditable", "true");
        editTextNew.focus();
        editCount++;
      } else {
        editCount = 0;
        ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
        ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
        editTextNew.removeAttribute("contenteditable");
        editTextNew.blur();
        let ourNewText = editTextNew.textContent;
        console.log(ourNewText);
        let newOBj: any = { text: ourNewText };
        backLog.splice(index, 1);
        backLog.push(newOBj);
        localStorage.setItem("backLog", JSON.stringify(backLog));
        backLog.splice(index, 1);
        getBackLog;
      }
    });
  });

  complete.forEach((completeText, index) => {
    const newLi = document.createElement("li");

    const noteText = document.createElement("p");
    noteText.classList.add("note-Text");
    noteText.textContent = `${completeText.text}`;

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

    UlElementId[2].appendChild(newLi);
    console.log(completeText.text);

    // our eventlisnters

    // edit button

    editBtn.addEventListener("click", () => {
      let editTextNew: any = editBtn.parentElement.parentElement?.firstChild;
      let ourEditBtnIcon: any = editBtn.firstChild;
      if (editCount === 0) {
        ourEditBtnIcon.classList.add("fa-solid", "fa-check");
        editTextNew.setAttribute("contenteditable", "true");
        editTextNew.focus();
        editCount++;
      } else {
        editCount = 0;
        ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
        ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
        editTextNew.removeAttribute("contenteditable");
        editTextNew.blur();
        let ourNewText = editTextNew.textContent;
        console.log(ourNewText);
        let newOBj: any = { text: ourNewText };
        backLog.splice(index, 1);
        backLog.push(newOBj);
        localStorage.setItem("backLog", JSON.stringify(backLog));
        backLog.splice(index, 1);
        getBackLog;
      }
    });
  });

  onHold.forEach((onHoldText, index) => {
    const newLi = document.createElement("li");

    const noteText = document.createElement("p");
    noteText.classList.add("note-Text");
    noteText.textContent = `${onHoldText.text}`;

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

    UlElementId[3].appendChild(newLi);

    // our eventlinsters:

    // edit btn
    editBtn.addEventListener("click", () => {
      let editTextNew: any = editBtn.parentElement.parentElement?.firstChild;
      let ourEditBtnIcon: any = editBtn.firstChild;
      if (editCount === 0) {
        ourEditBtnIcon.classList.add("fa-solid", "fa-check");
        editTextNew.setAttribute("contenteditable", "true");
        editTextNew.focus();
        editCount++;
      } else {
        editCount = 0;
        ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
        ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
        editTextNew.removeAttribute("contenteditable");
        editTextNew.blur();
        let ourNewText = editTextNew.textContent;
        console.log(ourNewText);
        let newOBj: any = { text: ourNewText };
        backLog.splice(index, 1);
        backLog.push(newOBj);
        localStorage.setItem("backLog", JSON.stringify(backLog));
        backLog.splice(index, 1);
        getBackLog;
      }
    });
  });
};

// our delete text function
// const deleteThisNote = () => {};

// eventlinsters
addNewBtns.forEach((addNewBtn, indx) => {
  addNewBtn.addEventListener("click", (e) => {
    addNewNote(addNewBtn, indx);
  });
});

listOurData();
