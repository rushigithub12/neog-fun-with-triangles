const base = document.querySelector("#val1");
const height = document.querySelector("#val2");
const calBtn = document.querySelector("#calBtn");
const output = document.querySelector("#area-output");

calBtn.addEventListener("click", calculateArea);

function calculateArea() {
    let baseVal = Number(base.value);
    let heightVal = Number(height.value);

    if (baseVal > 0 && heightVal > 0) {
        let results = (baseVal * heightVal) / 2;
        output.innerText = `The area of triangle is ${results}`;
    } else {
        output.innerText = "Enter valid values";
    }
}