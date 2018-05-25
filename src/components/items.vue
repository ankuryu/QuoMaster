<template>
<div class="itms container">
  <router-link to="/onequo">Back</router-link>
  <router-link to="/oneitem">Edit Item</router-link>
  <h3 class="page-header">Items of Quotation</h3>
<table class="table table-striped">
    <thead>
      <tr>
        <th>Sr</th>
        <th>Type</th>
        <th>Desc</th>
        <th>HSN</th>
        <th>Qty</th>
        <th>Unt</th>
        <th>Rate</th>
        <th>Disc</th>
        <th>Tax</th>
        <th>Cost</th>
        <th>Fact</th>
        <th>Incr</th>
        <th>Nar</th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="item in items">
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
        <td>{{}}</td>

        <td>
          <router-link class="btn btn-default" v-bind:to="'/quote/'+quotation.qno">View</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'items',
  data() {
    return {
	items:[],
	item:''
    }
    },
  methods: {
    fetchItems() {
      var vu = this
      this.$http.get('http://localhost:8000/api/items')
        .then(function(response) {
          vu.items= response.data ;
          console.log(vu.items);
        });
    } // end of fetchitems
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
