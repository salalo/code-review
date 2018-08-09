<template>
	<div class="about-container">
		<link rel="stylesheet" href="/src/assets/fonts/css/fontello.css">
		<div class="intro-text">With us you can</div>
		<div class="info-container">
			<div class="row col-8">

				<div class="col-1 col-s-5 column">
					
					<button onclick="location.href='http://www.example.com'" class="btn-study"><i class="icon-plus"></i></button>
					<p>
						Improve your code by<br>
						getting reviews.
					</p>
				</div>
				<div class="col-1 col-s-5 column">
					<button class="btn-help"><i class="icon-thumbs-up"></i></button>
					<p>
						Help someone by<br>
						reviewing his code
					</p>
				</div>
				<div class="col-1 col-s-5 column">
					<button onclick="location.href='http://www.example.com'" class="btn-work"><i class="icon-users"></i></button>
					<p>Work with us</p>
				</div>
				<div class="col-1 col-s-5 column">
					<button class="btn-search"><i class="icon-search"></i></button>
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
$leading: rgb(0, 139, 219);

//icons
[class*="icon-"] {
	font-size: 90px;
	padding-left: 20px;
	visibility: hidden;
	color: $leading;
}

//main
.about-container{
	font-family: 'Roboto', sans-serif;
	border-top: $grey solid 1px;
	font-size: 25px;
	margin-top: 10em;
}
.info-container{
	padding-top: 150px;
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
	cursor: pointer;
	display: block;
	margin: 0 auto;
	outline: none;

	&:hover{
		animation-name: CircleHover;
		animation-duration: 2s;

		[class*="icon-"] {
			visibility: visible;
			animation: IconFadeIn;
			animation-duration: 1s;
		}
	}
}
.btn-study{background: url('../assets/images/study_circle.jpg') no-repeat;background-size: cover;}
.btn-help{background: url('../assets/images/help_circle.jpg') no-repeat;background-size: cover;background-position: -70px;}
.btn-work{background: url('../assets/images/work_circle.jpg') no-repeat;background-size: cover;background-position-x: -30px;}
.btn-search{background: url('../assets/images/search_circle.jpg') no-repeat;background-size: cover;background-position-x: -10px;}

//animations
@keyframes CircleHover {
	//from {filter: blur(0)}
	//to	 {filter: bluer(0.1rem)}
	//from {filter: blur(0.1rem)}
	//to	 {filter: bluer(0)}

	0%	{border-top-right-radius: 100px;}
	25%	{border-bottom-right-radius: 100px;}
	50%	{border-bottom-left-radius: 100px;}
	75%	{border-top-left-radius: 100px;}
}
@keyframes IconFadeIn {
	from {opacity: 0;}
    to   {opacity: 1;}
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