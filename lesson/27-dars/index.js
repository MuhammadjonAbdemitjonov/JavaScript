let obj = {
  name: "Algoritm",
  age: 20,
  child: {
    name: "oxford",
    age: 10,
  },
};
let newobj = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
console.log(newobj);
Object.defineProperties(newobj.child, "name", {
  writable: false,
  configurable: false,
});
newobj.child.name = "vali";
delete newobj.child.name;
console.log(newobj);
