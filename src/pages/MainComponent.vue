<template>
  
    <main class="container-fluid py-5 my-5 text-light">

        <AboutSection @sectionsInfos="$_aboutInfos" />

        <SkillsSection @sectionsInfos="$_skillsInfo" />

    </main>

</template>

<script>
import AboutSection from '../components/mainComponents/AboutSection.vue';
import SkillsSection from '../components/mainComponents/SkillsSection.vue';

export default {
    name: 'MainComponent',
    components:{
        AboutSection,
        SkillsSection,
    },
    data(){
      return{
        currentScrollYPosition: 0,
        sectionsParams: [],
      }
    },
    methods:{
     $_scrollSpy(){
      this.currentScrollYPosition = window.scrollY;
      // console.log(this.sectionsParams, 'ciao')
      this.sectionsParams.forEach(section => {
        if(this.currentScrollYPosition >= section.offsetTop && this.currentScrollYPosition < section.sectionHeight){
           this.$emit('currentSectionOnScroll', section.position);
        }
        
      });
       
      },
      $_aboutInfos(params){
       console.log(params, 'about arrivato')
       this.sectionsParams.push(params)

      },
      $_skillsInfo(params){
        console.log(params, 'skill arrivato')
         this.sectionsParams.push(params)
      }
    },
    created () {
      window.addEventListener('scroll', this.scrollSpy);
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollSpy);
    },
}
</script>

<style lang="scss">


</style>