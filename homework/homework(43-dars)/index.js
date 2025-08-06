let passwordInputs = document.querySelectorAll(".password");

passwordInputs.forEach((input) => {
  let parent = input.parentElement;
  let acceptImg = parent.querySelector(".accept");
  let wrongImg = parent.querySelector(".wrong");

  function tekshir(value) {
    let shartlar = {
      lenght: false,
      uppercase: false,
      number: false,
      lowercase: false,
      belgi: false,
    };

    for (let key of value) {
      if (key.toUpperCase() === key && key.toLowerCase() !== key) {
        shartlar.uppercase = true;
      } else if (!isNaN(key)) {
        shartlar.number = true;
      } else if (key.toLowerCase() === key && key.toUpperCase() !== key) {
        shartlar.lowercase = true;
      } else {
        shartlar.belgi = true;
      }
    }

    if (value.length >= 8) {
      shartlar.lenght = true;
    }

    return Object.values(shartlar).every(Boolean);
  }

  input.addEventListener("keyup", () => {
    let value = input.value;
    let isValid = tekshir(value);

    if (isValid) {
      input.classList.remove("false");
      input.classList.add("true");
      acceptImg.classList.add("visible");
      wrongImg.classList.remove("visible");
    } else {
      input.classList.remove("true");
      input.classList.add("false");
      acceptImg.classList.remove("visible");
      wrongImg.classList.add("visible");
    }
  });

  input.addEventListener("focusout", () => {
    let value = input.value;
    let isValid = tekshir(value);

    if (isValid) {
      input.classList.remove("false");
      input.classList.add("true");
      acceptImg.classList.add("visible");
      wrongImg.classList.remove("visible");
    } else {
      input.classList.remove("true");
      input.classList.add("false");
      acceptImg.classList.remove("visible");
      wrongImg.classList.add("visible");
    }
  });
});

function submitForm() {
  alert("Form yuborildi!");
}
