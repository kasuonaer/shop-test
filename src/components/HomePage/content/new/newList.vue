<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in newList" :key="item.new_id" v-on:click="getNewInfo(item.new_id)">
                <img class="mui-media-object mui-pull-left" v-lazy="item.new_url">
                <div class="mui-media-body">
                    <h1 class="title">{{item.new_title}}</h1>
                    <p class='mui-ellipsis'>
                        <span>时间:{{item.new_time | timeFormat}}</span>
                        <span>点击:{{item.new_click}}次</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    import {Toast} from 'mint-ui';
    export default {
        data(){
            return{
                num: 0,
                newListUrl: '/index/store/getNewList',
                newClickAddUrl: '/index/store/addClick',
                newList: []
            }
        },
        methods:{
            getNewList:function(){
                this.$axios.get(this.newListUrl).then((response)=>{
                    if(response.data.code !== 0 ){
                        Toast('新闻加载失败');
                    }else{
                        this.newList = response.data.data;
                    }

                }).catch((response)=>{
                    Toast('服务器异常');
                })
            },

            getNewInfo: function(new_id){
                this.$axios.get(this.newClickAddUrl, {params:{new_id: new_id}}).then((response)=>{
                    if(response.data.code !== 0){
                        this.$router.go(0);
                    }else{
                        this.$router.push({path: "/HomePage/newInfo", query: {id: new_id}});
                    }
                })
            }
        },
        created(){
            this.getNewList()
        },
    }
</script>

<style lang="less" scoped>
    li{
        img[lazy=loading] {
            width: 100%;
            height: 100%;
            margin: auto;
            background: #cccccc;
        }
        .title{
            font-size: 14px;
            color: #555555;
        }
        .mui-ellipsis{
            display: flex;
            justify-content: space-between;

            span{
                font-size: 12px;
                color: #999999;
            }
        }
    }
</style>