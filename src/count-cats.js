const CustomError = require("../extensions/custom-error");

module.exports = function countCats(catsArr) {
let newArr = [];
for (let i = 0; i < catsArr.length; i++) {
  newArr = newArr.concat(catsArr[i]);
};
let count = 0;
let res = newArr.forEach(el => {
  if (el == '^^') count++;
});
return count;
};
