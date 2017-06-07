<template>
    <div class="container">
        <div v-if="selectTab == 'cashier'">
            <cashier></cashier>
        </div>
        <div v-if="selectTab == 'withdraw'">
            <withdraw></withdraw>
        </div>
        <div v-if="selectTab == 'user'">
            <user></user>
        </div>

        <!--<div class="content" :style="{ visibility: (selectTab == 'cashier' ? 'visible' : 'hidden') }">
            <cashier></cashier>
        </div>
        <div class="content" :style="{ visibility: (selectTab == 'withdraw' ? 'visible' : 'hidden') }">
            <withdraw></withdraw>
        </div>
        <div class="content" :style="{ visibility: (selectTab == 'user' ? 'visible' : 'hidden') }">
            <user></user>
        </div>-->
        <div class="tabbar">
            <div v-for="item in tabItems" class="tabbar-item" @click="tab(item.id)">
                <image class="top-line" :src="imgServer + '/line.png'" />
                <text style='font-family:iconfont;font-size:40px;' :style="{ color: (selectTab == item.id ? selectedColor : '#929292') }">{{item.icon}}</text>
                <!--<image class="tab-icon" style="width: 40px;height: 40px;" :src="imgServer + (selectTab == item.id ? item.selectedImage : item.image)"
                />-->
                <text class="tab-text" :style="{ color: (selectTab == item.id ? selectedColor : '#929292') }">{{item.title}}</text>
            </div>
        </div>
    </div>
</template>
<script>
    import cashier from './cashier/index.vue' //收银台
    import withdraw from './withdraw/index.vue' //提现对账
    import user from './user/index.vue' //账户设置
    import config from './config.vue'
    import he from 'he'
    var domModule = weex.requireModule( 'dom' );
    export default {
        components: {
            cashier,
            withdraw,
            user
        },
        data() {
            return {
                imgServer: config.img_url,
                selectTab: 'cashier',
                selectedColor: '#0894ec',
                tabItems: [ {
                    id: 'cashier',
                    title: '收银台',
                    icon: he.decode( '&#xe62e;' ),
                    image: '/cashier0.png',
                    selectedImage: '/cashier1.png',
                    src: 'component/cashier/index.js'
                }, {
                    id: 'withdraw',
                    title: '提现对账',
                    icon: he.decode( '&#xe63a;' ),
                    image: '/recode0.png',
                    selectedImage: '/recode1.png'
                }, {
                    id: 'user',
                    title: '账户设置',
                    icon: he.decode( '&#xe60a;' ),
                    image: '/user0.png',
                    selectedImage: '/user1.png'
                } ]
            }
        },
        created() {
            
            //目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/
            domModule.addRule( 'fontFace', {
                'fontFamily': "iconfont",
                'src': "url('http://at.alicdn.com/t/font_sb6lhxxd9pj2x1or.ttf')"
            } );
        },
        computed: {
            // imgServer() {
            //     return 'http://192.168.95.180'//this.$store.state.imgServer
            // },
            // selectTab() {
            //     return 'cashier' //this.$store.state.selectTab
            // }
        },
        methods: {
            tab( id ) {
                //this.$store.dispatch( 'SET_ITEMTAB', id )
                this.selectTab = id
            }
        }
    }
</script>
<style scoped>
    .container {
        width: 750px;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
    
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin-top: 0;
        margin-bottom: 88px;
    }
    
    .tabbar {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 88px;
    }
    
    .tabbar-item {
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 88;
    }
    
    .top-line {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
    }
    
    .tab-icon {
        margin-top: 5px;
        width: 40px;
        height: 40px;
    }
    
    .tab-text {
        margin-top: 5px;
        text-align: center;
        font-size: 20px;
    }
</style>