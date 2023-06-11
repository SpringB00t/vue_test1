//引入Vue
import Vue from "vue";

//引入App
import App from './App';

import store from '@/store'
import router from "@/router";
import TypeNav from "@/components/TypeNav"
import Lunbo from "@/components/Lunbo"
import Pagination from "@/components/Pagination"

//关闭Vue的生产提示
Vue.config.productionTip = false;
Vue.component(TypeNav.name,TypeNav);
Vue.component(Lunbo.name,Lunbo);
Vue.component(Pagination.name,Pagination);

//引入MockServer.js----mock数据
import "@/mock/mockServe";
import "swiper/css/swiper.css"

let vm = new Vue({
    el:'#app',
    render: h => h(App),
    store,
    router,
    beforeCreate() {
        //此时这个this就是vm，只不过这个时候还并没有去解析模版
        Vue.prototype.$bus = this; //安装全局事件总线
    }
});


