<template>
    <div class="shareImg-container">
        <h1 class="title-content">{{shareImgInfo.shareImg_title}}</h1>
        <p class="title-affiliated">
            <span>发表时间:{{shareImgInfo.shareImg_time | timeFormat}}</span>
            <span>点击:{{shareImgInfo.shareImg_click}}次</span>
        </p>
        <hr/>
        <!-- 图片 -->
        <div class="img-container" v-for="item in shareImgList">
            <img class="img-list" :src="item" preview preview-text=""/>
        </div>
        <!-- 内容 -->
        <div class="content-container" v-html="shareImgInfo.shareImg_content"></div>
        <hr/>

        <comment-container :parent_id="this.shareImg_id" :parent_type="this.shareImg_type"></comment-container>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import comment from '@/components/common/comment';
    import VuePreview from 'vue-preview'

    export default{
        data(){
            return{
                //评论类型 1：文章，2：图片
                shareImg_type: 2,
                shareImg_id: this.$route.query.id,
                shareImgInfo_url: '/index/store/getShareImgInfo',
                shareImgAddClick: '/index/store/addShareImgClick',
                shareImgInfo: [],
                shareImgList: [],
                shareImgListObj: []

            }
        },
        methods:{
            getShareImgInfo(){
                this.$axios.get(this.shareImgInfo_url, {params:{shareImg_id: this.shareImg_id}}).then((response)=>{
                    if(response.data.code !== 0){
                        Toast('数据获取失败')
                    }else{
                        this.shareImgInfo = response.data.data;
                        this.shareImgList = this.shareImgInfo.shareImg_url.split(',');
                        this.$previewRefresh();
                    }
                }).catch((response)=>{
                    Toast('服务器异常')
                })
            },
            addClick(){
                this.$axios.get(this.shareImgAddClick, {params:{shareImg_id: this.shareImg_id}}).then((response)=>{
                    if(response.data.code == 0){
                        this.getShareImgInfo();
                    }
                }).catch((response)=>{
                    Toast('服务器异常')
                })
            }
        },
        mounted(){
            this.addClick();
        },
        components:{
            'comment-container': comment
        }
    }
</script>

<style lang="less">
    .shareImg-container{
        margin: auto 5px;
        .title-content{
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            color: #f00;
            text-align: center;
            overflow: hidden;
        }
        .title-affiliated{
            font-size: 12px;
            display: flex;
            justify-content: space-between;

        }
        .img-container{
            display: inline-block;
            .img-list{
                box-shadow: 0 0 2px #999;
                width: 120px;
                height: 120px;
                padding: 2px;
            }
            img[lazy=loading] {
                width: 100px;
                height: 100px;
                padding-left: 10px;
                background: #cccccc;
            }
        }

        .content-container{
            font-size: 14px;
            text-indent:2em;
            img{
                width: 100%;
            }
        }
    }
</style>