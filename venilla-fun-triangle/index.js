const inputs = document.querySelectorAll(".angle-input");
const btnCheck = document.querySelector("#btnCheck");
const outputMsg = document.querySelector("#outMsg");

btnCheck.addEventListener("click", isTriangle);

function calculateSumOfAngles(angle1, angle2, angle3) {
    let sum = angle1 + angle2 + angle3;

    return sum;
}

function isTriangle() {
    let a1 = Number(inputs[0].value);
    let a2 = Number(inputs[1].value);
    let a3 = Number(inputs[2].value);
    let sum = calculateSumOfAngles(a1, a2, a3);

    if (sum === 180) {
        outputMsg.innerText = "Yay! This forms a triangle..";
    } else {
        outputMsg.innerText = "This is not a triangle..";
    }
}