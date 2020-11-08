import Vue from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from 'axios';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from "bootstrap-vue";
import router from './router';
import store from "@/store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VuejsDialog from 'vuejs-dialog';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import moment from 'vue-moment';

import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

//form validation
import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import {messages} from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';


//install validate rule and messages
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});


Vue.component('font-awesome-icon', FontAwesomeIcon);
//install VeeValidate components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);


Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(VuejsDialog);
Vue.use(moment);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
