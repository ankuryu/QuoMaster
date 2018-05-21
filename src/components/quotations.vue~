<template>
<div class="quotations container">
  <Alert v-if="alert" v-bind:message="alert" />
  <h1 class="page-header">Manage Quotations</h1>
  <input class="form-control" placeholder="Enter Company name" v-model="filterInput">
  <br />
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Quotation No</th>
        <th>Date</th>
        <th>Party Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="quotation in filterBy(quotations, filterInput)">
        <td>{{quotation.qno}}</td>
        <td>{{quotation.qdt}}</td>
        <td>{{quotation.pname}}</td>

        <td>
              <router-link class="btn btn-default" v-bind:to="'/quote/'+quotation.id">View</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
//import Axios from 'axios';
import Alert from './Alert';
export default {
  name: 'Quotations',
  data() {
    return {
      quotations: [],
      alert: '',
      filterInput: '',
      counter: 0
    }
  },
  methods: {
    fetchQuotations() {
      var vu = this
      wh = window.location.hostname ;
      wp = window.location.port ;
	urladdr = "http://" + wp + wh + "/api/quotes"
      //this.$http.get('http://localhost:8000/api/quotes')
      this.$http.get(urladdr);
        .then(function(response) {
          vu.quotations = response.data ;
          console.log(vu.quotations);
        });
    },
    filterBy(list, value) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(quotation) {
       return quotation.pname.indexOf(value) > -1;
      });
    }
  },
  created: function() {
    console.log("created")
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchQuotations();
  },
  updated: function() {
    this.counter++
      console.log(this.counter);
    //      debugger ;
    //this.fetchQuotations();
  },
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
