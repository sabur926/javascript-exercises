
 const First name = "Carlos";
 const Last name = "Stevenson";
 const This year = "1965";
 const Birth year = "1947";
 const greeting = "Hello! My name is" + " ", + First name + " " + Last name + " and I am" +(This year - Birth year) + " " + "years old."
 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."

// Add your code right below, good luck!





// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
