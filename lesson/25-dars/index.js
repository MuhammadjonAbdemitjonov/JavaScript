let company = {
  name: "senior",
  salary: 5000,
  person: {
    name: "middle",
    salary: 3000,
    person: {
      name: "junior",
      salary: 1000,
    },
  },
};
let umumiy = 0;
for (key in company) {
  if (key == key.salary) {
    umumiy += salary;
  }
}
console.log(umumiy);
