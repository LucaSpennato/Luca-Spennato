<template>
  
    <main class="container-fluid py-5 my-5 text-light">

        <AboutSection @sectionInfos="$_sectionInfos" />

        <SkillsSection @sectionInfos="$_sectionInfos" />

        <WorksSection @sectionInfos="$_sectionInfos" />

    </main>

</template>

<script>
import AboutSection from '../components/mainComponents/AboutSection.vue';
import SkillsSection from '../components/mainComponents/SkillsSection.vue';
import WorksSection from '../components/mainComponents/WorksSection.vue';

export default {
    name: 'MainComponent',
    components:{
        AboutSection,
        SkillsSection,
        WorksSection,
    },
    data(){
      return{
        currentScrollYPosition: 0,
        sectionsParams: [],
      }
    },
    methods:{
      $_sectionInfos(params){
        this.$emit('currentSectionOnScroll', params);
      },
    },
}
</script>

<style lang="scss">


</style>