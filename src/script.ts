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
const addNewNote = (addNewBtn, indx) => {
  let ourListUl = addNewBtn.parentElement.parentElement.children[1].children[0];
  console.log(ourListUl);

  // creating elements dynamcily :
  const newLi = document.createElement("li");
  newLi.textContent = `${createNewTextObj[indx].text}`;

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

  newLi.appendChild(buttonsWrap);
  ourListUl.appendChild(newLi);
};

// eventlinsters
addNewBtns.forEach((addNewBtn, indx) => {
  addNewBtn.addEventListener("click", (e) => {
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
