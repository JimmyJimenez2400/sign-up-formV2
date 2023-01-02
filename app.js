const spanShowMessage = document.querySelector('.displayMessagePwdMatch');
const submitButton = document.querySelector('.submitBtn');

const password = document.querySelector('.pwd');

password.addEventListener('input', checkPasswordStrength);

submitButton.addEventListener('click', checkPasswordMatch);


function checkPasswordStrength(e) {
    let password = e.target.value;

    let strength = 0;
    let tips = "";
    if (password.length < 8) {
        tips += "Make the password longer. \r\n";
        spanShowMessage.textContent = tips;
    } else {
        strength += 1;
    }

    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
        strength += 1;
    } else {
        tips += "Use both lowercase and uppercase letters. \r\n";
        spanShowMessage.textContent = tips;
    }

    // Check for numbers
    if (password.match(/\d/)) {
        strength += 1;
    } else {
        tips += "Include at least one number. \r\n";
        spanShowMessage.textContent = tips;
    }

    // Check for special characters
    if (password.match(/[^a-zA-Z\d]/)) {
        strength += 1;
    } else {
        tips += "Include at least one special character. \r\n";
        spanShowMessage.textContent = tips;
    }
    if (strength < 2) {
        return spanShowMessage.textContent = `Easy to guess. ${tips} \r\n`
    } else if (strength === 2) {
        return spanShowMessage.textContent = `Medium difficulty. ${tips} \r\n` 
    } else if (strength === 3) {
        return spanShowMessage.textContent = `Difficult. ${tips} \r\n`;
    } else {
        return spanShowMessage.textContent = `Now this is a password that is hard to guess! ${tips}`;
    }
}

function checkPasswordMatch(event) {
    const password = document.querySelector('.pwd').value;
    const confirmPassword = document.querySelector('.confirmPwd').value;

    if (password === confirmPassword) {
        return;
    } else {
        spanShowMessage.className = "notMatchPassword";
        spanShowMessage.textContent = "Password's Do Not Match";
        event.preventDefault();
    }
    console.log(password);
    console.log(confirmPassword);
}