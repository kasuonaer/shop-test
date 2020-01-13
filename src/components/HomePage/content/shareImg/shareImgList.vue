<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.shareImg_type_id == 0 ? 'mui-active' : '']" v-for="(item, index) in shareImgTypeList" :key="item.shareImg_type_id" v-on:click="getShareImgListById(item.shareImg_type_id)">{{item.shareImg_type_name}}</a>
                </div>
            </div>

        </div>
        <div>
            <ul class="img-item">
                <router-link :to="'/HomePage/shareImgInfo?id=' + item.shareImg_id" v-for="(item, index) in shareImgList" tag="li" :key="item.shareImg_id">
                    <img v-lazy="item.shareImg_url">
                    <div class="shareImg-info">
                        <h1 class="shareImg-title">{{item.shareImg_title}}</h1>
                        <span class="shareImg-content">{{item.shareImg_content}}</span>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import mui from '@/../static/Mui/js/mui.js';
    import {Toast} from 'mint-ui';
    export default {
        data(){
            return{
                shareImgTypeUrl: '/index/store/getShareImgTypeList',
                shareImgListUrl: '/index/store/getShareImgList',
                shareImgInfoUrl: '/index/store/getShareImgInfo',
                shareImgTypeList: [],
                shareImgList: []
            }
        },
        methods:{
            getShareImgTypeList(){
                this.$axios.get(this.shareImgTypeUrl).then((response)=>{
                    if(response.data.code !== 0){
                        Toast('获取分享图片分类列表失败');
                    }else{
                        this.shareImgTypeList = response.data.data;
                        this.shareImgTypeList.unshift({shareImg_type_id: 0, shareImg_type_name: '全部'});
                        console.log(this.shareImgTypeList);
                    }
                }).catch((response)=>{
                    Toast('服务器异常');
                })
            },
            getShareImgListById(shareImg_type_id){
                this.$axios.get(this.shareImgListUrl, {params:{shareImg_type_id: shareImg_type_id}}).then((response)=>{
                    if(response.data.code !== 0){
                        Toast('获取分享图片分类列表失败');
                    }else{
                        this.shareImgList = response.data.data;
                        console.log(this.shareImgList);
                    }
                }).catch((response)=>{
                    Toast('服务器异常');
                })
            }
        },
        created(){
            this.getShareImgTypeList();
            this.getShareImgListById(0)
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    }
</script>

<style lang="less" scoped>
    * {touch-action: pan-y;};

    .img-item{
        list-style: none;
        padding: 5px;
        margin: 0px;
        li{
            position: relative;
            text-align: center;
            box-shadow: 0 0 5px #999;
            img{
                width: 100%;
                height: 260px;
            }
            img[lazy=loading] {
                width: 100%;
                height: 260px;
                margin: auto;
                background: #cccccc;
            }
            .shareImg-info{
                width: 100%;
                display: inline-block;
                color: #ffffff;
                background: #000000;
                position: absolute;
                left: 0px;
                bottom: 5px;
                opacity: 0.6;
                .shareImg-title{
                    margin-top: 5px;
                    font-size: 14px;
                    font-weight: 700;
                }
                .shareImg-content{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;//向显示多少行就给多大值
                    -webkit-box-orient: vertical;
                    font-size: 11px;
                }
            }
        }
    }
</style>