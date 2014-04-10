/*global document, window, XMLHttpRequest, console */

var header = document.getElementsByTagName("header")[0];

function clearHeader() {
    var height = window.getComputedStyle(header).height;
    document.getElementsByClassName("main")[0].style.marginTop = height;
    if (height) {
        return "Pushed by" + height;
    }
}
clearHeader();

var fileContent;
document.getElementById("loadText").addEventListener("click", function () {
    loadText(this);
});

function loadText(elem) {
    var textFile = new XMLHttpRequest();
    textFile.open("GET", "../assets/load.txt", true);
    textFile.onreadystatechange = function () {
        if (textFile.readyState === 4 && textFile.status === 200) {
            fileContent = textFile.responseText;
            window.setTimeout(function () {
                elem.innerHTML = fileContent;
            }, 50);
        }
    };
    textFile.send();
}

function spaceChars() {
    var hHeight = window.getComputedStyle(header).height;
    hHeight = hHeight.substring(0, hHeight.length - 2);
    if (document.body.scrollTop > hHeight) {
        header.children[0].children[0].style.letterSpacing = "100px";
    } else {
        header.children[0].children[0].style.letterSpacing = "initial";
    }
    return hHeight < document.body.scrollTop ? true : false;
}

window.addEventListener("scroll", function () {
    spaceChars();
});