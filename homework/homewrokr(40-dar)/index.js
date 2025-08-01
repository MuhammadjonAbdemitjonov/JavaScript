let arr = [];
let checkboxP = 0;
let alln = 0;

let about = document.querySelector(".about");
let result = document.querySelector(".result");
let done = document.querySelector(".done");
let input = document.querySelector(".input_text");
let btn = document.querySelector(".creat_btn");
let inner = document.querySelector(".list");
let umumiy = document.querySelector(".umumiy");
let bajarildi = document.querySelector(".bajarildi");
let color = document.querySelector(".color");

function* planid() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
let addId = planid();

function addList() {
  if (input.value === "") return;

  arr.push({
    name: input.value,
    id: addId.next().value,
    done: false,
  });
  alln++;
  input.value = "";
  render();
}

function render() {
  inner.innerHTML = "";
  checkboxP = 0;

  arr.forEach((val) => {
    let innerlist = document.createElement("li");

    innerlist.innerHTML = `
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

    let tugadi = innerlist.querySelector(".tugadi");
    let delBtn = innerlist.querySelector(".del_btn");

    tugadi.checked = val.done;

    tugadi.addEventListener("change", () => {
      val.done = tugadi.checked;

      tugadi.style.overflow = "hidden";
      render();
    });

    delBtn.addEventListener("click", () => {
      arr = arr.filter((item) => item.id !== val.id);
      alln--;
      render();
    });

    if (val.done) checkboxP++;

    inner.appendChild(innerlist);
  });

  umumiy.textContent = alln;
  bajarildi.textContent = checkboxP;

  if (alln > 0) {
    color.style.width = `${(checkboxP / alln) * 100}%`;
  } else {
    color.style.width = "0%";
  }

  if (0 < alln && alln === checkboxP) {
    let aler = confirm("topshiriq tugadi yana davom etasizmi");
    if (aler) {
      inner.innerHTML = "";
      arr = [];
      checkboxP = 0;
      alln = 0;
    }
  }
}

btn.addEventListener("click", addList);
