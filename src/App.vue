<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MHeader from './components/m-header'


export default {
  name: 'App',
  components: {
    MHeader,
  },

  data: function (){
    return{

    }
  }
}

</script>
<style>
@import "assets/style.css";
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@font-face {
  font-family: "Bigilla";
  src: url("font/Bigilla-Bold.ttf");
}

@font-face {
  font-family: "Breadley Sans";
  src: url("font/BreadleySans-Regular.ttf");
}
</style>
