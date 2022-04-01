function updateAlertTable(){
  const myTableBody = document.getElementById("alertTable");

  console.log(HotSDK.load('alertTable'));

  const helloWorldsKeys = Object.keys(helloWorlds);

  for (let i = 0; i < helloWorldsKeys.length; i++) {

    // create a table row element
    let tableRow = document.createElement('tr');

    // create a table cell (td) element
    let listItem = document.createElement('td');
    listItem.classList.add('listItem');

    // add content to table cell element
    listItem.innerHTML = helloWorlds[helloWorldsKeys[i]];

    // append table cell to table row
    tableRow.appendChild(listItem);

    // append table row to table body
    myTableBody.appendChild(tableRow);
  }
}

HotSDK.updateAlertTable = updateAlertTable;