<template>
		<form id="loginForm" class="login-container" action="" method="post">
			<div class="login-container__form">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" name="email" type="text">
          <label class="mdl-textfield__label">Email</label>
        </div>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        	<input class="mdl-textfield__input" name="password" type="password">
        	<label class="mdl-textfield__label">Password</label>
        </div>

				<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
                type="submit"
        >
					LOGIN
				</button>

				<div class="register-link">
					Not registered? <a href="" v-on:click.prevent="registerPopUp()">Create an account</a>
				</div>
			</div>
		</form>
</template>

<script>
export default {
	methods: {
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

<style lang="scss">
	@import '../../stylesheets/loginRegisterForms.scss';
</style>
