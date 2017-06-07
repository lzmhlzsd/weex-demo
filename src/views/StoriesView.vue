<template>
  <div class="stories-view" append="tree">
    <app-header></app-header>
    <!--<div v-for="item in items">
      <text>{{item}}</text>
    </div>-->
    <list class="story-list" @loadmore="loadMoreStories" loadmoreoffset="50">
      <cell class="story-cell" v-for="story in stories" :key="story.id" append="tree">
        <story :story="story"></story>
      </cell>
    </list>
    <div class="loading" v-if="loading">
      <text class="loading-text">loading ...</text>
    </div>
  </div>
</template>

<script>
  import AppHeader from '../components/app-header.vue'
  import Story from '../components/story.vue'
  //import 'weex-compon'
  //var modal = require( '@weex-module/modal' );
  export default {
    components: {
      AppHeader,
      Story
    },
    props: {
      type: {
        type: String,
        required: true,
        default: 'top'
      }
    },
    data() {
      return {
        loading: true,
        items: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
      }
    },

    computed: {
      stories() {
        return this.$store.getters.activeItems
      }
    },
    methods: {
      fetchListData() {
        this.loading = true
        this.$store.dispatch( 'FETCH_LIST_DATA', {
          type: this.type
        } ).then( () => {
          this.loading = false
        } )
      },
      loadMoreStories() {
        this.loading = true
        this.$store.dispatch( 'LOAD_MORE_ITEMS' ).then( () => {
          this.loading = false
        } )
      }
    },

    created() {
      this.fetchListData()
      
      // modal.toast( {
      //   "message": "我是提示框",
      //   "duration": 2
      // } );
    }
  }
</script>

<style scoped>
  .stories-view {
    height: 100%;
  }
  
  .story-cell {
    margin-bottom: 3px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: #FFFFFF;
  }
  
  .loading {
    width: 750px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .loading-text {
    margin: auto;
    text-align: center;
    font-size: 40px;
    color: #BBB;
  }
</style>