// const text = document.querySelector('.text h3');
// text.innerHTML= text.innerText.split('').map(
//     (char,i) =>
// `<span style="transform:rotate(${i * 3.5}deg)">${char}</span>`
// ).join('');

const text = document.querySelector('.text h3');
let rotatedText = "";
for (let i = 0; i < text.innerText.length; i++) {
  let char = text.innerText[i];
  let rotatedChar = `<span style="transform:rotate(${i * 3.5}deg)">${char}</span>`;
  rotatedText += rotatedChar;
}
text.innerHTML = rotatedText;
