function password(passwordObject) {
  if (
    passwordObject.birthYear.toString().length < 4 ||
    Object.keys(passwordObject).length < 3
  ) {
    return "Invalid";
  } else {
    const webName = passwordObject.siteName;
    const webNamecap = webName.charAt(0).toUpperCase() + webName.slice(1);
    const newPassword =
      webNamecap + "#" + passwordObject.name + "@" + passwordObject.birthYear;
    return newPassword;
  }
}

// Code
const myObject = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
const myPassword = password(myObject);
console.log(myPassword);
