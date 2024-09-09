function checkName(name) {
  let letters = ["a", "y", "i", "e", "o", "u", "w"];
  const lastLetter = name[name.length - 1];
  //Validation
  if (Array.isArray(name)) {
    return "Invalid Name. Provide a Valid name(Name will not be an Array or Number) ";
  } else if (typeof name === "number") {
    return "Invalid Name. Provide a Valid name(Name will not be a Number)";
  }
  if (
    letters.includes(lastLetter.toUpperCase()) ||
    letters.includes(lastLetter.toLowerCase())
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
const arr = ["Rashed"];
const names = checkName(arr);
console.log(names);
