<template>
  <section id="works" class="row">
  
    <div class="col-12 m-auto mb-3">
        <h4 class="pageStyleWordLight text-capitalize">
        Works i've done
      </h4>
    </div>
    <div class="col-12 m-auto">

      <!-- Images -->
      <div id="carousel-imgs-wrapper" class="row">
          <div class="prevWork d-none d-lg-block col-3">
            <!-- <img :src="worksCarousel[prevWork].src" alt="" :class="sideLeft"> -->
             <Transition :name="rightSideAnimation">
                <img :src="$_fixedPath(worksCarousel[prevWork].src)" alt="" v-if="worksCarousel[currentWork].isActive">
            </Transition>
          </div>

          <div class="currentWork col-12 col-lg-6">
            <Transition :name="transitionFadeAnimation">
                <img :src="$_fixedPath(worksCarousel[currentWork].src)" alt="" v-if="worksCarousel[currentWork].isActive">
            </Transition>
          </div>

          <div class="nextWork d-none d-lg-block col-3"> 
             <Transition :name="leftSideAnimation">
                <img :src="$_fixedPath(worksCarousel[nextWork].src)" alt="" v-if="worksCarousel[currentWork].isActive">
            </Transition>
            <!-- <img :src="worksCarousel[nextWork].src" alt="" :class="sideRight"> -->
          </div>

           <!-- Buttons -->
            <div class="btns-field my-3">
              <span class="mx-2" @click="$_previousSlideOnClick()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
              </svg>
              </span>
              <span class="mx-2" @click="$_nextSlideOnClick()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              </span>
            </div>

          <div class="col-12 my-4">
            <h2 class="pageStyleWordLight text-capitalize">
                {{ worksCarousel[currentWork].name }}
            </h2>
            <div>
                <font-awesome-icon icon="fa-solid fa-user-secret" />
                <font-awesome-icon icon="fa-brands fa-github" />
            </div>
           <div class="col-12 col-md-10 mt-4 description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta aliquam magnam quaerat officia impedit ipsum quisquam quo, mollitia provident eos error hic totam quos quas optio dolore fugit ipsam?
            </div>
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
          name: 'laravel backOffice',
          description: '',
          src: 'backend',
          isActive: true,
        },
        {
          name: 'boolflix search feature with axios',
          src: 'boolflix',
          description: '',
          isActive: false,
        },
        {
          name: 'boolzapp web clone',
          src: 'boolzapp',
          description: '',
          isActive: false,
        },
        {
          name: 'dc comics frontend clone',
          src: 'dccomics',
          description: '',
          isActive: false,
        },
        {
          name: 'dropbox frontend clone',
          src: 'dropbox',
          description: '',
          isActive: false,
        },
        {
          name: 'playstation frontend clone',
          src: 'playstation',
          description: '',
          isActive: false,
        },
        {
          name: 'spotify frontend clone',
          src: 'spotify',
          description: '',
          isActive: false,
        },
      ]
    }
  },
  methods:{
    $_fixedPath(string){
      return require( '../../assets/works/' + string + '.png');
    },
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
  @import '../../scss/partials/_classes.scss';
  // @import '@fortawesome/fontawesome-free/scss/fontawesome.scss';

  #carousel-imgs-wrapper{
    *:not(.description){
      &::selection{
          background-color: transparent;
        }
    }
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .currentWork{
      z-index: 2;
    }
    .currentWork, .prevWork, .nextWork{
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
         
      }
    }
    
    .fade-in-enter-active, 
    .fade-out-enter-active,
    .side-inRigth-enter-active,
    .side-outRigth-enter-active,
    .side-inLeft-enter-active,
    .side-outLeft-enter-active{
      transition: all 300ms ease-in-out;
    }

    .fade-in-enter{
      transform: translateX(100%) scale(.5);
    }
    .fade-out-enter{
      transform: translateX(-100%) scale(.5);
    }

    @media screen and (max-width: 991.92px){
      .fade-in-enter-active, 
      .fade-out-enter-active{
        transition: all 200ms ease-in-out;
      }
      .fade-in-enter{
        transform: translateX(50%);
      }
      .fade-out-enter{
        transform: translateX(-50%);
      }
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
    position: relative;
    .btns-field{
      display: flex;
      justify-content: space-between;
      span{
        z-index: 5;
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