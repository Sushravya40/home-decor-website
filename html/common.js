document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('sign');
    
    if (signInBtn) {
        // If user is logged in, change button to Sign Out
        if (localStorage.getItem('isLoggedIn') === 'true') {
            signInBtn.innerText = 'Sign Out';
            signInBtn.href = '#';
            signInBtn.onclick = (e) => {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                window.location.reload();
            };
        }
    }
});
