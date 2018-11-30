<template>
	<div class="reviews">
		<div class="reviews__container">
			<div class="reviews__container--options">
				<div class="options-container">
					options
				</div>
			</div>

			<div class="reviews__container--text">
				Hottest reviews
				<a href="#">
					View more reviews
				</a>
			</div>

			<div class="reviews__container--threads">

				<div
					class="thread"
					v-for="post in posts"
					:key="post"
				>
					<a class="thread__stats thread-element" href="">
						<div class="thread__stats--reviews stats-element">
							<div class="reviews--value">
								10
							</div>
							reviews
						</div>

						<div class="thread__stats--stars stats-element">
							<div class="stars--vlaue">
								2
							</div>
							stars
						</div>

						<div class="thread__stats--views stats-element">
							<div class="views--vlaue">
								100
							</div>
							views
						</div>
					</a>

					<a class="thread__title thread-element" href="">
						{{ post.title }}
					</a>

					<div class="thread__tags thread-element">
						<a class="tag" href="">
							{{ post.tags }}
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

			</div>
		</div>
	</div>
</template>

<script>

import PostsService from '../../services/PostsService'
export default {
  data () {
   	return {
   		posts: []
   	}
 	},

 	mounted() {
 		this.getPosts()
 	},

 	methods: {
 		async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response
    }
 	}
}
</script>

<style scoped lang="scss">
@import '../../stylesheets/_variables.scss';

// MAIN
a{
	text-decoration: none;
	color: $white;
}


// LEFT OPTION PANEL
.reviews__container--options{
	width: 19%;
	margin-top: -100px;
	height: 2000px;
	float: left;
	border-right: 1px solid $yellow;
}
.options-container{
	float: right;
	background-color: red;
	width: 100%;
}


// THREAD
.reviews__container--threads{
	margin-top: 50px;
	width: 80%;
	float: right;
}
.thread-element{ float: left; }
.thread{
	width: 100%;
	color: $white;
	border-top: 1px solid $lightGrey;
	padding: 10px 0 10px 0;
	height: 60px;
}
.stats-element{
	float: left;
	text-align: center;
	border: 1px solid $yellow;
	padding: 10px;
	width: 50px;
	margin-right: 20px;
	font-weight: 300;
}
.thread__title{
	font-size: 30px;
	font-weight: 400;
	padding-left: 2em;
	vertical-align: middle;
	height: 100%;
	line-height: 200%;
}
.thread__created{
	clear: both;
	float: right;
	font-weight: 300;
	margin-top: -15px;
}
.thread__created--user{ color: $yellow; }
.thread__tags{ float: right; }
.tag{
	float: left;
	margin-left: 10px;
	border-radius: 4px;
	background-color: $blue;
	font-weight: 300;
	padding: 1px 5px 1px 5px;
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
		font-size: 16px;
		font-weight: 300;
		float: right;
		padding-right: 10px;
		margin-top: 15px;
	}
}

//PC
@media only screen and (min-width: 1000px) and (max-width: 1400px) {
	.thread__title{
		font-size: 25px;
		padding-left: 1.5em;
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