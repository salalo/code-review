<template>
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<!-- Title -->
				<span class="mdl-layout-title">Code-Review</span>
				<!-- Add spacer, to align navigation to the right -->
				<div class="mdl-layout-spacer"></div>
				<nav class="mdl-navigation">
					<a class="mdl-navigation__link" href="" v-on:click.prevent="loginPopUp()">Log In</a>
					<a class="mdl-navigation__link" href="" v-on:click.prevent="registerPopUp()">Sign In</a>
				</nav>
			</div>
		</header>

		<!-- LOGIN POPUP FORM -->
		<div id="loginForm" class="login-container">
			<div class="login-container__form">
				<form action="#">
					<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					    <input class="mdl-textfield__input" type="text">
					    <label class="mdl-textfield__label">Email</label>
					</div>
				</form>

				<form action="#">
					<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					    <input class="mdl-textfield__input" type="password">
					    <label class="mdl-textfield__label">Password</label>
					</div>
				</form>

				<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
					LOGIN
				</button>

				<div class="register-link">
					Not registered? <a href="" v-on:click.prevent="registerPopUp()">Create an account</a>
				</div>
			</div>
		</div>

			<!-- REGISTER POPUP FORM -->
		<div id="registerForm" class="register-container">
			<div class="register-container__form">
				<form action="#">
					<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						<input class="mdl-textfield__input" type="text">
					    <label class="mdl-textfield__label">Email</label>
					</div>
				</form>

				<form action="#">
					<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					    <input class="mdl-textfield__input" type="text">
					    <label class="mdl-textfield__label">Nick or name</label>
					</div>
				</form>

				<form action="#">
					<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					    <input class="mdl-textfield__input" type="password">
					    <label class="mdl-textfield__label">Password</label>
					</div>
				</form>

				<form action="#">
					<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					    <input class="mdl-textfield__input" type="password">
					    <label class="mdl-textfield__label">Repeat password</label>
					</div>
				</form>

				<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
					REGISTER
				</button>

				<div class="login-link">
					Already registered? <a href="" v-on:click.prevent="loginPopUp()">Login to your account!</a>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		methods: {
			loginPopUp: () => {
				let loginForm = document.getElementById('loginForm');
				let registerForm = document.getElementById('registerForm');
				// closes another form if open
				registerForm.style.display = "none";
				loginForm.style.display = "block";

				window.onclick = (e) => {
					if(e.target == loginForm)
						loginForm.style.display = "none";
				}
			},
			registerPopUp: () => {
				let loginForm = document.getElementById('loginForm');
				let registerForm = document.getElementById('registerForm');
				loginForm.style.display = "none";
				registerForm.style.display = "block";

				window.onclick = (e) => {
					if(e.target == registerForm)
						registerForm.style.display = "none";
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	
$white: #fafafa;
$yellow: rgb(255,152,0);
$lightGrey: rgb(99, 98, 98);
$grey: rgb(66,66,66);
$darkGrey: #202124;
$blue: rgb(68,138,255);

.register-container, .login-container{
	overflow-y: scroll;
	display: none;
	z-index: 1;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.7);
	color: black;
}
.register-container__form, .login-container__form{
	background-color: $white;
	width: 300px;
	margin: 0 auto;
	position: relative;
	top: 20%;
	padding: 30px;
	box-shadow: 0px 0px 50px #000;

	button{ width: 100%; }
	form { margin-bottom: 10px; }
}
.login-link, .register-link{
	color: $lightGrey;
	margin-top: 20px;
	text-align: center;

	a{
		color: $yellow;
		text-decoration: none;
		font-weight: normal;
	}
}
.mdl-layout__header{ position: fixed; top: 0px; }
.mdl-layout__header-row{ padding-left: 40px; }

// SMARTPHONES
@media screen and (orientation:landscape) and (max-width: 599px) {
	.register-container__form, .login-container__form{ top: 20px; }
}
@media only screen and (max-width: 320px) {
	.register-container__form, .login-container__form{
		width: 250px;
		padding: 20px;
	}
	.register-container__form{ top: 5px; }
	.mdl-layout__header-row{ padding-left: 15px; }
}
</style>