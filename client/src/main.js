/* jshint  esversion:6 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import Axios  from  'axios';
import VueAxios from 'vue-axios' ;
import Quotations from './components/quotations';
import About from './components/About';
import AddQuo from './components/AddQuo';
import Edit from './components/Edit';
import QuoteDetails from './components/QuoteDetails';
import Quote from './components/quo.vue';
import OneQuo from './components/onequo.vue';
import Items from './components/items.vue';
import OneItem from './components/oneitem.vue';
import Tnc from './components/tnc.vue';
//Vue.use(vueResource) ;
Vue.use(VueAxios,Axios);
//Vue.use(Axios);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: Quotations},
    {path: '/about', component: About},
    {path: '/add', component: AddQuo},
    {path: '/quote/:id', component: QuoteDetails},
    {path: '/edit/:id', component: Edit},
    {path: '/onequo',component: OneQuo },
    {path: '/items',component: Items },
    {path: '/oneitem',component: OneItem },
    {path: '/tnc',component: Tnc },
    {path: '/quo',component: Quote }

  ]
});

/* eslint-disable no-new */

 var  vm = new Vue({
  router,
    http: {
            emulateJSON: true,
            emulateHTTP: true
    },
	
  template: `
    <div id="app">
      <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">vCustomers</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">Add Quotation</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
      <router-view></router-view>
    </div>
  `
}).$mount('#app');
