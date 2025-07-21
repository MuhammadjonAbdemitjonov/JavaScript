function* count(start) {
  while (true) {
    yield start++;
  }
}

let counter = count(1);
let h1 = document.querySelector("h1");
let button = document.querySelector("button");

function bos() {
  let result = counter.next();
  h1.innerHTML = result.value;
}
