function makeGreen() {
    document.body.style.backgroundColor = "green";
}

// option 3 
const makePink = document.getElementById("make_pink");
makePink.onclick = pinkButton
function pinkButton() {
    document.body.style.backgroundColor = "pink";
}
// option 3a
const purpleButton = document.getElementById("make_purple");
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = "purple";
}

// option 4a
const steelBlueButton = document.getElementById("make_steelblue");
steelBlueButton.addEventListener('click', makeSteelBlue);

function makeSteelBlue() {
    document.body.style.backgroundColor = "steelblue"
}
// option 4b
const redButton = document.getElementById("make_red");
redButton.addEventListener('click', function makeRed() {
    document.body.style.backgroundColor = "red";
})
// option 4 final
document.getElementById("make_black").addEventListener('click', function () {
    document.body.style.backgroundColor = "black";
})