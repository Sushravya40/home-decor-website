document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('sign');
    
    if (signInBtn) {
        // If user is logged in
        if (localStorage.getItem('isLoggedIn') === 'true') {
            const uname = localStorage.getItem('username') || 'User';
            
            // 1. Create a Profile link with their username
            const profileLink = document.createElement('a');
            profileLink.className = 'divv';
            profileLink.href = 'profile.html';
            profileLink.innerText = 'Hi, ' + uname;
            
            // Insert the Profile link right before the Sign In button
            signInBtn.parentNode.insertBefore(profileLink, signInBtn);
            
            // 2. Change the actual Sign In button to Sign Out
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
