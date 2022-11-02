<template>
  <div id="app">
    <StarsEffect />
    <MainComponent /> 
  </div>
</template>

<script>
import StarsEffect from './components/StarsEffect.vue';
import MainComponent from './pages/MainComponent.vue';

export default {
  name: 'App',
  components: {
    StarsEffect,
    MainComponent,
  }
}
</script>

<style lang="scss">

  @import '~bootstrap/scss/bootstrap.scss';

  body{
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    background-repeat: no-repeat;
  }

</style>
