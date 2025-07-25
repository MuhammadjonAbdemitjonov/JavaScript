let arr = [1, 2, 3, 4, 1, 2, 3, 5, 32, 2, 2, 2, 2, 2, 2, 5];

Array.prototype.hi = function (val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) {
      this.splice(i, 1);
      i--;
    }
  }
};
arr.hi(2);
console.log(arr);
