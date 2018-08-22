<template>
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<!-- Title -->
				<span class="mdl-layout-title">Code-Review</span>
				<!-- Add spacer, to align navigation to the right -->
				<div class="mdl-layout-spacer"></div>
				<nav class="mdl-navigation">
					<a class="mdl-navigation__link" href="">Log In</a>
					<a class="mdl-navigation__link" href="">Sign In</a>
				</nav>
			</div>
		</header>
		<div class="info">
			<div class="info__text">
				<h1>With us you can</h1>
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
export default {}
</script>

<style scoped lang="scss">

$white: #fafafa;
$yellow: rgb(255,152,0);
$grey: rgb(66,66,66);
$darkGrey: #202124;
$blue: rgb(68,138,255);

.info{
	background-color: $darkGrey;
	color: $white;
	height: 700px;
}
.info__text{
	padding-top: 100px;
	text-align: center;
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
}
.study{background: url('../assets/images/study.jpg') no-repeat;background-size: cover;}
.help{background: url('../assets/images/help.jpg') no-repeat; background-size: cover; background-position: -100px;}

</style>
