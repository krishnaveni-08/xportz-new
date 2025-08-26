document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const state = document.getElementById("state");
  const address = document.getElementById("address");

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const addressError = document.getElementById("addressError");
  const stateError = document.getElementById("stateError");

  const orderBtn = document.getElementById("orderBtn");
  const orderPopup = document.getElementById("orderPopup");
  const closePopup = document.getElementById("closePopup");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[6789][0-9]{9}$/;
  const namePattern = /^[A-Za-z]+$/;
  const statePattern = /^[A-Za-z\s]+$/;
  const addressPattern = /^(?=.*[A-Za-z])[A-Za-z0-9\s,.-]+$/;

  // Email live validation
  emailInput.addEventListener("input", function () {
    if (emailPattern.test(emailInput.value)) {
      emailInput.style.border = "2px solid green";
      emailError.style.display = "none";
    } else {
      emailInput.style.border = "2px solid red";
      emailError.style.display = "block";
    }
  });

  // Phone live validation
  phoneInput.addEventListener("input", function () {
    if (phonePattern.test(phoneInput.value)) {
      phoneInput.style.border = "2px solid green";
      phoneError.style.display = "none";
    } else {
        phoneInput.style.border = "2px solid red";
        phoneError.style.display = "block";
    }
});

// First Name live validation
firstName.addEventListener("input", function () {
    if (namePattern.test(firstName.value)) {
        firstName.style.border = "2px solid green";
        firstNameError.style.display = "none";
    } else {
        firstName.style.border = "2px solid red";
        firstNameError.style.display = "block";
    }
});


// Last Name live validation
lastName.addEventListener("input", function () {
    if (namePattern.test(lastName.value)) {
        lastName.style.border = "2px solid green";
        lastNameError.style.display = "none";
    } else {
        lastName.style.border = "2px solid red";
        lastNameError.style.display = "block";
    }
});

// State live validation
// state.addEventListener("input", function () {
//     if (statePattern.test(state.value)) {
//         state.style.border = "2px solid green";
//     } else {
//         state.style.border = "2px solid red";
//     }
// });
state.addEventListener("input", function () {
    if (statePattern.test(state.value)) {
        state.style.border = "2px solid green";
        stateError.style.display = "none";
    } else {
        state.style.border = "2px solid red";
        stateError.style.display = "block";
    }
  });

// Address live validation
address.addEventListener("input", function () {
    if (addressPattern.test(address.value)) {
        address.style.border = "2px solid green";
        addressError.style.display = "none";
    } else {
        address.style.border = "2px solid red";
        addressError.style.display = "block";
    }
  });

  // Order button click
  orderBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let isValid = true;

    // Email check
    if (!emailPattern.test(emailInput.value)) {
      emailInput.style.border = "2px solid red";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailInput.style.border = "2px solid green";
      emailError.style.display = "none";
    }

    // Phone check
    if (!phonePattern.test(phoneInput.value)) {
      phoneInput.style.border = "2px solid red";
      phoneError.style.display = "block";
      isValid = false;
    } else {
        phoneInput.style.border = "2px solid green";
        phoneError.style.display = "none";
    }
    
    // First name check
    if (!namePattern.test(firstName.value)) {
        firstName.style.border = "2px solid red";
        firstNameError.style.display = "block";
        isValid = false;
    } else {
        firstName.style.border = "2px solid green";
        firstNameError.style.display = "none";
    }
    
    // Last name check
    if (!namePattern.test(lastName.value)) {
        lastName.style.border = "2px solid red";
        lastNameError.style.display = "block";
        isValid = false;
    } else {
        lastName.style.border = "2px solid green";
        lastNameError.style.display = "none";
    }



    // State check
    // if (!statePattern.test(state.value)) {
    //     state.style.border = "2px solid red";
    //     isValid = false;
    // } else {
    //     state.style.border = "2px solid green";
    // }
    
    if (!statePattern.test(state.value)) {
        state.style.border = "2px solid red";
        stateError.style.display = "block";
        isValid = false;
    } else {
        state.style.border = "2px solid green";
        stateError.style.display = "block";
    }


    // Address check
    if (!addressPattern.test(address.value)) {
        address.style.border = "2px solid red";
        addressError.style.display = "block";
        isValid = false;
    } else {
        address.style.border = "2px solid green";
        addressError.style.display = "block";
    }



    // Final validation
    if (isValid) {
      orderPopup.style.display = "flex";
    } else {
      alert("❌ Please fill all fields correctly");
    }
  });

  // Close popup
  closePopup.addEventListener("click", function () {
    orderPopup.style.display = "none";
    document.querySelectorAll("input, select").forEach((el) => {
      el.value = "";
      el.style.border = "";
    });
  });
});
