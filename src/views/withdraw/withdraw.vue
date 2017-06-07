<template>
    <div @androidback="back">
        <header-bar :title="title"></header-bar>
        <text>12313232</text>
        <text>{{imgServer}}</text>
        <text @click="back()">后退</text>
    </div>
</template>
<script>
    import header from './../components/header.vue'
    var navigator = weex.requireModule( 'navigator' )
    var modal = weex.requireModule( 'modal' )
    // import he from 'he'
    export default {
        components: {
            "header-bar": header
        },
        data() {
            return {
                title: '提现'
            }
        },
        computed: {
            imgServer() {
                return "this.$store.state.imgServer111"
            }
        },
        // mounted() {
        //     var globalEvent = weex.requireModule( 'globalEvent' );
        //     //注意这里跟官网提到的引入方式是不同的.官网是：var globalEvent = require('@weex-module/globalEvent');
        //     //显然是不对的。监听的方法建议在mounted事件里面写：
        //     globalEvent.addEventListener( "androidback", function ( e ) {
        //         navigator.pop( {
        //             animated: "true"
        //         }, event => {
        //             modal.toast( {
        //                 message: 'callback: ' + event
        //             } )
        //         } )
        //     } );
        // },
        methods:{
            back(){
                navigator.pop( {
                    animated: "true"
                }, event => {
                    // modal.toast( {
                    //     message: 'callback: ' + event
                    // } )
                } )
            }
        }
    }
</script>
<style></style>