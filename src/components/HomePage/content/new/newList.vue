<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in newList" v-on:click="addNum(index)">
                <router-link :to="{path: '/HomePage/newInfo', query: {id: item.new_id}}">
                    <img class="mui-media-object mui-pull-left" :src="item.new_url">
                    <div class="mui-media-body">
                        <h1 class="title">{{item.new_title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>时间:{{item.new_time}}</span>
                            <span>点击:{{item.new_click}}次</span>
                        </p>
                    </div>
                </router-link>
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

                })
            },

            addNum: function(index){

            }
        },
        created(){
            this.getNewList()
        }
    }
</script>

<style lang="less" scoped>
    li{
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