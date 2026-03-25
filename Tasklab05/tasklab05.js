function analyze() {
    var txt = document.getElementById("text").value;

    if(txt.trim() == "") {
        document.getElementById("result").innerHTML = "Empty input";
        return;
    }

    var charCount = txt.length;

    var words = txt.trim().split(" ");
    var wordCount = words.length;

    var reverse = "";
    for(var i = txt.length - 1; i >= 0; i--) {
        reverse = reverse + txt[i];
    }

    document.getElementById("result").innerHTML =
        "Characters: " + charCount + "<br>" +
        "Words: " + wordCount + "<br>" +
        "Reverse: " + reverse;
}