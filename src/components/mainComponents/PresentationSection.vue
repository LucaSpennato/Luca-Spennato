<template>
  <section id="presentation" class="container pt-3 pb-5 position-relative" :ref="'presentationSection'">
    <div class="row">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 m-auto mb-2 test">
            <h5>
                Hi! I'm
            </h5>
            <h1 class="pageStyleWordLight text-capitalize">
                Luca Spennato!
            </h1>
            <h5>
                and i am a
            </h5>
            <h3 class="pageStyleWordDark text-capitalize">
                junior full stack web developer
                </h3>
            <div class="img-container">
                <img id="orion" :src="require('../../assets/img/orion.png')" alt="orion constellation">
                <img id="canis" :src="require('../../assets/img/canismajoris.png')" alt="pleiades constellation">
            </div>
        </div>
        <div class="col-7 m-auto">
           
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'PresentationSection',
    data(){
        return{

        }
    },
    methods:{
    $_scrollSpy(){
      this.currentScrollYPosition = window.scrollY;

      let { offsetTop, offsetHeight } = this.$refs.presentationSection;

      if(this.currentScrollYPosition >= offsetTop - 150 && this.currentScrollYPosition < offsetHeight + offsetTop){
        this.$emit('sectionInfos', 0);
      }
          
    },
  },
  created() {
      window.addEventListener('scroll', this.$_scrollSpy);
  },
  destroyed() {
    window.removeEventListener('scroll', this.$_scrollSpy);
  },
}
</script>

<style lang="scss" scoped>

    #presentation{
        
        .img-container{
            transform: rotate(20deg);
            position: absolute;
            top: 0;
            left: 10%;
            z-index: -1;
            img{
                width: 10rem;
            }
            #orion{
                animation: orion 20s linear infinite;
                filter: invert(100%);
            }
            #canis{
                transform: rotateX(200deg);
                position: inherit;
                right: 0;
                animation: canis 20s linear infinite;
                width: 5rem;
                filter: grayscale(80%) opacity(100%) brightness(150%);
            }
        }
        @keyframes orion {
            0%{
                transform: translate(-5%);
            }
            50%{
                transform: translate(-30%);
            }
            100%{
                transform: translate(-5%);
            }
        }
        @keyframes canis {
            0%{
                transform: translate(20%);
            }
            50%{
                transform: translate(50%, -90%);
            }
            100%{
                transform: translate(20%);
            }
        }

        @media screen and (max-width: 400px) {
        
            #canis{
                position: inherit;
                right:  0;
                top: 0;
            }

            @keyframes orion {
                0%{
                    transform: translate(-5%, -10%);
                }
                50%{
                    transform: translate(-30%, 0);
                }
                100%{
                    transform: translate(-5%, -10%);
                }
            }
            @keyframes canis {
                0%{
                    transform: translate(-20%, -40%);
                }
                50%{
                    transform: translate(30%, -60%);
                }
                100%{
                    transform: translate(-20%, -40%);
                }
            }
        }
        


    }


</style>