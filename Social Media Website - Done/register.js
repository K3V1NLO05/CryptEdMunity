const registerForm = document.getElementById('register-form');
const errorBox = document.getElementById('error-msg');

registerForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;

	// Here you can add the code to check if the input fields are valid
	// and register the user or display an error message in the errorBox
});
