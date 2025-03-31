document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let validUsername = "admin";
    let validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("weather-container").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
});
