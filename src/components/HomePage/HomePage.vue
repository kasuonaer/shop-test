<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in swipe_list" :key="item.swipe_id">
                <img v-lazy="item.url">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/HomePage/newList">
                    <img src="../../assets/grid6/menu1.png" alt=""/>
                    <div class="mui-media-body">新闻咨询</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/HomePage/shareImg">
                    <img src="../../assets/grid6/menu2.png" alt=""/>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/video">
                    <img src="../../assets/grid6/menu5.png" alt=""/>
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/shopping">
                    <img src="../../assets/grid6/menu3.png" alt=""/>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/message">
                    <img src="../../assets/grid6/menu4.png" alt=""/>
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/contact">
                    <img src="../../assets/grid6/menu6.png" alt=""/>
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>

        </ul>
    </div>

</template>

<script>
    import { Lazyload, Toast } from 'mint-ui';

    export default {
        data(){
            return{
                num: 1,
                swipe_url: '/index/store/getSwipeList',
                swipe_list: []
            }
        },
        methods:{
            getSwipe(){
                this.$axios.get(this.swipe_url).then((response)=>{
                    if(response.data.code !== 0){
                        Toast('图片加载失败');
                    }else{
                        this.swipe_list = response.data.data;
                    }
                }).catch((response)=>{
                    Toast('服务器异常');
                })

            }
        },
        created() {
            this.getSwipe();
        }
    }
</script>

<style lang="less" scoped>

    .mint-swipe{
        height: 200px;

        img{
            width: 100%;
            height: 100%;
        }
        img[lazy=loading] {
            width: 100%;
            height: 100%;
            margin: auto;
            background: #cccccc;
        }
    }
    .mui-table-view.mui-grid-view.mui-grid-9{
        background-color: #ffffff;
        border: none;
        li{
            border: none;
            img{
                height: 60px;
                width: 60px;
            }
            .mui-media-body{
                font-size: 12px;
            }
        }
    }
</style>