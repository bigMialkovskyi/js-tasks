function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let randomNumber = []

function addElement() {

  generateWinNumbers()
  timer(90)
  let startButton = document.getElementById("startButton")
  startButton.style.visibility = "hidden"

  let newTable = document.createElement("table");
  newTable.innerHTML = "<table></table>";
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
      newTd.innerHTML = "<td></td>";
      newTd.id = tdIds
      newTd.style.backgroundColor = "gray"
      my_Tr = document.getElementById("trId" + i);
      my_Tr.append(newTd);

    }
    counter = i * 10
  }
}

const table = document.getElementById('divForContent')
table.addEventListener('click', event => {
  gameProcess(event.target.id)
  // console.log(event.target.id)
})

function gameProcess(fieldId) {

  let cell = document.getElementById(fieldId)


  for (let i = 0; i <= randomNumber.length; i++) {
    if (fieldId == randomNumber[i]) {
      cell.style.backgroundImage = "url('fonimage.jpg')"
      randomNumber.splice(i, 1)
      if (randomNumber.length == 0) {
        console.log("you win")
      }
      if (randomNumber.length !== 0) {
        console.log("Good job, keep going.")
      }
      break
    }
    else if (fieldId !== randomNumber[i]) {
      console.log("try  again")
      cell.style.backgroundImage = "url('losefonimage.jpg')"
    }
  }
  console.log(randomNumber)
}

function generateWinNumbers() {

  while (randomNumber.length < 10) {
    randomNumber.push(String(getRandomIntInclusive(1, 100)))
  }

}

let idIntervals;

function timer(timeLeft) {

  counter = timeLeft

  idIntervals = setInterval(() => {

    document.getElementById("statisticsArea").value = "you have left:" + counter + " seconds"
    if (counter == 0 && randomNumber.length != 0) {
      document.getElementById("tableId").style.visibility = "hidden"
      document.getElementById("statisticsArea").value = "you lose"
      clearInterval(idIntervals)
    }
    if (counter > 0 && randomNumber.length == 0) {
      document.getElementById("tableId").style.visibility = "hidden"
      document.getElementById("statisticsArea").value = "you win"
      clearInterval(idIntervals)
    }
    counter--

  }, 1000);
}
