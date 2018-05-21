<template>
  <div class="details container">
    <router-link to="/">Back</router-link>
    <h1 class="page-header">{{quote.qno}} {{quote.pname}} 
        <span class="pull-right">
                 <router-link class="btn btn-primary" v-bind:to="'/edit/'+quote.id">Edit</router-link>
                 <button class="btn btn-danger" v-on:click="deleteQuote(quote.id)">Delete</button>
            </span>
    </h1>
    <p> ID : {{quote.id}} </p>
    <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> {{quote.phone}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{quote.email}}</li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item"> {{quote.paddr}}</li>
                 <li class="list-group-item">{{quote.enqno}}</li>
                 <li class="list-group-item">{{quote.enqdt}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'quotedetails',
  data() {
    return {
	    quote:{} 
    }
  },
  methods:{
      fetchQuote(qno){
	      var vu = this ;
	      wh = window.location.hostname ;
	      wp = window.location.port ;
		urladdr = "http://" + wp + wh + "/api/quotes/" + qno
	   var  tmp1 = this.quote;
	  this.$http.get('http://localhost:8000/api/quotes/'+qno)
          .then(function(response){
            vu.quote = response.data;
		  console.log("in quote details");
		  console.log( vu.quote);
	  }).catch( (error)=>{
	    console.log(error);
//            this.$router.push({path: '/', query: {alert: 'Error in getting data'}});
	  });
      },
      deleteQuote(qno){
	      var vu = this ;
              //this.$http.delete('http://localhost:8000/api/quotes/'+qno)
	      wh = window.location.hostname ;
	      wp = window.location.port ;
		urladdr = "http://" + wp + wh + "/api/quotes/" + qno
              this.$http.delete(urladdr)
          .then(function(response){
            vu.$router.push({path: '/', query: {alert: 'Quotation Deleted'}});
          });
      }
  },
  created: function(){
	  console.log("being created");
	  console.log( this.$route.params.id);
 Â  Â   this.fetchQuote(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
