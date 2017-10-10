var callButton = document.querySelector(".call-button");
callButton.addEventListener("click", getClientPhoneNumber);

function getClientPhoneNumber() {
  prompt("Hello! Please, enter your phone number:");
  alert("Thank you!");
}
