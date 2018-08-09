<template>
  <div>
      <div class="logo col-s-6 col-7">CODE-REVIEW</div>

      <ul class="col-s-5 col-3">
        <li>Log In</li>
        <li>Sign Up</li>
      </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Monoton');

$leading: rgb(0, 139, 219);

//main
.logo{
  font-family: 'Monoton', cursive;
  color: $leading;
}

ul{
  float: right;

  li{
    list-style-type: none;
    margin-right: 1.5em;
    float: right;
  }
}

//smartphones
@media only screen and (max-width: 599px){
  .logo{
    text-align: center;
    font-size: 25px;
    margin-top: 0.3em;
  }

}

//tablets
@media only screen and (min-width: 600px) {
  .logo{
    font-size: 35px;
    margin: 0.3em 0 0 0.5em;
  }
  ul{
    margin-top: -2em;
    font-size: 20px;
  }
}

//pc
@media only screen and (min-width: 768px) {
  .logo{
    font-size: 45px;
    margin: 3em 0 0 2em;
  }
  ul{
    margin-right: 2em;
  }
}
</style>