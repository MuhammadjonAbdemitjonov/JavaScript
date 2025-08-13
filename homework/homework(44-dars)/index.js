const API = "https://6899e203fed141b96ba11b7c.mockapi.io/name";

let arr = [];
let checkboxP = 0;
let alln = 0;

let input = document.querySelector(".input_text");
let btn = document.querySelector(".creat_btn");
let inner = document.querySelector(".list");
let umumiy = document.querySelector(".umumiy");
let bajarildi = document.querySelector(".bajarildi");
let color = document.querySelector(".color");

function init() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      arr = data;
      render();
    })
    .catch((err) => {
      console.log("Xatolik: ", err);
    });
}

function addList() {
  let name = input.value.trim();
  if (name === "") return;

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, done: false }),
  })
    .then((res) => res.json())
    .then((created) => {
      arr.push(created);
      input.value = "";
      render();
    })
    .catch((err) => {
      console.log("Xatolik: ", err);
    });
}

function render() {
  inner.innerHTML = "";
  checkboxP = 0;
  alln = arr.length;

  arr.forEach((val) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="created_plan">
        <div class="box">
          <input class="tugadi" type="checkbox" />
          <button class="del_btn"><img src="./icons8-delete.svg" alt=""></button>
          <p>${val.name}</p>
        </div>
        <div class="box">
          <p>topshiriq</p>
          <p>${val.id}</p>
        </div>
      </div>
    `;

    let tugadi = li.querySelector(".tugadi");
    let delBtn = li.querySelector(".del_btn");

    tugadi.checked = val.done;

    tugadi.addEventListener("change", function () {
      let newDone = tugadi.checked;

      fetch(`${API}/${val.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: val.name, done: newDone }),
      })
        .then((res) => res.json())
        .then((updated) => {
          val.done = updated.done;
          render();
        })
        .catch((err) => {
          console.log("Xatolik: ", err);
        });
    });

    delBtn.addEventListener("click", function () {
      fetch(`${API}/${val.id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          arr = arr.filter((item) => item.id !== val.id);
          render();
        })
        .catch((err) => {
          console.log("Xatolik: ", err);
        });
    });

    if (val.done) checkboxP++;
    inner.appendChild(li);
  });

  umumiy.textContent = alln;
  bajarildi.textContent = checkboxP;
  color.style.width = alln ? (checkboxP / alln) * 100 + "%" : "0%";

  if (alln > 0 && alln === checkboxP) {
    let aler = confirm("Topshiriq tugadi, yana davom etasizmi?");
    if (aler) {
      inner.innerHTML = "";
      arr = [];
      checkboxP = 0;
      alln = 0;
      render();
    }
  }
}

btn.addEventListener("click", addList);
init();
