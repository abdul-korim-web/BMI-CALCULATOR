// navigatiuon
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

// BMI calculate
let from = document.getElementById("from");
let Height = document.getElementById("Height");
let Weight = document.getElementById("Weight");
let bmiBtn = document.getElementById("bmiBtn");
let result = document.getElementById("result");
from.addEventListener(`submit`,function(e){
    e.preventDefault();
})
function bmi(){
    let NewHeight= parseFloat(Height.value)/100;
    let NewWeight = parseFloat(Weight.value);
    let bmicalculate= NewWeight/(NewHeight**2);
    let fixedBmiResult= bmicalculate.toFixed(2);
      if (fixedBmiResult < 18.5) {
        message = "Underweight ⚠️";
        bgClass = "#F59E0B";
    } else if (fixedBmiResult < 25) {
        message = "Normal ✅";
        bgClass = "#22C55E";
    } else if (fixedBmiResult < 30) {
        message = "Overweight ⚠️";
        bgClass = "#F97316";
    } else if (fixedBmiResult < 35) {
        message = "Obesity Class I ⚠️";
        bgClass = "#EF4444";
    } else if (fixedBmiResult < 40) {
        message = "Obesity Class II ⚠️";
        bgClass = "#DC2626";
    } else {
        message = "Obesity Class III 🚨";
        bgClass = "#991B1B";
    }
    result.innerHTML= `Your Result : ${fixedBmiResult} ${message} `
    result.style.background = bgClass
    

}



