<template>
	<div class="info">
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

.info{
	background-color: $darkGrey;
	color: $white;
	padding-bottom: 150px;
}
.info__text{
	padding: 200px 0 100px 0;
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
.study{ background: url('../../assets/images/study.jpg') no-repeat; background-size: cover; }
.help{ background: url('../../assets/images/help.jpg') no-repeat; background-size: cover; background-position: -100px; }


// SMARTPHONES
@media only screen and (max-width: 320px) {
	.box-container__element{
		width: 250px;
		height: 250px;
		margin: 20px;
		left: calc(50% - 145px);
	}
	.info__text{ font-size: 25px; }
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