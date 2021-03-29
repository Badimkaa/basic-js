const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (Array.isArray(members) !== true) return false
 let arr = []
 members.forEach(el => {
   if (typeof(el) === 'string') {
         arr.push(el.trim().substr(0,1).toUpperCase());
   }
 })
return arr.sort().join('');
};
