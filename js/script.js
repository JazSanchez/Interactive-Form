// The 'Name' field
// Created a variable to refrence the "Name "input element with the type ="text".

const firstName = document.getElementById("name");

// Used the .focus method on the firstName variable
firstName.focus();

// "Job Role Section"
// Created variables to refrence the 'Job Role' select element and the "Other job role" input element.
const jobRole = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");

// Used the "other job role" variable and set it to hide by default
otherJobRole.style.display = "none";

//Use the jobRole variable to listen for an event change
jobRole.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobRole.style.display = "";
  } else {
    otherJobRole.style.display = "none";
  }
});

// Created two variables. One for design and one for color.
const design = document.getElementById("design");
const color = document.getElementById("color");
// Created a variable to gather the children of the color variable
const colorOption = color.children;

// Disabled the color field upon loading
color.disabled = true;

// Created an event listener with the design variable to listen for a change.
design.addEventListener("change", (e) => {
  color.disabled = false;
  for (let i = 0; i < colorOption.length; i++) {
    const colorValue = e.target.value;
    let dataTheme = colorOption[i].getAttribute("data-theme");

    if (dataTheme) {
      if (colorValue === dataTheme) {
        colorOption[i].hidden = false;
        colorOption[i].setAttribute("selected", true);
      } else {
        colorOption[i].hidden = true;
        colorOption[i].removeAttribute("selected", false);
      }
    }
  }
});

// Created two variables. One named registerForactivities and the othertotalPrice
const registerForactivities = document.getElementById("activities");
const totalPrice = document.getElementById("activities-cost");

// Created a variable named totalCost and set it to 0
let totalCost = 0;

// Created an event listener with the registerForactivities variable to listen for a change
registerForactivities.addEventListener("change", (e) => {
  const evenTarget = e.target;
  const dataCost = evenTarget.getAttribute("data-cost");
  // console.log(typeof dataCost);
  const accuringCost = parseInt(dataCost);
  // console.log(typeof accuringCost);

  if (evenTarget.checked) {
    totalCost += accuringCost;
  } else {
    totalCost -= accuringCost;
  }

  totalPrice.innerHTML = `Total:$${totalCost}`;
});

// Created four variables named formOfpayment, creditCard, payPal, bitCoin
let formOfpayment = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const payPal = document.getElementById("paypal");
const bitCoin = document.getElementById("bitcoin");

// I used the hidden property to hide the payPal and bitCoin field by default
payPal.hidden = true;
bitCoin.hidden = true;

//Created a variable where I grabbed the second child of the form element
let secondChild = formOfpayment.children[1];

// Used the variable secondChild and set it's attribute to true
secondChild.setAttribute("selected", true);

// Created an event listener using the formOfpayment to listen for a change of event
formOfpayment.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    creditCard.style.display = "none";
    payPal.style.display = "block";
    bitCoin.style.display = "none";
  }
  if (e.target.value === "bitcoin") {
    payPal.style.display = "none";
    creditCard.style.display = "none";
    bitCoin.style.display = "block";
  }
  if (e.target.value === "credit-card") {
    bitCoin.style.display = "none";
    creditCard.style.display = " block";
    payPal.style.display = "none";
  }
});

//Programming the Form Validation

// Created variables for the rest of the input fields and for the form element
let emailAddress = document.getElementById("email");
let cardNumber = document.getElementById("cc-num");
let zipCode = document.getElementById("zip");
let cvvCode = document.getElementById("cvv");
let formElement = document.querySelector("form");

// Created validation functions for each variable created
function validationPass(element) {
  element.parentElement.classList.remove("not-valid");
  element.parentElement.classList.add("valid");
  element.parentElement.lastElementChild.style.display = "none";
}
function validationFail(element) {
  element.parentElement.classList.remove("valid");
  element.parentElement.classList.add("not-valid");
  element.parentElement.lastElementChild.style.display = "block";
}

function nameValidator() {
  let nameValue = firstName.value;
  let validName = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
  if (validName === true) {
    validationPass(firstName);
  } else {
    validationFail(firstName);
  }
  return validName;
}

function emailValidator() {
  const emailValue = emailAddress.value;
  const validEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  if (validEmail === true) {
    validationPass(emailAddress);
  } else {
    validationFail(emailAddress);
  }
  return validEmail;
}

function cardValidator() {
  let cardValue = cardNumber.value;
  let validCard = /^\d{13,16}$/.test(cardValue);
  const cvvCodeValue = cvvCode.value;
  const validCvvCode = /^[0-9]{3}$/.test(cvvCodeValue);
  const zipCodeValue = zipCode.value;
  const validZipCode = /(^\d{5}$)| (^\d{5}-\d{4}$)/.test(zipCodeValue);

  if (validCard) {
    validationPass(cardNumber);
  } else {
    validationFail(cardNumber);
  }
  if (validCvvCode) {
    validationPass(cvvCode);
  } else {
    validationFail(cvvCode);
  }
  if (validZipCode) {
    validationPass(zipCode);
  } else {
    validationFail(zipCode);
  }
  return validCard && validCvvCode && validZipCode;
}

function activityValidator() {
  const activitiesValid = totalCost > 0;
  const activitiesFS = document.querySelector("#activities");
  if (activitiesValid === true) {
    activitiesFS.classList.remove("not-valid");
    activitiesFS.classList.add("valid");
    activitiesFS.lastElementChild.style.display = "none";
  } else {
    activitiesFS.classList.remove("valid");
    activitiesFS.classList.add("not-valid");
    activitiesFS.lastElementChild.style.display = "block";
  }
  return activitiesValid;
}

// Created an event listener using the formElement variable to listen for a submission
formElement.addEventListener("submit", (e) => {
  if (!nameValidator()) {
    e.preventDefault();
    // console.log("error");
  }
  if (!emailValidator()) {
    e.preventDefault();
    // console.log("error");
  }
  if (!activityValidator()) {
    e.preventDefault();
    // console.log("error");
  }
  if(formOfpayment.value === 'credit-card'){
    if (!cardValidator()) {
     e.preventDefault();
    // console.log("error");
  }
}
});
// Accessibility

// Created a variable to target the input variable with the type ="checkbox"
let activities = document.querySelectorAll("input[type=checkbox]");


//Used a for loop to loop through each activity 
for (let i = 0; i < activities.length; i++) {
  // Created an event listener to listen for a focus change 
  activities[i].addEventListener("focus", (e) => {
    activities[i].parentElement.classList = "focus";
  });
  // Created an event listener to listen for a blur change 
  activities[i].addEventListener("blur", (e) => {
    activities[i].parentElement.classList.remove("focus");
  });
}


//testing for github