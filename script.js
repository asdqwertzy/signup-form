function validatePassword() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmpw");
    var passwordErrorMessage = document.querySelector(".error-message");
    
    if (password.value !== confirmPassword.value) {
        password.classList.add("pwerror");
        confirmPassword.classList.add("pwerror");
        passwordErrorMessage.style.display = "block";
        return false;
    } else {
        password.classList.remove("pwerror");
        confirmPassword.classList.remove("pwerror");
        passwordErrorMessage.style.display = "none";
        return true;
    }
}