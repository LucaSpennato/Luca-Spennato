<template>
  <section id="presentation" class="row position-relative">
 
    <div class="col-12 col-sm-10 col-lg-8 mb-2">
        <h5>
            Hi! I'm
        </h5>
        <h1 class="pageStyleWordLight text-capitalize display-2 fw-bold">
            Luca Spennato
        </h1>
        <h5>
            And i am a
        </h5>
        <h1 class="pageStyleWordDark text-capitalize">
            full stack web developer
        </h1>
        <a class="img-container up-img" href="https://www.wired.com/2011/03/meet-the-constellations-orion/" target="_blank">
            <img id="orion" :src="require('../../assets/constellations/msorionBgT.png')" alt="orion constellation">
            <img id="canis" :src="require('../../assets/constellations/mscanismajorisBgT.png')" alt="canis majoris constellation">
            <img id="canisMinor" :src="require('../../assets/constellations/mscanisminorBgT.png')" alt="canis minor constellation">
        </a>
    </div>
    <div class="col-12 col-lg-5 offset-lg-7 mt-3 mt-sm-5 pe-lg-5">
        <a href="https://www.wired.com/2011/03/meet-the-constellations-orion/" target="_blank" class="img-container down-img">
            <img id="scorpio" :src="require('../../assets/constellations/msscorpioBgT.png')" alt="scorpio constellation">
        </a>
        <h5>
            <span class="pageStyleWordLight">Inspired</span> by my constant desire for 
            <span class="pageStyleWordDark">knowledge</span>, 
            I decided to <span class="pageStyleWordDark">change</span> 
            and <span class="pageStyleWordLight">improve</span> my life by enrolling in 
            <a href="https://boolean.careers/" target="_blank" class="nebulaStyleLinkLight">Boolean Careers</a> 's 
            prestigious online bootcamp, making web development my life. 
        </h5>
        <a class="d-block nebulaStyleLinkDark" href="https://www.wired.com/2011/03/meet-the-constellations-orion/" target="_blank">
            Scorpio, Orion and his doggos
        </a>
    </div>
   
  </section>
</template>

<script>
export default {
 name: 'PresentationSection',
}
</script>

<style lang="scss" scoped>

    #presentation{
        min-height: 75vh;

        .img-container{
            transform: rotate(20deg);
            position: absolute;
            &.up-img{
                top: 10%;
                right: 20%;
            }
            &.down-img{
                bottom: 10%;
                left: 20%;
            }
            img{
                cursor: pointer;
                filter: invert(100%);
            }
            #orion{
                width: 10rem;
                animation: orion 20s linear infinite;
            }
            #canis, #canisMinor{
                position: inherit;
                width: 5rem;
            }
            #canis{
                right: 0;
                animation: canis 20s linear infinite;
            }
            #canisMinor{
                left: 50%;
                bottom: 0;
                animation: canisMinor 20s linear infinite;
            }
            #scorpio{
                width: 16rem;
                animation: scorpio 20s linear infinite;
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
        @keyframes canisMinor {
            0%{
                transform: translate(20%, 20%);
            }
            50%{
                transform: translate(50%, 50%);
            }
            100%{
                transform: translate(20%, 20%);
            }
        }
        @keyframes scorpio {
            0%{
                transform: translate(-40%, 20%);
            }
            50%{
                transform: translate(-5%, -10%);
            }
            100%{
                transform: translate(-40%, 20%);
            }
        }

        @media screen and (max-width: 991.98px){
            .img-container{
                z-index: -1;
                #scorpio{
                   position: relative;
                   top: 9rem;
                   width: 10rem;
                }
            }
            @keyframes scorpio {
                0%{
                    transform: translate(0);
                }
                50%{
                    transform: translate(30%);
                }
                100%{
                    transform: translate(0);
                }
            }
        }

        // animation in mobiles
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
                    transform: translate(-40%, -60%);
                }
                100%{
                    transform: translate(-20%, -40%);
                }
            }

            @keyframes canisMinor {
            0%{
                transform: translate(10%, 20%);
            }
            50%{
                transform: translate(30%, 50%);
            }
            100%{
                transform: translate(10%, 20%);
            }
        }
        }
        
    }


</style>