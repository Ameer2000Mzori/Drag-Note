// selecting our elements
var addNewBtns = document.querySelectorAll("#add-New-Btn-Id");
var UlElementId = document.querySelectorAll(".ul-Element-Id");
var moveList = document.getElementsByClassName("move-List")[0];
var closeBtn = document.getElementsByClassName("close-Btn")[0];
var buttonList = document.getElementsByClassName("button-List")[0];
// our data objects for our each card
var createNewTextObj = [
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
var getBackLog = localStorage.getItem("backLog");
var backLog = getBackLog ? JSON.parse(getBackLog) : [];
var getProgress = localStorage.getItem("progress");
var progress = getProgress ? JSON.parse(getProgress) : [];
var getComplete = localStorage.getItem("complete");
var complete = getComplete ? JSON.parse(getComplete) : [];
var getOnHold = localStorage.getItem("onHold");
var onHold = getOnHold ? JSON.parse(getOnHold) : [];
// global varibales
var newEditCount = 0;
var editCount = 0;
// functions
// this for adding new element
var addNewNote = function (addNewBtn, indx) {
    var ourListUl = addNewBtn.parentElement.parentElement.children[1].children[0];
    console.log(ourListUl, indx);
    // creating elements dynamcily :
    var newLi = document.createElement("li");
    var noteText = document.createElement("p");
    noteText.classList.add("note-Text");
    noteText.textContent = "".concat(createNewTextObj[indx].text);
    var buttonsWrap = document.createElement("div");
    buttonsWrap.classList.add("buttons-Wrap");
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("dele-Btn");
    var iconDeleBtn = document.createElement("i");
    iconDeleBtn.classList.add("fa-solid", "fa-trash");
    deleteBtn.appendChild(iconDeleBtn);
    buttonsWrap.appendChild(deleteBtn);
    var editBtn = document.createElement("button");
    editBtn.classList.add("edit-Btn");
    var iconEditBtn = document.createElement("i");
    iconEditBtn.classList.add("fa-regular", "fa-pen-to-square");
    editBtn.appendChild(iconEditBtn);
    buttonsWrap.appendChild(editBtn);
    newLi.appendChild(noteText);
    newLi.appendChild(buttonsWrap);
    ourListUl.appendChild(newLi);
    // our eventlinsters:
    // edit btn
    editBtn.addEventListener("click", function () {
        var _a;
        var editTextNew = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild;
        var ourEditBtnIcon = editBtn.firstChild;
        // console.log(ourEditBtnIcon);
        if (newEditCount === 0) {
            ourEditBtnIcon.classList.add("fa-solid", "fa-check");
            newEditCount++;
            editTextNew.setAttribute("contenteditable", "true");
            editTextNew.focus();
        }
        else {
            ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
            ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
            newEditCount = 0;
            editTextNew.removeAttribute("contenteditable");
            editTextNew.blur();
            var ourNewText = editTextNew.textContent;
            console.log(ourNewText);
            if (indx === 0) {
                var newOBj = { text: ourNewText };
                backLog.push(newOBj);
                localStorage.setItem("backLog", JSON.stringify(backLog));
            }
            else if (indx === 1) {
                var newOBj = { text: ourNewText };
                progress.push(newOBj);
                console.log(progress);
                localStorage.setItem("progress", JSON.stringify(progress));
            }
            else if (indx === 2) {
                var newOBj = { text: ourNewText };
                complete.push(newOBj);
                console.log(complete);
                localStorage.setItem("complete", JSON.stringify(complete));
            }
            else if (indx === 3) {
                var newOBj = { text: ourNewText };
                onHold.push(newOBj);
                console.log(onHold);
                localStorage.setItem("onHold", JSON.stringify(onHold));
            }
            UpdateScreen();
        }
    });
    // delete btn
    deleteBtn.addEventListener("click", function () {
        if (newLi) {
            newLi.remove();
            console.log(ourListUl);
        }
    });
};
// when loaded our data should apear on the screen :
var listOurData = function () {
    backLog.forEach(function (backLogText, index) {
        var newLi = document.createElement("li");
        var noteText = document.createElement("p");
        noteText.classList.add("note-Text");
        noteText.textContent = "".concat(backLogText.text);
        var buttonsWrap = document.createElement("div");
        buttonsWrap.classList.add("buttons-Wrap");
        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("dele-Btn");
        var iconDeleBtn = document.createElement("i");
        iconDeleBtn.classList.add("fa-solid", "fa-trash");
        deleteBtn.appendChild(iconDeleBtn);
        buttonsWrap.appendChild(deleteBtn);
        var editBtn = document.createElement("button");
        editBtn.classList.add("edit-Btn");
        var iconEditBtn = document.createElement("i");
        iconEditBtn.classList.add("fa-regular", "fa-pen-to-square");
        editBtn.appendChild(iconEditBtn);
        buttonsWrap.appendChild(editBtn);
        var moveBtn = document.createElement("button");
        moveBtn.classList.add("move-Btn");
        var iconMoveBtn = document.createElement("i");
        iconMoveBtn.classList.add("fa-solid", "fa-up-down-left-right");
        moveBtn.appendChild(iconMoveBtn);
        buttonsWrap.appendChild(moveBtn);
        newLi.appendChild(noteText);
        newLi.appendChild(buttonsWrap);
        UlElementId[0].appendChild(newLi);
        console.log(backLogText.text);
        // our eventlisnters
        // edit button
        editBtn.addEventListener("click", function () {
            var _a;
            var editTextNew = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild;
            var ourEditBtnIcon = editBtn.firstChild;
            if (editCount === 0) {
                ourEditBtnIcon.classList.add("fa-solid", "fa-check");
                editTextNew.setAttribute("contenteditable", "true");
                editTextNew.focus();
                editCount++;
            }
            else {
                editCount = 0;
                ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
                ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
                editTextNew.removeAttribute("contenteditable");
                editTextNew.blur();
                var ourNewText = editTextNew.textContent;
                console.log(ourNewText);
                var newOBj = { text: ourNewText };
                backLog.splice(index, 1);
                backLog.push(newOBj);
                localStorage.setItem("backLog", JSON.stringify(backLog));
            }
        });
        // our delete button
        deleteBtn.addEventListener("click", function () {
            var _a, _b;
            var deleteText = (_b = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.textContent;
            console.log(deleteText);
            backLog = backLog.filter(function (textNote) {
                return textNote.text !== deleteText;
            });
            localStorage.setItem("backLog", JSON.stringify(backLog));
            UpdateScreen();
        });
        // our move button
        moveBtn.addEventListener("click", function () {
            var _a, _b;
            if (moveList.classList.contains("active")) {
                moveList.classList.remove("active");
                // getting the data of the note we clicked
                var moveTextNote_1 = (_b = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.textContent;
                console.log(moveTextNote_1);
                // creating our list dynamiclly
                var buttonOne = document.createElement("button");
                buttonOne.classList.add("button-One");
                buttonOne.textContent = "Move to Progres...";
                buttonList.appendChild(buttonOne);
                buttonOne.addEventListener("click", function () {
                    backLog = backLog.filter(function (text) {
                        text.text !== moveTextNote_1;
                    });
                    var moveToProgress = {
                        text: moveTextNote_1,
                    };
                    progress.push(moveToProgress);
                    localStorage.setItem("progress", JSON.stringify(progress));
                    localStorage.setItem("backLog", JSON.stringify(backLog));
                    UpdateScreen();
                    moveList.classList.add("active");
                    buttonList.innerHTML = "";
                });
                var buttonTwo = document.createElement("button");
                buttonTwo.classList.add("button-Two");
                buttonTwo.textContent = "Move to Comple...";
                buttonList.appendChild(buttonTwo);
                buttonTwo.addEventListener("click", function () {
                    backLog = backLog.filter(function (text) {
                        text.text !== moveTextNote_1;
                    });
                    var moveToComplete = {
                        text: moveTextNote_1,
                    };
                    complete.push(moveToComplete);
                    localStorage.setItem("complete", JSON.stringify(complete));
                    localStorage.setItem("backLog", JSON.stringify(backLog));
                    UpdateScreen();
                    moveList.classList.add("active");
                    buttonList.innerHTML = "";
                });
                var buttonThree = document.createElement("button");
                buttonThree.classList.add("button-Three");
                buttonThree.textContent = "Move to On Ho..";
                buttonList.appendChild(buttonThree);
                buttonThree.addEventListener("click", function () {
                    backLog = backLog.filter(function (text) {
                        text.text !== moveTextNote_1;
                    });
                    var moveToOnHold = {
                        text: moveTextNote_1,
                    };
                    onHold.push(moveToOnHold);
                    localStorage.setItem("onHold", JSON.stringify(onHold));
                    localStorage.setItem("backLog", JSON.stringify(backLog));
                    UpdateScreen();
                    moveList.classList.add("active");
                    buttonList.innerHTML = "";
                });
            }
        });
    });
    progress.forEach(function (progressText, index) {
        var newLi = document.createElement("li");
        var noteText = document.createElement("p");
        noteText.classList.add("note-Text");
        noteText.textContent = "".concat(progressText.text);
        var buttonsWrap = document.createElement("div");
        buttonsWrap.classList.add("buttons-Wrap");
        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("dele-Btn");
        var iconDeleBtn = document.createElement("i");
        iconDeleBtn.classList.add("fa-solid", "fa-trash");
        deleteBtn.appendChild(iconDeleBtn);
        buttonsWrap.appendChild(deleteBtn);
        var editBtn = document.createElement("button");
        editBtn.classList.add("edit-Btn");
        var iconEditBtn = document.createElement("i");
        iconEditBtn.classList.add("fa-regular", "fa-pen-to-square");
        editBtn.appendChild(iconEditBtn);
        buttonsWrap.appendChild(editBtn);
        var moveBtn = document.createElement("button");
        moveBtn.classList.add("move-Btn");
        var iconMoveBtn = document.createElement("i");
        iconMoveBtn.classList.add("fa-solid", "fa-up-down-left-right");
        moveBtn.appendChild(iconMoveBtn);
        buttonsWrap.appendChild(moveBtn);
        newLi.appendChild(noteText);
        newLi.appendChild(buttonsWrap);
        UlElementId[1].appendChild(newLi);
        console.log(progressText.text);
        // our eventlisnters
        // edit button
        editBtn.addEventListener("click", function () {
            var _a;
            var editTextNew = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild;
            var ourEditBtnIcon = editBtn.firstChild;
            if (editCount === 0) {
                ourEditBtnIcon.classList.add("fa-solid", "fa-check");
                editTextNew.setAttribute("contenteditable", "true");
                editTextNew.focus();
                editCount++;
            }
            else {
                editCount = 0;
                ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
                ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
                editTextNew.removeAttribute("contenteditable");
                editTextNew.blur();
                var ourNewText = editTextNew.textContent;
                console.log(ourNewText);
                var newOBj = { text: ourNewText };
                progress.splice(index, 1);
                progress.push(newOBj);
                localStorage.setItem("progress", JSON.stringify(progress));
            }
        });
        // our delete button
        deleteBtn.addEventListener("click", function () {
            var _a, _b;
            var deleteText = (_b = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.textContent;
            console.log(deleteText);
            progress = progress.filter(function (textNote) {
                return textNote.text !== deleteText;
            });
            localStorage.setItem("progress", JSON.stringify(progress));
            UpdateScreen();
        });
        // our move button
        moveBtn.addEventListener("click", function () {
            var _a, _b;
            if (moveList.classList.contains("active")) {
                moveList.classList.remove("active");
                // getting the data of the note we clicked
                var moveTextNote_2 = (_b = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.textContent;
                console.log(moveTextNote_2);
                // creating our list dynamiclly
                var buttonOne = document.createElement("button");
                buttonOne.classList.add("button-One");
                buttonOne.textContent = "Move to BackL...";
                buttonList.appendChild(buttonOne);
                buttonOne.addEventListener("click", function () {
                    progress = progress.filter(function (text) {
                        text.text !== moveTextNote_2;
                    });
                    var moveToBackLog = {
                        text: moveTextNote_2,
                    };
                    backLog.push(moveToBackLog);
                    localStorage.setItem("backLog", JSON.stringify(backLog));
                    localStorage.setItem("progress", JSON.stringify(progress));
                    UpdateScreen();
                    moveList.classList.add("active");
                    buttonList.innerHTML = "";
                });
                var buttonTwo = document.createElement("button");
                buttonTwo.classList.add("button-Two");
                buttonTwo.textContent = "Move to Comple...";
                buttonList.appendChild(buttonTwo);
                buttonTwo.addEventListener("click", function () {
                    progress = progress.filter(function (text) {
                        text.text !== moveTextNote_2;
                    });
                    var moveToComplete = {
                        text: moveTextNote_2,
                    };
                    complete.push(moveToComplete);
                    localStorage.setItem("complete", JSON.stringify(complete));
                    localStorage.setItem("progress", JSON.stringify(progress));
                    UpdateScreen();
                    moveList.classList.add("active");
                    buttonList.innerHTML = "";
                });
                var buttonThree = document.createElement("button");
                buttonThree.classList.add("button-Three");
                buttonThree.textContent = "Move to On Ho..";
                buttonList.appendChild(buttonThree);
                buttonThree.addEventListener("click", function () {
                    progress = progress.filter(function (text) {
                        text.text !== moveTextNote_2;
                    });
                    var moveToOnHold = {
                        text: moveTextNote_2,
                    };
                    onHold.push(moveToOnHold);
                    localStorage.setItem("onHold", JSON.stringify(onHold));
                    localStorage.setItem("progress", JSON.stringify(progress));
                    UpdateScreen();
                    moveList.classList.add("active");
                    buttonList.innerHTML = "";
                });
            }
        });
    });
    complete.forEach(function (completeText, index) {
        var newLi = document.createElement("li");
        var noteText = document.createElement("p");
        noteText.classList.add("note-Text");
        noteText.textContent = "".concat(completeText.text);
        var buttonsWrap = document.createElement("div");
        buttonsWrap.classList.add("buttons-Wrap");
        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("dele-Btn");
        var iconDeleBtn = document.createElement("i");
        iconDeleBtn.classList.add("fa-solid", "fa-trash");
        deleteBtn.appendChild(iconDeleBtn);
        buttonsWrap.appendChild(deleteBtn);
        var editBtn = document.createElement("button");
        editBtn.classList.add("edit-Btn");
        var iconEditBtn = document.createElement("i");
        iconEditBtn.classList.add("fa-regular", "fa-pen-to-square");
        editBtn.appendChild(iconEditBtn);
        buttonsWrap.appendChild(editBtn);
        newLi.appendChild(noteText);
        newLi.appendChild(buttonsWrap);
        UlElementId[2].appendChild(newLi);
        console.log(completeText.text);
        // our eventlisnters
        // edit button
        editBtn.addEventListener("click", function () {
            var _a;
            var editTextNew = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild;
            var ourEditBtnIcon = editBtn.firstChild;
            if (editCount === 0) {
                ourEditBtnIcon.classList.add("fa-solid", "fa-check");
                editTextNew.setAttribute("contenteditable", "true");
                editTextNew.focus();
                editCount++;
            }
            else {
                editCount = 0;
                ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
                ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
                editTextNew.removeAttribute("contenteditable");
                editTextNew.blur();
                var ourNewText = editTextNew.textContent;
                console.log(ourNewText);
                var newOBj = { text: ourNewText };
                complete.splice(index, 1);
                complete.push(newOBj);
                localStorage.setItem("complete", JSON.stringify(complete));
            }
        });
        // our delete button
        deleteBtn.addEventListener("click", function () {
            var _a, _b;
            var deleteText = (_b = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.textContent;
            console.log(deleteText);
            complete = complete.filter(function (textNote) {
                return textNote.text !== deleteText;
            });
            localStorage.setItem("complete", JSON.stringify(complete));
            UpdateScreen();
        });
    });
    onHold.forEach(function (onHoldText, index) {
        var newLi = document.createElement("li");
        var noteText = document.createElement("p");
        noteText.classList.add("note-Text");
        noteText.textContent = "".concat(onHoldText.text);
        var buttonsWrap = document.createElement("div");
        buttonsWrap.classList.add("buttons-Wrap");
        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("dele-Btn");
        var iconDeleBtn = document.createElement("i");
        iconDeleBtn.classList.add("fa-solid", "fa-trash");
        deleteBtn.appendChild(iconDeleBtn);
        buttonsWrap.appendChild(deleteBtn);
        var editBtn = document.createElement("button");
        editBtn.classList.add("edit-Btn");
        var iconEditBtn = document.createElement("i");
        iconEditBtn.classList.add("fa-regular", "fa-pen-to-square");
        editBtn.appendChild(iconEditBtn);
        buttonsWrap.appendChild(editBtn);
        newLi.appendChild(noteText);
        newLi.appendChild(buttonsWrap);
        UlElementId[3].appendChild(newLi);
        // our eventlinsters:
        // edit btn
        editBtn.addEventListener("click", function () {
            var _a;
            var editTextNew = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild;
            var ourEditBtnIcon = editBtn.firstChild;
            if (editCount === 0) {
                ourEditBtnIcon.classList.add("fa-solid", "fa-check");
                editTextNew.setAttribute("contenteditable", "true");
                editTextNew.focus();
                editCount++;
            }
            else {
                editCount = 0;
                ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
                ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
                editTextNew.removeAttribute("contenteditable");
                editTextNew.blur();
                var ourNewText = editTextNew.textContent;
                console.log(ourNewText);
                var newOBj = { text: ourNewText };
                onHold.splice(index, 1);
                onHold.push(newOBj);
                localStorage.setItem("onHold", JSON.stringify(onHold));
            }
        });
        // our delete button
        deleteBtn.addEventListener("click", function () {
            var _a, _b;
            var deleteText = (_b = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.textContent;
            console.log(deleteText);
            onHold = onHold.filter(function (textNote) {
                return textNote.text !== deleteText;
            });
            localStorage.setItem("onHold", JSON.stringify(onHold));
            UpdateScreen();
        });
    });
};
// UpdateScreen function
var UpdateScreen = function () {
    UlElementId[0].innerHTML = "";
    UlElementId[1].innerHTML = "";
    UlElementId[2].innerHTML = "";
    UlElementId[3].innerHTML = "";
    listOurData();
};
// eventlinsters
addNewBtns.forEach(function (addNewBtn, indx) {
    addNewBtn.addEventListener("click", function () {
        addNewNote(addNewBtn, indx);
    });
});
closeBtn.addEventListener("click", function () {
    moveList.classList.add("active");
    buttonList.innerHTML = "";
});
listOurData();
