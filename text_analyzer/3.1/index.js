function wordCount() {
    let inputedText = document.getElementById("area").value

    inputedText = inputedText.replace(/(^\s*)|(\s*$)/gi,"");
    inputedText = inputedText.replace(/[ ]{2,}/gi," ");
    inputedText = inputedText.replace(/\n /,"\n"); 
    result = inputedText.split(' ').filter(function(str){return str!="";}).length
    console.log(result)
    document.getElementById("resultarea").value = result
}
