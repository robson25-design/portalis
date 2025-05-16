document.getElementById("signInForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const company = document.getElementById("company").value.trim();
  const keyNumber = document.getElementById("keyNumber").value.trim();

  if (!fullName || !phone || !company) {
    showMessage("Please complete all required fields.", true);
    return;
  }

  // Simulate sending data (here you could add Firebase later)
  console.log("Sign-in data:", {
    fullName,
    phone,
    company,
    keyNumber
  });

  showMessage("Visitor signed in successfully!");

  this.reset(); // clear the form
});

function showMessage(msg, isError = false) {
  const confirmation = document.getElementById("confirmationMsg");
  confirmation.textContent = msg;
  confirmation.style.color = isError ? "#e74c3c" : "#27ae60";

  setTimeout(() => {
    confirmation.textContent = "";
  }, 4000);
}
