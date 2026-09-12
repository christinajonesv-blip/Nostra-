// ---------------------------------------------------------
// Nostra – contact.html page logic
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // No backend wired up yet — this just confirms receipt in the UI.
    success.classList.remove("hidden");
    form.reset();
    showToast("Message sent");
  });
});