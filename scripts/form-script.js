// By validating through JavaScript, the "required" attributes are no longer needed.

function validateFirstName() {
    var firstName = document.getElementById("firstNameInput").value;
    
    if (firstName == "") {
        return false;
    }
    document.getElementById("firstNameOutput").innerHTML = "";
    return true;
}

function validateLastName() {
    var lastName = document.getElementById("lastNameInput").value;
    
    if (lastName == "") {
        return false;
    }
    document.getElementById("lastNameOutput").innerHTML = "";
    return true;
}

// Pattern: any non-whitespace followed by an @, follower by any non-whitespace, followed by a dot, followed by any non-whitespace.
function validateEmail() {
    var validateEmail = document.getElementById("emailInput").value;
    var expectedEmail = /^[^\s]+@[^\s]+\.[^\s]+$/;
    
    if (validateEmail == "") {
        document.getElementById("emailOutput").innerHTML = "";
        return false;
    } else if (!expectedEmail.test(validateEmail)) {
        document.getElementById("emailOutput").innerHTML = "Invalid e-mail format.";
        return false;
    }
    document.getElementById("emailOutput").innerHTML = "";
    return true;
}

// Pattern: Any alphanumeric characters or @$!%*?&. Minimum of 5 and maximum of 25. No more, no less.
function validateUsername() {
    var username = document.getElementById("usernameInput").value;
    var expectedUsername = /^[a-zA-Z0-9@$!%*?&]{5,25}$/;
    
    if (username == "") {
        document.getElementById("usernameOutput").innerHTML = "";
        return false;
    } else if (!expectedUsername.test(username)) {
        document.getElementById("usernameOutput").innerHTML = "The username be between 5 and 25 letters and can't have any whitespace.";
        return false;
    }
    document.getElementById("usernameOutput").innerHTML = "";
    return true;
}

/* Pattern:
    (?=.*\d): Looks ahead for any characters (0 to infinity amounts) followed by a single digit (0-9). In other words, looks for at least one digit in the string; 
    Goes back to the beginning of the string;
    (?=.*[a-z]): Looks ahead for any characters (0 to infinity amounts) followed by a single low-case letter. In other words, looks for at least one low-case letter in the string;
    Goes back to the beginning of the string;
    (?=.*[A-Z]): Looks ahead for any characters (0 to infinity amounts) followed by a single upper-case letter. In other words, looks for at least one upper-case letter in the string;
    Goes back to the beginning of the string;
    (?=.*[@$!%*?&]): Looks ahead for any characters (0 to infinity amounts) followed by a special character. In other words, looks for at least one special character in the string;
    Goes back to the beginning of the string; and
    [\da-zA-Z@$!%*?&]{8,32}: Consumes the string by searching for the conditions of the look-aheads. If their conditions are met AND if the string is in the range (5, 32), it returns the match.
*/
function validatePassword() {
    var password = document.getElementById("passwordInput").value;
    var expectedPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[\da-zA-Z@$!%*?&]{8,32}$/;

    if (password == "") {
        document.getElementById("passwordOutput").innerHTML = "";
        return false;
    } else if (!expectedPassword.test(password)) {
        document.getElementById("passwordOutput").innerHTML = "The password must contain at least a lowercase letter, an uppercase letter, a number, a special character, minimum of 8 characters, and maximum of 32 characters.";
        return false;
    }
    document.getElementById("passwordOutput").innerHTML = "";
    return true;
}

function validateRepeatedPassword() {
    var repeatedPassword = document.getElementById("repeatedPasswordInput").value;
    var password = document.getElementById("passwordInput").value;

    if (password == "" || repeatedPassword == "") {
        document.getElementById("repeatedPasswordOutput").innerHTML = "";
        return false;
    } else if (password != repeatedPassword) {
        document.getElementById("repeatedPasswordOutput").innerHTML = "The passwords do not match.";
        return false;
    }
    document.getElementById("repeatedPasswordOutput").innerHTML = "";
    return true;
}

// Toggles the show/hide eye icon in the password input field and toggles the input type so that the user can see what they've typed.
function toggleShowPassword() {
    if (document.getElementById("passwordInput").type == "password") {
        document.getElementById("passwordInput").type = "text";
        document.getElementById("repeatedPasswordInput").type = "text";
        document.getElementById("showPasswordImg").src = "https://img.icons8.com/nolan/64/eye-checked.png"
        return true
    }
    document.getElementById("passwordInput").type = "password";
    document.getElementById("repeatedPasswordInput").type = "password";
    document.getElementById("showPasswordImg").src = "https://img.icons8.com/nolan/64/eye-unchecked.png"
    return true
}

// Changes the input button type to reset (to simulate a submit) and toggles its class to the one that has hover enabled if all inputs are valid.
function validateForm() {
    if (!validateFirstName() || !validateLastName() || !validateEmail() || !validateUsername() || !validatePassword() || !validateRepeatedPassword()) {
        document.getElementById("submitButton").className = "mainFormButtonHoverDisabled";
        document.getElementById("submitButton").type = "button";
        return false;
    }
    document.getElementById("submitButton").className = "mainFormButtonHoverEnabled";
    document.getElementById("submitButton").type = "reset";
    return true;
}
