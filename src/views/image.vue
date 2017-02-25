<template>
<div class="image" scroll="scrollFoo">
	<zheader titleName="美图"  @fall="fallFoo"></zheader>
	<div class="img_content"ref="img_content">
		<div v-for="item in img"  class="item">
			<img :src="item">
		</div>
	</div>
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
	  	img: data.img,
	  	num: 1
	  }
	},
	methods: {
		fallFoo() {
			let arr = Array.from(this.$refs.img_content.getElementsByClassName('item'))
			let arrHeight=[]
			for (let i=0; i<arr.length; i++) {
				if (i<2) {
					arrHeight[i] =arr[i].offsetHeight
				}
				else {
					let minH =Math.min(...arrHeight)
					let minHIndex = this.getMinH(arrHeight, minH)
					arr[i].style.position= 'absolute'
					arr[i].style.top=minH +'px'
					arr[i].style.left = arr[minHIndex].offsetLeft+ 'px'
					arr[i].style.margin='0 1% 0 1%'
					arrHeight[minHIndex]+=arr[i].offsetHeight
				}
			}		
		},
		getMinH(arr, minH) {
			for (let i in arr) {
				if (arr[i] ===minH) {
					return i
				}
			}
		}
	},
	created() {
		this.$nextTick(() => {
			this.fallFoo()
		})
		this.num++
	}
}
</script>
<style lang="stylus">
.img_content
	width:100%
	position:relative
	top:60px
	.item
		float:left
		width:47%
		margin:0 1% 0 1%
		img
			width:100%

	
</style>
