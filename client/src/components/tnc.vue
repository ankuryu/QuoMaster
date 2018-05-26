<template>
<div class="tnc container">
  <router-link to="/onequo">Back</router-link>
  <h3 class="page-header">Terms n Conditions</h3>
  <label for="rats">Rates:</label>
<input type="text" placeholder="Rates:" v-model="rates"/>
<br>
  <label for="dlvtm">Delivery</label>
<input type="text" placeholder="Delivery :" v-model="dlvtm"/> &nbsp;
<input type="text" placeholder="Dlvy Units" v-model="dlvunt"/>
<br>
<label for="pmt">pmt</label>
<input type="text" placeholder="Payment : " v-model="pmt" /> &nbsp;
<input type="text" placeholder="Pmt Unts" v-model="pmtunt" />
<br>
<label for="disc">Discount</label>
<input type="text" placeholder="Discount: " v-model="disc">
<br>
<label for="gst">GST</label>
<input type="text" placeholder="GST : " v-model="tax"/>
<br>
<label for="vld">Validity</label>
<input type="text" placeholder="Validity : " v-model="vld"/> &nbsp;
<input type="text" placeholder="Vld Units" v-model="vldunt" />
<br>
<label for="wrt">Warranty</label>
<input type="text" placeholder="Validity : " v-model="wrt"/>
<br>
<label for="nar1">Narration 1</label>
<input type="text" placeholder="Narration1: " v-model="nar1"/>
<br>
<label for="nar2">Narration 2</label>
<input type="text" placeholder="Narration 2" v-model="nar2"/>
<br>
<label for="nar3">Narration 3</label>
<input type="text" placeholder="Narration 3 " v-model="nar3"/>
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
      qno : "",
      rates: "",
	    dlvtm : "" ,
      dlvunt : "",
      dlvloc : "",
	    pmt : "",
      pmtunt: "",
	    disc : "",
	    tax: "" ,
      wrt : "",
	    vld : "" ,
	    vldunt : "",
      nar1: "",
      nar2: "",
      nar3: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
