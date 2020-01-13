<template>
    <div class="comment-container">
        <!-- 发表评论 -->
        <strong class="comment-remind">评论({{comments_count}})</strong>
        <hr/>
        <textarea id="comment_text" placeholder="请输入..." class="comment-text" v-model="comment_content"></textarea>
        <div class="mui-input-row">
            <label for="user_name">用户名:</label>
            <input id="user_name" type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="user_name">
        </div>
        <mt-button type="primary" size="large" class="primary-button" v-on:click="addComment">发表评论</mt-button>
         <!-- 评论列表 -->
        <div class="comment-list">
            <div class="comment-item" v-for="(item, index) in commentList" :key="item.comment_id">
                <div class="comment-title">
                    <span>#{{index + 1}}</span>
                    <span class="comment-info-user">{{item.user_name}}</span>
                    <span>{{item.comment_time | timeFormat}}</span>
                </div>
                <div class="comment-body">
                    <span>{{item.comment_content}}</span>
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" class="danger-button" plain v-on:click="getCommentMore" v-if="isDisabledComment">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data(){
            return{
                getCommentUrl: '/index/store/getCommentList',
                addCommentUrl: '/index/store/addComment',
                page_num: 5,
                comments_count: 0,
                commentList: [],
                //发表评论
                comment_content: '',
                user_name: '',
                isDisabledComment: true,
            }
        },
        methods:{
            getComment(){
                this.$axios.get(this.getCommentUrl + '?parent_id=' + this.parent_id + '&parent_type=' + this.parent_type + '&page_num=' + this.page_num).then((response)=>{
                    console.log(response.data.data);
                    this.commentList =  response.data.data.data;
                    this.page_num >= response.data.data.total ? this.isDisabledComment = false : this.isDisabledComment = true
                    this.comments_count = response.data.data.total;
                }).catch((response)=>{
                    console.log(response);
                })
            },
            addComment(){
                var param = new URLSearchParams();
                param.append('parent_id', this.parent_id);
                param.append('parent_type', this.parent_type);
                param.append('comment_content', this.comment_content);
                param.append('user_name', this.user_name);
                this.$axios.post(this.addCommentUrl, param).then((response)=>{
                    if(response.data.code == 0){
                        this.getComment();
                    }
                }).catch((response)=>{

                })
                this.user_name = '';
                this.comment_content = '';
            },
            getCommentMore(){
                this.page_num += 5;
                this.getComment();
            }
        },
        created(){
            this.getComment();
        },
        props: ['parent_id', 'parent_type'],
        inject: ['reload'],
    }
</script>

<style lang="less" scoped>
    .comment-container{
        .comment-remind{
            font-size: 16px;
        }
        .comment-text{
            font-size: 14px;
            min-height: 100px;
            margin: 0;
        }
        textarea::-webkit-input-placeholder{
            font-size: 14px;
        }
        .mui-input-row{
            color: #8f8f94;
            font-size: 14px;
            input{
                font-size: 14px;
                padding-top:5px;
            }
            ::-webkit-input-placeholder{
                font-size: 14px;
            }
        }
        .comment-list{
            margin: 5px 0;
            .comment-item{
                font-size: 13px;
                .comment-title{
                    display: flex;
                    justify-content: space-between;
                    background: #cccccc;
                    span{
                        margin: auto 10px;
                        line-height: 25px;
                    }
                    .comment-info-user{
                        white-space:nowrap;
                        width: 20%;
                        margin-right: 40px;
                    }
                }
                .comment-body{
                    line-height: 25px;
                    text-indent: 13px;

                }
            }
        }
    }
</style>