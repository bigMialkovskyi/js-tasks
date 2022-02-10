function wordCount() {
    let inputedText = document.getElementById("area").value

    inputedText = inputedText.replace(/(^\s*)|(\s*$)/gi, "");
    inputedText = inputedText.replace(/[ ]{2,}/gi, " ");
    inputedText = inputedText.replace(/\n /, "\n");
    result = inputedText.split(' ').filter(function (str) { return str != ""; }).length

    let textWithSpaces = document.getElementById("area").value
    let textWithoutSpaces = textWithSpaces.replace(/\s/g, '')

    // console.log(result)
    userMessage = String("Количество слов в тексте: " + result + ". Количество символов в тексте: " + inputedText.length + ". Количество символов без пробелов: " + textWithoutSpaces.length)
    document.getElementById("resultarea").value = userMessage
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
    // console.log(uniqueСharacters)
    // console.log(inputedText)
    userStatistics = ""

    for (let i = 0; i < uniqueСharacters.length; i++) {
        userStatistics = userStatistics + charactersCountInString(uniqueСharacters, inputedText, i)
    }
    document.getElementById("statisticsArea").value = userStatistics
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
    statistics =  (characterList[numberOfCharacter] + " Составляет: " + percent + "% всего текста. \n")
    return statistics

}
