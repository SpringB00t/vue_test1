import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import ShopCart from '@/pages/ShopCart'
import AddCartSuccess from '@/pages/AddCartSuccess'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    routes:[{
        path:"/home",
        component:Home,
        meta:{
            footerFlg: true
        }
    },
    {
        path:"/login",
        component:Login,
        meta:{
            footerFlg: false
        }
    },
    {
        path:"/register",
        component:Register,
        meta:{
            footerFlg: false
        }
    },
    {
        path:"/search/:inputKey?",
        name:'search',
        component:Search,
        meta:{
            footerFlg: true
        },
        props({query, params}){
            return {
                category1Id:query.category1Id,
                category2Id:query.category2Id,
                category3Id:query.category3Id,
                categoryName:query.categoryName,
                inputKey:params.inputKey
            }
        }
    },
    {
        path:"/detail/:skuid",
        name:'detail',
        component:Detail,
        meta:{
            footerFlg: true,
        }
    },
    {
        path:"/shopCart",
        name:"shopCart",
        component:ShopCart,
        meta:{
            footerFlg: true,
        }
    },
    {
        path:"/addCartSuccess",
        name:"addCartSuccess",
        component:AddCartSuccess,
        meta:{
            footerFlg: true,
        }
    },
    {
        path:"*",
        redirect: "/home"
    }],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
      },
})
