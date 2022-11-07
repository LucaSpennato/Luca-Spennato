import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 
{ faCircleChevronLeft as arrowLeft, faCircleChevronRight as arrowRight, faCircleChevronUp as arrowUp } 
from '@fortawesome/free-solid-svg-icons'
import 
{ 
    faGithub as github,
    faVuejs as vue, 
    faHtml5 as html,
    faCss3 as css,
    faBootstrap as bootstrap,
    faSass as sass,
    faGit as git,
    faJs as js,
    faPhp as php,
    faLaravel as laravel,
    faLinkedin as linkedin,

} 
from '@fortawesome/free-brands-svg-icons'

library.add(github, vue, html, css, bootstrap, sass, git, js, php, laravel, linkedin, arrowLeft, arrowRight, arrowUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
