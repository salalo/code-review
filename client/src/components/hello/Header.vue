<template>
	<div class="header-container">
	<div class="logo">CODE-REVIEW</div>
	
	<i class="material-icons icon-list">dehaze
		<ul class="dropdown-content">
			<li>Log In</li>
			<li>Sign Up</li>
			<li>Team</li>
			<li>Coworking</li>
			<li>Github</li>
	  	</ul>
	</i>

	<div class="nav-container__left">     
		<a href="">Team</a>
	  	<a href="">Coworking</a>
	  	<a href="">Github</a>
	</div>

	<div class="nav-container__right">
		<router-link to="/login"><a>Log In</a></router-link>
	  	<a href="">Sign Up</a>
	</div>
  	</div>
</template>

<script>
export default {}
import Vue from 'vue'
// import Icon from 'element-ui'

// Vue.use(Icon)
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css?family=Monoton');

$leading: rgb(0, 139, 219);
$lightGrey: #d4d4d4;
$darkGrey: rgb(17, 17, 17);

//animations
@keyframes TextFadeIn {
	from{color: $lightGrey;}
	to  {color: $leading;}
}

//main
.header-container{
	box-shadow: 0px 5px 5px $darkGrey;
}
.logo{
	font-family: 'Monoton', cursive;
	color: $leading;
	float: left;
	text-align: center;
}
a{
	text-decoration: none;
	color: $lightGrey;
	font-size: 16px;
	visibility: hidden;

	&:hover{
		animation-name: TextFadeIn;
		animation-duration: 1.5s;
		color: $leading;
	}
}
.nav-container__left{
	display: inline-block;

	a{
		float: left;
		margin: 1.5em 0 0 2em;
		
		&:first-of-type{ margin-left: 2em; }
	}
}
.nav-container__right{
	float: right;
  	margin-top: 1.5em;
  
  	a{ margin-right: 1.5em; }
}
.dropdown-content{
	width: 100%;
	font-size: 20px;
	display: none;
	list-style: none;
	position: absolute;
	right: 0em;
	background-color: $darkGrey;
	margin-top: -.1em;
	font-family: 'Roboto', sans-serif;

	li{ padding: 10px 20px 10px 20px; }
}
.icon-list{
	float: right;
	color: $lightGrey;
	cursor: pointer;
	text-align: center;
	width: 100px;

	&:hover{
		animation-name: TextFadeIn;
		animation-duration: 1.5s;
		color: $leading;

		.dropdown-content{
			display: block;
			
			li{
				color: $lightGrey;
				
				&:hover{
					animation-name: TextFadeIn;
					animation-duration: 1.5s;
					color: $leading;
				}
			}
		}
	}
}
//smartphones
@media only screen and (max-width: 321px){
  	.logo{
		margin: 0.3em 0 0 0.5em;
		text-align: left;
  	}
	.icon-list{
		font-size: 20px;
		margin: -1.2em -2em 0 0;
  	}
}

@media only screen and (max-width: 599px){
  	.logo{
		font-size: 25px;
		margin-top: 0.3em;
		width: 100%;
  	}
	.icon-list{
		font-size: 35px;
		margin: -1em .8em 0 0;
		width: auto;
  	}
}

//tablets
@media only screen and (min-width: 600px) and (max-width: 767px){
	.logo{
		font-size: 30px;
		margin: 0.3em auto;
		width: 100%;
	}
	.icon-list{
		font-size: 40px;
		margin: -1.2em 0.3em 0 0;
  	}
	.nav-container__left{
		a{ margin: 0; }
	}
}

//pc
@media only screen and (min-width: 768px) {
	.logo{
		font-size: 35px;
		margin: .2em 0 0 .5em;
	}
	
	a{ visibility: visible; }
	.icon-list{ display: none; }
	.header-container{ 	padding-bottom: 20px; }
}
</style>