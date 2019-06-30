
const nameInverter = function(name) {
  if (name === undefined) return "throw 'Error'";
  let parts = name.trim().split(/\s+/);
  parts = parts.map(p => p.trim());
  let honorific = false;
  if (["Mr.", "Mrs.", "Dr."].includes(parts[0])) {
    honorific = parts.shift();
  }
  if (parts.length === 0) return "";
  parts.reverse();
  let invertedName = parts.join(", ");
  if (honorific) invertedName = honorific + " " + invertedName;
  return invertedName;
};

console.log(nameInverter("Dr. Jean Pierre"));




module.exports = nameInverter;


