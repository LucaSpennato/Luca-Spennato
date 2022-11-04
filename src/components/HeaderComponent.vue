<template>
  <nav id="header" class="container pt-4 sticky-top">
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
</template>

<script>
export default {
    name: 'HeaderComponent',
    data(){
      return{
        currentActive: 0,
        navBarLinks:[
          {
            text: 'About',
            route: '#about',
            isActive: true,           
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
          console.log(oldVal, newVal)
          this.navBarLinks.forEach(link => {
            link.isActive = false;
          });
          this.navBarLinks[this.currentPageYPosition].isActive = true;
        }
      }
    },
    methods:{
      $_navActiveWhenCreated(){
        this.navBarLinks.forEach(link => {
            link.isActive = false;
          });
          this.navBarLinks[this.currentActive].isActive = true;
      },
    },
    mounted(){
      this.$_navActiveWhenCreated();
    }

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