<template>
  
    <main class="container-fluid text-light">

        <div class="container-fluid p-0 m-0" :ref="'presentationSection'">
          <PresentationSection  />
        </div>
        <div class="container-fluid p-0 m-0" :ref="'aboutSection'">
          <AboutSection  />
        </div>
        <div class="container-fluid p-0 m-0" :ref="'skillsSection'">
          <SkillsSection  />
        </div>
        <div class="container-fluid p-0 m-0" :ref="'worksSection'">
          <WorksSection />
        </div>



          <!-- <div id="goUpArrow" class="nebulaStyleLinkDark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
          </div> -->

    </main>

</template>

<script>
import PresentationSection from '../components/mainComponents/PresentationSection.vue';
import AboutSection from '../components/mainComponents/AboutSection.vue';
import SkillsSection from '../components/mainComponents/SkillsSection.vue';
import WorksSection from '../components/mainComponents/WorksSection.vue';

export default {
    name: 'MainComponent',
    components:{
        PresentationSection,
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
      $_scrollSpyFilter(sectionRef, sectionPosition){
        let { offsetTop, offsetHeight } = sectionRef;
            if(this.currentScrollYPosition >= offsetTop - 100 && this.currentScrollYPosition < offsetHeight + offsetTop){
              this.$emit('currentSectionOnScroll', sectionPosition);
        }
      },
      $_scrollSpy(){
        this.currentScrollYPosition = window.scrollY;
        this.$_scrollSpyFilter(this.$refs.presentationSection, 0);
        this.$_scrollSpyFilter(this.$refs.aboutSection, 1);
        this.$_scrollSpyFilter(this.$refs.skillsSection, 2);
        this.$_scrollSpyFilter(this.$refs.worksSection, 3);
        
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

  @import '../scss/partials/_variables.scss';
  @import '../scss/partials/_classes.scss';

  // #goUpArrow{
  //     position: fixed;
  //     bottom: 2rem;
  //     right: 2rem;
  //     svg{
  //       border: 1px solid $innerNebulaDark;
  //       border-radius: 50%;
  //       width: 2rem;
  //       height: 2rem;
  //       &:hover{
  //         border-color: $innerNebulaLight;
  //       }
  //     }
  //   }
</style>