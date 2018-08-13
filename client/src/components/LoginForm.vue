<template>
  	<div class="login-grid">
		<app-header/>
		<div class="login-container">
			<form class="login-form">
				<input class="wrap-input" name="email" type="text">
				<input class="wrap-input" name="passwd" type="password">
				<button class="login-btn" type="submit">LOGIN</button>
			</form>
		</div>
  	</div>
</template>

<script>
import Header from './hello/Header'

export default {
    components:{
		'app-header': Header
    }
}
</script>

<style scoped lang="scss">

$leading: rgb(0, 139, 219);
$lightGrey: #d4d4d4;
$darkGrey: rgb(17, 17, 17);

.login-grid{ display: grid;}
.login-container { 
	display: inline-grid;
	background-color: $lightGrey;

}

</style>