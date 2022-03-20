const countE1 = document.querySelector("#count");
//E1==>element
const nameE1 = document.querySelector("#name");
const heightE1 = document.getElementById("height");
const weightE1 = document.getElementById("weight");
const resultE1 = document.querySelector(".result");

function calc() {
    if (heightE1.value === '' || weightE1.value === '') {
        resultE1.textContent = "數值不能為空"
        console.log(nameE1.value, heightE1.value, weightE1.value, bmi.toFixed(2));
    }
    let height = parseFloat(heightE1.value);
    let weight = parseFloat(weightE1.value);
    // isNan==> is not a number
    if (isNaN(height) || isNaN(weight)) {
        alert("數值輸入錯誤!");
        return;

    }

    let bmi = weight / (height / 100) ** 2;

    console.log(nameE1.value, heightE1.value, weightE1.value, bmi.toFixed(2));

    resultE1.textContent = "BMI:" + bmi.toFixed(2);
}
