const sensorTable = document.getElementById("sensorTable");
const alertTable = document.getElementById("alertTable");


function loadTable(table){
  let tableRef;
  let tableName;
  switch (table){
    case 'alert':
      tableRef = alertTable;
      tableName = 'alerts';
      break
    case 'sensor':
      tableRef = sensorTable;
      tableName = 'capteurs';
      break
  }
  let JSONalerts = HotSDK.load(tableName);
  for(let i = 0; i < JSONalerts.dates.length; i++){
    let tableRow = document.createElement('tr');
    let msg = document.createElement('td');
    msg.classList.add('listItem');
    msg.innerHTML = JSONalerts.msg[i];
    tableRow.appendChild(msg);
    let date = document.createElement('td');
    date.classList.add('listItem');
    date.innerHTML = JSONalerts.dates[i];
    tableRow.appendChild(date);
    tableRef.appendChild(tableRow);
  }
}

function updateTable(table){
  let tableRef;
  let tableName;
  switch (table){
    case 'alert':
      tableRef = alertTable;
      tableName = 'alerts';
      break
    case 'sensor':
      tableRef = sensorTable;
      tableName = 'capteurs';
      break
  }
  let JSONalerts = HotSDK.load(tableName);
  let tableRow = document.createElement('tr');
  let msg = document.createElement('td');
  msg.classList.add('listItem');
  msg.innerHTML = JSONalerts.msg[JSONalerts.msg.length - 1];
  tableRow.appendChild(msg);
  let date = document.createElement('td');
  date.classList.add('listItem');
  date.innerHTML = JSONalerts.dates[JSONalerts.dates.length - 1];
  tableRow.appendChild(date);
  tableRef.appendChild(tableRow);

}

function sort(table, by){
  let n;
  let tableRef;
  switch (table) {
    case 'alert':
      tableRef = alertTable;
      switch (by){
        case 'msg':
          n = 0;
          break
        case 'date':
          n = 1;
          break
      }
      break
    case 'sensor':
      tableRef = sensorTable;
      switch (by){
        case 'ext':
          n = 0;
          break
        case 'int':
          n = 1;
          break
        case 'date':
          break
      }
      break
  }
  let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = tableRef.rows;
    for (i = 0; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir === "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir === "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

document.getElementById("sortAlertByMsg").onclick = function (){
  sort('alert', 'msg')
}
document.getElementById("sortAlertByDate").onclick = function (){
  sort('alert', 'date')
}

document.getElementById("sortSensorByExt").onclick = function (){
  sort('sensor', 'ext')
}
document.getElementById("sortSensorByInt").onclick = function (){
  sort('sensor', 'int')
}
document.getElementById("sortSensorByDate").onclick = function (){
  sort('sensor', 'date')
}

HotSDK.loadTable = loadTable;
HotSDK.updateTable = updateTable;