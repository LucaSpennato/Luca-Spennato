<template>
  
    <main>

        <div class="container py-1 py-lg-5" :ref="'presentationSection'" currentScrollData="0">
          <PresentationSection  />
        </div>
        <div class="container py-5" :ref="'aboutSection'" currentScrollData="1">
          <AboutSection  />
        </div>
        <div class="container py-5" :ref="'skillsSection'" currentScrollData="2">
          <SkillsSection  />
        </div>
        <div class="container py-5" :ref="'worksSection'" currentScrollData="3">
          <WorksSection />
        </div>
        <div class="container py-5" :ref="'reachMeSection'" currentScrollData="4">
          <ReachMeSection />
        </div>

    </main>

</template>

<script>
import PresentationSection from '../components/mainComponents/PresentationSection.vue';
import AboutSection from '../components/mainComponents/AboutSection.vue';
import SkillsSection from '../components/mainComponents/SkillsSection.vue';
import WorksSection from '../components/mainComponents/WorksSection.vue';
import ReachMeSection from '../components/mainComponents/ReachMeSection.vue';

export default {
    name: 'MainComponent',
    components:{
        PresentationSection,
        AboutSection,
        SkillsSection,
        WorksSection,
        ReachMeSection,
    },
    data(){
      return{
        currentScrollYPosition: 0,
        sectionsParams: [],
      }
    },
    methods:{
      $_scrollSpyFilter(sectionRef){
        let { offsetTop, offsetHeight, attributes : { currentScrollData } } = sectionRef;
            if(this.currentScrollYPosition >= offsetTop - 100 && this.currentScrollYPosition < offsetHeight + offsetTop){
              this.$emit('currentSectionOnScroll', currentScrollData.value);
        }
      },
      $_scrollSpy(){
        this.currentScrollYPosition = window.scrollY;
        this.$_scrollSpyFilter(this.$refs.presentationSection);
        this.$_scrollSpyFilter(this.$refs.aboutSection);
        this.$_scrollSpyFilter(this.$refs.skillsSection);
        this.$_scrollSpyFilter(this.$refs.worksSection);
        this.$_scrollSpyFilter(this.$refs.reachMeSection);
        
      },
    },
    created() {
      window.addEventListener('scroll', this.$_scrollSpy);
    },
    destroyed() {
      window.removeEventListener('scroll', this.$_scrollSpy);
    },
}
</script>

<style lang="scss">

</style>