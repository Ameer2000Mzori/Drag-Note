// selecting our elements
var addNewBtns = document.querySelectorAll("#add-New-Btn-Id");
var UlElementId = document.querySelectorAll(".ul-Element-Id");
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
                backLog.splice(index, 1);
                getBackLog;
            }
        });
        // our delete button function :
        deleteBtn.addEventListener("click", function () {
            var _a, _b;
            var deleteTextNote = (_b = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.textContent;
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
                backLog.splice(index, 1);
                backLog.push(newOBj);
                localStorage.setItem("backLog", JSON.stringify(backLog));
                backLog.splice(index, 1);
                getBackLog;
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
                backLog.splice(index, 1);
                backLog.push(newOBj);
                localStorage.setItem("backLog", JSON.stringify(backLog));
                backLog.splice(index, 1);
                getBackLog;
            }
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
addNewBtns.forEach(function (addNewBtn, indx) {
    addNewBtn.addEventListener("click", function (e) {
        addNewNote(addNewBtn, indx);
    });
});
listOurData();
