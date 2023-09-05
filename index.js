const passwordInput = document.querySelector("#input_password");
const confirmPassword = document.querySelector("#confirm_password");
const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submit");

const checkPassword = () => {
  const matchError = document.querySelector(".match_error");

  if (passwordInput.value === "" || confirmPassword.value === "") {
    passwordInput.classList.add("error");
    confirmPassword.classList.add("error");
  } else if (passwordInput.value !== confirmPassword.value) {
    confirmPassword.classList.add("error");
    matchError.style.display = "block";
  } else {
    passwordInput.classList.remove("error");
    confirmPassword.classList.remove("error");
  }
};

const validate = () => {
  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });
};

submitBtn.addEventListener("click", validate);
passwordInput.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword);
