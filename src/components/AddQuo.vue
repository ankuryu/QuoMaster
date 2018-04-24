<template>
<div class="add container">
  <Alert v-if="alert" v-bind:message="alert" />
  <h1 class="page-header">Add Quotation</h1>
  <form v-on:submit="addQuotation">
    <div class="well">
      <h4>QuotationInfo</h4>
      <div class="form-group">
        <label>Party Name</label>
        <input type="text" class="form-control" placeholder="Company Name" v-model="quotation.pname">
      </div>
      <div class="form-group">
        <label>Address</label>
        <input type="text" class="form-control" placeholder="Address" v-model="quotation.paddr">
      </div>
    </div>
    <div class="well">
      <h4>Customer Contact</h4>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" placeholder="Email" v-model="quotation.email">
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input type="text" class="form-control" placeholder="Phone" v-model="quotation.tel">
      </div>
    </div>

    <div class="well">
      <h4>Enquiry No</h4>
      <div class="form-group">
        <label>Address</label>
        <input type="text" class="form-control" placeholder="Enw No" v-model="quotation.paddr">
      </div>
      <div class="form-group">
        <label>Enq No</label>
        <input type="text" class="form-control" placeholder="Enq No" v-model="quotation.enqno">
      </div>
      <div class="form-group">
        <label>Enq Dt</label>
        <input type="text" class="form-control" placeholder="Enq Dt" v-model="quotation.enqdt">
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'addquo',
  data() {
    return {
      quotation: {},
      alert: ''
    }
  },
  methods: {
    addQuotation(e) {
      if (!this.quotation.pname || !this.quotation.paddr) {
        this.alert = 'Please fill in all required fields';
      } else {
         this.quotation.enqno = "zz";
	 this.quotation.enqdt = "2017-11-01";
        let newQuotation = {
          qno: "00001",
          qdt: "01/04/2018",
          pname: this.quotation.pname,
          paddr: this.quotation.paddr,
          enqno: this.quotation.enqno,
          enqdt: this.quotation.enqdt,
          qamt: 0,
        }
	console.log(newQuotation);
       var vm = this;
        debugger;
        vm.$http.post('http://localhost:8000/api/quote/add',{params:newQuotation}, 
		{http:{emulateJSON:true,emulateHTTP:true}}
		)
          .then(function(response) {
		console.log(newQuotation);
            console.log('post finished');
            vm.$router.push({
              path: '/',
              query: {
                alert: 'Quotation Added'
              }
            });
          }).catch((error) => {
console.log(error)});

        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
