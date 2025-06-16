let arr = [7, 1, 6, 3, 9, 20];
function total() {
  this.sort((a, b) => a - b);
  console.log(this[this.length - 1] - this[0]);
}
total.apply(arr);
