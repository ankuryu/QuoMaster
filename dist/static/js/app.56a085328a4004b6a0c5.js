webpackJsonp([1,0,2],[
/* 0 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {/* jshint  esversion:6 */
	
	// The Vue build version to load with the `import` command
	// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
	import Vue from 'vue';
	import App from './App';
	import VueRouter from 'vue-router';
	import vueResource from 'vue-resource';
	import Quotations from './components/quotations';
	import About from './components/About';
	import AddQuo from './components/AddQuo';
	import Edit from './components/Edit';
	import QuoteDetails from './components/QuoteDetails';
	
	Vue.use(vueResource);
	Vue.use(VueRouter);
	
	const router = new VueRouter({
	  mode: 'history',
	  base: __dirname,
	  routes: [{ path: '/', component: Quotations }, { path: '/about', component: About }, { path: '/add', component: AddQuo }, { path: '/customer/:id', component: QuoteDetails }, { path: '/edit/:id', component: Edit }]
	});
	
	/* eslint-disable no-new */
	new Vue({
	  router,
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
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })
]);
//# sourceMappingURL=app.56a085328a4004b6a0c5.js.map