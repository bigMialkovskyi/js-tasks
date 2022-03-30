let year = new Date().getFullYear()
let month = new Date().getMonth()
let day = new Date().getDate()

$(function () {

  let yearInfo = document.createElement("p")
  yearInfo.innerHTML = year
  yearInfo.id = "info"
  my_yearRightButton = document.getElementById("year-right-button")
  my_yearRightButton.before(yearInfo)

  let monthInfo = document.createElement("p")
  monthInfo.innerHTML = nameOfTheMont()
  monthInfo.id = "monthInfo"
  my_rightButton = document.getElementById("right-button")
  my_rightButton.before(monthInfo)

  createMonthList(year, month, day)
})

function monthButtonLeft() {
  let list = document.getElementById("listId")
  list.remove()

  let requiredMonth = month - 1
  month = requiredMonth
  if (month == -1) month = 11
  console.log(month)

  showMonth()
  createMonthList(year, month, day)
}

function monthButtonRight() {
  let list = document.getElementById("listId")
  list.remove()

  let requiredMonth = month + 1
  month = requiredMonth
  if (month == 12) month = 0
  console.log(month)

  showMonth()
  createMonthList(year, month, day)
}

function yearButtonLeft() {
  let list = document.getElementById("listId")
  list.remove()

  let requiredYear = year - 1
  year = requiredYear

  showYear()
  createMonthList(year, month, day)
}

function yearButtonRight() {
  let list = document.getElementById("listId")
  list.remove()

  let requiredYear = year + 1
  year = requiredYear

  showYear()
  createMonthList(year, month, day)
}

function createMonthList(year, month, day) {

  let date = new Date(year, month + 1, 0)
  let daysInMonth = date.getDate()

  let newList = document.createElement("ul")
  newList.id = "listId"
  my_divForContent = document.getElementById("divForContent")
  my_divForContent.append(newList)

  for (i = 1; i <= daysInMonth; i++) {
    let newListElement = document.createElement("li")
    newListElement.innerHTML = "<li>" + i + "</li>"
    if (i == day) {
      newListElement.id = "currentDay"
    }
    my_newList = document.getElementById("listId")
    my_newList.append(newListElement)
  }
}

function nameOfTheMont() {
  switch (month) {
    case 0: return "January"
    case 1: return "February"
    case 2: return "March"
    case 3: return "April"
    case 4: return "May"
    case 5: return "June"
    case 6: return "July"
    case 7: return "August"
    case 8: return "September"
    case 9: return "October"
    case 10: return "November"
    case 11: return "December"
    default: return "incorrect month format"
  }
}

function showMonth() {
  let info = document.getElementById("monthInfo")
  info.remove()

  let monthInfo = document.createElement("p")
  monthInfo.innerHTML = nameOfTheMont()
  monthInfo.id = "monthInfo"
  my_rightButton = document.getElementById("right-button")
  my_rightButton.before(monthInfo)
}

function showYear() {
  let info = document.getElementById("info")
  info.remove()
  console.log(year)

  let yearInfo = document.createElement("p")
  yearInfo.innerHTML = year
  yearInfo.id = "info"
  my_yearRightButton = document.getElementById("year-right-button")
  my_yearRightButton.before(yearInfo)
}