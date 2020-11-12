import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/backend/login.vue'
import Home from '@/components/backend/home.vue'
import Welcome from '@/components/backend/welcome.vue'
import Users from '@/components/backend/user/Users.vue'
import SiteInfo from '@/components/backend/site/info.vue'
import User from '@/components/backend/site/user.vue'
import Message from '@/components/backend/message/index.vue'
import Banner from '@/components/backend/banner/index.vue'
import BannerDetail from '@/components/backend/banner/detail.vue'
import Nav from '@/components/backend/nav/index.vue'
import News from '@/components/backend/article/index.vue'
import NewsDetail from '@/components/backend/article/detail.vue'
import Single from '@/components/backend/single/index.vue'
import SingleDetail from '@/components/backend/single/detail.vue'
import Campus from '@/components/backend/campus/index.vue'
import Index from '@/components/frontend/index.vue'
import Subject from '@/components/frontend/subject.vue'
import Research from '@/components/frontend/research.vue'
import Learn from '@/components/frontend/learn.vue'
import National from '@/components/frontend/national.vue'
import Join from '@/components/frontend/join.vue'
import Press from '@/components/frontend/press.vue'
import Detail from '@/components/frontend/detail.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: Index },
  { path: '/subject', component: Subject },
  { path: '/login', component: Login },
  { path: '/research', component: Research },
  { path: '/learn', component: Learn },
  { path: '/national', component: National },
  { path: '/join', component: Join },
  { path: '/press', component: Press },
  { path: '/detail', component: Detail },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/siteInfo', component: SiteInfo },
      { path: '/User', component: User },
      { path: '/message', component: Message },
      { path: '/banner', component: Banner },
      { path: '/banners', component: BannerDetail },
      { path: '/nav', component: Nav },
      { path: '/news', component: News },
      { path: '/new', component: NewsDetail },
      { path: '/single', component: Single },
      { path: '/singles', component: SingleDetail },
      { path: '/campus', component: Campus },
    ]
  }
]
export default new Router({
  mode: 'history',
  routes
})
