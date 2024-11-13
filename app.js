const password = document.getElementById("password");
const eyeIcon = document.getElementById("eye-icon");
const message = document.getElementById("message");

eyeIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.src = "./images/eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "./images/eye-close.png";
  }
});

password.addEventListener("input", () => {
  if (password.value === "") {
    message.style.display = "none";
    message.style.color = "#fff";
    password.style.borderColor = "#ccc";

    return;
  }

  let score = 0;

  let hasUpperCase = /[A-Z]/.test(password.value);
  let hasLowerCase = /[a-z]/.test(password.value);
  let hasNumber = /\d/.test(password.value);
  let hasSpecialCharacter = /[!@#$%^&*()\-_=+{}\[\]\\|;:'",.<>/?]/.test(
    password.value
  );

  if (hasUpperCase) score++;
  if (hasLowerCase) score++;
  if (hasNumber) score++;
  if (hasSpecialCharacter) score++;

  message.style.display = "block";

  if (password.value.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    password.style.borderColor = "red";
    message.style.color = "red";
  } else if (score < 3) {
    message.textContent = "Password is weak";
    password.style.borderColor = "red";
    message.style.color = "red";
  } else if (score === 3) {
    message.textContent = "Password is medium";
    password.style.borderColor = "orange";
    message.style.color = "orange";
  } else {
    message.textContent = "Password is Strong";
    password.style.borderColor = "green";
    message.style.color = "green";
  }
});
