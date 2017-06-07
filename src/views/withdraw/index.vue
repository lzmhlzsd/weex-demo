<template>
    <div>
        <header-bar :title="title"></header-bar>
        <div class="content-body">
            <div class="list-block">
                <list-item :rows="list"></list-item>
            </div>
        </div>
    </div>
</template>
<script>
    import header from './../components/header.vue'
    import listItem from './../components/listItem.vue'
    import he from 'he'
    export default {
        components: {
            "header-bar": header,
            "list-item": listItem
        },
        data() {
            return {
                title: '收银对账',
                list: [ {
                        icon: he.decode( '&#xe604;' ),
                        color: '#F76B6A',
                        label: '提现',
                        path: '/withdraw'
                    },
                    {
                        icon: he.decode( '&#xe630;' ),
                        color: '#5599FE',
                        label: '订单列表',
                        path: ''
                    },
                    {
                        icon: he.decode( '&#xe69e;' ),
                        color: '#3ACB82',
                        label: '账户收支',
                        path: ''
                    },
                    {
                        icon: he.decode( '&#xe697;' ),
                        color: '#EBA209',
                        label: '导出账户收支',
                        path: ''
                    }
                ]
            }
        },
        computed: {
            imgServer() {
                return this.$store.state.imgServer
            }
        }
    }
</script>
<style scoped>
    .content-body{
        background-color: #f3f3f3;
    }
    /*.list-block {
        margin-top: 20px;
    }*/
</style>