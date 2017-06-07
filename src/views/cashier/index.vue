<template>
    <div>
        <div class="main-action">
            <div class="action-item">
                <image style="width:100px; height:100px;" :src="imgServer + '/barcode.png'" />
                <text class="action-label">扫码收款</text>
            </div>
            <div class="action-item">
                <image style="width:100px; height:100px;" :src="imgServer + '/qcode.png'" />
                <text class="action-label">收银牌</text>
            </div>
            <div class="action-item">
                <image style="width:100px; height:100px;" :src="imgServer + '/order.png'" />
                <text class="action-label">订单列表</text>
            </div>
        </div>
        <div class="app-list">
            <div class="app-item">
                <div class="item-img">
                    <!--<image :src="imgServer + '/store.png'" style="width:60px; height:60px;" />-->
                    <text style='font-family:iconfont;font-size:60px;color:#F76B6A'>&#xe69f;</text>
                </div>
                <text class="app-name">微店</text>
            </div>
            <div class="app-item">
                <div class="item-img">
                    <text style='font-family:iconfont;font-size:60px;color:#5599FE'>&#xe610;</text>
                </div>
                <text class="app-name">分店管理</text>
            </div>
            <div class="app-item">
                <div class="item-img">
                    <text style='font-family:iconfont;font-size:60px;color:#EBA209'>&#xe609;</text>
                </div>
                <text class="app-name">多收银通知</text>
            </div>
        </div>
        <div class="app-list">
            <div class="app-item">
                <div class="item-img">
                    <text style='font-family:iconfont;font-size:60px;color:#3ACB82'>&#xe62d;</text>
                </div>
                <text class="app-name">贷款</text>
            </div>
            <div class="app-item">
                <div class="item-img">
                    <text style='font-family:iconfont;font-size:60px;color:#EBA209'>&#xe678;</text>
                </div>
                <text class="app-name">信用卡</text>
            </div>
            <div class="app-item">
            </div>
        </div>
    </div>
</template>
<script>
    import config from './../config.vue'
    export default {
        data() {
            return {
                imgServer: config.img_url
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
    .main-action {
        flex-direction: row;
        height: 350px;
        background-color: #434A5A;
    }
    
    .action-item {
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    
    .action-label {
        color: #FEAC00;
        font-size: 28px;
        margin-top: 10px;
    }
    
    .app-list {
        flex-direction: row;
        height: 200px;
    }
    
    .app-item {
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    
    .item-img {
        margin-bottom: 10px;
    }
    
    .app-name {
        font-size: 28px;
    }
</style>