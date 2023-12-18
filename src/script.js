// selecting our elements
var addNewBtns = document.querySelectorAll("#add-New-Btn-Id");
// our data objects for our each card
// global varibales
// functions
// eventlinsters
addNewBtns.forEach(function (addNewBtn, indx) {
    addNewBtn.addEventListener("click", function (e) {
        console.log(e, indx);
    });
});
