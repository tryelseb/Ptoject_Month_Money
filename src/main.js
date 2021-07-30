import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import VueMeta from 'vue-meta'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import router from './router'
import store from './store'
import Tooltip from '@/directive/tooltip.directive'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.use(titlePlugin)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', Tooltip)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyA0o4TTkwyD2b8u6yo-kVqsKbKxzlfCfS4",
  authDomain: "lear-base-app.firebaseapp.com",
  projectId: "lear-base-app",
  storageBucket: "lear-base-app.appspot.com",
  messagingSenderId: "671000864275",
  appId: "1:671000864275:web:9ca7f22dca29ef0e0b41e6",
  measurementId: "G-MQ62QN34ZM"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  
})


