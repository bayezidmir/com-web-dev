document.getElementById("login-submit").addEventListener("click", function () {
  // get user email
  const userEmail = document.getElementById("user-email").value;
  // get user Password
  const userPassword = document.getElementById("user-password").value;

  // validation- check email and password
  if (userEmail == "sontan@baap.com" && userPassword == "123456") {
    window.location.href = "banking.html";
  }
});
