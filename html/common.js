document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('sign');
    
    if (signInBtn) {
        // If user is logged in, change button to Profile
        if (localStorage.getItem('isLoggedIn') === 'true') {
            signInBtn.innerText = 'Profile';
            signInBtn.href = 'profile.html';
        }
    }
});
