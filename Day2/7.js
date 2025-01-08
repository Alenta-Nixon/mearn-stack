document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const progress = document.querySelector('.progress');
    
    let strength = 0;

    if (/(?=.*[a-z])/.test(password)) strength++; // Lowercase
    if (/(?=.*[A-Z])/.test(password)) strength++; // Uppercase
    if (/(?=.*\d)/.test(password)) strength++; // Number
    if (/(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) strength++; // Special char & length

    progress.style.width = (strength * 25) + '%';

    if (strength === 4) {
        progress.style.backgroundColor = 'green';
        progress.style.transition = 'width 0.5s ease';
        this.setCustomValidity('');
    } else {
        progress.style.backgroundColor = 'orange';
        this.setCustomValidity('Password must include uppercase, lowercase, number, and special character.');
        this.reportValidity();
        this.style.borderColor = 'red';
        setTimeout(() => { this.style.borderColor = ''; }, 3000); // Animation effect
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('password').value;

    if (this.value === password) {
        this.setCustomValidity('');
        this.style.borderColor = 'green';
        this.reportValidity();
        
        // Reset error animation
        setTimeout(() => { this.style.borderColor = ''; }, 3000);
        
    } else {
        this.setCustomValidity('Passwords do not match');
        this.style.borderColor = 'red';
        this.reportValidity();
        
        // Animation effect
        setTimeout(() => { this.style.borderColor = ''; }, 3000);
        
        // Optional feedback to user
        alert('Passwords do not match');
        
        // Set progress bar to zero when passwords do not match
        document.querySelector('.progress').style.width = '0';
        
        // Reset password field border color
        document.getElementById('password').style.borderColor = '';
        
        // Reset password field value
        document.getElementById('password').value = '';
        
        // Focus on password field again
        document.getElementById('password').focus();
        
       
   }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
   const email = document.getElementById('email').value;

   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
       alert('Invalid email format');
       event.preventDefault();
   }
});
