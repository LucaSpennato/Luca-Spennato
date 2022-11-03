<template>
  <nav id="header" class="container py-4 fixed-top">
    <div class="row">

      <ul class="col-12" :ref="'test'">
        <li v-for="(link, i) in navBarLinks" :key="i" >
          <a :href="link.route" :class="{ 'active' : link.isActive }" @click.prevent="$_goTo()">
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
        currentScrollYPosition: 0,
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
            route: '#',
            isActive: false,           
          },
        ]
      }
    },
    props:{
      currentPagePositionInfos:{
        type: Array,
        required: false,
      }
    },
    watch:{
      currentActive(oldVal, newVal){
        if(oldVal != newVal){
          this.navBarLinks.forEach(link => {
            link.isActive = false;
          });
          this.navBarLinks[this.currentActive].isActive = true;
        }
      }
    },
    methods:{

      $_scrollSpy(){
        this.currentScrollYPosition = window.scrollY;
        this.currentPagePositionInfos.forEach(section => {
          if(this.currentScrollYPosition >= section.offsetTop - 150 && this.currentScrollYPosition < section.sectionHeight){
            this.currentActive = section.position;
          }
          
        });
      },
      $_navActiveWhenCreated(){
        this.navBarLinks.forEach(link => {
            link.isActive = false;
          });
          this.navBarLinks[this.currentActive].isActive = true;
      },

      $_goTo(){
        window.scrollTo(0, 900)
      }
    },
    mounted(){
      this.$_navActiveWhenCreated();
    },
    created() {
      window.addEventListener('scroll', this.$_scrollSpy);
    },
    destroyed() {
      window.removeEventListener('scroll', this.$_scrollSpy);
    },

}
</script>

<style lang="scss" scoped>


  #header{

    .active{
      color: red;
    }

    ul{
      list-style: none;
      text-align: end;

      li{
        display: inline;
        margin: 0 1rem;
        a{
          text-transform: capitalize;
          color: white;
          text-decoration: none;
        }
      }
    }
  }

</style>