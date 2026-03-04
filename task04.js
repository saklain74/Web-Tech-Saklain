let count = 0;

function checkForm() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let msg = "";

    if (email.indexOf("@") === -1) {
        msg = "Email must have @";
    }
    else if (pass.length < 6) {
        msg = "Password must be 6 characters";
    }
    else if (pass.indexOf("#") === -1) {
        msg = "Password must have #";
    }

    if (msg !== "") {
        count++;
        document.getElementById("error").innerHTML = msg;
        document.getElementById("count").innerHTML = count;
        return false;
    }

    alert("Login Successful");
    return true;
}