var callButton = document.querySelector(".call-button");
callButton.addEventListener("click", getClientInfo);

function getClientInfo() {
  prompt("Hello! Please, enter your phone number:");
}
