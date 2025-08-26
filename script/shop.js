
  const submitBtn = document.querySelector("button[type='submit']");
  const emailInput = document.getElementById("emailInput");
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popupText");

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email) {
      popupText.innerText = `Thank you! ${email} has been subscribed.`;
      popup.style.display = "flex";
    } else {
      popupText.innerText = "Please enter a valid email address.";
      popup.style.display = "flex";
    }
  });

  function closePopup() {
    popup.style.display = "none";
    emailInput.value = ""; 
  }
