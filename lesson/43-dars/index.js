let userwrapper = document.querySelector(".cards");

async function fatchusers() {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    getuser(data.products);
  } catch (error) {
    console.log(error);
  }
}
function getuser(users) {
  users.forEach((user) => {
    let card = document.createElement("div");
    let title = document.createElement("p");
    let description = document.createElement("p");
    let price = document.createElement("p");
    let img = document.createElement("img");
    let button = document.createElement("button");
    button.textContent = "Xarid Qilish";
    img.setAttribute("src", user.thumbnail);
    img.style.width = "200px";
    title.textContent = user.title;
    description.textContent = user.description;

    price.innerHTML = `<mark>${user.price} </mark>`;
    card.className = "card";
    button.className = "btn";
    card.appendChild(img);
    img.className = "img";
    card.appendChild(price);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);
    userwrapper.appendChild(card);
  });
}

fatchusers();
