function wordCount() {
    let inputedText = document.getElementById("area").value

    inputedText = inputedText.replace(/(^\s*)|(\s*$)/gi, "");
    inputedText = inputedText.replace(/[ ]{2,}/gi, " ");
    inputedText = inputedText.replace(/\n /, "\n");
    result = inputedText.split(' ').filter(function (str) { return str != ""; }).length

    userWordСount = String("Количество слов в тексте: " + result + "\n")
    return userWordСount
}

function charactersCount() {
    let inputedText = document.getElementById("area").value

    inputedText = inputedText.replace(/(^\s*)|(\s*$)/gi, "");
    inputedText = inputedText.replace(/[ ]{2,}/gi, " ");
    inputedText = inputedText.replace(/\n /, "\n");

    userCharactersCount = String("Количество символов в тексте: " + inputedText.length + "\n")
    return userCharactersCount
}

function charactersWihtoutSpacesCount() {
    let inputedText = document.getElementById("area").value

    inputedText = inputedText.replace(/(^\s*)|(\s*$)/gi, "");
    inputedText = inputedText.replace(/[ ]{2,}/gi, " ");
    inputedText = inputedText.replace(/\n /, "\n");
    result = inputedText.split(' ').filter(function (str) { return str != ""; }).length

    let textWithSpaces = document.getElementById("area").value
    let textWithoutSpaces = textWithSpaces.replace(/\s/g, '')

    // console.log(result)
    charactersWithoutSpaces = String("Количество символов без пробелов: " + textWithoutSpaces.length + "\n")
    return charactersWithoutSpaces
}

function charactersInString() {
    let inputedText = document.getElementById("area").value
    let uniqueСharacters = ''

    uniqueСharacters = uniqueСharacters + inputedText[0]

    for (let i = 0; i < inputedText.length; i++) {
        for (let x = 0; x < uniqueСharacters.length; x++) {
            if (uniqueСharacters.indexOf(inputedText[i]) == -1) {
                uniqueСharacters = uniqueСharacters + inputedText[i]
            }
            else break
        }
    }
    uniqueСharacters = uniqueСharacters.replace(/\s/g, '')
    userStatistics = ""

    for (let i = 0; i < uniqueСharacters.length; i++) {
        userStatistics = userStatistics + charactersCountInString(uniqueСharacters, inputedText, i)
    }
    return userStatistics
}

function charactersCountInString(characterList, userString, numberOfCharacter) {
    characterCounter = 0
    statistics = ""

    for (let i = 0; i <= userString.length; i++) {
        if (characterList[numberOfCharacter] == userString[i]) {
            characterCounter++
        }
    }
    var percent = characterCounter * 100 / userString.length
    statistics = (characterList[numberOfCharacter] + " Составляет: " + percent + "% всего текста. \n")
    return statistics

}

function checkboxTreatment() {
    let words = document.getElementById('words');
    let characters = document.getElementById('characters');
    let charactersWihtoutSpacesrds = document.getElementById('charactersWihtoutSpaces');
    let percentage = document.getElementById('percentage');

    let messageForUser = ""

    if (words.checked) {
        messageForUser = messageForUser + wordCount()
    }
    if (characters.checked) {
        messageForUser = messageForUser + charactersCount()
    }
    if (charactersWihtoutSpacesrds.checked) {
        messageForUser = messageForUser + charactersWihtoutSpacesCount()
    }
    if (percentage.checked) {
        messageForUser = messageForUser + charactersInString()
    }

    document.getElementById("statisticsArea").value = messageForUser
}

function checkReading () {
    if (checkReading.read) {
      return;
    }
    checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
    document.registration.accept.disabled = document.getElementById("nextstep").disabled = !checkReading.read;
    checkReading.noticeBox.innerHTML = checkReading.read ? "Спасибо вам." : "Пожалуйста, прокрутите и прочитайте следующий текст.";
  }
  
  onload = function () {
    var oToBeRead = document.getElementById("statisticsArea");
    checkReading.noticeBox = document.createElement("span");
    document.registration.accept.checked = false;
    checkReading.noticeBox.id = "notice";
    oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
    oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
    oToBeRead.onscroll = checkReading;
    checkReading.call(oToBeRead);
  }
  