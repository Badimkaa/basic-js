const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr, res = 1) {
   for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
       arr = arr.flat();
       res++;
       return this.calculateDepth(arr, res);
     };
    };
    return res;
  };
};