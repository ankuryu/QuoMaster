<template>
  <div class="details container">
    <router-link to="/">Back</router-link>
    <h1 class="page-header">{{quote.qno}} {{quote.pname}}
        <span class="pull-right">
            <router-link class="btn btn-primary" v-bind:to="'/edit/'+quote.qno">Edit</router-link>
            <button class="btn btn-danger" v-on:click="deleteQuote(quote.qno)">Delete</button>
            </span>
    </h1>
    <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> {{customer.phone}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{customer.email}}</li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item"> {{customer.address}}</li>
            <li class="list-group-item">{{customer.city}}</li>
            <li class="list-group-item">{{customer.state}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'quotedetails',
  data () {
    return {
      quote: ''
    }
  },
  methods:{
      fetchQuote(qno){
          this.$http.get('http://localhost:port/api/quote/'+qno)
          .then(function(response){
            this.customer = response.body;
          });
      },
      deleteQuote(qno){
          this.$http.delete('http://localhost/api/quote/'+qno)
          .then(function(response){
            this.$router.push({path: '/', query: {alert: 'Quotation Deleted'}});
          });
      }
  },
  created: function(){
      this.fetchQuote(this.$route.params.qno);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
