const button = document.querySelector("input");
const h1 = document.querySelector("h1");
const clickBtns = document.querySelectorAll('button');

button.addEventListener("click", (colorizer));


for (let btn of clickBtns) {
    btn.addEventListener('click', colorizer);
}

const keys = [];


window.addEventListener('keydown', (e) => {
    keys.push(e.key);
});


function printLog() {
    console.log(keys)
}

function colorizer() {
    const rgb = randomColor();
    const colorList = rgb.match(/\d+/g);
    const visibilityThreshold = colorList.reduce((total, colorValue) => {
      total = +total + +colorValue;
      return total;
    });
  
    console.log(visibilityThreshold);
    if (visibilityThreshold < 200) {
      this.style.color = "white";
    } else {
      this.style.color = "black";
    }

    this.style.backgroundColor = rgb;
}


const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
};
