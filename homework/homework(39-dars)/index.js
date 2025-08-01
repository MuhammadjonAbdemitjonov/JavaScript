function* GetVal(id) {
  while (1) {
    yield id++;
  }
}

let obj = GetVal(1);

let arr = [
  { id: obj.next().value, name: `Eshmat` },
  { id: obj.next().value, name: `Oxford` },
];

let list = document.querySelector("#list");

function SetUser() {
  list.innerHTML = "";
  arr.forEach((obj) => {
    let h1 = document.createElement("h1");
    h1.innerHTML = `${obj?.name} - ${obj?.id} <button onclick="del(${obj?.id})">Delete</button>`;
    list.append(h1);
  });
}

function Yana() {-
  let a = document.querySelector("#inp");
  return a.value;
}

function AddUser() {
  let val = Yana();
  arr.push({ id: obj.next().value, name: val });
  SetUser();
}

let del = (id) => {
  arr = arr.filter((obj) => obj.id !== id);
  SetUser();
};

SetUser();

