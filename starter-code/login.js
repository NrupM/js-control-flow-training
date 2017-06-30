console.log("login.js loaded");

let userLogin = {
  name: "Mary",
  password: "dog"
}

let passwordInput;

let loggedIn = false;


//iterate through the loop so long as loggedIn = false
//prompt user for a password and save it to a variable to be compared against our object key values for correctness.
while(!loggedIn){
    passwordInput = prompt("Enter password for user " + userLogin.name + ".")
    if (passwordInput === userLogin.password){
      alert("Correct!");
    //which changes user from not loggedIn to loggedIn
    loggedIn = true;
    break;
  } else {
    //if user gets password wrong, the will go through the loop
    alert("password doesn't match. try again!")
  }
}
