console.log("connection"); //checking

// defaults
document.querySelector("#after").classList.add("hidden");
document.querySelector(".email-error").classList.add("hidden");


//subscribe button click operations
document.querySelector(".subscribe").addEventListener("click", function () {
  console.log("click"); //checking

  // local variables for simplicity
  var subId = document.querySelector("#sub");
  var afterId = document.querySelector("#after");
  var emailError = document.querySelector(".email-error");
  var emailInput = document.querySelector("#email");

  //checking email validity and operating accordingly
  if (validateEmail(emailInput.value) === true) {
    subId.classList.add("hidden");
    afterId.classList.remove("hidden");
  } else if (emailInput.value.length === 0) {
    emailError.textContent = "Please enter your email";
    emailError.classList.remove("hidden");
    emailInput.classList.add("error-state");
  } else {
    emailError.textContent = "Valid email required";
    emailError.classList.remove("hidden");
    emailInput.classList.add("error-state");
  }
  console.log(validateEmail(emailInput.value)); //checking
});

// dismiss button click operation
document.querySelector(".dismiss").addEventListener("click", function () {
  
    // local variables for simplicity
  var subId = document.querySelector("#sub");
  var afterId = document.querySelector("#after");
  var emailError = document.querySelector(".email-error");
  var emailInput = document.querySelector("#email");

  afterId.classList.add("hidden");
  subId.classList.remove("hidden");
  emailError.classList.add("hidden");
  emailInput.value = null;
  emailInput.classList.remove("error-state");
});


// function for checking email validity
function validateEmail(inputText) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailFormat)) {
    return true;
  } else {
    return false;
  }
}