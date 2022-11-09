<template>
  <section id="skills" class="row">
    <div class="col-12 col-md-10 offset-md-1">
          <h4 class="pageStyleWordLight text-capitalize">
            my skills
          </h4>
        <div class="row justify-content-around">
             
                <div v-for="(skillSet, i) in  skillsList" :key="i" class="text-capitalize nebulaStyleLinkDark col-6 col-md-3 fs-2" @click="$_getSkillSetsIndex(i)">
                  {{ skillSet.type  }}
                </div>
          

            
                <div v-for="tool in skillsList[currentSkill].tools" :key="tool.name" class="col-6 col-md-4 offset-2 my-3">
                  <font-awesome-icon :icon="fixedFontAwesomeIconsPath(tool.icon)" />
                  <span>{{ tool.name }}</span>
                </div>
           
        </div>
    </div>

  </section>
</template>

<script>
import { helpers } from '../../mixins/helpers';
export default {
  name: 'SkillsSection',
  mixins: [helpers],
  data(){
    return{
      currentSkill: 0,
      skillsList:[
        {
          type: 'frontEnd',
          tools: [
            {
              icon: 'html5',
              name: 'HTML5',
            },
            {
              icon: 'css3',
              name: 'CSS3',
            },
            {
              icon: 'bootstrap',
              name: 'Bootstrap',
            },
            {
              icon: 'sass',
              name: 'scss',
            },
            {
              icon: 'js',
              name: 'Javascript',
            },
            {
              icon: 'vuejs',
              name: 'Vue js',
            },
            
          ]
        },
        {
          type: 'backend',
          tools:[
            {
              icon: 'php',
              name: 'PHP',
            },
            {
              icon: 'laravel',
              name: 'Laravel',
            },
            {
              icon: 'database',
              name: 'MySql',
            },
          ]
        },
        {
          type:'versioning',
          tools:[
            {
              icon: 'git',
              name: 'Git',
            },
            {
              icon: 'github',
              name: 'Github',
            },
          ]
        },
        {
          type: 'languages',
          tools:[
            {
              icon: 'italian',
              name:'italian (native)'
            },
            {
              icon: 'eng',
              name: 'english B2'
            }
          ]
        }
      ]
    }
  },
  methods:{
    $_getSkillSetsIndex(index){
      this.currentSkill = index;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/partials/_classes.scss';
  @import '../../scss/partials/_variables.scss';

  #skills{
    height: 80vh;
  }

</style>