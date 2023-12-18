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
var backLog = [
    {
        text: "deit",
    },
];
var progress = [
    {
        text: "20 projects",
    },
];
var complete = [
    {
        text: "50 projects",
    },
];
var onHold = [
    {
        text: "going out",
    },
];
// global varibales
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
        console.log(ourEditBtnIcon);
        editText(editTextNew, ourEditBtnIcon, indx);
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
        editBtn.addEventListener("click", function () {
            var _a;
            var editTextNew = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild;
            var ourEditBtnIcon = editBtn.firstChild;
            console.log(ourEditBtnIcon);
            editText(editTextNew, ourEditBtnIcon, 0);
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
        editBtn.addEventListener("click", function () {
            var _a;
            var editTextNew = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild;
            var ourEditBtnIcon = editBtn.firstChild;
            console.log(ourEditBtnIcon);
            editText(editTextNew, ourEditBtnIcon, 1);
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
        editBtn.addEventListener("click", function () {
            var _a;
            var editTextNew = (_a = editBtn.parentElement.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild;
            var ourEditBtnIcon = editBtn.firstChild;
            console.log(ourEditBtnIcon);
            editText(editTextNew, ourEditBtnIcon, 2);
        });
    });
    onHold.forEach(function (onHoldText, indx) {
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
            console.log(ourEditBtnIcon);
            editText(editTextNew, ourEditBtnIcon, 3);
        });
    });
};
// our edit text function
var editCount = 0;
var editText = function (editTextNew, ourEditBtnIcon, indx) {
    if (editCount === 0) {
        ourEditBtnIcon.classList.add("fa-solid", "fa-check");
        editCount++;
        editTextNew.setAttribute("contenteditable", "true");
        editTextNew.focus();
    }
    else {
        ourEditBtnIcon.classList.remove("fa-solid", "fa-check");
        ourEditBtnIcon.classList.add("fa-regular", "fa-pen-to-square");
        editCount = 0;
        editTextNew.removeAttribute("contenteditable");
        editTextNew.blur();
        var ourNewText = editTextNew.textContent;
        console.log(ourNewText);
        if (indx === 0) {
            console.log("Black Log");
        }
        else if (indx === 1) {
            console.log("in Progress");
        }
        else if (indx === 2) {
            console.log("Complete");
        }
        else if (indx === 3) {
            console.log("On Hold");
        }
    }
};
// eventlinsters
addNewBtns.forEach(function (addNewBtn, indx) {
    addNewBtn.addEventListener("click", function (e) {
        addNewNote(addNewBtn, indx);
    });
});
listOurData();
