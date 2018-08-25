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
		<div class="info">
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

			<div class="info__text">
				With us you can
			</div>
			<div class="box-container">

				<div class="box-container__element study">
					<div class="overlay">
						<div class="overlay__text">
							Gain knowledge by getting your code reviewed.
						</div>
					</div>
				</div>

				<div class="box-container__element help">
					<div class="overlay">
						<div class="overlay__text">
							Help someone improve by reviewing his work.
						</div>
					</div>
				</div>

				<div class="box-container__element">
					<div class="overlay">
						<div class="overlay__text">
							Placeholder
						</div>
					</div>
				</div>

				<div class="box-container__element">
					<div class="overlay">
						<div class="overlay__text">
							Placeholder
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		loginPopUp: function() {

			let loginForm = document.getElementById('loginForm');
			let registerForm = document.getElementById('registerForm');
			// closes another form if open
			registerForm.style.display = "none";
			loginForm.style.display = "block";

			window.onclick = function(e){
				if(e.target == loginForm)
					loginForm.style.display = "none";
			}
		},
		registerPopUp: function() {
			let loginForm = document.getElementById('loginForm');
			let registerForm = document.getElementById('registerForm');
			loginForm.style.display = "none";
			registerForm.style.display = "block";

			window.onclick = function(e){
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

.info{
	background-color: $darkGrey;
	color: $white;
	padding-bottom: 150px;
}
.info__text{
	padding: 100px 0 50px 0;
	text-align: center;
	font-size: 55px;
}
.overlay{
	position: absolute;
	background-color: $yellow;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: .5s ease;
	display: table;
}
.overlay__text{
	color: #000;
	text-align: center;
	font-size: 20px;
	display: table-cell;
    vertical-align: middle;
}
.box-container{
	padding-top: 30px;
 	margin: 0 auto;
 	display: table;
}
.box-container__element{
	position: relative;
	width: 300px;
	height: 300px;
	text-align: center;
	margin: 20px;
	float: left;
	cursor: pointer;
	box-shadow: 0px 0px 50px #000;

	&:hover{
		.overlay{ opacity: .8; }
	}
}
.mdl-layout__header{ position: sticky; top: 0px; }
.mdl-layout__header-row{ padding-left: 40px; }
.study{ background: url('../assets/images/study.jpg') no-repeat; background-size: cover; }
.help{ background: url('../assets/images/help.jpg') no-repeat; background-size: cover; background-position: -100px; }


// LOGIN AND REGISTER FORMS
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


// SCROLLBAR
::-webkit-scrollbar{
	width: 10px;

	&-thumb{ background: $yellow; }
	&-track{ background: #151515; }
}


// SMARTPHONES

@media screen and (orientation:landscape) and (max-width: 599px) {
	.register-container__form, .login-container__form{ top: 20px; }
}

@media only screen and (max-width: 320px) {
	.box-container__element{
		width: 250px;
		height: 250px;
		margin: 20px;
		left: calc(50% - 145px);
	}
	.register-container__form, .login-container__form{
		width: 250px;
		padding: 20px;
	}
	.register-container__form{ top: 5px; }
	.info__text{ font-size: 25px; }
	.mdl-layout__header-row{ padding-left: 15px; }
}

@media only screen and (min-width: 321px) and (max-width: 599px) {
	.box-container__element{
		width: 250px;
		height: 250px;
		margin: 20px;
		left: calc(50% - 145px);
	}
	.info__text{ font-size: 35px; }
}

// TABLETS
@media only screen and (min-width: 600px) and (max-width: 767px) {
	.box-container__element{
		width: 230px;
		height: 230px;
		margin: 20px;
		left: calc(50% - 270px);
	}
	.info__text{ font-size: 40px; }
}

// PC
@media only screen and (min-width: 768px) and (max-width: 999px) {
	.box-container__element{
		width: 170px;
		height: 170px;
		margin: 10px;
	}
	.help{ background-position: -80px; }
}

@media only screen and (min-width: 1000px) and (max-width: 1400px) {
	.box-container__element{
		width: 200px;
		height: 200px;
	}
}
</style>