<template>
<div class="quo">
    <router-link to="/">Back</router-link>
    <router-link to="/onequo">SingleQuo</router-link>
<h1>Quotation</h1>
<table>
</table>
<th >No</th>
<th>Date</th>
<th>Party Name</th>
<th>Amount</th>
<tbody>
<td><input type="text" v-model="quote.qno"></td>
<td><input type="text" v-model="quote.qdt"></td>
<td><input type="text" v-model="quote.pname"></td>
<td><input type="text" v-model="quote.amt"></td>
</tbody>
<input type="button" value="New">
</div>
</template>
<script>
export default {
  name: 'quo',
  data () {
    return {
    quote: {}
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

