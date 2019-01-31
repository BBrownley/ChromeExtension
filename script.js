const countDisplay = document.getElementById("count-display");
const popupAssignmentItems = Array.from(document.getElementsByClassName("assignment-li"));

const addButton = document.getElementById("addButton");

// let assignmentItems = [
//   {
//     description: "Item 1",
//     time: "30m"
//   },
//   {
//     description: "Item 2",
//     time: "1h"
//   },
//   {
//     description: "Item 3",
//     time: "45s"
//   }
// ];

let assignmentItems = [];

let count = 0;



addButton.addEventListener("click", function() {
  if ()
});

//<i class="fa fa-clock-o"></i>

function updateList() {
  for (let i = 0; i < popupAssignmentItems.length; i++) {
    popupAssignmentItems[i].innerHTML = `<h4>${i+1}) ${assignmentItems[i].description} <i class="fa fa-clock-o"></i>${assignmentItems[i].time}</h4>`;
  }
}
