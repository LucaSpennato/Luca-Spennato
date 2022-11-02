<template>
  <div class="stars-wrapper">

    <div class="stars" v-for="(star, i) in 100" :key="i">
      
    </div>

  </div>

</template>

<script>
export default {
  name: 'StarsEffect',

}
</script>

<style lang="scss" scoped>

  .stars-wrapper{
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;

    .stars{ 
      width: 3px;
      height: 3px;
      z-index: 0;
      padding: 0;
      background-color: lightgray;
      border-radius: 100%;
      animation: starsAnimation linear infinite;
      position: absolute;

    }

    @for $i from 1 through 100{
        .stars{
          &:nth-child(#{$i}){
            left: percentage(random(95) / 100);
            animation-duration: random(15) + 5 + s;
            bottom: percentage(random(80) / 100);
            opacity: 0;
  
            @keyframes starsAnimation {
              0%{
                opacity: 0;
              }
              5%{
                opacity: 1;
              }
              100%{
                // transform: translatey(-300px);
                bottom: 100%;
              }
            }
          }

        }
      }
  }
</style>
