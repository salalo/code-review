<template>
	<div class="about-container">
		<div class="intro-text">With us you can</div>
		<div class="info-container">
			<div class="row col-8">

				<div class="col-1 col-s-5 column">
					<button></button>
					<p>
						Improve your code by<br>
						getting reviews.
					</p>
				</div>
				<div class="col-1 col-s-5 column">
					<button></button>
					<p>
						Help someone by<br>
						reviewing his code
					</p>
				</div>
				<div class="col-1 col-s-5 column">
					<button></button>
					<p>Work with us</p>
				</div>
				<div class="col-1 col-s-5 column">
					<button></button>
					<p>
						Search for something<br>
						specific
					</p>
				</div>	

			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Playfair+Display&subset=latin-ext');

$grey:  #151515;
$lightGrey: #919191;

//main
.about-container{
	font-family: 'Roboto', sans-serif;
	border-top: $grey solid 1px;
	font-size: 25px;
	margin-top: 10em;
}
.info-container{
	padding-top:150px;
}
.intro-text{
	color: $grey;
	text-align: center;
	margin: -0.7em auto;
	background-color: #f5f5f5;
	max-width: 8.5em;
}
.row{
	margin: 0 auto;
	display: table;
	text-align: center;
}
button{
	border-radius: 200px;
	border: none;
	text-decoration: none;
	background-color: $lightGrey;
	cursor: pointer;
	display: block;
	margin: 0 auto;
}

//smartphones
@media only screen and (max-width: 599px){
	.intro-text{
		font-size: 25px;
	}
	.column{
		font-size: 20px;
		padding-bottom: 80px;
	}
	button{
		width: 180px;
		height: 180px;
	}
}

//tablets
@media only screen and (min-width: 600px) and (max-width: 767px) {
	.intro-text{
		font-size: 40px;
	}
	.column{
		font-size: 20px;
		float: left;
		padding: 20px 20px;
	}
	button{
		width: 200px;
		height: 200px;
	}
}

//pc
@media only screen and (min-width: 768px){
	.intro-text{
		font-size: 50px;
	}
	.column{
		display: table-cell;
		font-size: 21px;
		padding: 0 20px;
	}
	button{
		width: 150px;
		height: 150px;
	}
}

@media only screen and (min-width: 1000px) {
	.intro-text{
		font-size: 60px;
	}
	.column{
		display: table-cell;
		padding: 0 20px;
		font-size: 25px;
	}
	button{
		width: 200px;
		height: 200px;
	}

}
</style>