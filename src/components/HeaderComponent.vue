<template>
  <nav id="header" class="container py-4 fixed-top">
    <div class="row" :ref="'ciao'">

      <ul class="col-12" :ref="'test'">
        <li v-for="(link, i) in navBarLinks" :key="i" >
          <a :href="link.route" :class="{ 'active' : link.isActive }">
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
            route: '#',
            isActive: false,           
          },
        ]
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
      scrollSpy(){
        // console.log(window.scrollY > 200);
        if(window.scrollY > 200){
          // console.log(window.scrollY)
        }
      },
      $_navActiveWhenCreated(){
        this.navBarLinks.forEach(link => {
            link.isActive = false;
          });
          this.navBarLinks[this.currentActive].isActive = true;
      },

      testings(){
        console.log(this.$refs.test.scrollHeight);
        
        console.log(this.$refs);
      }
    },
    mounted(){
      this.$_navActiveWhenCreated();
    }

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