const base = document.querySelector("#val1");
const height = document.querySelector("#val2");
const calBtn = document.querySelector("#calBtn");
const output = document.querySelector("#hypotenuse-output");

calBtn.addEventListener("click", calculateLength);

function calculateLength() {
    let baseVal = Number(base.value);
    let heightVal = Number(height.value);

    if (baseVal > 0 && heightVal > 0) {
        let results = Math.sqrt(((baseVal) ** 2) + ((heightVal) ** 2));
        output.innerText = `The length of hypotenuse is ${results}`;
    } else {
        output.innerText = "Enter valid values";
    }
}