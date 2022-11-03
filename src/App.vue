<template>
  <div id="app">
    <!-- Stars effect section -->
    <StarsEffect />

    <!-- Page components -->
    <HeaderComponent />
    <MainComponent /> 
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
  }
}
</script>

<style lang="scss">

  @import './scss/app.scss';

  body{
    background: $bodyColor;
    background-repeat: no-repeat;
  }

</style>
