var btn = document.getElementById("loginBtn");
var usernameBox = document.getElementById("username");

btn.addEventListener("click", function () {
    if (username.value !== "" && password.value !== "") {
        console.log(username.value)
    } else {
        // console.error("You need to enter a value.");
        alert("You need to enter a value.");
    }
});

var form = document.getElementById("login");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var datoEmail = document.getElementById("numberOrEmail");
    var fullName = document.getElementById("fullName");

    var errorUsername = document.querySelector(".username-error");
    var errorPassword = document.querySelector(".password-error");
    var errorDatoEmail = document.querySelector(".datoEmail-error");
    var errorfullName = document.querySelector(".fullname-error");

    if (fullName.value === "") {
        fullName.style.borderColor = "red";
        errorfullName.style.display = "block";
    } else {
        fullName.style.borderColor = "transparent";
        errorfullName.style.display = "none";
    }

    if (datoEmail.value === "") {
        datoEmail.style.borderColor = "red";
        errorDatoEmail.style.display = "block";
    } else {
        datoEmail.style.borderColor = "transparent";
        errorDatoEmail.style.display = "none";
    }

    if (username.value === "") {
        username.style.borderColor = "red";
        errorUsername.style.display = "block";
    } else {
        username.style.borderColor = "transparent";
        errorUsername.style.display = "none";
    }

    if (password.value === "") {
        password.style.borderColor = "red";
        errorPassword.style.display = "block";
    } else {
        password.style.borderColor = "transparent";
        errorPassword.style.display = "none";
    }

    console.log({
        User: username.value,
        Pass: password.value,
        Dato: datoEmail.value,
        Nam: fullName.value
    })
});