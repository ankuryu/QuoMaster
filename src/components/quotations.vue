<template>
  <div class="quotations container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Manage Quotations</h1>
    <input class="form-control" placeholder="Enter Party name" v-model="filterInput">
    <br />
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Quotation No</th>
            <th>Party Name</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in filterBy(pname, filterInput)">
            <td>{{customer.first_name}}</td>
            <td>{{customer.last_name}}</td>
            <td>{{customer.email}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">View</router-link></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert';
  export default {
    name: 'Quotations',
    data () {
      return {
        quotations: [],
        alert:'',
        filterInput:''
      }
    },
    methods: {
      fetchQuotations(){
        this.$http.get('http://localhost:port/api/quotations')
          .then(function(response){
            this.quotations= response.body;
          });
      },
      filterBy(list, value){
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return list.filter(function(customer){
          return customer.last_name.indexOf(value) > -1;
        });
      }
    },
    created: function(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
      this.fetchQuotations();
    },
    updated: function(){
      this.fetchQuotations();
    },
    components: {
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
