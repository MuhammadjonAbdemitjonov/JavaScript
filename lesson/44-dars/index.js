// Post
// fetch("https://6899e203fed141b96ba11b7c.mockapi.io/name", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "eshamt",
//     age: 20,
//   }),
// });
// Put
// fetch("https://6899e203fed141b96ba11b7c.mockapi.io/name/3", {
//   method: "PUT",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Toshmat",
//     age: 25,
//   }),
// });

fetch("https://6899e203fed141b96ba11b7c.mockapi.io/name/3", {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    name: "Toshmat",
    age: 25,
  }),
});
