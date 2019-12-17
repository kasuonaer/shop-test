<template>
    <div class="app-container">
        <!-- 顶部Header -->
        <mt-header fixed title="shop-ByVue"></mt-header>
        <!-- 中间路由区域 -->
        <!-- 动画效果 -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- 底部TabBar -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/HomePage">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>

            <router-link class="mui-tab-item" to="/ShopCart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">3</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>

            <router-link class="mui-tab-item" to="/ShopMember">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">5</span></span>
                <span class="mui-tab-label">会员</span>
            </router-link>

            <router-link class="mui-tab-item" to="/ShopSearch">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            msg: 'shop-test'
        }
    }
}
</script>

<style lang="less" scoped>
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

</style>
