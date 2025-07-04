const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        errorMsg.textContent = 'Please fill in both username and password.';
    } else {
        errorMsg.textContent = '';
        // Redirect to welcome page
        window.location.href = 'welcome.html';
    }
});
