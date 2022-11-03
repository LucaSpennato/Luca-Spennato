<template>
  <div id="app">
    <!-- Stars effect section -->
    <StarsEffect />

    <!-- Page components -->
    <HeaderComponent :currentPageYPosition="currentPageYPosition" />
    <MainComponent @currentSectionOnScroll="$_getCurrentSectionOnScroll" /> 
  </div>
</template>

<script>
import StarsEffect from './components/StarsEffect.vue';
import MainComponent from './pages/MainComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    StarsEffect,
    HeaderComponent,
    MainComponent,
  },
  data(){
    return{
      currentPageYPosition: 0,
    }
  },
  methods:{
    $_getCurrentSectionOnScroll(params){
      this.currentPageYPosition = params;
    }
  },

}
</script>

<style lang="scss">

  @import './scss/app.scss';

  body{
    background: $bodyColor;
    background-repeat: no-repeat;
  }

</style>
