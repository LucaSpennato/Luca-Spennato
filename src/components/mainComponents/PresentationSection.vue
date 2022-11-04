<template>
  <section id="presentation" class="container pt-3 pb-5 position-relative">
    <div class="row">
        <div class="col-7 m-auto mb-2 test">
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
                junior full stack web develoepr
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
    }
}
</script>

<style lang="scss" scoped>

    #presentation{
        
        .img-container{
            // overflow-x:hidden;
            position: absolute;
            transform: rotate(20deg);
            top: 0;
            left: 10%;
            z-index: -1;
            img{
                // transition: transform 5s linear, filter 200ms linear;
                width: 10rem;
            }
            #orion{
                animation: orion 20s linear infinite;
                filter: invert(100%);
                // filter: invert(30%);
            }
            #canis{
                position: inherit;
                animation: canis 20s linear infinite;
                width: 5rem;
                filter: grayscale(80%) opacity(100%) brightness(150%);
                // filter: grayscale(100%) opacity(50%);
            }
        }

        // &:hover{
        //     #canis{
        //         transform: translate(85%);
        //         filter: grayscale(80%) opacity(100%) brightness(150%);
        //     }
        //     #orion{
        //         transform: translate(70%);
        //         filter: invert(100%);
        //     }
        // }

        
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
        


    }


</style>