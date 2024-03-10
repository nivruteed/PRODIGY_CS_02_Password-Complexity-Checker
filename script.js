document.addEventListener("DOMContentLoaded", function () {
    var pass = document.getElementById("password");
    var msg = document.getElementById("message");
    var str = document.getElementById("strength");
    var toggleButton = document.querySelector(".input-box button");

    function togglePasswordVisibility() {
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    }

    toggleButton.addEventListener("click", togglePasswordVisibility);


    pass.addEventListener("input", () => {
        var password = pass.value;

        if (password.length > 0) {
            msg.style.display = "block";
        } else {
            msg.style.display = "none";
        }

        var hasUpperCase = /[A-Z]/.test(password);
        var hasLowerCase = /[a-z]/.test(password);
        var hasNumbers = /\d/.test(password);
        var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChars) {
            str.innerHTML = "Weak";
            pass.style.borderColor = "#ff5925";
            msg.style.color = "#ff5925";
        } else if (password.length < 12 || (!hasSpecialChars && !hasNumbers)) {
            str.innerHTML = "Medium";
            pass.style.borderColor = "yellow";
            msg.style.color = "yellow";
        } else {
            str.innerHTML = "Strong";
            pass.style.borderColor = "green";
            msg.style.color = "green";
        }
    });
});
