var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-1.png") {
        myImage.setAttribute("src", "images/firefox-2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-1.png");
    }
};

function setUserName() {
    var myName = prompt("Set user name.");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.innerText = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};