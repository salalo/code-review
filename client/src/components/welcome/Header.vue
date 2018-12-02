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
		<login-form/>
		<!-- REGISTER POPUP FORM -->
		<register-form/>
	</div>
</template>

<script>

import Login from './Login.vue'
import Register from './Register.vue'

export default {
	components: {
		'login-form': Login,
		'register-form': Register
	},

	methods: {
		loginPopUp: () => {
			let loginForm = document.getElementById('loginForm');
			let registerForm = document.getElementById('registerForm');
			// closes another form if open
			registerForm.style.display = "none";
			loginForm.style.display = "block";

			window.onclick = e => {
				if(e.target == loginForm)
					loginForm.style.display = "none";
			}
		},

		registerPopUp: () => {
			let loginForm = document.getElementById('loginForm');
			let registerForm = document.getElementById('registerForm');
			loginForm.style.display = "none";
			registerForm.style.display = "block";

			window.onclick = e => {
				if(e.target == registerForm)
					registerForm.style.display = "none";
			}
		}
	}
}
</script>