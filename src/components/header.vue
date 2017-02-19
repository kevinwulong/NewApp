<template>
<div class="header_box">
        <div class="header">
                       <span class="title">首页</span>
                       <div class="menuBtn" @click="showMenu">
                                <img src="../assets/img/menu.png" width="40" height="40">
                       </div> 
        </div>
        <div class="sidebar" ref="sidebar">
                    <span @click="hideMenu"><img src="../assets/img/back.png" width="30" height="30"></span>
                    <div class="router">         
                              <router-link  to="/main">首页</router-link>
                              <router-link  to="/topic">话题</router-link>
                              <router-link  to="/discover">发现</router-link>
                              <router-link  to="/about">关于</router-link>
                      </div>
        </div>
</div>
</template>
<script>
export default {
    methods: {
        showMenu() {
            let menu = this.$refs.sidebar
            let timer
            timer = setInterval(() => {
                if (menu.offsetLeft === 0) {
                    clearInterval(timer)
                }
                else {
                    menu.style.left = menu.offsetLeft+10+'px'
                }
            })
        },
        hideMenu() {
             let menu = this.$refs.sidebar
            let timer
            timer = setInterval(() => {
                if (menu.offsetLeft === -150) {
                    clearInterval(timer)
                }
                else {
                    menu.style.left = menu.offsetLeft-10+'px'
                }
            })
        }
    }
}
</script>
<style lang="stylus">
.header 
    height:50px
    background:rgb(6, 99, 192)
    color:#fff
    text-align:center
    font-size:18px
    line-height:50px
    .menuBtn
               position:absolute
               top:0
               left:0
               margin:5px
               wdith:40px
               height:40px
.sidebar   
                z-index: 100
                position:absolute
                top:0
                left:-150px
                width:150px
                height :100%
                span
                    display:block
                    width:100%
                    height:49px
                    text-align:right
                    position:absolute
                    top:0
                    left:0
                    background:rgb(6, 99, 192)
                    img
                             position:relative
                             right:10px
                             top:10px
                .router
                    width:100%
                    position:absolute
                    top:49px
                    left:0
                    right:0
                    bottom:0
                    background:rgba(250,250,250,0.8)
                    & a
                             display:block
                             width:150px
                             height:25%
                             text-align:center
                             color:black
                             line-height:150px
                             border-top:1px solid #ccc

                    

</style>
