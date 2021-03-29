const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
let result = false;
if (typeof(sampleActivity) === 'string') {
    let newAct = parseFloat(sampleActivity);
    if (newAct < MODERN_ACTIVITY && newAct > 0) {
        let k = 0.693 / HALF_LIFE_PERIOD;
        let res = Math.log(MODERN_ACTIVITY / newAct) / k;
        result = Math.ceil(res);
    }
}
return result;
};
