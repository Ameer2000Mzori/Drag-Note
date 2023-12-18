// selecting our elements
const addNewBtns = document.querySelectorAll("#add-New-Btn-Id");

// our data objects for our each card

// global varibales

// functions

// eventlinsters
addNewBtns.forEach((addNewBtn, indx) => {
  addNewBtn.addEventListener("click", (e) => {
    console.log(e, indx);
  });
});
