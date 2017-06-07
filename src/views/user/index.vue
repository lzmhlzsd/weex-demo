<template>
    <div>
        <header :title="title"></header>
        <div>
            <text>账户设置</text>
        </div>
    </div>
</template>
<script>
    import header from './../components/header.vue'
    export default {
        components:{
            header
        },
        data() {
            return {
                title: '账户设置',
                imgServer: 'http://192.168.95.180'
            }
        }
        // computed: {
        //     imgServer() {
        //         return this.$store.state.imgServer
        //     }
        // }
    }
</script>
<style scoped>

</style>