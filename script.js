const popupAssignmentItems = Array.from(document.getElementsByClassName("assignment-li"));

const addButton = document.getElementById("addButton");

let inputs =
{
  name: document.getElementById("assignmentNameInput"),
  hour: document.getElementById("assignmentHoursInput"),
  minute: document.getElementById("assignmentMinutesInput")
};

let assignmentItems = []; //To be filled with assignmentItem objects

addButton.addEventListener("click", function()
{
  if (inputs.name.value.length > 0 && (inputs.hour.value.length > 0 || inputs.minute.value.length > 0))
  {
    let totalTime;
    if (inputs.hour.value.length > 0 && inputs.minute.value.length > 0)
    {
      totalTime = `${inputs.hour.value}h${inputs.minute.value}m`;
    }
    else if (inputs.minute.value.length == 0 && inputs.hour.value.length > 0)
    {
      totalTime = `${inputs.hour.value}h`;
    }
    else //Only minutes field was filled
    {
      totalTime = `${inputs.minute.value}m`;
    }
    assignmentItems.push({
      description: inputs.name.value,
      time: totalTime
    });
    clearFields();
    updateList();

  }
});

function createAssignment()
{

}

function updateList()
{
  for (let i = 0; i < popupAssignmentItems.length; i++)
  {
    popupAssignmentItems[i].innerHTML = `<h4>${i+1}) ${assignmentItems[i].description} <i class="fa fa-clock-o"></i>${assignmentItems[i].time}</h4>`;
  }
}

function sortList()
{

}

function clearFields()
{
  console.log("clearFields");
  for (var property in inputs) {
    inputs[property].value = "";
  }
  // inputs.name.value = "";
  // inputs.hour.value = "";
  // inputs.minute.value = "";
}
