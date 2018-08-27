<template>
	<div class="reviews">
		<div class="reviews__container">
			<div class="reviews__container--text">
				Hottest reviews
				<a href="#">
					View more reviews
				</a>
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
	padding-bottom: 15px;

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