const loginForm = document.getElementById('login-form');
const errorBox = document.getElementById('error-msg');

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Here you can add the code to check if the credentials are valid
	// and redirect the user to the home page
	// or display an error message in the errorBox
});