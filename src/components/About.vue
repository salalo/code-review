<template>
	<div class="about-container col-12">
		<div class="intro-text">With us you can</div>
		<div class="info-container col-11">
			<div class="info-container__left">
				Improve your own code, by<br>
				getting reviews or<br>
				help someone by reviewing<br>
				his work and giving tips<br>
			</div>
			<div class="info-contrainer__right">
				<span> Want to find something specific?</span>
				<input type="text" class="search-input" placeholder="nick, tags, title...">
				<span>
					<b>Create</b> your own thread and get help
				</span>
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

//main
.about-container{
	font-family: 'Playfair Display', serif;
	border-top: $grey solid 1px;
}
.info-container__left{
	float: left;
	line-height: 1.8em;
}
.info-contrainer__right{
	background: rgb(31, 31, 71);
	float: right;
}
.search-input{
	width: 30em;
	height: 20px;
	font-size: 16px;
	display: block;
	border: $grey 1px solid;
	padding: 5px;
}

//smartphones
@media only screen and (max-width: 599px){}

//tablets
@media only screen and (min-width: 600px) {}

//pc
@media only screen and (min-width: 768px) {
	.intro-text{
		font-size: 60px;
		color: $grey;
		text-align: center;
		margin: -0.8em auto;
		background-color: #f5f5f5;
		max-width: 8.5em;
	}
	.about-container{
		font-size: 25px;
		margin-top: 10em;
	}
	.info-container{
		padding-top:150px;
		margin: 0 auto;
	}
}
</style>