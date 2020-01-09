<template>
    <div class="new-container">
        <!-- 抬头 -->
        <h1 class="title-content">{{newInfo.new_title}}</h1>
        <p class="title-affiliated">
            <span>发表时间:{{newInfo.new_time | timeFormat}}</span>
            <span>点击:{{newInfo.new_click}}次</span>
        </p>
        <hr/>

        <!-- 内容 -->
        <div class="content-container" v-html="newInfo.new_content"></div>
        <hr/>
        <!-- 评论 -->
        <comment-container :id="this.new_id" :parent_type="this.new_type"></comment-container>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import comment from '@/components/common/comment';
    export default {
        name: 'newInfo',
        data(){
            return{
                new_type: 1,
                new_id: this.$route.query.id,
                newInfoUrl: '/index/store/getNewInfo',
                newInfo: [],
            }
        },
        methods: {
            getNewInfo(){
                this.$axios.get(this.newInfoUrl, {params:{new_id: this.new_id}}).then((response)=>{
                    if(response.data.code !== 0){
                        Toast('获取新闻详情失败');
                    }else{
                        this.newInfo = response.data.data;
                        console.log(this.newInfo)
                    }
                }).catch((response)=>{
                    Toast('服务器异常');
                })
            }
        },
        created() {
            this.getNewInfo();
        },
        components:{
            'comment-container': comment
        }
    }
</script>

<style lang="less">
    .new-container{
        margin: auto 5px;
        .title-content{
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            color: #f00;
            text-align: center;
        }
        .title-affiliated{
            font-size: 12px;
            display: flex;
            justify-content: space-between;

        }
        .content-container{
            img{
                width: 100%;
            }
        }
    }

</style>