<template>
		<form id="registerForm" class="register-container" action="/create" method="post" @submit.prevent="sendUser">
			<div class="register-container__form">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" name="email" type="text" autocomplete="off" v-model="User.email">
          <label class="mdl-textfield__label">Email</label>
        </div>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" name="nick" type="text" autocomplete="off" v-model="User.nick">
          <label class="mdl-textfield__label">Nick or name</label>
        </div>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" name="password" type="password" autocomplete="off" v-model="User.password">
          <label class="mdl-textfield__label">Password</label>
        </div>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="password" autocomplete="off" v-model="User.repeatPassword">
          <label class="mdl-textfield__label">Repeat password</label>
        </div>

				<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
                type="submit" name="submit" v-on:click="loadingScreen()"
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
import axios from 'axios';
import router from '../../router/index.js';

export default {
  data() {
    return {
      errors: [],
      User: {
        nick: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    };
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
    
    sendUser() {
      // make few check
      // 1. if password is not empty
      // 2. check if this.User.password === this.User.repeatPassword
      let newUser = {
        nick: this.User.nick,
        email: this.User.email,
        password: this.User.password
      }
      
      axios.post('http://localhost:8081/create', newUser)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },

    loadingScreen() {
      router.push('loadingScreen')
    }
  }
}
</script>

<style lang="scss">
@import '../../stylesheets/loginRegisterForms.scss';

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