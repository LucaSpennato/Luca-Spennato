<template>
  <section id="works" class="row">
  
    <div class="col-12 m-auto mb-3">
        <h4 class="pageStyleWordLight text-capitalize">
        Works i've done
      </h4>
    </div>
    <div class="col-12 m-auto">

      <!-- Buttons -->
      <div class="btns-field my-3">
        <span class="mx-2" @click="$_nextSlideOnClick()">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
        </span>
        <span class="mx-2" @click="$_previousSlideOnClick()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
        </span>
      </div>

      <!-- Images -->
      <div id="carousel-imgs-wrapper">
          <div class="prevWork">
            <!-- <img :src="worksCarousel[prevWork].src" alt="" :class="sideLeft"> -->
             <Transition :name="rightSideAnimation">
                <img :src="worksCarousel[prevWork].src" alt="" v-if="worksCarousel[currentWork].isActive">
            </Transition>
          </div>

          <div class="currentWork">
            <Transition :name="transitionFadeAnimation">
                <img :src="worksCarousel[currentWork].src" alt="" v-if="worksCarousel[currentWork].isActive">
            </Transition>
          </div>

          <div class="nextWork"> 
             <Transition :name="leftSideAnimation">
                <img :src="worksCarousel[nextWork].src" alt="" v-if="worksCarousel[currentWork].isActive">
            </Transition>
            <!-- <img :src="worksCarousel[nextWork].src" alt="" :class="sideRight"> -->
          </div>
      </div>

    </div>
   
  </section>
</template>

<script>
export default {
  name: 'WorksSection',
  data(){
    return{
      transitionFadeAnimation: '',
      rightSideAnimation: '',
      leftSideAnimation: '',
      prevWork: null,
      currentWork: 0,
      nextWork: 1,
      worksCarousel: [
        {
          text: '1',
          src: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
          isActive: true,
        },
        {
          text: '2',
          src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
          isActive: false,
        },
        {
          text: '3',
          src: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo',
          isActive: false,
        },
        {
          text: '4',
          src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
          isActive: false,
        },
      ]
    }
  },
  computed:{
    animatedClass(){
      return this.worksCarousel[this.currentWork].isActive ? 'sidePicFade' : 'opacity-0';
    }
  },
  methods:{
    $_nextSlideOnClick(){
      if(this.currentWork === this.worksCarousel.length - 1){
        this.currentWork = 0;
        if(this.currentWork === 0){
          this.prevWork = this.worksCarousel.length -1;
          this.nextWork = 1;
        }
      }else{
        this.currentWork++;
        this.prevWork = this.currentWork -1;
        if(this.currentWork === this.worksCarousel.length -1){
          this.nextWork = 0;
        }else{
          this.nextWork = this.currentWork + 1;
        }
      }
      this.$_animationClassForSidePic(true);
    },

    $_previousSlideOnClick(){
     if(this.currentWork === 0){
      this.currentWork = this.worksCarousel.length - 1;
      if(this.currentWork === this.worksCarousel.length - 1){
        this.prevWork = this.worksCarousel.length - 2;
        this.nextWork = 0;
      }
     }else{
      this.currentWork--;
        this.nextWork = this.currentWork +1;
      if(this.currentWork === 0){
        this.prevWork = this.worksCarousel.length -1;
      }else{
        this.prevWork = this.currentWork -1;
      }
     }
      this.$_animationClassForSidePic(false);
    },

    $_animationClassForSidePic(condition){

      if(condition){
        this.rightSideAnimation = 'side-inLeft';
        this.leftSideAnimation = 'side-outLeft';
        this.transitionFadeAnimation = 'fade-in'
      }else{
        this.rightSideAnimation = 'side-outRigth';
        this.leftSideAnimation = 'side-inRigth';
        this.transitionFadeAnimation = 'fade-out';
      }

       this.worksCarousel.forEach(el =>{
        el.isActive = false;
      })
      setTimeout(() => {
        this.worksCarousel[this.currentWork].isActive = true;
      }, 1);
    },

    $_prevWorkDynamicOnCreated(){
      this.prevWork = this.worksCarousel.length -1;
    }
  },
  created() {
    this.$_prevWorkDynamicOnCreated();
  },
}
</script>

<style lang="scss" scoped>
  
  @import '../../scss/partials/_variables.scss';

  #carousel-imgs-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    .currentWork, .prevWork, .nextWork{
      margin: 1rem;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          &::selection{
          background-color: transparent;
        }
      }
    }
  
    .currentWork{
      width: 10rem;
      height: 10rem;
      z-index: 2;
    }
  
    .prevWork, .nextWork{
      // overflow: hidden;
      width: 5rem;
      height: 5rem;
    }

    .fade-in-enter-active, 
    .fade-out-enter-active,
    .side-inRigth-enter-active,
    .side-outRigth-enter-active,
    .side-inLeft-enter-active,
    .side-outLeft-enter-active{
      transition: all 1s ease-in-out;
    }
  
    // .fade-in-enter{
    //   transform: translateX(100%) scale(.5);
    // }
    // .fade-out-enter{
    //   transform: translateX(-50%) scale(.5);
    // }

    // .side-out-enter{
    //   transform: translate(100%);
    // }

    // .side-in-enter{
    //   transform: translate(-100%) scale(2);
    // }
  

    .fade-in-enter{
      transform: translateX(100%) scale(.5);
    }
    .fade-out-enter{
      transform: translateX(-100%) scale(.5);
    }

    .side-outRigth-enter{
      opacity: 0;
      transform: translate(-100%) scale(.5);
    }

    .side-inRigth-enter{
      transform: translate(-200%) scale(2);
    }

    .side-inLeft-enter{
      transform: translate(200%) scale(2);
    }

    .side-outLeft-enter{
      opacity: 0;
      transform: translate(100%) scale(.5);
    }

  }
  


  #works{
    // min-height: 100vh;
    position: relative;
    .btns-field{
      span{
        position: absolute;
        z-index: 1;
        top: 70%;
        &:last-child{
          right: 0;
        }
        svg{
          height: 3rem;
          width: 3rem;
        }
        path{
          color: $innerNebulaDark;
        }
        &:hover path{
          color: $innerNebulaLight;
        }

      }
    }

  }

</style>