function register() {
  const userType = document.querySelector('input[name="userType"]:checked');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  
  message.innerText = '';

  if (!userType) {
      message.innerText = 'Please select a user type 😊';
      return;
  }

  if (!name) {
      message.innerText = `Please enter your name 😊`;
      return;
  }

  if (!email) {
      message.innerText = 'Please enter your email 😊';
      return;
  }

  if (!email.includes('@gmail.com')) {
    message.innerText = 'Missing @...😊';
    return;
}

  if (!password) {
      message.innerText = 'Please enter your password 😊';
      return;
  }

  if (!/[!@#$%^&*()_+\-={}\[\]:;"'<>,.?/\\|0-9]/.test(password)) {
    message.innerText = 'Password must contain at least one special character or digit 😊';
    return;
}  
  message.innerText = 'Registration successful! 🎉🎉🎉';
}

