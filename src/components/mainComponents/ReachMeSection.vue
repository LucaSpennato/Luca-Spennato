<template>
  <section id="reachMe" class="row py-5">
    <div class="col-12 col-md-10 offset-md-1">
        <h3 class="pageStyleWordLight text-capitalize my-3 text-center text-md-start pb-5">
            how to reach me
        </h3>
        <h5 class="text-center pb-5 mb-sm-5">
            <div class="mb-3">
                Email:
            </div>
            <a href="mailTo:luca.spennato@gmail.com" class="nebulaStyleLinkLight">
                luca.spennato@gmail.com
            </a>
            <button class="d-block m-auto mt-4 btn" :class="isBtnPressed ? 'btnPressed' : 'btnInteractionStill' " @click="$_copyToClipBoard()">
                {{ btnText }}
            </button>
        </h5>

        <ul class="row d-flex justify-content-center">
            <li class="text-center mb-3">
                Other links:
            </li>
            <li v-for="link in myLinks" :key="link.text" class="col-12 col-sm-3 col-md-2 text-center py-3">
                <a :href="link.src" target="_blank">
                    <font-awesome-icon :icon="fixedFontAwesomeIconsPath(link.icon)" />
                </a>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
import { helpers } from '../../mixins/helpers';
export default {
    name: 'ReachMeSection',
    mixins: [helpers],
    data(){
        return{
            btnText: 'Or copy it',
            isBtnPressed: false,
            myLinks:[
                {
                    icon: 'github',
                    src: 'https://github.com/LucaSpennato',
                },
                {
                    icon: 'linkedin',
                    text: 'linkedin',
                    src: 'https://www.linkedin.com/in/lucaspennato/',
                },
                {
                    icon: 'twitter',
                    src: 'https://twitter.com/Fomjot',
                },

            ]
        }
    },
    methods:{
        $_copyToClipBoard(){
            navigator.clipboard.writeText('luca.spennato@gmail.com');
            this.btnText = 'Done!';
            this.isBtnPressed = true;
        }
    }
}
</script>

<style lang="scss">

@import '../../scss/partials/classes';
@import '../../scss/partials/variables';

    #reachMe{
        min-height: 80vh;

        button{
            font-weight: bold;
            border: 2px solid;

            &.btnInteractionStill{
                border-color: $innerNebulaDark;
                color: $innerNebulaDark;
                transition: transform 100ms linear;
    
                &:hover{
                    border-color: $innerNebulaLight;
                    color: $innerNebulaLight;
                    transform: scale(1.05);
                }
            }
            &.btnPressed{
                border-color: $innerNebulaLight;
                color: $innerNebulaLight;
            }
        }

        ul{
            list-style: none;
            padding: 0;

            li{
                
                a{
                    vertical-align: middle;
                    padding: 2rem;
                    width: 100%;
                    height: 100%;
                    &:hover path{
                        color: $innerNebulaLight;
                    }
                }
                svg{
                    height: 2.5rem;
                    width: 2.5rem;
                    path{
                        color: $innerNebulaDark;
                    }
                    
                }
            }
        }
    }

</style>