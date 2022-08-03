/* EN - Checks username and password input. After that activate and deactivate the login button and change your background. */
const user = document.querySelector('#user');
const password = document.querySelector('#password');

password.addEventListener('keyup', verify);
user.addEventListener('keyup', verify);

function verify() {
    const logIn = document.querySelector('#login');

    if (user.value.length > 1 && password.value.length > 5) {
        logIn.disabled = false;
        logIn.style.background = '#0095f6';
        logIn.style.cursor = "pointer";
    } else {
        logIn.disabled = true;
        logIn.style.background = '#b2dffb';
        logIn.style.transition = '0.5s'
        logIn.style.cursor = "default";
    }
}

/* EN - Checks if the user has typed any value in the password entry and with that shows the password preview button. */
const passwordView = document.querySelector(".password-view");

passwordView.addEventListener("click", () => {
    const passwordShow = document.querySelector(".password-show");
    const passwordHide = document.querySelector(".password-hide");

    if (password.type === "password") {
        password.type = "text";
        passwordShow.style.display = "none";
        passwordHide.style.display = "block";
    } else {
        password.type = "password";
        passwordShow.style.display = "block";
        passwordHide.style.display = "none";
    }
});