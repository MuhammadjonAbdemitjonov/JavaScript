let user = {
    id: 1,
    name: "Eshmat",
    age: 40,
    child: {
      id: 2,
      name: "Toshmat",
      age: 30,
      subChild: {
        id: 3,
        name: "Gulmat",
        age: 20,
      },
    },
  };
  let { name : subname , child:{name:childname, subChild:{name}}} = user
  console.log(name);
  