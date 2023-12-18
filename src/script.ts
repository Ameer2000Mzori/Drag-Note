// selecting our elements
const addNewBtns = document.querySelectorAll("#add-New-Btn-Id");

// our data objects for our each card
let backlogObj = [
  {
    text: "what is your backlog?",
  },
];

let progressObj = [
  {
    text: "what you progressing?",
  },
];

let compeleteObj = [
  {
    text: "what did you compelete?",
  },
];

let onHoldObj = [
  {
    text: "what have you on hold ?",
  },
];

// global varibales

// functions

// eventlinsters
addNewBtns.forEach((addNewBtn, indx) => {
  addNewBtn.addEventListener("click", (e) => {
    console.log(e, indx);
  });
});
