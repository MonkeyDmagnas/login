i// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to the server

    // Clear any previous error messages
    document.getElementById("errorMessage").textContent = "";

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for empty fields
    if (!username || !password) {
        document.getElementById("errorMessage").textContent = "Both fields are required.";
        return;
    }

    // Simulating a login process
    const validUser = "user";
    const validPassword = "password123";

    if (username === validUser && password === validPassword) {
        alert("Login successful!");
        window.location.href = "/dashboard";  // Redirect to the dashboard (or any page)
    } else {
        document.getElementById("errorMessage").textContent = "Invalid credentials. Please try again.";
    }
});

