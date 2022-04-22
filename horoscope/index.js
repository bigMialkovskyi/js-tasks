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
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
      xhr.setRequestHeader("X-RapidAPI-Host", "sameer-kumar-aztro-v1.p.rapidapi.com");
      xhr.setRequestHeader("X-RapidAPI-Key", "54bf8dfd06msh48bbd28bb9b3d17p14ccfcjsn29564712370b");
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

async function main(sign, day) {
  const response = await $requester.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + sign + "&day=" + day)
  let result = sign
  result = result + ':<br>' + response['description']
  document.getElementById('divForContent').innerHTML = result
}

document.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) { //13 = Enter
    let birdhDate = document.getElementById('date-of-birdh').value
    let month = Number(birdhDate.substr(5, 2))
    let day = Number(birdhDate.substr(8, 2))
    main(determineSign(month, day), determineDay())
  }
})

function determineSign(month, day) {
  let icon = document.getElementById('pageIcon')

  if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    icon.href = "icons/aries.png"
    return "Aries"
  }
  if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    icon.href = "icons/taurus.png"
    return "Taurus"
  }
  if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    icon.href = "icons/gemini.png"
    return "Gemini"
  }
  if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    icon.href = "icons/cancer.png"
    return "Cancer"
  }
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    icon.href = "icons/leo.png"
    return "Leo"
  }
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    icon.href = "icons/virgo.png"
    return "Virgo"
  }
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    icon.href = "icons/libra.png"
    return "Libra"
  }
  if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
    icon.href = "icons/scorpio.png"
    return "Scorpio"
  }
  if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    icon.href = "icons/sagittarius.png"
    return "Sagittarius"
  }
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    icon.href = "icons/capricorn.png"
    return "Capricorn"
  }
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    icon.href = "icons/aquarius.png"
    return "Aquarius"
  }
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    icon.href = "icons/pisces.png"
    return "Pisces"
  }
}

function determineDay() {
  let radios = document.querySelectorAll('input[type="radio"]');
  for (let radio of radios) {
    if (radio.checked) {
      return radio.value
    }
  }
}