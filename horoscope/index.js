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
  document.getElementById('divForContent').innerHTML = response['description']
}

document.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) { //13 = Enter
    let birdhDate = document.getElementById('date-of-birdh').value
    let month = Number(birdhDate.substr(5, 2))
    let day = Number(birdhDate.substr(8, 2))

    main(determineSign(month, day), determineDay())
  }
});

function determineSign(month, day) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) return "Aries"
  if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) return "Taurus"
  if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) return "Gemini"
  if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) return "Cancer"
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo"
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo"
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra"
  if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) return "Scorpio"
  if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) return "Sagittarius"
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn"
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius"
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces"
}
function determineDay() {
  let radios = document.querySelectorAll('input[type="radio"]');
  for (let radio of radios) {
    if (radio.checked) {
      return radio.value
    }
  }
}