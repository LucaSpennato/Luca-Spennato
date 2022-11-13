<template>
  <footer class="py-2">
    <div class="container">
        <div>
            Favicon: 
            <a target="_blank" class="nebulaStyleLinkLight" href="https://icons8.com/icon/w9U3X7efkXRZ/constellation">Constellation</a>
             icon by 
            <a target="_blank" class="nebulaStyleLinkLight" href="https://icons8.com">Icons8</a>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style lang="scss">
@import '../scss/partials/variables.scss';
@import '../scss/partials/classes.scss';

    footer{
        background-color: $outerSpaceDark;
    }

</style>