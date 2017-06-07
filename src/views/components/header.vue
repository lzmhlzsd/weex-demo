<template>
    <div>
        <div class="header-bar">
            <div class="left">

            </div>
            <div class="center">
                <text class="headerbar-center-title">{{title}}</text>
            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            title: {
                type: String,
                required: true
            }
        }
    }
</script>
<style scoped>
    .header-bar {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 88px;
        background-color: #434A5A;
    }
    
    .headerbar-center-title {
        color: #ffffff;
    }
</style>