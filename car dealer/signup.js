document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.getElementById("signupButton");

    if (!signupButton) return;

    signupButton.addEventListener("click", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        if (!emailInput || !passwordInput) {
            console.error("Email or Password input not found!");
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert(" Please fill in all fields.");
            return;
        }

        if (!validateGmail(email)) {
            alert(" Please enter a valid Gmail address.");
            return;
        }

        if (!validatePassword(password)) {
            alert(" Password must be at least 8 characters, including uppercase, lowercase, and a number.");
            return;
        }

        if (userExists(email)) {
            alert(" This email is already registered. Please log in.");
            return;
        }

        saveUser(email, password);
        alert("Registration successful! Redirecting to login page...");

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    });

    function validateGmail(email) {
        return /^[^\s@]+@gmail\.com$/.test(email);
    }

    function validatePassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    }

    function userExists(email) {
        return localStorage.getItem(email) !== null;
    }

    function saveUser(email, password) {
        const hashedPassword = btoa(password);
        localStorage.setItem(email, JSON.stringify({ password: hashedPassword }));
    }
});
