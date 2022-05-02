const $requester = {
  get: function (url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.onload = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) resolve(JSON.parse(xhr.response))
          else reject('Request error')
        }
      }
      xhr.onerror = function (error) {
        reject('Request error')
        alert('Request error!')
      }
      xhr.send()
    })
  },
  post: function (url, payload) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.withCredentials = false;
      xhr.open("POST", url)
      xhr.onload = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) resolve(JSON.parse(xhr.response) || xhr.response)
          else reject('Request error')
        }
      }
      xhr.onerror = function (error) {
        reject('Request error')
        alert('Request error!')
      }
      xhr.send(JSON.stringify(payload))
    })
  }
}

let usedOptions = []
let cities = null

window.onload = async () => {
  if (!localStorage.getItem("usedOptions")) localStorage.setItem("usedOptions", JSON.stringify([]))
  cities = (await $requester.get("https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json")).city // receiving JSON
}

async function main(userOption) {
  const isUsed = usedOptions.includes(userOption)
  if (!isUsed) return existenceCheck(userOption, cities)
  createNavigation('This option has already been used. Choose another city')
}

document.addEventListener('keyup', function (event) {
  if (event.key == "Enter") { //13 = Enter
    let userOption = document.getElementById('user-option').value
    main(userOption)
  }
})

function existenceCheck(userOption, cities) {
  const result = cities.find((element) => {
    if (element.name == userOption) return element
  })
  if (!result) return createNavigation('This city does not exist.')

  localStorage.setItem("usedOptions", localStorage.getItem("usedOptions").concat([result.name]))
  usedOptions.push(result.name)
  const lastWord = usedOptions[usedOptions.length - 1]
  let lastChar = lastWord[lastWord.length - 1]
  if ((lastChar == "ь") || (lastChar == "ы")) lastChar = lastWord[lastWord.length - 2]

  robotStep(cities, lastChar)
  createList()
}

function robotStep(cities, comparableSymbol) { //search for words by the first character.
  for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    const firstChar = element.name[0].toLowerCase()
    if (comparableSymbol == firstChar) {
      if (usedOptions.includes(element.name)) continue
      else {
        usedOptions.push(element.name)
        return createNavigation('Your turn')
      }
    }
  }

  return createNavigation('All possible options are over. You won. My congratulations.')
}

function createList() {
  let updatedСontent = document.getElementById("listId")
  if (updatedСontent) updatedСontent.remove()

  let newList = document.createElement("ul")
  newList.id = "listId"
  usedContent = document.getElementById("used-options")
  usedContent.append(newList)

  for (let element of usedOptions) {//creating list items. (used city options)
    let newListElement = document.createElement("li")
    newListElement.id = element
    newListElement.innerText = element
    my_newList = document.getElementById("listId")
    my_newList.append(newListElement)
  }
}

function createNavigation(message) {
  let refresh = document.getElementById("newP")
  if (refresh) refresh.remove()

  let newParagraph = document.createElement("p")
  newParagraph.id = "newP"
  newParagraph.innerText = message
  my_navigationDiv = document.getElementById("navigation")
  my_navigationDiv.prepend(newParagraph)

  // createAnimation()
} 

// function createAnimation(){
//   document.getElementById('navigation').style = "animation: bloom ease-in-out .75s forwards"
//   console.log('done')
// }