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

  @import './scss/app.scss';

  body{
    background: $bodyColor;
    background-repeat: no-repeat;
  }

</style>
