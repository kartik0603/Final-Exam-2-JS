document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        if (currentUser.role === 'admin') {
            window.location.href = 'dashboard.html';
        } else {
            window.location.href = 'home.html';
        }
    }
});
