import Vue from 'vue';
import App from './App.vue';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faCheck, faUpload, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUser);
library.add(faCheck);
library.add(faUpload);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

export const EventBus = new Vue();
new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
