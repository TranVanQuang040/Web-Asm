function check(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("pwd");

    if (!emailInput || !passwordInput) {
        console.error("Email or Password input not found!");
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert(" Please enter both email and password.");
        return;
    }

    const user = JSON.parse(localStorage.getItem(email));

    if (!user || atob(user.password) !== password) {
        alert(" Invalid email or password.");
        return;
    }

    alert(" Login successful!");
    window.location.href = "Showroom.html"; 
}
