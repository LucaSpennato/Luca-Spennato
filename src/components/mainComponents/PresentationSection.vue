<template>
  <section id="presentation" class="container my-5 position-relative">
    <div class="row">
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
                junior <br> full stack web developer
            </h1>
            <a class="img-container" href="https://www.wired.com/2011/03/meet-the-constellations-orion/" target="_blank">
                <img id="orion" :src="require('../../assets/img/orion.png')" alt="orion constellation">
                <img id="canis" :src="require('../../assets/img/canismajoris.png')" alt="canis majoris constellation">
                <img id="canisMinor" :src="require('../../assets/img/canisminor.png')" alt="canis minor constellation">
            </a>
        </div>
        <div class="head-infos col-12 col-lg-5 offset-lg-7 mt-3 mt-sm-5 pe-lg-5">
            <h6>
                <span class="pageStyleWordLight">Inspired</span> by my constant desire for 
                <span class="pageStyleWordDark">knowledge</span>, 
                I decided to <span class="pageStyleWordDark">change</span> 
                and <span class="pageStyleWordLight">improve</span> my life by enrolling in 
                <a href="https://boolean.careers/" target="_blank" class="nebulaStyleLinkLight">Boolean Careers</a> 's 
                prestigious online bootcamp, making web development my life. 
            </h6>
            <a class="d-block nebulaStyleLinkDark" href="https://www.wired.com/2011/03/meet-the-constellations-orion/" target="_blank">
                Learn more about Orion and his doggos
            </a>
        </div>
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
            top: 10%;
            right: 20%;
            img{
                cursor: pointer;
                width: 10rem;
            }
            #orion{
                animation: orion 20s linear infinite;
                filter: invert(100%);
            }
            #canis{
                position: inherit;
                right: 0;
                animation: canis 20s linear infinite;
                width: 5rem;
                filter: grayscale(80%) opacity(100%) brightness(150%);
            }
            #canisMinor{
                position: inherit;
                left: 50%;
                bottom: 0;
                transform: rotate(-30deg);
                animation: canisMinor 20s linear infinite;
                width: 5rem;
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

        @media screen and (max-width: 768px){
            .img-container{
                z-index: -1;
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
                    transform: translate(30%, -60%);
                }
                100%{
                    transform: translate(-20%, -40%);
                }
            }
        }
        


    }


</style>