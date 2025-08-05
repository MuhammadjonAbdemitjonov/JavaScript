let body = document.querySelector("body");
let tosin = document.querySelector(".tosin");
let darvoza = document.querySelector(".darvoza");
let koptok = document.querySelector(".koptok");
let torlar = document.querySelector(".torlar");
let tor = document.querySelector(".tor");
let tor2 = document.querySelector(".tor2");
let tor3 = document.querySelector(".tor3");
let tor4 = document.querySelector(".tor4");
let button = document.querySelector("button");
let button1 = document.querySelector(".button1");
body.style.cssText = `
display : flex;
align-items: center;
justify-content: center;
gap:50px;
flex-direction: column;`;
tosin.style.cssText = `
  border-left: 15px solid black;
  border-bottom: 15px solid black;
  border-top: 15px solid gray;
  border-right: 15px solid gray;
  width: 900px;
  height: 500px;`;
darvoza.style.cssText = `
  border-left: 10px solid gray;
  border-bottom: 10px solid gray;
  border-top: 10px solid black;
  border-right: 10px solid black;
  height: 97%;
  position: relative;
  background-color: green;`;
torlar.style.cssText = ` 
  display: flex;
  display: flex;
    flex-direction: column;
    gap: 50px;`;

tor.style.cssText = `
  border-top: 25px dashed black;
    border-bottom: 25px dashed black;
    height: 34px;
  `;
tor2.style.cssText = `
  border-top: 25px dashed black;
    border-bottom: 25px dashed black;
    height: 34px;
  `;
tor3.style.cssText = `
  border-top: 25px dashed black;
    border-bottom: 25px dashed black;
    height: 34px;
  `;
tor4.style.cssText = `
  border-top: 25px dashed black;
    border-bottom: 25px dashed black;
    height: 34px;
  `;
koptok.style.cssText = `
    height: 90px ;
    width: 90px;
    border-radius: 50%;
    border: 2px solid white;
    position: absolute;
    background-color: rgb(50, 42, 42);
`;
button.style.cssText = `
    width: 150px;
    height: 40px;
    background-color: #d7bf0a;
    border: none;
    font-size: 20px;
    cursor:pointer;
`;
button1.style.cssText = `
    width: 150px;
    height: 40px;
    background-color: #d7bf0a;
    border: none;
    font-size: 20px;
    cursor:pointer;
`;
function gol() {
  let darvozaWidth = darvoza.clientWidth;
  let darvozaHeight = darvoza.clientHeight;

  let ballWidth = koptok.offsetWidth;
  let ballHeight = koptok.offsetHeight;

  let left = (darvozaWidth - ballWidth) / 2;
  let top = (darvozaHeight - ballHeight) / 2;

  koptok.style.left = left + "px";
  koptok.style.top = top + "px";
}
darvoza.addEventListener("click", function (event) {
  let rect = darvoza.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  koptok.style.left = x - koptok.offsetWidth / 2 + "px";
  koptok.style.top = y - koptok.offsetHeight / 2 + "px";
});

function boshqatan() {
  koptok.style.left = 0;
  koptok.style.top = 0;
}
