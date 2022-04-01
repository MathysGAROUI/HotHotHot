function updateAlertTable(){
  const myTableBody = document.getElementById("alertTable");

  let JSONalerts = HotSDK.load('alerts');

    // create a table row element
    let tableRow = document.createElement('tr');
    // create a table cell (td) element
    let msg = document.createElement('td');
    msg.classList.add('listItem');

    // add content to table cell element
    msg.innerHTML = JSONalerts.msg[JSONalerts.msg.length - 1];

    // append table cell to table row
    tableRow.appendChild(msg);

    let date = document.createElement('td');
    date.classList.add('listItem');

    // add content to table cell element
    date.innerHTML = JSONalerts.dates[JSONalerts.dates.length - 1];

    // append table cell to table row
    tableRow.appendChild(date);
    // append table row to table body
    myTableBody.appendChild(tableRow);

}

HotSDK.updateAlertTable = updateAlertTable;