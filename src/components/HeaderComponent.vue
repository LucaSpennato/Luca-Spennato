<template>
  <header id="header" class="container-fluid fixed-top">
    <nav>
      <div class="row">
       
        <ul id="toggleMenu" class="text-end d-lg-none"
        :class="{'bgAnimated': isHambOpen }">
        <li class="p-0">
          <div id="hambMenu" class="col-12 d-flex justify-content-end my-2 d-lg-none" >
            <button @click="isHambOpen = !isHambOpen">
              <font-awesome-icon icon="fa-solid fa-bars"/>
            </button>
          </div>
        </li>
          <Transition name="hambMenu">
            <li v-show="isHambOpen">
              <div v-for="(link, i) in navBarLinks" :key="i" class="d-lg-inline py-2" >
                <a :href="link.route" :class="{ 'active' : link.isActive }" @click="isHambOpen = !isHambOpen">
                  {{ link.text }}
                </a>
              </div>
            </li>
          </Transition>
        </ul>
      </div>
      <div class="row justify-content-center justify-content-lg-end">
    
      <ul class="d-none d-lg-block col-lg-6 text-end py-lg-3">
        <li v-for="(link, i) in navBarLinks" :key="i" class="d-lg-inline py-2">
          <a :href="link.route" :class="{ 'active' : link.isActive }" >
            {{ link.text }}
          </a>
        </li>
      </ul>
      
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data(){
    return{
      currentActive: 0,
      isHambOpen: false,
      navBarLinks:[
        {
          text: 'Home',
          route: '#',
          isActive: true,           
        },
        {
          text: 'about',
          route: '#about',
          isActive: false,           
        },
        {
          text: 'skills',
          route: '#skills',
          isActive: false,           
        },
        {
          text: 'works',
          route: '#works',
          isActive: false,           
        },
        {
          text: 'contact',
          route: '#reachMe',
          isActive: false,           
        },
      ]
    }
  },
  props:{
    currentPageYPosition:{
      type: [Number, String],
      required: false,
    }
  },
  watch:{
    currentPageYPosition(oldVal, newVal){
      if(oldVal != newVal){
        this.navBarLinks.forEach(link => {
          link.isActive = false;
        });
        this.navBarLinks[this.currentPageYPosition].isActive = true;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '../scss/partials/_variables.scss';

  #header{
    #toggleMenu{
      backdrop-filter: transparent;
      transition: all 200ms linear;
    }
    .bgAnimated{
      backdrop-filter: blur(15px);
    }
    .hambMenu-enter-active, 
    .hambMenu-leave-active {
      transition: all 200ms;
    }
    .hambMenu-enter, 
    .hambMenu-leave-to{
      opacity: 0;
      transform: translateX(50%);
    }
    #hambMenu{
      button{
        border: 2px solid $innerNebulaLight;
        padding: .4rem .8rem;
        border-radius: 5px;
        background-color: $outerSpaceDark;
      }
      svg{
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: middle;
        path{
          color: $innerNebulaLight;
        }
      }
        &:active{
          button{
            border-color: $innerNebulaDark;
          }
          path{
            color: $innerNebulaDark;
          }
        }
    }
    
    ul{
      list-style: none;

      li{
        padding: 0 1rem;

        .active{
          color: $innerNebulaLight;
        }

        a{
          text-transform: capitalize;
          font-weight: bold;
          color: $innerNebulaDark;
          filter: brightness(150%);
          text-decoration: none;

          @media screen and (min-width: 992px){
            &:hover{
               color: $innerNebulaLight;
            }
          }
        }
      }
    }

    
  }

</style>