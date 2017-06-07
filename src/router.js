// import Vue from 'vue'
import Router from 'vue-router'
import StoriesView from './views/StoriesView.vue'
import ArticleView from './views/ArticleView.vue'
import CommentView from './views/CommentView.vue'
import UserView from './views/UserView.vue'
import IndexView from './views/index.vue'
import WithdrawView from './views/withdraw/withdraw.vue'

Vue.use( Router )

// Story view factory
function createStoriesView( type ) {
  return {
    name: `${type}-stories-view`,
    render( createElement ) {
      return createElement( StoriesView, { props: { type } } )
    }
  }
}

function createIndexView( type ) {
  return {
    name: `${type}-index-view`,
    render( createElement ) {
      return createElement( IndexView, { props: { type } } )
    }
  }
}

export default new Router( {
  // mode: 'abstract',
  routes: [
    { path: '/index', component: createIndexView( 'index' ) },
    { path: '/top', component: createStoriesView( 'top' ) },
    { path: '/new', component: createStoriesView( 'new' ) },
    { path: '/show', component: createStoriesView( 'show' ) },
    { path: '/ask', component: createStoriesView( 'ask' ) },
    { path: '/job', component: createStoriesView( 'job' ) },
    { path: '/article/:url(.*)?', component: ArticleView },
    { path: '/item/:id(\\d+)', component: CommentView },
    { path: '/user/:id', component: UserView },
    { path: '/', redirect: '/index' },
    { path: '/withdraw', component: WithdrawView }
  ]
} )
