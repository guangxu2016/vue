<template>
    <div>
        <mt-header title="传智34期"></mt-header>
        <router-view></router-view>
        <mt-tabbar v-model="selected">
          <mt-tab-item id="home">
            <img slot="icon" src="../static/img/index.png">
            首页
          </mt-tab-item>
          <mt-tab-item id="member">
            <img slot="icon" src="../static/img/vip.png">
            会员
          </mt-tab-item>
          <mt-tab-item id="shopcart">
            <img slot="icon" src="../static/img/shopcart.png">
            购物车
          </mt-tab-item>
          <mt-tab-item id="search">
            <img slot="icon" src="../static/img/search.png">
            联系我们
          </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                selected:""
            }
        },
        watch:{
          selected(newV){
            console.log(newV);
            this.$router.push({
              name:newV
          })
          }
        }
    }
</script>
<style scoped>

</style>