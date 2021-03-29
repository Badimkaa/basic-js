const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
// if (!Array.isArray(arr)) throw new Error ('error')
//   let newarr = [];
//   let flag = true;
//   arr.forEach((el, index) => {
//     if (el === '--discard-next') {
//       flag = false;
//     }
//     else if (el === '--discard-prev') {
//       newarr.pop();
//     }
//     else if (el === '--double-next' ) {
//       if (index < arr.length - 1) {
//         newarr.push(arr[index+1]);
//       }
//     }
//     else if (el === '--double-prev') {
//       if (index > 0){
//         newarr.push(arr[index-1]);
//       }
//     }
//     else if (flag) {
//       newarr.push(el);
//     }
//     else {
//       flag = true;
//     }
//   });
//   return newarr;
// };
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Error');

  let newArr = [];
  let flag = false;
  arr.forEach(function (item, i) {

    if (flag) flag = false;
    else if (item === '--discard-next') {
      flag = true;
    }
    else if (item === '--discard-prev') {
      if(arr[i-2] !== '--discard-next'){
        newArr.pop();
      }
    }
    else if (item === '--double-next') {
      if (i < arr.length - 1 ) {
        newArr.push(arr[i+1]);
      }
    }
    else if (item === '--double-prev') {
      if (i > 0 && arr[i-2] !== '--discard-next' ) {
        newArr.push(arr[i-1]);
      }

    }
    else newArr.push(item)
  });
  return newArr;
};