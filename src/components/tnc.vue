<template>
<div class="tnc container">
  <router-link to="/onequo">Back</router-link>
  <h3 class="page-header">Terms n Conditions</h3>
  <label for="rats">Rates:</label>
<input type="text" placeholder="Rates:" v-model="rates"/>
<br>
  <label for="dlvl">Delivery</label>
<input type="text" placeholder="Delivery :" v-model="dlvl"/>
<br>
<label for="pmt">pmt</label>
<input type="text" placeholder="Payment : " v-model="pmt" />
<br>
<label for="disc">Discount</label>
<input type="text" placeholder="Discount: " v-model="disc">
<br>
<label for="gst">GST</label>
<input type="text" placeholder="GST : " v-model="gst"/>
<br>
<label for="vld">Validity</label>
<input type="text" placeholder="Validity : " v-model="vld"/>
<br>
<br>
<button>Save</button> &nbsp; <button>Cancel</button>
</div>
</template>

<script>
export default {
  name: 'tnc',
	props : '[]',
	data() {
    return {
      rates: "",
	    dlvl : "" ,
	    pmt : "",
	    disc : "",
	    gst : "" ,
	    vld : "" ,
	    vldunt : ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
