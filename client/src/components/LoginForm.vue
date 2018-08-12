<template>
  	<div>
		<app-header/>
		<div class="login-container col-5">
			<form class="login-form">
				<el-input class="email-input__element col-8" type="email" placeholder="Email"></el-input>
				<el-input class="password-input__element col-8" type="password" placeholder="Password"></el-input>
				<el-button class="login-btn__element col-8" type="primary">Login</el-button>
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

.login-container{
	margin: 0 auto;
	background-color: $darkGrey;
	border-radius: 10px;
	padding-bottom: 20px;
	box-shadow: 0px 0px 80px 20px black;
}
.login-btn__element{
	margin: 0 auto;
	display: table-cell; 
}
[class*="__element"]{
	margin-top: 20px;
}


</style>