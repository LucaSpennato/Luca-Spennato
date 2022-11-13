<template>
  <header id="header" class="container-fluid pt-4 sticky-top">
    <nav>
      <div class="row">

        <ul class="col-12">
          <li v-for="(link, i) in navBarLinks" :key="i">
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
      navBarLinks:[
        {
          text: '',
          route: '',
          isActive: true,           
        },
        {
          text: 'About',
          route: '#about',
          isActive: false,           
        },
        {
          text: 'Skills',
          route: '#skills',
          isActive: false,           
        },
        {
          text: 'Works',
          route: '#works',
          isActive: false,           
        },
        {
          text: 'Reach me',
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
    
    ul{
      list-style: none;
      text-align: end;

      li{
        display: inline;
        margin: 0 1rem;
      &:first-child{
        display: none;
      }

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