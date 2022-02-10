var container = {
  randNumber: ""
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function checkResult(element) {

  if (element.id == container.randNumber) {
    alert("you win")
    container.randNumber = ""
  } else {
    console.log("you lose")
  }
  return element.id
}

function startGame() {
  container.randNumber = String(getRandomIntInclusive(1, 10))
  console.log(container.randNumber)
} 