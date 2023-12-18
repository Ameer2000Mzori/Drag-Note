// selecting our elements
var addNewBtns = document.querySelectorAll("#add-New-Btn-Id");
// our data objects for our each card
var backlogObj = [
    {
        text: "what is your backlog?",
    },
];
var progressObj = [
    {
        text: "what you progressing?",
    },
];
var compeleteObj = [
    {
        text: "what did you compelete?",
    },
];
var onHoldObj = [
    {
        text: "what have you on hold ?",
    },
];
// global varibales
// functions
// eventlinsters
addNewBtns.forEach(function (addNewBtn, indx) {
    addNewBtn.addEventListener("click", function (e) {
        console.log(e, indx);
    });
});
