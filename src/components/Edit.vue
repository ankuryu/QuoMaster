<template>
<div class="edit container">
  <Alert v-if="alert" v-bind:message="alert" />
  <h1 class="page-header">Edit Quotation</h1>
  <form v-on:submit="updateQuoote">
    <div class="well">
      <h4>QuoteInfo</h4>
      <div class="form-group">
        <label>Party Nsme</label>
        <input type="text" class="form-control" placeholder="PartyName" v-model="quote.pname">
      </div>
      <div class="form-group">
        <label>Addrese</label>
        <input type="text" class="form-control" placeholder="Address" v-model="quote.addr">
      </div>
    </div>
    <div class="well">
      <h4>Customer Contact</h4>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" placeholder="Email" v-model="quote.email">
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input type="text" class="form-control" placeholder="Phone" v-model="quote.phone">
      </div>
    </div>

    <div class="well">
      <h4>Customer Location</h4>
      <div class="form-group">
        <label>Address</label>
        <input type="text" class="form-control" placeholder="Address" v-model="quote.address">
      </div>
      <div class="form-group">
        <label>City</label>
        <input type="text" class="form-control" placeholder="City" v-model="quote.city">
      </div>
      <div class="form-group">
        <label>State</label>
        <input type="text" class="form-control" placeholder="State" v-model="quote.state">
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
      customer: {},
      alert: ''
    }
  },
  methods: {
    fetchCustomer(id) {
      this.$http.get('http://slimapp/api/customer/' + id)
        .then(function(response) {
          this.customer = response.body;
        });
    },
    updateCustomer(e) {
      if (!this.quote.first_name || !this.customer.last_name || !this.customer.email) {
        this.alert = 'Please fill in all required fields';
      } else {
        let updCustomer = {
          first_name: this.quote.first_name,
          last_name: this.quote.last_name,
          phone: this.quote.phone,
          email: this.quote.email,
          address: this.quote.address,
          city: this.quote.city,
          state: this.quote.state
        }

        this.$http.put('http://slimapp/api/customer/update/' + this.$route.params.id, updCustomer)
          .then(function(response) {
            this.$router.push({
              path: '/',
              query: {
                alert: 'Customer Updated'
              }
            });
          });

        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created: function() {
    this.fetchCustomer(this.$route.params.id);
  },
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>