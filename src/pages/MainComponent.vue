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
        sectionsParams: [],
      }
    },
    methods:{
      $_sendSectionsPositionInfos(){
        this.$emit('currentSectionOnScroll', this.sectionsParams );
      },
      $_aboutInfos(params){
       this.sectionsParams.push(params)

      },
      $_skillsInfo(params){
         this.sectionsParams.push(params)
      }
    },
    mounted(){
      this.$_sendSectionsPositionInfos();
    },
}
</script>

<style lang="scss">


</style>