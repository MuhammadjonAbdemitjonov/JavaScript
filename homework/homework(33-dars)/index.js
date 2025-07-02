class Child {}

const Child1 = (PropClass) =>
  class extends PropClass {
    name1 = "Gulmat";
    user1() {
      console.log(
        `salom mening ismim ${this.name1} familyam esa ${this.lname}`
      );
    }
  };

const Child2 = (PropClass) =>
  class extends PropClass {
    name2 = "Toshmat";
    user2() {
      console.log(
        `salom mening ismim ${this.name2} familyam esa ${this.lname}`
      );
    }
  };

class Parent extends Child1(Child2(Child)) {
  constructor(props) {
    super();
    this.lname = props;
  }
}
let obj = new Parent("Eshmatov");

obj.user2();
