<template>
    <div class="app-container">
        <!-- 顶部Header -->
        <mt-header fixed title="shop-test"></mt-header>
        <h1>test</h1>
        <!-- 中间路由区域 -->

        <!-- 底部TabBar -->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">3</span></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less" scoped>
    .app-container{
        padding-top: 40px;
    }
</style>
