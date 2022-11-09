<template>
  <section id="skills" class="row pt-lg-5">
    <div class="col-12 col-md-10 offset-md-1">
          <h3 class="pageStyleWordLight text-capitalize mb-5 text-center text-md-start">
            my skills
          </h3>
        <div class="row justify-content-around">
             
          <div v-for="(skillSet, i) in  skillsList" :key="i" 
          class="text-capitalize nebulaStyleLinkDark col-6 col-lg-3 fs-2 d-none d-lg-block" 
          @click="$_getSkillSetsIndex(i)">
            {{ skillSet.type  }}
          </div>

          <div class="col-10 m-auto d-lg-none">
              <select id="selection" v-model="currentSkill"
              class="pageStyleWordLight fs-2 w-100 rounded">
                <option  v-for="(skillSet, n) in  skillsList" :key="n"
                :value="n" class="pageStyleWordDark fs-2">
                  {{ skillSet.type  }}  
                </option>
              </select>
          </div>
          
          <div v-for="tool in skillsList[currentSkill].tools" :key="tool.name" 
          class="col-6 text-center text-md-start col-md-4 offset-md-2 mt-5 py-3 fs-3">
            <font-awesome-icon :icon="fixedFontAwesomeIconsPath(tool.icon)" />
            <span class="ms-2">{{ tool.name }}</span>
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
              name: 'Vue 2',
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
    min-height: 80vh;
    #selection{
      text-transform: capitalize;
      border: 1px solid #fff;
      background-color: rgba(white,.1);
      padding: 5px;
      option{
        border: 1px solid #e4e4e4;
        background-color: transparent;
        -webkit-appearance: none; 
        -moz-appearance: none; 
      }

    }
  }

</style>