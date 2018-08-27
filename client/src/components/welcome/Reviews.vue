<template>
	<div class="reviews">
		<div class="reviews__container">
			<div class="reviews__container--options">
				<div class="options-container">
					s
				</div>
			</div>
			<div class="reviews__container--text">
				Hottest reviews
				<a href="#">
					View more reviews
				</a>
			</div>
			<div class="reviews__container--threads">

				<div class="thread">
					<div class="thread__stats thread-element">
						<div class="thread__stats--reviews stats-element">
							<div class="reviews--value">
								10
							</div>
							Reviews
						</div>

						<div class="thread__stats--stars stats-element">
							<div class="stars--vlaue">
								2
							</div>
							Stars
						</div>
					</div>

					<a class="thread__title thread-element" href="">
						Title that user created
					</a>

					<div class="thread__tags thread-element">
						<a class="tag" href="">
							android
						</a>
						<a class="tag" href="">
							java
						</a>
					</div>	

					<div class="thread__created thread-element">
						<span>
							Created in 
							<span class="thread__created--date">DD/MM/YYYY</span>
							 by 
							 <a href="" class="thread__created--user">user_nick</a>
						</span>
					</div>
				</div>

				<div class="thread">
					2
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

// THREAD
.reviews__container--options{
	width: 19%;
	margin-top: -100px;
	height: 2000px;
	float: left;
	border-right: 1px solid $yellow;
	// background-color: red;
	position: relative;
}
.options-container{
	float: right;
	background-color: red;
	width: 100%;
	// position: fixed;
}
.reviews__container--threads{
	margin-top: 50px;
	width: 80%;
	float: right;
}
.thread{
	width: 100%;
	color: $white;
	border-top: 1px solid $lightGrey;
	padding: 10px 0 10px 0;
	height: 60px;
}
.thread-element{
	float: left;
}
.stats-element{
	float: left;
	text-align: center;
	border: 1px solid $yellow;
	padding: 10px;
	width: 50px;
	margin-right: 20px;
}
.thread__title{
	font-size: 30px;
	font-weight: 400;
	padding-left: 2em;
	vertical-align: middle;
	height: 100%;
	line-height: 200%;
	text-decoration: none;
	color: $white;
}
.thread__created{
	clear: both;
	float: right;
	font-weight: 300;
	margin-top: -15px;
}
.thread__created--user{
	text-decoration: none;
	color: $yellow;
}
.thread__tags{
	float: right;
}
.tag{
	float: left;
	margin-left: 10px;
	border-radius: 5px;
	background-color: $blue;
	font-weight: 300;
	padding: 1px 5px 1px 5px;
	color: $white;
	text-decoration: none;
}


// TITLE
.reviews{
	background-color: $grey;
}
.reviews__container{
	height: 2000px;
	width: 90%;
	margin: 0 auto;
	padding-top: 100px; 
}
.reviews__container--text{
	font-size: 50px;
	color: $white;
	font-weight: 400;
	border-bottom: 1px solid $yellow;
	width: 80%;
	float: right;

	a{
		text-decoration: none;
		font-size: 16px;
		font-weight: 300;
		float: right;
		padding-right: 10px;
		margin-top: 15px;
		color: $white;
	}
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