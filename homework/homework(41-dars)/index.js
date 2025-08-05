let shart = {
  length: false,
  uppercase: false,
  lowercase: false,
  number: false,
  symbol: false,
};

function validatePassword() {
  const password = document.getElementById("password").value;

  shart.length = password.length >= 8;
  shart.uppercase = /[A-Z]/.test(password);
  shart.lowercase = /[a-z]/.test(password);
  shart.number = /[0-9]/.test(password);
  shart.symbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  for (let key in shart) {
    const li = document.getElementById(key);
    li.className = shart[key] ? "valid" : "invalid";
  }

  document.getElementById("errors").innerHTML = "";
}

function submitForm() {
  let bajarilmagan = [];

  Object.keys(shart).forEach(function (key) {
    if (!shart[key]) {
      bajarilmagan.push(key);
    }
  });

  if (bajarilmagan.length > 0) {
    let messages = bajarilmagan.map((key) => {
      if (key === "length") {
        return " Kamida 8 ta belgidan iborat bo'lishi kerak";
      } else if (key === "uppercase") {
        return " Kamida 1 ta katta harf bo'lishi kerak";
      } else if (key === "lowercase") {
        return " Kamida 1 ta kichik harf bo'lishi kerak";
      } else if (key === "number") {
        return " Kamida 1 ta raqam bo'lishi kerak";
      } else if (key === "symbol") {
        return " Kamida 1 ta maxsus belgi bo'lishi kerak";
      }
    });

    document.getElementById(
      "errors"
    ).innerHTML = `<strong>Quyidagi talablar bajarilmadi:</strong><br>${messages.join(
      "<br>"
    )}`;
    return;
  }

  alert("Tizimga muvaffaqiyatli kirdingiz!");
}
