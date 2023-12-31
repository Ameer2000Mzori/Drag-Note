// selecting our elements
const addNewBtns = document.querySelectorAll("#add-New-Btn-Id");
const UlElementId = document.querySelectorAll(".ul-Element-Id");
const moveList = document.getElementsByClassName("move-List")[0];
const closeBtn = document.getElementsByClassName("close-Btn")[0];
const buttonList = document.getElementsByClassName("button-List")[0];

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
      UpdateScreen();
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

    const moveBtn = document.createElement("button");
    moveBtn.classList.add("move-Btn");
    const iconMoveBtn = document.createElement("i");
    iconMoveBtn.classList.add("fa-solid", "fa-up-down-left-right");
    moveBtn.appendChild(iconMoveBtn);
    buttonsWrap.appendChild(moveBtn);

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
      }
    });

    // our delete button
    deleteBtn.addEventListener("click", () => {
      let deleteText: any =
        editBtn.parentElement.parentElement?.firstChild?.textContent;
      console.log(deleteText);

      backLog = backLog.filter((textNote) => {
        return textNote.text !== deleteText;
      });
      localStorage.setItem("backLog", JSON.stringify(backLog));
      UpdateScreen();
    });

    // our move button
    moveBtn.addEventListener("click", () => {
      if (moveList.classList.contains("active")) {
        moveList.classList.remove("active");
        // getting the data of the note we clicked
        let moveTextNote: any =
          editBtn.parentElement.parentElement?.firstChild?.textContent;
        console.log(moveTextNote);

        // creating our list dynamiclly
        const buttonOne = document.createElement("button");
        buttonOne.classList.add("button-One");
        buttonOne.textContent = `Move to Progres...`;
        buttonList.appendChild(buttonOne);
        buttonOne.addEventListener("click", () => {
          backLog.splice(index, 1);

          let moveToProgress = {
            text: moveTextNote,
          };

          progress.push(moveToProgress);
          localStorage.setItem("progress", JSON.stringify(progress));
          localStorage.setItem("backLog", JSON.stringify(backLog));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });

        const buttonTwo = document.createElement("button");
        buttonTwo.classList.add("button-Two");
        buttonTwo.textContent = `Move to Comple...`;
        buttonList.appendChild(buttonTwo);

        buttonTwo.addEventListener("click", () => {
          backLog.splice(index, 1);

          let moveToComplete = {
            text: moveTextNote,
          };

          complete.push(moveToComplete);
          localStorage.setItem("complete", JSON.stringify(complete));
          localStorage.setItem("backLog", JSON.stringify(backLog));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });

        const buttonThree = document.createElement("button");
        buttonThree.classList.add("button-Three");
        buttonThree.textContent = `Move to On Ho..`;
        buttonList.appendChild(buttonThree);

        buttonThree.addEventListener("click", () => {
          backLog.splice(index, 1);

          let moveToOnHold = {
            text: moveTextNote,
          };

          onHold.push(moveToOnHold);
          localStorage.setItem("onHold", JSON.stringify(onHold));
          localStorage.setItem("backLog", JSON.stringify(backLog));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });
      }
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

    const moveBtn = document.createElement("button");
    moveBtn.classList.add("move-Btn");
    const iconMoveBtn = document.createElement("i");
    iconMoveBtn.classList.add("fa-solid", "fa-up-down-left-right");
    moveBtn.appendChild(iconMoveBtn);
    buttonsWrap.appendChild(moveBtn);

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
        progress.splice(index, 1);
        progress.push(newOBj);
        localStorage.setItem("progress", JSON.stringify(progress));
      }
    });

    // our delete button
    deleteBtn.addEventListener("click", () => {
      let deleteText: any =
        editBtn.parentElement.parentElement?.firstChild?.textContent;
      console.log(deleteText);

      progress = progress.filter((textNote) => {
        return textNote.text !== deleteText;
      });
      localStorage.setItem("progress", JSON.stringify(progress));
      UpdateScreen();
    });
    // our move button
    moveBtn.addEventListener("click", () => {
      if (moveList.classList.contains("active")) {
        moveList.classList.remove("active");
        // getting the data of the note we clicked
        let moveTextNote: any =
          editBtn.parentElement.parentElement?.firstChild?.textContent;
        console.log(moveTextNote);

        // creating our list dynamiclly
        const buttonOne = document.createElement("button");
        buttonOne.classList.add("button-One");
        buttonOne.textContent = `Move to BackL...`;
        buttonList.appendChild(buttonOne);
        buttonOne.addEventListener("click", () => {
          progress.splice(index, 1);

          let moveToBackLog = {
            text: moveTextNote,
          };

          backLog.push(moveToBackLog);
          localStorage.setItem("backLog", JSON.stringify(backLog));
          localStorage.setItem("progress", JSON.stringify(progress));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });

        const buttonTwo = document.createElement("button");
        buttonTwo.classList.add("button-Two");
        buttonTwo.textContent = `Move to Comple...`;
        buttonList.appendChild(buttonTwo);

        buttonTwo.addEventListener("click", () => {
          progress.splice(index, 1);

          let moveToComplete = {
            text: moveTextNote,
          };

          complete.push(moveToComplete);
          localStorage.setItem("complete", JSON.stringify(complete));
          localStorage.setItem("progress", JSON.stringify(progress));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });

        const buttonThree = document.createElement("button");
        buttonThree.classList.add("button-Three");
        buttonThree.textContent = `Move to On Ho..`;
        buttonList.appendChild(buttonThree);

        buttonThree.addEventListener("click", () => {
          progress.splice(index, 1);

          let moveToOnHold = {
            text: moveTextNote,
          };

          onHold.push(moveToOnHold);
          localStorage.setItem("onHold", JSON.stringify(onHold));
          localStorage.setItem("progress", JSON.stringify(progress));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });
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

    const moveBtn = document.createElement("button");
    moveBtn.classList.add("move-Btn");
    const iconMoveBtn = document.createElement("i");
    iconMoveBtn.classList.add("fa-solid", "fa-up-down-left-right");
    moveBtn.appendChild(iconMoveBtn);
    buttonsWrap.appendChild(moveBtn);

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
        complete.splice(index, 1);
        complete.push(newOBj);
        localStorage.setItem("complete", JSON.stringify(complete));
      }
    });

    // our delete button
    deleteBtn.addEventListener("click", () => {
      let deleteText: any =
        editBtn.parentElement.parentElement?.firstChild?.textContent;
      console.log(deleteText);

      complete = complete.filter((textNote) => {
        return textNote.text !== deleteText;
      });
      localStorage.setItem("complete", JSON.stringify(complete));
      UpdateScreen();
    });

    // move btn logic
    moveBtn.addEventListener("click", () => {
      if (moveList.classList.contains("active")) {
        moveList.classList.remove("active");
        // getting the data of the note we clicked
        let moveTextNote: any =
          editBtn.parentElement.parentElement?.firstChild?.textContent;
        console.log(moveTextNote);

        // creating our list dynamiclly
        const buttonOne = document.createElement("button");
        buttonOne.classList.add("button-One");
        buttonOne.textContent = `Move to BackL...`;
        buttonList.appendChild(buttonOne);
        buttonOne.addEventListener("click", () => {
          complete.splice(index, 1);

          let moveToBackLog = {
            text: moveTextNote,
          };

          backLog.push(moveToBackLog);
          localStorage.setItem("backLog", JSON.stringify(backLog));
          localStorage.setItem("complete", JSON.stringify(complete));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });

        const buttonTwo = document.createElement("button");
        buttonTwo.classList.add("button-Two");
        buttonTwo.textContent = `Move to Progre...`;
        buttonList.appendChild(buttonTwo);

        buttonTwo.addEventListener("click", () => {
          complete.splice(index, 1);

          let moveToOrogress = {
            text: moveTextNote,
          };

          progress.push(moveToOrogress);
          localStorage.setItem("progress", JSON.stringify(progress));
          localStorage.setItem("complete", JSON.stringify(complete));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });

        const buttonThree = document.createElement("button");
        buttonThree.classList.add("button-Three");
        buttonThree.textContent = `Move to On Ho..`;
        buttonList.appendChild(buttonThree);

        buttonThree.addEventListener("click", () => {
          complete.splice(index, 1);

          let moveToOnHold = {
            text: moveTextNote,
          };

          onHold.push(moveToOnHold);
          localStorage.setItem("onHold", JSON.stringify(onHold));
          localStorage.setItem("complete", JSON.stringify(complete));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });
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

    const moveBtn = document.createElement("button");
    moveBtn.classList.add("move-Btn");
    const iconMoveBtn = document.createElement("i");
    iconMoveBtn.classList.add("fa-solid", "fa-up-down-left-right");
    moveBtn.appendChild(iconMoveBtn);
    buttonsWrap.appendChild(moveBtn);

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
        onHold.splice(index, 1);
        onHold.push(newOBj);
        localStorage.setItem("onHold", JSON.stringify(onHold));
      }
    });

    // our delete button
    deleteBtn.addEventListener("click", () => {
      let deleteText: any =
        editBtn.parentElement.parentElement?.firstChild?.textContent;
      console.log(deleteText);

      onHold = onHold.filter((textNote) => {
        return textNote.text !== deleteText;
      });
      localStorage.setItem("onHold", JSON.stringify(onHold));
      UpdateScreen();
    });
    // move btn logic :

    moveBtn.addEventListener("click", () => {
      if (moveList.classList.contains("active")) {
        moveList.classList.remove("active");
        // getting the data of the note we clicked
        let moveTextNote: any =
          editBtn.parentElement.parentElement?.firstChild?.textContent;
        console.log(moveTextNote);

        // creating our list dynamiclly
        const buttonOne = document.createElement("button");
        buttonOne.classList.add("button-One");
        buttonOne.textContent = `Move to BackL...`;
        buttonList.appendChild(buttonOne);
        buttonOne.addEventListener("click", () => {
          onHold.splice(index, 1);

          let moveToBackLog = {
            text: moveTextNote,
          };

          backLog.push(moveToBackLog);
          localStorage.setItem("backLog", JSON.stringify(backLog));
          localStorage.setItem("onHold", JSON.stringify(onHold));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });

        const buttonTwo = document.createElement("button");
        buttonTwo.classList.add("button-Two");
        buttonTwo.textContent = `Move to Progres...`;
        buttonList.appendChild(buttonTwo);

        buttonTwo.addEventListener("click", () => {
          onHold.splice(index, 1);

          let moveToOrogress = {
            text: moveTextNote,
          };

          progress.push(moveToOrogress);
          localStorage.setItem("progress", JSON.stringify(progress));
          localStorage.setItem("onHold", JSON.stringify(onHold));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });

        const buttonThree = document.createElement("button");
        buttonThree.classList.add("button-Three");
        buttonThree.textContent = `Move to Compele..`;
        buttonList.appendChild(buttonThree);

        buttonThree.addEventListener("click", () => {
          onHold.splice(index, 1);

          let moveToComplete = {
            text: moveTextNote,
          };

          complete.push(moveToComplete);
          localStorage.setItem("complete", JSON.stringify(complete));
          localStorage.setItem("onHold", JSON.stringify(onHold));
          UpdateScreen();
          moveList.classList.add("active");
          buttonList.innerHTML = ``;
        });
      }
    });
  });
};

// UpdateScreen function
const UpdateScreen = () => {
  UlElementId[0].innerHTML = ``;
  UlElementId[1].innerHTML = ``;
  UlElementId[2].innerHTML = ``;
  UlElementId[3].innerHTML = ``;
  listOurData();
};

// eventlinsters
addNewBtns.forEach((addNewBtn, indx) => {
  addNewBtn.addEventListener("click", () => {
    addNewNote(addNewBtn, indx);
  });
});

closeBtn.addEventListener("click", () => {
  moveList.classList.add("active");
  buttonList.innerHTML = ``;
});

listOurData();
