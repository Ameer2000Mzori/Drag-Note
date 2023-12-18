// selecting our elements
var addNewBtns = document.querySelectorAll("#add-New-Btn-Id");
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
// global varibales
// functions
var addNewNote = function (addNewBtn, indx) {
    var ourListUl = addNewBtn.parentElement.parentElement.children[1].children[0];
    console.log(ourListUl);
    // creating elements dynamcily :
    var newLi = document.createElement("li");
    newLi.textContent = "".concat(createNewTextObj[indx].text);
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
    newLi.appendChild(buttonsWrap);
    ourListUl.appendChild(newLi);
};
// eventlinsters
addNewBtns.forEach(function (addNewBtn, indx) {
    addNewBtn.addEventListener("click", function (e) {
        addNewNote(addNewBtn, indx);
    });
});
// our html loop up :
// <li>
//   dance
//   <div class="buttons-Wrap">
//     <button class="dele-Btn">
//       <i class="fa-solid fa-trash"></i>
//     </button>
//     <button class="edit-Btn">
//       <i class="fa-regular fa-pen-to-square"></i>
//     </button>
//   </div>
// </li>;
