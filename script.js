function openLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function fakeSubmit() {
  alert("⚠️ Server busy! Please try again later.");
  document.getElementById("loginBox").style.display = "none";
}
