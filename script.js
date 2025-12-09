function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "ELLA" && pass === "DUMAGUINLANI23.") {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Invalid username or password!";
    }
}

function logout() {
    window.location.href = "index.html";
}
