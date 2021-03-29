const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let speed = 3600/turnsSpeed
  let moves = (2 ** disksNumber) - 1
  let newSpeed = Math.floor(moves*speed);
  return {seconds: newSpeed, turns: moves}
};
