<template>
    <div class="comment-container">
        <strong class="comment-remind">发表评论</strong>
        <hr/>
        <textarea placeholder="请输入..." class="comment-text"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less" scoped>
    .comment-container{
        .comment-remind{
            font-size: 16px;
        }
        .comment-text{
            min-height: 100px;
        }
    }
</style>