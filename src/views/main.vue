<template>
  <div id="app" v-scroll="loadMore">
     <zheader titleName="首页"  ref="header" @close="closeItem"></zheader>
     <div class="main_content" v-show="contentShow">
     	<ul>
     		<li v-for="(newItem,index) in news"  v-if="index<itemNum" class="newItem" @click="selectItem(newItem, $event)" ref="newItem">
     			<div class="item-img">
     				<img :src="newItem.img">
     			</div>
     			<div class="item-text">
     				<h4 class="title">{{newItem.title}}</h4>
     				<h5 class="title2">{{newItem.title2}}</h5>
     			</div>		
     		</li>
     	</ul>
     </div> 
     <div class="itemPage" v-show="itemShow" ref="itemPage"> 
     	<div class="itemContent">
     		<div class="titleDiv">
     			<h4 class="pageTitle">{{item.title}}</h4> 
     			<span>来自: {{item.author}}</span>
     			<span class="time">{{item.time}}</span>
     		</div>
     		  
     		<img :src="item.img" >
     		<p v-for="str in itemContent">
	     		{{str}}<br/><br/>
     		</p>	
     	</div>
     	<div class="rating">
     		<p>评论功能未上线.....</p>
     	</div>	
     </div>
     <zfooter></zfooter>
  </div>
</template>

<script>
import data from '../data'
import header from '../components/header'
import footer from '../components/footer'
export default {
    components: {
    'zheader': header,
    'zfooter': footer
    },
    directives: {
      scroll: {
      	bind(el, binding) {
      		window.addEventListener('scroll', () => {
      			let scrollTop = document.body.scrollTop
      			if (scrollTop + window.innerHeight >= document.body.clientHeight) {
      				let fnc=binding.value
      				fnc()
      			}
      		})
      	}
      }
    },
    data() {
      return {
        news: data.news,
        item: {},
        itemShow: false,
        contentShow: true,
        itemContent: [],
        itemNum: 7
      }
    },
    methods: {
      loadMore() {
      	setTimeout(() => {
      		this.itemNum+=3
      	}, 250)
      },
      selectItem(newItem, event) {
        this.item= newItem
        //两个div互换显示
        this.contentShow=false
        this.itemShow = true
        //获得字符串 遇到句号保存这句话为数组的子元素
        let index= newItem.content 
        this.transContent(index)
        //back按钮显示退出
        this.$refs.header.show()
        //itemPage高度还原到顶部
        document.body.scrollTop = 0+'px'
      },
      closeItem() {
      //back按钮功能
        this.contentShow=true
        this.itemShow=false
      },
      //获得字符串 遇到句号保存这句话为数组的子元素
      transContent(index) {
        let arr =index
        let arrTrans = arr.split('。')
        for (let i=0; i<arrTrans.length; i++) {
        	if (arrTrans[i]) {
        		this.itemContent[i]= arrTrans[i]+'。'
        	}
        }
      }
    }
}
</script>

<style lang="stylus">
.main_content
	width:100%
	position:relative
	top:60px
	.newItem
		width:100%
		height:80px
		margin:0 0 5px 0
		border-top:1px solid rgba(240,240,240 ,0.8)
		border-bottom:1px solid rgba(240,240,240,0.8)
		background:rgba(250,250,250,0.8)
		position:relative
		& div
			float:left
		.item-img
			width:100px
			height:80px
			overflow:hidden
			img 
				height:80px
				min-width:100px


		.item-text
			height:80px
			position:absolute
			top:0
			left:100px
			bottom:0
			right:0
			margin:auto 3%

			.title
				font-size:16px
				color:rgb(19, 3, 3)
				font-weight:300
				white-space:nowrap
				overflow:hidden
				text-overflow:ellipsis
			.title2
				font-size:12px
				color:black
				display:block
				max-height:50px
				font-weight:200
				overflow:hidden
				text-overflow:ellipsis

.itemPage
	position:absolute
	top:50px		
	left:0
	right:0
	bottom:0
	overflow:scroll
	background:#fff
	z-index:200
	backgroud: rgb(240, 240, 240)

	.titleDiv
		width:100%
		min-height:60px
		border-bottom:1px solid #ccc

	h4
		font-size:20px
		margin:5px 10px
		font-weight:400
	img
		width:95%
		margin:2%
	p
		margin:0 8px
		font-size:13px
	span
		margin:0 0  10px 10px
		font-size:12px
		color:rgb(164, 157, 170)
	.rating
		text-align:center
		color:#ccc
</style>
