<template>
<div class="edit container">
  <Alert v-if="alert" v-bind:message="alert" />
  <h1 class="page-header">Edit Quotation</h1>
  <form v-on:submit="updateQuote">
    <div class="well">
      <h4>QuoteInfo</h4>
      <div class="form-group">
        <label>Party Name</label>
        <input type="text" class="form-control" placeholder="PartyName" v-model="quote.pname">
      </div>
      <div class="form-group">
        <label>Address</label>
        <input type="text" class="form-control" placeholder="Address" v-model="quote.paddr">
      </div>
    </div>
    <div class="well">
      <h4>Quote Contact</h4>
            <div class="form-group">
        <label>Contact Name</label>
        <input type="text" class="form-control" placeholder="Contact Name" v-model="quote.contact">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" placeholder="Email" v-model="quote.email">
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input type="text" class="form-control" placeholder="Phone" v-model="quote.tel">
      </div>
    </div>

    <div class="well">
      <h4>Quote Details</h4>
      <div class="form-group">
        <label>Enq No</label>
        <input type="text" class="form-control" placeholder="Enq No" v-model="quote.enqno">
      </div>
      <div class="form-group">
        <label>Enq Dt</label>
        <input type="text" class="form-control" placeholder="Enq Dt" v-model="quote.enqdt">
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  data() {
    return {
      quote: {},
      alert: ''
    }
  },
  methods: {
    fetchQuote(id) {
	    var vu = this
var	      wh = window.location.hostname ;
var	      wp = window.location.port ;
	     wp = ":8000";
var		urladdr = "http://" + wh + wp  + "/api/quotes/" + id
      //this.$http.get('http://localhost:8000/api/quotes/' + id)
      this.$http.get(urladdr)
        .then(function(response) {
          vu.quote = response.data;
        });
    },
    updateQuote(e) {
      if (!this.quote.pname || !this.quote.paddr) {
        this.alert = 'Please fill in all required fields';
      } else {
        let updQuote = {
          qno: this.quote.qno,
          qdt: this.quote.qdt,
          pname: this.quote.pname,
          paddr: this.quote.paddr,
          enqno: this.quote.enqno,
          enqdt: this.quote.enqdt,
          tel: this.quote.tel,
          email: this.quote.email,
          contact: this.quote.contact
        }
        console.log(updQuote);
	var vu = this ;
var      wh = window.location.hostname ;
var      wp = window.location.port ;
	       wp = ":8000";
var	urladdr = "http://" + wh + wp  + "/api/quotes/" + this.$route.params.id
       // this.$http.put('http://localhost:8000/api/quotes/' + this.$route.params.id, updQuote)
console.log(urladdr);
	this.$http.put(urladdr, (updQuote))     
          .then(function(response) {
            vu.$router.push({
              path: '/',
              query: {
                alert: 'Quotation Updated'
              }
            });
          }).catch( (error)=> {
            console.log(error);
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created: function() {
    this.fetchQuote(this.$route.params.id);
  },
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
