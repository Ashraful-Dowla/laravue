// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import VueCkeditor from 'vue-ckeditor5'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator; 

Vue.use(SimpleVueValidation)
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)

const options = {
  editors: {
    classic: ClassicEditor,
  },
  name: 'ckeditor',
}
 
Vue.use(VueCkeditor.plugin, options);
  

Vue.config.productionTip = false

import VueResource from 'vue-resource'
import axios from 'axios'
Vue.use(VueResource)

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/
router.beforeEach((to,from,next) => {
	if(to.meta.requiresAuth) {
		const authUser = JSON.parse(window.localStorage.getItem('authUser'))
		if(authUser && authUser.access_token){
		 	next()
		}
		else{
			next({name: 'login'})
		}
	}
	next()
})
new Vue({
	router
}).$mount('#app');
