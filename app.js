'use strict';

//DOM ELEMENTS SELECTED FROM HTML
const genBtn = document.getElementById('btn');
const bodyBgColor = document.body;
const colorCodeBox = document.querySelector('.color-code');
const colorname = document.querySelector('.code');

// COLOR ARRAY
const colorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// function generateColor() {
//   return Math.floor(Math.random() * colorCode.length);
// }

// ARROW FUNCTION TO GENERATE A RANDOM NUMBER
const generateColor = () => Math.floor(Math.random() * colorCode.length);

// THIS IS GENERATING THE COLOR
function hexColorGenerator() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += colorCode[generateColor()];
    bodyBgColor.style.backgroundColor = hexColor;
    colorname.textContent = hexColor;
  }
}

// THIS CODE CONTROL THE CLICK EVENT
genBtn.addEventListener('click', function () {
  hexColorGenerator();
});
