// var container = {
//   randNumber: ""
// };

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

// function checkResult(element) {

//   if (element.id == container.randNumber) {
//     alert("you win")
//     container.randNumber = ""
//   } else {
//     console.log("you lose")
//   }
//   return element.id
// }

// function startGame() {
//   container.randNumber = String(getRandomIntInclusive(1, 10))
//   console.log(container.randNumber)
// }

// document.body.onload = addElement;
// var my_div = newDiv = null;
// function addElement() {

//   // Создаём новый элемент div
//   // и добавляем в него немного контента

//   var newDiv = document.createElement("div");
//   newDiv.innerHTML = "<h1>Привет!</h1>";

//   // Добавляем только что созданный элемент в дерево DOM

//   my_div = document.getElementById("org_div1");
//   document.body.insertBefore(newDiv, my_div);
// } 

//  document.body.onload = addElement;
let my_div = newDiv = null;

function addElement() {

  let newTable = document.createElement("table");
  newTable.innerHTML = "<table border=" + 3 + "></table>";
  newTable.id = "tableId"
  newTable.border = "3"
  my_divForContent = document.getElementById("divForContent");
  my_divForContent.append(newTable);


  let newTbody = document.createElement("tbody");
  newTbody.innerHTML = "<tbody></tbody>";
  newTbody.id = "tbpdyId"
  my_Table = document.getElementById("tableId");
  my_Table.append(newTbody);

  let counter = 0

  for (let i = 1; i <= 10; i++) {
    let newTr = document.createElement("tr");
    newTr.innerHTML = "<tr></tr>";
    newTr.id = "trId" + i
    my_tbody = document.getElementById("tbpdyId");
    my_tbody.append(newTr);
    

    for (let a = 1; a <= 10; a++) {
      let newTd = document.createElement("td");
      let tdIds = a + counter
      newTd.innerHTML = "<td>" + tdIds + "</td>";
      newTd.id = tdIds
      my_Tr = document.getElementById("trId" + i);
      my_Tr.append(newTd);
      
    }
    counter = i * 10
  }
}