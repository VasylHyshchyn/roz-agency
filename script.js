const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
const resultEl = document.querySelector(".calcBotRight");

inputSlider.oninput = () => {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = value / 500 / 2 + "%";
  slideValue.classList.add("show");
  const textValue = slideValue.innerText;
  resultEl.innerText = calculate(textValue, 20, 12);
};

inputSlider.onblur = () => {
  slideValue.classList.remove("show");
};

function calculate(value, months, percent, domElement) {
  let result = [];
  let fixed_percentage = (100 + percent) / 100;
  for (let i = 1; i <= months; i++) {
    result.push((value = Math.floor(value * fixed_percentage)));
  }
  return result[months - 1];
}
