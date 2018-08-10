<template>
  <div>
    <div class="logo">CODE-REVIEW</div>

    <div class="nav-container__left">     
      <a href="">Team</a>
      <a href="">Coworking</a>
      <a href="">Github</a>
    </div>

    <div class="nav-container__right">
      <a href="">Log In</a>
      <a href="">Sign Up</a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Monoton');

$leading: rgb(0, 139, 219);
$lightGrey: #d4d4d4;

//main
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
    
    &:first-of-type{
      margin-left: 2em;
    }
  }
}
.nav-container__right{
  float: right;
  margin-top: 1.5em;
  
  a{
    margin-right: 1.5em;
  }
}
//animations
@keyframes TextFadeIn {
  from{color: $lightGrey;}
  to  {color: $leading;}
}

//smartphones
@media only screen and (max-width: 599px){
  .logo{
    font-size: 25px;
    margin-top: 0.3em;
    width: 100%;
  }
}

//tablets
@media only screen and (min-width: 600px) and (max-width: 767px){
  .logo{
    font-size: 30px;
    margin: 0.3em auto;
    width: 100%;
  }
}

//pc
@media only screen and (min-width: 768px) {
  .logo{
    font-size: 35px;
    margin: .2em 0 0 .5em;
  }
}
</style>