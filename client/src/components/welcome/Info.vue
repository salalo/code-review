<template>
	<div class="info">
		<div class="info__text--left">
			Code Review is a platform<br>
			for those who want to learn<br>
			and improve by interaction<br>
			with other developers 
			<i class="material-icons md-dark md-36">
				trending_up
			</i>
		</div>
		<div class="box-container">

			<div class="study box-container__element">
				<div class="overlay">
					<div class="overlay__text">
						Gain knowledge by getting your code reviewed.
					</div>
				</div>
			</div>

			<div class="help box-container__element">
				<div class="overlay">
					<div class="overlay__text">
						Help someone improve by reviewing his work.
					</div>
				</div>
			</div>

			<div class="bottom box-container__element">
				<div class="overlay">
					<div class="overlay__text">
						Placeholder
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">

$white: #fafafa;
$yellow: rgb(255,152,0);
$lightGrey: rgb(99, 98, 98);
$grey: rgb(66,66,66);
$darkGrey: #202124;
$blue: rgb(68,138,255);
body{
	background-color: $darkGrey;
}
.info{
	background-color: $darkGrey;
	color: $white;
	padding: 64px 0 100px 0;
	display: inline-block;
	width: 100%;
}
.info__text--left{
	padding: 250px 0 0 50px;
	float: left;
	font-size: 40px;
	line-height: 1.3em;
	font-weight: 300;
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
 	float: right;
 	margin-top: 150px;
}
.box-container__element{
	position: relative;
	height: 250px;
	text-align: center;
	float: left;
	cursor: pointer;
	background-color: $white;

	&:hover{
		.overlay{ opacity: .8; }
	}
}
.study{
	width: 300px;
	border-right: 1px solid $darkGrey;
}
.help{
	width: 400px;
}
.bottom{
	clear: both;
	width: 700px;
	border-top: 1px solid $darkGrey;
}


// SMARTPHONES
@media only screen and (max-width: 599px) {
	// border won't be needed with different bg
	.study{ width: 50%; border: none; }
	.help{ width: 50%; }
	.bottom { width: 100%; }
	.box-container{ margin-top: 50px; width: 100%; }
	.box-container__element{ height: 150px; }
	.material-icons{ display: none; }
	.info__text--left{
		font-size: 25px;
		width: 100%;
		text-align: center;
		padding: 60px 0 0 0;
	}
}
//TABLETS
@media only screen and (min-width: 600px) and (max-width: 999px) {
	.study{ width: 200px; }
	.help{ width: 300px; }
	.bottom { width: 500px; }
	.box-container{ margin-top: 90px; }
	.box-container__element{ height: 200px; }
	.info__text--left{
		font-size: 35px;
		width: 100%;
		text-align: center;
		padding: 60px 0 0 0;
	}
}
//PC
@media only screen and (min-width: 1000px) and (max-width: 1400px) {
	.info{ padding-bottom: 150px; }
	.study{ width: 200px; }
	.help{ width: 300px; }
	.bottom { width: 500px; }
	.box-container__element{ height: 200px; }
	.info__text--left{ font-size: 35px; }

}

// ICONS
/* Rules for sizing the icon. */
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

/* Rules for using icons as black on a light background. */
.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

/* Rules for using icons as white on a dark background. */
.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }
</style>