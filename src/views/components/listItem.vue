<template>
    <list class="list" :style="{ height: listheight + 'px'}">
        <cell><div><text>{{env}}</text></div></cell>
        <cell>
            <div class="block"></div>
        </cell>
        <cell v-for="(v,i) in rows" class="row" append="tree" :index="i" @click="go(v.path)">
            <div class="icon">
                <text style='font-family:iconfont;font-size:30px;' :style="{ color: v.color }">{{v.icon}}</text>
            </div>
            <div class="item">
                <text class="item-title" style="font-size: 30px;color: #313131">{{v.label}}</text>
            </div>
            <div class="link">
                <text style='font-family:iconfont;font-size:30px;color:#cdcdcd;'>&#xe6c1;</text>
            </div>
        </cell>
    </list>
</template>

<style>
    .list {
        background-color: #f3f3f3;
    }
    
    .block {
        height: 20px;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: #e2e2e2;
    }
    
    .row {
        flex-direction: row;
        padding-left: 20px;
        padding-right: 20px;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: #e2e2e2;
        background-color: #ffffff;
    }
    
    .icon {
        width: 50px;
    }
    
    .item {
        width: 630px;
    }
    
    .link {
        width: 30px;
    }
    
    .icon,
    .item,
    .link {
        justify-content: center;
        height: 88px;
    }
</style>

<script>
    var navigator = weex.requireModule( 'navigator' )
    var modal = weex.requireModule( 'modal' )
    import withdraw from './../withdraw/withdraw.vue'
    module.exports = {
        props: {
            rows: {
                type: Array,
                required: true
            }
        },
        methods: {
            go( url ) {
                //var bundleUrl = this.$getConfig().bundleUrl;
                //var baseURL = getBaseUrl(bundleUrl)
                navigator.push( {
                    //url: 'file://assets/withdraw/withdraw.js',
                    //url: './../withdraw/withdraw.js',
                    url: 'http://192.168.95.39:1337/dist/native/withdraw/withdraw.js?test=1',
                          //http://192.168.0.108:1337/dist/native/withdraw/withdraw.js
                    animated: "true"
                }, event => {
                    // modal.toast( {
                    //     message: 'callback: ' + event
                    // } )
                } )
            }
        },
        // methods: {
        //     onappear: function ( e ) {
        //         var appearId = this.rows[ e.target.attr.index ].id;
        //         nativeLog( '+++++', appearId );
        //         var appearIds = this.appearIds;
        //         appearIds.push( appearId );
        //         this.getMinAndMaxIds( appearIds );
        //     },
        //     ondisappear: function ( e ) {
        //         var disAppearId = this.rows[ e.target.attr.index ].id;
        //         nativeLog( '+++++', disAppearId );
        //         var appearIds = this.appearIds;
        //         var index = appearIds.indexOf( disAppearId );
        //         if ( index > -1 ) {
        //             appearIds.splice( index, 1 );
        //         }
        //         this.getMinAndMaxIds( appearIds );
        //     },
        //     getMinAndMaxIds: function ( appearIds ) {
        //         appearIds.sort( function ( a, b ) {
        //             return a - b;
        //         } );
        //         this.appearIds = appearIds;
        //         this.appearMax = appearIds[ appearIds.length - 1 ];
        //         this.appearMin = appearIds[ 0 ];
        //     }
        // },
        // data: function () {
        //     return {
        //         rows: [ {
        //                 id: 1
        //             },
        //             {
        //                 id: 2
        //             },
        //             {
        //                 id: 3
        //             }
        //         ]
        //     }
        // },
        computed: {
            listheight() {
                return weex.config.env.deviceHeight - 88 * 2
            },
            env(){
                return weex.config
            }
        }
    }
</script>