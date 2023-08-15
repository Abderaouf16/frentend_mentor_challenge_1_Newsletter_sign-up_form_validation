const email = document.getElementById("email_input");
const submitBtn = document.getElementById("submit_btn");
const form = document.getElementById("form");

console.log(email.value);
// for validation

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWrittenEmail();
  checkValidation();
});

let inputValue = email.value;

function setError(email, message) {
  const inputparent = email.parentElement;
  console.log(inputparent);
  const errorDisplay = inputparent.querySelector(".error");

  errorDisplay.innerText = message;
  inputparent.classList.add("error");
  inputparent.classList.remove("success");
}

function setSuccess(email, message) {
  const inputparent = email.parentElement;
  const errorDisplay = inputparent.querySelector(".error");

  errorDisplay.innerText = "";
  inputparent.classList.add("success");
  inputparent.classList.remove("error");
}

function isValidEmail(inputValue) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(inputValue).toLowerCase());
}

function checkValidation() {
  let inputValue = email.value.trim(); // we use trim to remove any whiteSpace character intered by the user
  if (inputValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(inputValue)) {
    setError(email, "Valid email required");
  } else {
    setSuccess(email);
    acceptForm();
  }
}

// for displaying the thanks page
const secondPage = document.getElementById("thankYou_container");
const firstPage = document.getElementById("main");

function acceptForm() {
  firstPage.style.display = "none";
  secondPage.style.display = "flex";
}

//  for hidding the thanks page and go back to the main 'first' page
const dismissBtn = document.getElementById("dismiss_btn");
dismissBtn.addEventListener("click", function () {
  secondPage.style.display = "none";
  firstPage.style.display = "flex";
  location.reload();
});

/* display the email written in the input and display it in the thanks page*/
const chosenEmail = document.getElementById("chosen_email");
function getWrittenEmail() {
  let writtenValue = email.value;
  chosenEmail.textContent = writtenValue;
}
