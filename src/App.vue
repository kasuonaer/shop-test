<template>
    <div class="app-container">
        <!-- 顶部Header -->
        <mt-header fixed title="shop-ByVue">
            <mt-button slot="left" icon="back" v-if="isHome" v-on:click="goBack()"></mt-button>
        </mt-header>
        <!-- 中间路由区域 -->
        <!-- 动画效果 -->
        <transition>
            <router-view v-if="isRouterAlive"></router-view>
        </transition>
        <!-- 底部TabBar -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item1" to="/HomePage">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>

            <router-link class="mui-tab-item1" to="/ShopCart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">3</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>

            <router-link class="mui-tab-item1" to="/ShopMember">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">5</span></span>
                <span class="mui-tab-label">会员</span>
            </router-link>

            <router-link class="mui-tab-item1" to="/ShopSearch">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'App',
    provide(){
        return{
            reload: this.reload
        }
    },
    data(){
        return{
            isHome: true,
            isRouterAlive: true,
            msg: 'shop-test'
        }
    },
    methods:{
        reload(){
            this.isRouterAlive = false;
            this.$nextTick(function(){
                this.isRouterAlive = true;
            })
        },
        currentRouter(){
            this.$route.path == '/HomePage' ? this.isHome = false : this.isHome = true
        },
        goBack(){
            this.$router.back(-1);
        }
    },
    mounted(){
        this.currentRouter();
    },
    watch: {
        $route(to, from) {
            this.$route.path == '/HomePage' ? this.isHome = false : this.isHome = true
        }
    }
}
</script>

<style lang="less" scoped>
    .mint-header{
        z-index: 1;
    }
    .app-container{
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }

    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,.v-leave-active{
        transition: all 0.5s ease;
    }

    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>
