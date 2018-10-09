<template>
		<form id="registerForm" class="register-container" action="" method="post">
			<div class="register-container__form">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" name="email" type="text">
          <label class="mdl-textfield__label">Email</label>
        </div>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" name="nick" type="text">
          <label class="mdl-textfield__label">Nick or name</label>
        </div>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" name="password" type="password">
          <label class="mdl-textfield__label">Password</label>
        </div>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="password">
          <label class="mdl-textfield__label">Repeat password</label>
        </div>

				<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
                type="submit"
        >
					REGISTER
				</button>

				<div class="login-link">
					Already registered? <a href="" v-on:click.prevent="loginPopUp()">Login to your account!</a>
				</div>
        <div class="error"></div>
			</div>
		</form>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  @import '../../../sass/loginRegisterForms.scss';

.error{
  display: none;
  width: 100%;
  color: rgb(240, 38, 38);
  font-size: 13px;
  border: 1px solid rgb(240, 38, 38);
  border-radius: 3px;
  padding: 5px;
  margin-top: 20px;
}
</style>