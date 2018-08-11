<template>
  <div class="header-container">
    <div class="logo">CODE-REVIEW</div>

    <i class="icon-list">*
      <ul class="dropdown-content">
        <li>Log In</li>
        <li>Sign Up</li>
        <li>Team</li>
        <li>Coworking</li>
        <li>Github</li>
      </ul>
    </i>

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

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css?family=Monoton');

$leading: rgb(0, 139, 219);
$lightGrey: #d4d4d4;
$darkGrey: rgb(17, 17, 17);

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
@media only screen and (max-width: 320px){
  .logo{
    margin: 0.3em 0 0 0.5em;
    text-align: left;
  }
    //dropdown
  .icon-list{
    font-size: 40px;
    float: right;
    margin: -1.1em 0.3em 0 0;
    color: $lightGrey;
    cursor: pointer;
    text-align: center;

    &:hover{
      animation-name: TextFadeIn;
      animation-duration: 1.5s;
      color: $leading;

      .dropdown-content{
        display: block;

        li{
          color: $lightGrey;

            &:hover{
              animation-name: TextFadeIn;
              animation-duration: 1.5s;
              color: $leading;
            }
        }
      }
    }
    .dropdown-content{
      padding: 0;
      display: none;
      position: absolute;
      right: 0;
      margin-top: 0em;
      list-style: none;
      font-size: 20px;
      background-color: $darkGrey;
      width: 100%;

      li{
        //border-top: $leading solid 1px;
        padding: 10px 20px 10px 20px;
      }
    }
  }
  a{
    visibility: hidden;
  }
}

@media only screen and (max-width: 599px){
  .logo{
    font-size: 25px;
    margin-top: 0.3em;
    width: 100%;
  }
  //dropdown
  .icon-list{
    font-size: 40px;
    float: right;
    margin: -1.1em 0.3em 0 0;
    color: $lightGrey;
    cursor: pointer;
    text-align: center;

    &:hover{
      animation-name: TextFadeIn;
      animation-duration: 1.5s;
      color: $leading;

      .dropdown-content{
        display: block;
        
        li{
          color: $lightGrey;
          
          &:hover{
            animation-name: TextFadeIn;
            animation-duration: 1.5s;
            color: $leading;
          }
        }
      }
    }
    .dropdown-content{
      padding: 0;
      display: none;
      position: absolute;
      right: 0;
      margin-top: 0em;
      list-style: none;
      font-size: 20px;
      background-color: $darkGrey;
      width: 100%;

      li{
        //border-top: $leading solid 1px;
        padding: 10px 20px 10px 20px;
      }
    }
  }
  a{
    visibility: hidden;
  }
}

//tablets
@media only screen and (min-width: 600px) and (max-width: 767px){
  .logo{
    font-size: 30px;
    margin: 0.3em auto;
    width: 100%;
  }
  //dropdown
  .icon-list{
    font-size: 50px;
    float: right;
    margin: -1.2em 0.5em 0 0;
    color: $lightGrey;
    cursor: pointer;
    text-align: center;
    width: 120px;

    &:hover{
      animation-name: TextFadeIn;
      animation-duration: 1.5s;
      color: $leading;

      .dropdown-content{
        display: block;
        
        li{
          color: $lightGrey;
          
          &:hover{
            animation-name: TextFadeIn;
            animation-duration: 1.5s;
            color: $leading;
          }
        }
      }
    }

    .dropdown-content{
      padding: 0;
      display: none;
      position: absolute;
      right: 0em;
      margin-top: -.7em;
      list-style: none;
      font-size: 20px;
      background-color: $darkGrey;
      width: 100%;

      li{
        //border-top: $leading solid 1px;
        padding: 10px 20px 10px 20px;
      }
    }
  }
  a{
    visibility: hidden;
  }

}

//pc
@media only screen and (min-width: 768px) {
  .logo{
    font-size: 35px;
    margin: .2em 0 0 .5em;
  }
  .icon-list{
    display: none;
  }
}
</style>