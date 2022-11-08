<template>
  <section id="works" class="row pb-5">
  
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
                <img :src="$_fixedImgPath(worksCarousel[prevWork].src)" alt="" v-if="worksCarousel[currentWork].isActive">
            </Transition>
          </div>

          <div class="currentWork col-12 col-lg-6">
            <Transition :name="transitionFadeAnimation">
                <img :src="$_fixedImgPath(worksCarousel[currentWork].src)" alt="" v-if="worksCarousel[currentWork].isActive">
            </Transition>
          </div>

          <div class="nextWork d-none d-lg-block col-3"> 
             <Transition :name="leftSideAnimation">
                <img :src="$_fixedImgPath(worksCarousel[nextWork].src)" alt="" v-if="worksCarousel[currentWork].isActive">
            </Transition>
            <!-- <img :src="worksCarousel[nextWork].src" alt="" :class="sideRight"> -->
          </div>

           <!-- Buttons -->
            <div class="btns-field my-3">
              <span class="mx-2" @click="$_previousSlideOnClick()">
              <font-awesome-icon icon="fa-solid fa-circle-chevron-left" />
              </span>
              <span class="mx-2" @click="$_nextSlideOnClick()">
                <font-awesome-icon icon="fa-solid fa-circle-chevron-right" />
              </span>
            </div>

          <div class="col-12 my-4">
            <div class="fs-2 d-flex">
                <a class="mx-3 icon" :href="worksCarousel[currentWork].repoLink" target="_blank">
                   <font-awesome-icon icon="fa-brands fa-github" />
                </a>
                <span class="pageStyleWordLight text-capitalize">{{ worksCarousel[currentWork].name }}</span>
            </div>
            <ul id="tech-icons-wrapper">
              <li class="mx-2 icon" v-for="(icon, i) in worksCarousel[currentWork].techUsed" :key="i">
                <font-awesome-icon :icon=" $_fixedFontAwesomeIconsPath(icon)" />
              </li>
            </ul>
           <div class="col-12 col-md-10 mt-4 description">
              {{ worksCarousel[currentWork].description }}
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
          name: 'BoolBnb',
          src: 'boolBnb',
          description: `The end-of-course project. 
                      It is a fully working airBnb like website with all the technologies and knowledge gained during the bootcamp.
                      The project was realized in team over one month and followed by two project managers.
                      In backoffice it is possible to: user registration with validations, entering a house to rent, entering all the required details and parameters with client-side and backend validation, photo upload, entering the exact location of the house with TomTom's API, editing, deleting,
                      viewing statistics with the use of the Chart.js API, viewing any messages sent by users from the front office and sponsoring properties, which will be displayed with a higher priority during the search in front office.
                      In the front office it allows searching for property in the database using the TomTom's API, filtering them without page refresh, displaying individual apartments, and the possibility of contacting the property owner via a contact form.`,
          techUsed: ['html5', 'css3','bootstrap','sass', 'git', 'js', 'vuejs', 'php', 'laravel', 'database', 'group'],
          repoLink: 'https://github.com/MatteoGenovese/BoolBnb',
          isActive: true,
        },
        {
          name: 'laravel backOffice',
          src: 'backend',
          description: `My first "big" project with laravel, a database management backoffice.
                        It allows creation, editing, soft and permanent deletion, viewing in detail of any entry there is a need for, tags assignment, user registration, photo uploads and roles assignable to different users by any administrators.
                        It also provides for an API, managed with AXIOS in frontoffice by using Vuejs.`,
          techUsed: ['html5', 'css3','bootstrap','sass', 'git', 'js', 'vuejs', 'php', 'laravel', 'database'],
          repoLink: 'https://github.com/LucaSpennato/laravel-boolpress',
          isActive: true,
        },
        {
          name: 'php OOP api',
          src: 'oopapi',
          description: 'Project made with Php OOP, contains a mock database and an API managed by a controller, all displayed on the page with an AXIOS call.',
          techUsed: ['html5', 'css3','bootstrap', 'git', 'php'],
          repoLink: 'https://github.com/LucaSpennato/php-ajax-dischi',
          isActive: true,
        },
        {
          name: 'boolflix search feature with axios',
          src: 'boolflix',
          description: 'The first project made with AXIOS, the application will query with at API TheMovieDatabase and show the results on the page. The cards if hovered, will show other information: overview, rating, title, original title and original language.',
          techUsed: ['html5', 'css3','bootstrap','sass','git', 'js', 'vuejs'],
          repoLink: 'https://github.com/LucaSpennato/vue-boolflix',
          isActive: false,
        },
        {
          name: 'boolzapp web replica',
          src: 'boolzapp',
          description: 'A small reproduction of whatsapp web, the first technical challenge with Vue. It allows to send messages with response from a bot.',
          techUsed: ['html5', 'css3', 'bootstrap', 'git', 'js', 'vuejs'],
          repoLink: 'https://github.com/LucaSpennato/vue-boolzapp',
          isActive: false,
        },
        {
          name: 'dc comics frontend replica',
          src: 'dccomics',
          description: 'Frontend reproduction of DC Comics home page, made with Vue Cli. In this small project each section is built using components, populated using arrays of literal objects.',
          techUsed: ['html5', 'css3', 'bootstrap', 'git', 'js', 'vuejs'],
          repoLink: 'https://github.com/LucaSpennato/vue-dc-comics',
          isActive: false,
        },
        {
          name: 'playstation frontend replica',
          src: 'playstation',
          description: 'Frontend reproduction of Playstation site. First technical challenge using bootstrap, the page is completely mobile responsive.',
          techUsed: ['html5', 'css3', 'bootstrap', 'git'],
          repoLink: 'https://github.com/LucaSpennato/htmlcss-playstation',
          isActive: false,
        },
        {
          name: 'spotify web frontend replica',
          src: 'spotify',
          description: 'Spotify web frontend reproduction. One of my first works, it was the first technical challenge using entirely html and css, the page is completely responsive.',
          techUsed: ['html5', 'css3', 'git'],
          repoLink: 'https://github.com/LucaSpennato/html-css-spotifyweb',
          isActive: false,
        },
      ]
    }
  },
  methods:{
    $_fixedFontAwesomeIconsPath(string){

      let correctedStringPath;

      switch (string) {
        case 'database': 
          correctedStringPath = 'fa-solid fa-database';
          break;
        case 'css3':
        case 'git':
          correctedStringPath = 'fa-brands fa-' + string + '-alt';
          break;
        case 'group':
          correctedStringPath = 'fa-solid fa-people-group';
          break;
        default:
          correctedStringPath = 'fa-brands fa-' + string;
          break;
      }

      return correctedStringPath;

      // if(string === 'database'){
      //   return 'fa-solid fa-database';
      // }else if(string === 'group'){
      //   return 'fa-solid fa-people-group';
      // }else if(string === 'css3' || string === 'git'){
      //   return 'fa-brands fa-' + string + '-alt';
      // }else{
      //   return 'fa-brands fa-' + string;
      // }
    },
    $_fixedImgPath(string){
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

    #tech-icons-wrapper{
      list-style: none;
      padding: 0;
      .repo-link{
        display: flex;
        align-items: center;
      }
      li, a {
        margin: .5rem 0;
        &.icon{
          display: inline;
          svg{
            height: 1.5rem;
            width: 1.5rem;
          }
        }
      }
    }


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
  }

</style>