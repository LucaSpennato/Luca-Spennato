import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 
{ 
  faCircleChevronLeft as arrowLeft, 
  faCircleChevronRight as arrowRight, 
  faCircleChevronUp as arrowUp, 
  faDatabase as mySql,
  faLeaf as spring,
  faPeopleGroup as teamwork,
  faPizzaSlice as ita,
  faEarthAmericas as eng,
  faBars,
  faX,
} 
from '@fortawesome/free-solid-svg-icons'
import 
{ 
    faGithub as github,
    faVuejs as vue, 
    faHtml5 as html,
    faCss3Alt as css,
    faBootstrap as bootstrap,
    faSass as sass,
    faGitAlt as git,
    faJava as java,
    faJs as js,
    faPhp as php,
    faLaravel as laravel,
    faLinkedin as linkedin,
    faTwitter as twitter,
} 
from '@fortawesome/free-brands-svg-icons'

library.add(
  github, vue, html, css, bootstrap, sass, git, js, php, laravel, java, spring, faBars, faX,
  linkedin, twitter, arrowLeft, arrowRight, arrowUp, mySql, teamwork, ita, eng,
  )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
