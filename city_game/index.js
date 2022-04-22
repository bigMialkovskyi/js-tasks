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

async function main(userOption) {
  let response = await $requester.get("https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json")

  for (i = 0; i <= usedOptions.length; i++) {
    if (userOption == usedOptions[i]) {
      console.log('This option has already been used. Choose another city')
      break
    }
    if ((userOption !== usedOptions[i]) && (i >= usedOptions.length)) {
      existenceCheck(userOption, response)
      break
    }
  }
}

document.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) { //13 = Enter
    let userOption = document.getElementById('user-option').value
    console.log(userOption)
    main(userOption)
  }
})

function existenceCheck(userOption, response) {
  for (let i = 0; i < response.city.length; i++) {
    if (userOption == response.city[i].name) {
      console.log(response.city[i].city_id)
      usedOptions.push(userOption)
      break
    }
    if ((i == response.city.length - 1) && (userOption !== response.city[i].name)) {
      console.log('This city does not exist.')
      break
    }
  }
  console.log(usedOptions)
}

