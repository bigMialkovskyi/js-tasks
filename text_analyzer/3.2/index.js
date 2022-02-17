function wordCount() {
    let inputedText = document.getElementById("area").value

    inputedText = inputedText.replace(/(^\s*)|(\s*$)/gi,"");
    inputedText = inputedText.replace(/[ ]{2,}/gi," ");
    inputedText = inputedText.replace(/\n /,"\n");
    result = inputedText.split(' ').filter(function(str){return str!="";}).length
    console.log(result)
    userMessage = String("Количество слов в тексте: " + result + ". Количество символов в тексте: " + inputedText.length)
    document.getElementById("resultarea").value = userMessage
}
