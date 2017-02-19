<template>
<div class="header_box">
        <div class="header">
                       <span class="title">全 部</span>
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
                if (menu.offsetLeft === -200) {
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
                left:-200px
                width:200px
                height :100%
                background:#fff
                span
                    display:block
                    width:100%
                    height:10%
                    text-align:right
                    position:relative
                    right:10px
                    top:2%
                .router
                    height:90%
                    width:100%
                    & a
                             display:block
                             width:200px
                             height:20%
                             text-align:center
                             color:black
                    

</style>
