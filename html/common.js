document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('sign');
    
    if (signInBtn) {
        // If user is logged in, change button to their username
        if (localStorage.getItem('isLoggedIn') === 'true') {
            const uname = localStorage.getItem('username') || 'Profile';
            signInBtn.innerText = uname;
            signInBtn.href = 'profile.html';
        }
    }
});
