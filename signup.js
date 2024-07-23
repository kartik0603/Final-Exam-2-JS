document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('sign-up-form');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;
        
        console.log('Form submitted', { username, password, role });

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = { username, password, role, id: Date.now() };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Redirect to login page after successful sign up
        window.location.href = 'login.html';
    });
});
