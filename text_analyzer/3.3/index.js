function wordCount() {
    let inputedText = document.getElementById("area").value

    inputedText = inputedText.replace(/(^\s*)|(\s*$)/gi,"");
    inputedText = inputedText.replace(/[ ]{2,}/gi," ");
    inputedText = inputedText.replace(/\n /,"\n");
    result = inputedText.split(' ').filter(function(str){return str!="";}).length

    let textWithSpaces = document.getElementById("area").value
    let textWithoutSpaces = textWithSpaces.replace(/\s/g, '')

    // console.log(result)
    userMessage = String("Количество слов в тексте: " + result + ". Количество символов в тексте: " + inputedText.length + ". Количество символов без пробелов: " + textWithoutSpaces.length) 
    document.getElementById("resultarea").value = userMessage
}
