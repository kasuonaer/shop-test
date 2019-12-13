<template>
    <div>
        <h1>newInfo{{this.$route.query.id}}</h1>
    </div>

</template>

<script>
    export default {
        name: 'newInfo',
        methods: {
            show1(){
                console.log(this);
            }
        },
        created() {
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>