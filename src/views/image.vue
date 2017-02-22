<template>
<div class="image">
	<zheader titleName="美图"></zheader>
</div>
</template>
<script>
import data from '../data'
import header from '../components/header'
export default {
	components: {
	  'zheader': header
	},
	data() {
	  return {
	  	data: data
	  }
	}
}
</script>
<style lang="stylus">

</style>
