document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Set your own credentials
    let validUsername = "admin";
    let validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        window.location.href = "resume.html"; // Redirect to resume page
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
});
