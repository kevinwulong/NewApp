<template>
<div class="header_box">
        <div class="header">
                       <span class="title" >{{titleName}}</span>
                       <span class="back" v-show="back"  @click="hide"><img src="../assets/img/back.png" width="30" ></span>
        </div>
        <div class="sidebar" ref="sidebar">   
                              <router-link  to="/">首页</router-link>
                              <router-link  to="/topic">球鞋</router-link>
                              <router-link  to="/image" >美图</router-link>
                              <router-link  to="/about">关于</router-link>
        </div>
</div>
</template>
<script>
export default {
    props: {
        titleName: String
    },
    data() {
        return {
          back: false
        }
    },
    methods: {
      show() {
        this.back = !this.back
      },
      hide() {
        this.back = !this.back
        this.$emit('close')
      }
    }
}
</script>
<style lang="stylus">
.header 
    height:50px
    background:rgb(237, 242, 244)
    color:black
    text-align:center
    font-size:18px
    line-height:50px
    width:100%
    position:fixed
    z-index:100
    .back
               position:absolute
               left:5px
               top:4px
.sidebar   
                width:100%
                height:50px
                background:#fff
                position:fixed
                bottom:0
                left:0
                z-index:150
                & a 
                         display:block
                         float:left
                         width:25%
                         height:50px
                         line-height:50px
                         text-decoration:none
                         text-align:center
                         color:black
                         background:rgb(237, 242, 244)
                         font-weight:50
                       

</style>
