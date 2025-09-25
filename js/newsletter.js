document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("emailInput");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
      emailInput.classList.add("invalid");
      return;
    }

    emailInput.classList.remove("invalid");

    alert("Obrigado por assinar nossa newsletter!");

    form.reset();
  });

  emailInput.addEventListener("input", () => {
    if (emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.remove("invalid");
    }
  });
});
