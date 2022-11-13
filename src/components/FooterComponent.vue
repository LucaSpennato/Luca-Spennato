<template>
  <footer class="py-2">
    <div class="container">
        <div class="row">
           <div id="creditToIcon" class="col-12 col-sm-11">
                Favicon: 
                <a target="_blank" class="nebulaStyleLinkLight" href="https://icons8.com/icon/w9U3X7efkXRZ/constellation">Constellation</a>
                icon by 
                <a target="_blank" class="nebulaStyleLinkLight" href="https://icons8.com">Icons8</a>
           </div>
           <div id="goUp" class="col-12 col-sm-1 text-center my-4 my-sm-0">
                <div @click="$_scrollToTop()">
                    <font-awesome-icon icon="fa-solid fa-circle-chevron-up"/>
                </div>
          
           </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    methods:{
        $_scrollToTop(){
            window.scrollTo(0, 0)
        }
            
    }
}
</script>

<style lang="scss">
@import '../scss/partials/variables.scss';
@import '../scss/partials/classes.scss';

    footer{
        background-color: $outerSpaceDark;

        #creditToIcon{
            padding: .4rem;
        }

        #goUp{
            div {
                svg{
                    width: 2rem;
                    height: 2rem;
                    path{
                        color: $innerNebulaDark;
                    }
                    &:hover path{
                        color: $innerNebulaLight;
                    }
                }
            }
        }
    }

</style>