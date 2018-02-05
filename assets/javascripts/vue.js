import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import VeeValidate, { Validator } from 'vee-validate'
import fr from 'vee-validate/dist/locale/fr'
import CommentForm from './components/CommentForm'

Vue.use(TurbolinksAdapter)

Validator.localize('fr', fr)
Vue.use(VeeValidate)

Vue.component('comment-form', CommentForm)

/* eslint-disable no-new */
document.addEventListener('turbolinks:load', () => {
  if (document.querySelector('#app')) {
    new Vue({
      el: '#app'
    })
  }
})
